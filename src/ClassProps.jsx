import React, { Component } from 'react';

class classProps extends Component{
    render(){
        return(
            <h1>Congrats {this.props.name}  Selected For React JS Developer from {this.props.place}</h1>
        );
    }
}

export default classProps;