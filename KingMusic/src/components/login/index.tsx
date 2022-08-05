import { Button, Checkbox, Form, Input } from 'antd';
import React, { FC, useState } from 'react';
import styles from "./index.less"
import { useRequest, history } from '@umijs/max';
import { createUser } from '@/services';

const Login: FC = () => {
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [data, setData] = useState(1)


    const onFinish = (values: any) => {
        setPhone(values.phone)
        setPassword(values.password)

        console.log('Success:', values);

    };

    const { data: pdata, loading: ploading } = useRequest(() => {
        return createUser(phone, password)
    }, { refreshDeps: [phone, password, data] });

    console.log(pdata);

    const goLogin = () => {
        const count = Math.random() * 100
        setData(count)
        if (phone === "19856157103" && password === "wasd2580") {
            history.push("/chenqian")
        }
        else {
            console.log("账号或密码错误");

        }
    }
    // goLogin()


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles.loginForm}
        >
            <div className={styles.musicName}>易音乐</div>
            <Form.Item
                label="手机号"
                name="phone"
                className={styles.phoneItem}
                rules={[{ required: true, message: '请输入手机号!' }]}
            >
                <Input className={styles.phoneNum} />
            </Form.Item>

            <Form.Item
                label="密&nbsp;&nbsp;&nbsp;&nbsp;码"
                name="password"
                className={styles.pswItem}
                rules={[{ required: true, message: '请输入密码!' }]}
            >
                <Input.Password className={styles.password} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
                <Button type="primary" htmlType="submit" onClick={() => goLogin()}>
                    登录
                </Button>
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 7, span: 16 }} className={styles.remember}>
                <Checkbox className={styles.check}>记住我?</Checkbox>
            </Form.Item>
        </Form>
    );
};

export default Login;

// onClick={() => gologin(user)}