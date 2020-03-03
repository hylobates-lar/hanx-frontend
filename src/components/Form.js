import React from 'react'

export default class Form extends React.Component {

state = {
    username: '',
    password: ''
}

handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            <input type='text' name='username' placeholder='Enter username' onChange={this.handleChange}/>
            <input type='text' name='password' placeholder='Enter password' onChange={this.handleChange}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

}