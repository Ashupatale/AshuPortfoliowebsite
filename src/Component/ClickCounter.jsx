import React, { Component } from 'react'
import HoverCounter from './HoverCounter'


class ClickCounter  extends Component{
   


   
    render(){
       const {count ,IncrementCount}=this.props
       
        return(
            <>
           
            <button onClick={IncrementCount}> Clickeeeed{count} times </button>
           <div className="CN mt-5">
            <HoverCounter />
            </div>


            </>
        )
    }
}

export default ClickCounter