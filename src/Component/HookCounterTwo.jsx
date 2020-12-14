import React , {useState} from 'react'

function HookCounterTwo (){

    const initialCount =0
    const[count , setCount]=useState(initialCount)

    
    return(
        <>
           
         You Ordered: <h3>{count}   Added in cart</h3> 
         <button className="btn btn-dark" onClick={() => setCount(initialCount)}>Clear cart</button>
         <button className="btn btn-success" onClick={() =>setCount(prevCount => prevCount + 1)}>Add items</button>
         <button className="btn btn-danger" onClick={() => setCount(prevCount => prevCount - 1)}>Delete items</button>
         <hr />
        


        </>
    )
}

export default HookCounterTwo