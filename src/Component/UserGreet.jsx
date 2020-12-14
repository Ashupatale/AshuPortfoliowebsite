import React, { Component } from 'react';

class UserGreet extends Component{

        constructor(props){
            super(props)

            this.state={
                isLoggedIn:true
            }
         }



    render(){

        if(this.state.isLoggedIn){
            return <div>Welcome Ashutosh..!</div>


        }else{
            return <div>Welcome Guest...!</div>

        }


        // return(
        //     <>

        //     </>
        // )
    }
}

export default UserGreet;