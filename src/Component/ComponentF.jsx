import React from 'react';
import {UserContext , ChannelContext} from '../App';



function ComponentF(){
    return(
        <>
           <UserContext.Consumer>
               {
                   user =>{
                       return (
                           <ChannelContext.Consumer>{
                            
                            Channel =>{
                            
                               
                               return <h3>User context value {user}  , user Channel is {Channel}   </h3>
                                
                            }


                        }
                           </ChannelContext.Consumer>
                       )
                   }
               }
           </UserContext.Consumer>

        </>
    )
}


export default ComponentF