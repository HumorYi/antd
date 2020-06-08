import React, { Component } from 'react'

export default function CreateForm(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.option = {}
    }

    getFieldDecorator = (field, option) => InputCmp => {
      this.option[field] = option

      return React.cloneElement(InputCmp, {
        name: field,
        value: this.state[field] || '',
        onChange: this.handleChange
      })
    }

    handleChange = e => {
      const { name, value } = e.target
      this.setState({ [name]: value })
    }

    getFieldsValue = () => {
      return this.state
    }

    setFieldsValue = newStore => {
      this.setState(newStore)
    }

    validateFields = callback => {
      const err = []

      // 校验规则 this.options
      // 校验的值是this.state

      for (const field in this.option) {
        const fieldValue = this.state[field]
        let rule = this.option[field].rules
        rule = rule && rule[0]

        if (rule.required && (fieldValue === undefined || fieldValue === '')) {
          err.push({
            [field]: rule.message
          })
        }
      }

      callback(err.length === 0 ? null : err, this.state)
    }

    getForm = () => {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue,
          validateFields: this.validateFields
        }
      }
    }

    render() {
      return <Cmp {...this.props} {...this.getForm()} />
    }
  }
}
