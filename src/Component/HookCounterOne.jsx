import React, { useState , useEffect} from 'react'

function HookCounterOne(){
    const[count , setCount]=useState(0)

    useEffect(
        ()=>{
            document.title=`Clicked ${count} times`

        }
    )


return(
    <>  
       
        <button onClick={()=>setCount(count +1)}> clicked {count}Times</button>

    </>
)

}
export default HookCounterOne