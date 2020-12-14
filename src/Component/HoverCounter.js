import React, { Component } from 'react'



class HoverCounter  extends Component{
    
    render(){
       const {count , IncrementCount}=this.props
       
        return(
            <>
           
            <button onMouseMove={IncrementCount}>Hoverd {count} Times</button>



            </>
        )
    }
}

export default HoverCounter