import React from 'react';
import App from '../App';
import {Route, Link} from 'react-router-dom';


class NavBar extends React.Component {



    render(){
        return (
            <div>
                <Link to='/movies'>Movies</Link>
                <Link to='/bio'>Bio</Link>
                <Link to='/items'>Items</Link>

            </div>
        )
    }
}

export default NavBar;