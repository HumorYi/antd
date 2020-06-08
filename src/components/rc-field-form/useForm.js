import React from 'react'

class FormStore {
  constructor() {
    this.store = {}
    this.fieldsEntities = []
    this.callback = {}
  }

  setCallback = callback => {
    this.callback = {
      ...this.callback,
      ...callback
    }
  }

  getFieldValue = name => {
    return this.store[name]
  }

  getFieldValues = () => {
    return this.store
  }

  setFieldsValue = newStore => {
    this.store = {
      ...this.store,
      ...newStore
    }

    this.fieldsEntities.forEach(entity => {
      const { name } = entity.props

      if (Object.keys(newStore).includes(name)) {
        entity.forceUpdate && entity.forceUpdate()
      }
    })
  }

  registerField = entity => {
    this.fieldsEntities.push(entity)

    return () => {
      const { name } = entity.props

      this.fieldsEntities = this.fieldsEntities.filter(item => item !== entity)

      if (this.store[name]) {
        delete this.store[name]
      }
    }
  }

  submit = () => {
    const { onFinish, onFinishFailed } = this.callback
    const err = this.validate()
    if (err.length === 0) {
      onFinish && onFinish()
      return this.getFieldValue()
    } else {
      console.log('err', err)
      onFinishFailed && onFinishFailed()
    }
  }

  validate = () => {
    let err = []

    this.fieldsEntities.forEach(entity => {
      const { name, rules } = entity.props

      const value = this.getFieldValue(name)
      const rule = rules && rules[0]

      if (rule && rule.required && (value === undefined || value === '')) {
        err.push({ [name]: rule.message, value })
      }
    })

    return err
  }

  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      getFieldValues: this.getFieldValues,
      setFieldsValue: this.setFieldsValue,
      registerField: this.registerField,
      submit: this.submit,
      setCallback: this.setCallback
    }
  }
}

export default function useForm(form) {
  const formRef = React.useRef()

  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      formRef.current = new FormStore().getForm()
    }
  }

  return [formRef.current]
}
