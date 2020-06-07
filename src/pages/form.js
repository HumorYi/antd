import React, { Component, useEffect } from 'react'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item
const nameRules = { required: true, message: '请输⼊入姓名！' }
const passworRules = { required: true, message: '请输⼊入密码！' }

console.log(Component, useEffect)
// class 组件
/* export default class AntdFormPage extends Component {
  formRef = React.createRef()
  componentDidMount() {
    this.formRef.current.setFieldsValue({ name: 'default' })
  }
  onReset = () => {
    this.formRef.current.resetFields()
  }
  onFinish = val => {
    console.log('onFinish', val) //sy-log
  }
  onFinishFailed = val => {
    console.log('onFinishFailed', val) //sy-log
  }
  render() {
    console.log('AntdFormPage render', this.formRef.current) //sy-log
    return (
      <div>
        <h3>AntdFormPage</h3>
        <Form ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} onReset={this.onReset}>
          <FormItem label="姓名" name="name" rules={[nameRules]}>
            <Input placeholder="name input placeholder" />
          </FormItem>

          <FormItem label="密码" name="password" rules={[passworRules]}>
            <Input placeholder="password input placeholder" />
          </FormItem>

          <FormItem>
            <Button type="primary" size="large" htmlType="submit">
              Submit
            </Button>
          </FormItem>

          <FormItem>
            <Button type="default" size="large" htmlType="reset">
              Reset
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
} */

// function 组件
export default function AntdFormPage(props) {
  const [form] = Form.useForm()

  const onFinish = val => {
    console.log('onFinish', val) //sy-log
  }

  const onFinishFailed = val => {
    console.log('onFinishFailed', val) //sy-log
  }

  const onReset = () => {
    form.resetFields()
  }

  useEffect(() => {
    form.setFieldsValue({ name: 'default' })
  }, [])

  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} onReset={onReset}>
      <FormItem label="姓名" name="name" rules={[nameRules]}>
        <Input placeholder="name input placeholder" />
      </FormItem>

      <FormItem label="密码" name="password" rules={[passworRules]}>
        <Input placeholder="password input placeholder" />
      </FormItem>

      <FormItem>
        <Button type="primary" size="large" htmlType="submit">
          Submit
        </Button>
      </FormItem>

      <FormItem>
        <Button type="default" size="large" htmlType="reset">
          Reset
        </Button>
      </FormItem>
    </Form>
  )
}
