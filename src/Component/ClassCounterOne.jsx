import React, { useEffect, useState } from 'react'

function ClassCounterOne(){
    const[count , setCount]=useState("LOg In")

    useEffect(
        ()=>
        {
            document.title=`${count} `
        }


    )

return(
    <>
        <button onClick={()=>setCount("Your Are Logged In")}>Clickeeed {count} Times</button>

    </>
)

}
export default ClassCounterOne