import React, { Component } from 'react'

export default class Product extends Component {
constructor(props) {
    super(props)

    this.state = {
         prodid:"",
         qty:0
    }
}
addTocart=(pid)=>{
    console.log(pid);
    this.setState({
        prodid:pid,qty:this.state.qty+1
    })
}

    render() {
        return (
            <div>
                <button onClick={()=>{this.addTocart(1)}}>Add to cart</button>
                <Cart prodid={this.state.prodid} qty={this.state.qty}></Cart>
            </div>
        )
    }
}


class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             qty:this.props.qty
        }
    }

     updateQty = ()=>{
        this.setState({
            qty:this.state.qty+1
        })
    }


    static getDerivedStateFromProps(props,state){
        console.log(props.qty);
        console.log(state.qty);
        if(props.qty !== state.qty){
            return {qty:props.qty}
        }
        return null;
    }
    componentDidMount() {
        console.log("Execute after component render");
    }
    componentDidUpdate(prevProps,prevState){
        console.log("Component updated");
    }
    
    render() {
        return (
            <div>
                <h1>CART:{this.state.qty}</h1>
                <button onClick={this.updateQty}>update</button>
            </div>
        )
    }
}
