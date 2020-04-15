import React from 'react';
import ItemCard from './ItemCard';
import {Col, Row, Spin} from 'antd';

class ItemContainer extends React.Component {

    state = {
        items: [],
        loading: true
    }

    componentDidMount() {
        fetch("http://localhost:3000/items")
        .then(r => r.json())
        .then(itemData => {
            this.setState({
                items: itemData,
                loading: false
            })
        }) 
    }

    render() {
        return (
        <>
            <Spin className="spinner" tip="Loading..." spinning={this.state.loading} />
            <p id="disclaimer">* Please note this feature is for demo purposes only. While these items are real(!), they cannot actually be purchased here *</p>
            <div id="item-container"> 
            <Row gutter={[48, 24]}>
                {this.state.items.map((item, i) => {
                    return (
                    <Col span={8}>
                        <ItemCard item={item} key={item.id} currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>    
                    </Col>
                    )
                })}
            </Row>
            </div>
        </>
        )
    }

}


export default ItemContainer;