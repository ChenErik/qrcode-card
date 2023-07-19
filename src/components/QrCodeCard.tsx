import React, { useState } from 'react'
import { Button, Col, Form, Input, QRCode, Row } from 'antd'

interface FormValues {
  name: string
  company: string
  jobTitle: string
  address: string
  phone: string
  email: string
  website: string
  remark: string
}
const QrCodeCard: React.FC = () => {
  const [text, setText] = useState<string | null>('')
  function onFinish(values: FormValues) {
    const name = `FN:${values.name}\n` // 姓名
    const company = `ORG:${values.company || ''}\n` // 公司
    const title = `TITLE:${values.jobTitle || ''}\n` // 职务
    const address = `WORK:${values.address || ''}\n` // 地址
    const mobile = `TEL:${values.phone}\n` // 手机
    const email = `EMAIL:${values.email || ''}\n` // 邮箱
    const web = `URL:${values.website || ''}\n` // 网址
    const desc = `NOTE:${values.remark || ''}\n` // 备注

    const info = `BEGIN:VCARD\n${name}${company}${title}${address}${mobile}${email}${web}${desc}END:VCARD`
    setText(info)
  }
  return (
  <Row gutter={24}>
    <Col span={16}>
      <Form onFinish={onFinish} >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              label="姓名"
              name="name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="公司"
              name="company"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="职务"
              name="jobTitle"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              label="地址"
              name="address"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="手机"
              name="phone"
              rules={[
                { required: true, message: '请输入手机号码' },
                {
                  pattern: /^1[3456789]\d{9}$/,
                  message: '请输入正确的手机号码',
                },
                // () => ({
                //   validator(_, value) {
                //     // 手机号验证正则
                //     const reg = /^1[3456789]\d{9}$/
                //     if (reg.test(value))
                //       return Promise.resolve()

                //     return Promise.reject(new Error('请输入正确的手机号码'))
                //   },
                // }),
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="邮箱"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: '请输入正确的邮箱地址',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              label="网址"
              name="website"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="备注"
              name="remark"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            创建二维码
          </Button>
        </Form.Item>
      </Form>
    </Col>
    <Col span={6} offset={2}>
      {
        text ? <QRCode value={text}></QRCode> : null
      }
    </Col>
  </Row>
  )
}

export default QrCodeCard
