import React, { Component } from 'react';

class Classclick extends Component{

    clickHandler(){
        console.log("clickeddd")
    }


    render(){
        return(
            <button onClick={this.clickHandler}> Click here</button>
        )
    }
}


export default Classclick;