import React from 'react';
import ItemCard from './ItemCard';
import {Col, Row, Spin} from 'antd';

class ItemContainer extends React.Component {

    state = {
        items: [],
        loading: true
    }

    componentDidMount() {
        fetch("https://hanx-api.herokuapp.com/items")
        .then(r => r.json())
        .then(itemData => {
            this.setState({
                items: itemData,
                loading: false
            })
        }) 
    }

    sortByPrice = () => {
        let sortedPriceItems = this.state.items.sort(function(a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
        });
        this.setState({
            items: sortedPriceItems
        })
    }

    render() {
        return (
        <>
            <p id="disclaimer">* Please note this feature is for demo purposes only. While these items are real(!), they cannot actually be purchased here *</p>
            <div id="item-container"> 
                <div className="sort-buttons">
                    <button onClick={this.sortByPrice}>Sort By Price</button>
                </div>
                <Row justify="center">
                    <Spin className="spinner" tip="Loading..." spinning={this.state.loading} />
                </Row>
                <Row gutter={[48, 24]}>
                    {this.state.items.map((item, i) => {
                        return (
                        <Col xs={24} lg={8}>
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