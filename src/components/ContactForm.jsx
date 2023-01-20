import { Card, Form, Input, Button, Spin, message } from 'antd'
import { useState } from 'react';
const { TextArea } = Input;
export default function ContactForm() {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [IsLoading, setIsLoading] = useState();
    const [formLayout, setFormLayout] = useState('vertical');
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'El mensaje ha sido enviado, Uno de nuestros asesores se comunicará contigo próximamente.',
        });
    };

    const sendMessage = () => {
        setIsLoading(true);
        form.resetFields();
        setTimeout(() => {
            success();
            setIsLoading(false);
        }, 1000);
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Card
            title="Contact us"
            bordered={true}
            className="contact-form"
        >
            {contextHolder}
            {IsLoading ? <Spin></Spin> :
                <Form
                    layout={formLayout}
                    form={form}
                    onFinish={sendMessage}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item 
                        name="email" 
                        label="Email" 
                        rules={[
                            {
                                required: true,
                                message: 'Please add your email to contact you',
                            }
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    <Form.Item 
                        name="phone" 
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please add your phone number to contact you',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="message" label="Message">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Send</Button>
                    </Form.Item>
                </Form>}
        </Card>
    )
}
