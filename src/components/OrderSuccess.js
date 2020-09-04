import React from 'react';
import { Typography, Col } from 'antd';

class OrderSuccess extends React.Component {
    render () {
        return (
            <Col style={{marginTop: '2em', textAlign: 'center'}}>
                <Typography.Title style={{marginBottom: '1em'}}>Order Success!</Typography.Title>
                <img alt='dancing Tom Hanks gif' src="https://media.giphy.com/media/Xe0ncXO9LNQsw/source.gif" />
            </Col>
        )
    }
}

export default OrderSuccess;