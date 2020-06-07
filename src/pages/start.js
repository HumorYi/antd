import React, { Component } from 'react'
import { Button, Card } from 'antd'

class start extends Component {
  render() {
    return (
      <div>
        <h3>start</h3>
        <Button type="primary">click</Button>
        <a href="https://www.kaikeba.com/">开课吧</a>
        <Card title="" extra={<a href="https://www.kaikeba.com/">More</a>}>
          <p></p>
        </Card>
      </div>
    )
  }
}

export default start
