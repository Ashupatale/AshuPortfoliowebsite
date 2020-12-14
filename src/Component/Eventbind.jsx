import React, { Component } from 'react';

class Eventbind extends Component{

    constructor(props){
        super(props)
        this.state={
            message:"Hello welcome"
        }
    }

    clickHandler(){
        this.setState({
            message:"Tata good bye..Gaya"
        })
        console.log(this)
    }



    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={this.clickHandler.bind(this)}>Click me</button>

            </>
        )
    }
}

export default Eventbind;