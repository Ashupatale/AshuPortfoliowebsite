import React from 'react';

function Functional() {

    function clickHandler() {
        console.log("clicked")
        
    }

    return(
       
        <button onClick={clickHandler}>Click me</button>
    )
    
}

export default Functional;