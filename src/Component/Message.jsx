import React, { Component } from 'react';

class Message extends Component{
constructor(){
    super()
    this.state={
        Message:"Hello Welcome...!"
    }
}

changemsg(){
    this.setState({
        Message:"Thank You For Subscribing..!"
    })
}

Double(){
    this.setState({
        Message:"Plss press the bell icon"
    })
}


    render(){
        return(
            <>
            <h1>{this.state.Message}</h1>

            <button onClick={()=> this.changemsg()} onDoubleClick={()=>this.Double()}>Subscribe here</button>

            </>
        )
    }
}

export default Message;