import React, { Component } from 'react'
import FieldContext from './FieldContext'

export default class Field extends Component {
  static contextType = FieldContext

  componentDidMount() {
    this.cancelRegister = this.context.registerField(this)
  }

  componentWillUnmount() {
    this.cancelRegister && this.cancelRegister()
  }

  getControlled = () => {
    const { name } = this.props
    const { getFieldValue, setFieldsValue } = this.context

    return {
      value: getFieldValue(name) || '',
      onChange: e => {
        const newValue = e.target.value

        setFieldsValue({ [name]: newValue })
      }
    }
  }

  render() {
    return React.cloneElement(this.props.children, this.getControlled())
  }
}
