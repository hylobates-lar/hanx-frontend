import React from 'react';
import ItemCard from './ItemCard';


class ItemContainer extends React.Component {

  state = {
    items: []
  }

  componentDidMount() {
    if (!this.props.token) {
      this.props.history.push('/login')
    }
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
            {this.state.items.map(item => {
                return < ItemCard item={item} key={item.id} />    
            })}
        </div>
    )
  }

}


export default ItemContainer;