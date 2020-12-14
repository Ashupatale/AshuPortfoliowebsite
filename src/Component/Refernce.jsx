import React, { Component } from 'react';

class Refernce extends Component{

    constructor(props){
        super(props)

        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    ClickHandler = () =>{
        alert(this.inputRef.current.value)

    }



    render(){
        return(
            <>
            <input type="text"  ref={this.inputRef} />
           
            <button onClick={this.ClickHandler}>Click here</button>

            </>
        )
    }
}

export default Refernce;