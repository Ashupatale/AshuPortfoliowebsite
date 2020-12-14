import React, { useState } from 'react'

function HookCounterFour(){

    const[items, setItems]=useState([])

    const addItem = () =>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*100)+1
        }])
    }

    return(
        <>
            <button onClick={addItem}>Add a Number</button>
            <ul>
                {   
                    items.map(
                        item =>(
                            <li key={item.length}>{item.value}</li>
                        )

                    )
                  


                }


            </ul>

        </>
    )
}

export default HookCounterFour