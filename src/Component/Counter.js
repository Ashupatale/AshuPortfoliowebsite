import React, { Component } from 'react'

class Counter extends Component{
    constructor(props){
        super(props)
        this.state ={
            count : 0
        }
    }

    IncrementCounter= () =>{
        this.setState(prevState =>{
            return{
                count :prevState.count + 1
            }

        })
    }

    render(){
        return(
           <>
                {this.props.render(this.state.count , this.IncrementCounter)}


           </>
        )
    }
}

export default Counter;