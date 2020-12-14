import React, { useState } from 'react'

function HookCounterThree(){

const[name , setName]=useState({firstName:"", lastName:""})

    return(
        <>
        <form>
            <input type="text" value={name.firstName} onChange={Event=>setName({...name,firstName:Event.target.value})}/>

            <input type="text" value={name.lastName} onChange={Event=>setName({...name,lastName:Event.target.value})}/>

            <h2>Welcome {name.firstName}  {name.lastName}</h2>
            


        </form>



        </>
    )
}

export default HookCounterThree