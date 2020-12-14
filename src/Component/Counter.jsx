import React, { Component } from 'react'

class Counter extends Component{

    constructor(){
        super()

        this.state={
            count:0
        }

    }

    increment(){
        this.setState({
            count:this.state.count +1
        })
    }


    render(){
        return(
            <>
                <p>Count - {this.state.count}</p>
                <button onClick={()=> this.increment()}>Click here</button>

            </>
        )
    }
}


export default Counter;