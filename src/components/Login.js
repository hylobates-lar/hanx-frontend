import React from 'react';
import {message} from 'antd';


class Login extends React.Component {

    state = {
        name: "",
        newUser: ""
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
        .then(message.success("Logging in...", 3))
    }

    handleCreate = (e) => {
        e.preventDefault()
        let user = {name: this.state.newUser}

        fetch("http://localhost:3000/users", {
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
        // .then(this.props.history.push('/bio'))
    }

    render(){
        let loginPage
        const makeCurrentUserEmpty = {}
        if (this.props.currentUser.name === undefined) {
            console.log(this.props.currentUser)
            loginPage = <>
            <form onSubmit={this.handleSubmit} >
                <label>Login name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
                <input type="submit" value="Login"/>            
            </form> 
            <form onSubmit={this.handleCreate} >
                <label>New user? Enter your name here:</label>
                <input type="text" name="newUser" value={this.state.newUser} onChange={this.handleOnChange} />
                <input type="submit" value="Create"/>            
            </form>
            </>
        } else {
            loginPage = <div>
            <h1>How dare you want to log out of the HANX!?</h1>
            <button onClick={() => this.props.setCurrentUser(makeCurrentUserEmpty)}>Logout</button>
            </div>
        }
        return (
            <div>
                {loginPage}
            </div>
        )
    }
}

export default Login;