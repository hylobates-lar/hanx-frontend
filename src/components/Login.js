import React from 'react';
import App from '../App';
import {Route, Link} from 'react-router-dom';


class Login extends React.Component {

    state = {
        name: ""
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let user = {name: this.state.name}

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(data => this.props.setCurrentUser(data))
    }
    

    render(){
       
        return (
            <form onSubmit={this.handleSubmit} >
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
                <input type="submit" value="Login"/>            
            </form>  
        )
    }
}

export default Login;