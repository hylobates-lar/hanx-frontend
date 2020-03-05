import React from 'react';
import ItemCard from './ItemCard';
import {Col, Row} from 'antd';

class ItemContainer extends React.Component {

  state = {
    items: []
  }

  componentDidMount() {
     fetch("http://localhost:3000/items")
        .then(r => r.json())
        .then(itemData => {
            this.setState({
                items: itemData
            })
        }) 
  }

  render() {
   
    return (
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
    )
  }

}


export default ItemContainer;