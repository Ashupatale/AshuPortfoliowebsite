import React, { Component } from 'react';
import Childcomp from './Childcomp';

class Parentcomp extends Component{

    constructor(props){
        super(props)

        this.state={
            Parentname:"Welcome parent"
        }
   

  
}

    greetparent(childName){
        alert(`Hello  $ (this.state.Parentname) from ${childName}`)
    }



    render(){
        return(
            <Childcomp greetHandler={this.greetparent.bind(this)}/>
        )
    }
}

export default Parentcomp;