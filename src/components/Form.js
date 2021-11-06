import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
    }
    haldleUsername=(event)=>{
        this.setState({
            username:event.target.value
        });
    }
    haldlePassword=(event)=>{
        this.setState({
            password:event.target.value
        });
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.password}`);
        event.preventDefault(); /* this will prevent reset form data on submit */
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label><br />
                <input type='text' value={this.state.username} onChange={this.haldleUsername}></input><br />
                <label>Password</label><br />
                <input type='password' value={this.state.password} onChange={this.haldlePassword}></input><br />
                <button>Submit</button>
            </div>
            </form>
        )
    }
}
