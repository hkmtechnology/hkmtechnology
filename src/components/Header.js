import React, { Component } from 'react'
import Stylesheet from "./Stylesheet.js";
import Inline from './Inline.js';
import '../appstyle.css';
import Style from '../appstyle.module.css';
import Form from './Form';
import { Routing } from './Routing.js';
import Lifecycle from './Lifecycle.js';
import Product from './Product.js';
import PostList from './PostList.js';
import PostForm from './PostForm.js';

const test = ()=>{
    alert("hello11");
  }

  

export class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:'hello hkm',
            dept:'it'
        }
    }
    
    state = {
        users:[
            {id:1,name:"hkm",dept:"it"},
            {id:2,name:"mkm",dept:"engg"}
        ]
    }

        liked(){
            this.setState({
                msg:'liked',
                
            })
        }

    render() {
         const num = [3,2,1,5];
        // console.log(this.state.users);
        ///this.state.users.map((user)=>console.log(user))
        //const newnum = num.map((num)=>{ return <li>{num}</li>})
        return (
            <>
                 <p>hi {this.props.name}</p>
                <ul>{
                num.map((num)=><li key={num}>{num}</li>)
                }</ul>
                <button onClick={test}>click</button>
                <h1>{this.state.msg},{this.props.name} age is {this.props.age}</h1>
                <button onClick={()=>{this.liked()}}>like</button>
                <Stylesheet isvalue={true}> {/* to change color of text change isvalue to true or false */}</Stylesheet>
                <Inline></Inline>
                <h1 className={Style.success}>green</h1>{/*  this style is from css module */}
                <h1 className='error'>error</h1> {/* this style is from normal css */}
                <Form></Form>
                <Routing></Routing>
                <Lifecycle></Lifecycle>
                <Product></Product>
                <PostList></PostList>
                <PostForm></PostForm>
            </>
        )
    }
}


