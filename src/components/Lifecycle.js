import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Hkm"
        }
        console.log("LifeCycle:Constractor");
    }
static getDerivedStateFromProps(props,state){
    console.log("LifeCycle:this.getDerivedStateFromProps");
    return null;
}

componentDidMount(){
    console.log("LifeCycle:componentDidMount");
}
    
    render() {
        console.log("LifeCycle:render");
        return (
            <div>
                Lifecycle
            </div>
        )
    }
}
