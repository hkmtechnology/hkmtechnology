import React, { Component } from 'react'
import axios from "axios"
export default class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    /* after loading all components componentdidmount executes */ 
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            this.setState({posts:response.data})
            console.log(response);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    render() {
        const {posts}=this.state
        return (
            <div>
                List post data
                {
                    posts.length ? 
                    posts.map(post => <div key={post.id}>{post.title}</div>) : null
                }
            </div>
        )
    }
}
