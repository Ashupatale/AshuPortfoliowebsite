import React , {useContext}from 'react'
import {UserContext , ChannelContext} from '../App';

function ComponentE (){


const user= useContext(UserContext)
const Channel= useContext(ChannelContext)

    return(
        <>
        <h1>{user } As A {Channel}</h1>  
        </>
       
    )
}


export default ComponentE