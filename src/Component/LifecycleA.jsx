import React, { Component } from 'react';





class LifecycleA extends Component{

    constructor(props){
        super(props)
        this.state={
            name:"shree"

        }
        console.log("Lifecycle of a constructor")
    }

        static getDerivedStateFromProps( props , state){
            console.log('LifecycleA getDerivedStateFromProps')
            return null
        }
    
        shouldComponentUpdate(){
            console.log('LifecycleA shouldComponentUpdate') 
            return true
        }
      
       

    render(){
        return(
            <>
                <p>{this.state.name}</p>
                
                
            </>
        )
    }
}


export default LifecycleA;