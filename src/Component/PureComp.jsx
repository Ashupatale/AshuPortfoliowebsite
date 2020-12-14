import React, { Component } from 'react';

class PureComp extends Component{
    
    render(){

        console.log("Pure comp render")

        return(
            <>
            <p>Pure Component{this.props.name}
            </p>
            </>
        )
    }
}

export default PureComp;