import React from 'react';
import {message, Col, Form, Input, Button, Row, Typography} from 'antd';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {
    
    handleSubmit = (values) => {
        console.log(values)
        let user = {name: values.name}

        fetch("https://hanx-api.herokuapp.com/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(data => this.props.setCurrentUser(data))
        .then(message.success("Logging in...", 3))
        .then(this.props.history.push('/movies'))
    }

    handleCreate = (values) => {
        let user = {name: values.name}

        fetch("https://hanx-api.herokuapp.com/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(data => this.props.setCurrentUser(data))
        .then(message.success("Successfully created an account", 3))
        .then(this.props.history.push('/'))
    }

    render(){
        let loginPage
        const makeCurrentUserEmpty = {}
        if (this.props.currentUser.name === undefined) {
            loginPage = <>
            <Row justify="center" style={{margin: '3em 0 2em'}}>
            <Form
                name="returning"
                layout="inline"
                onFinish={this.handleSubmit}
                >
                <Form.Item
                    label="Returning User:"
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            </Row>
            <Row justify="center"   >
            <Form
                name="new"
                layout="inline"
                onFinish={this.handleCreate}
                >
                <Form.Item
                    label="New user? Enter your name here:"
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            </Row>
            </>
        } else {
            loginPage = (
            <Col style={{marginTop: '4em', textAlign: 'center'}}>
                <Typography.Title style={{marginBottom: '1em'}} level={4}>How dare you want to log out of HANX!?</Typography.Title>
                <Button type="danger" onClick={() => this.props.setCurrentUser(makeCurrentUserEmpty)}>
                    Logout
                </Button>
            </Col>)
        }
        return (
            <div>
                {loginPage}
            </div>
        )
    }
}

export default withRouter(Login);