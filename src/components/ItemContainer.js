import React from 'react';
import ItemCard from './ItemCard';


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
            }, () => console.log(this.state))
        }) 
  }

  render() {
    return (
        <div id="item-container"> 
            {this.state.items.map(item => {
                return < ItemCard item={item} key={item.id} />    
            })}
        </div>
    )
  }

}


export default ItemContainer;