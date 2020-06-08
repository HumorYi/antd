import React, { Component } from 'react'

const Input = props => <input {...props} />

export default class CustomInput extends Component {
  render() {
    const { value = '', ...otherProps } = this.props

    return (
      <div style={{ padding: 10 }}>
        <Input style={{ outline: 'none' }} value={value} {...otherProps} />
      </div>
    )
  }
}
