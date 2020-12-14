import React, { Component } from 'react'
import FRInput from './FRInput';

class FRParentInput extends Component{

    constructor(props){
        super(props)
        this.InputRef=React.createRef()
    }

    clickHandler=()=>{
        this.InputRef.current.focus()
    }

    render(){
        return(
            <>

            <FRInput ref={this.InputRef}/>
            <button onClick={this.clickHandler}>Click here</button>

            </>
        )
    }
}

export default FRParentInput;