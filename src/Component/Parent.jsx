import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class Parent extends Component{

    constructor(){
        super()
        this.state={
            name:"Ashutosh"
        }
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name:'Ashutosh'

            })

        },3000)
    }



    render(){

        console.log("*******************Heyy Ashutosh *****************")

        return(
            <>
            <p>Parent Component</p>
            <RegularComp name={this.state.name}></RegularComp>
            <PureComp name={this.state.name}></PureComp>

            </>
        )
    }
}

export default Parent;