import React from 'react';

function Childcomp(props) {
    return(
        <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    )
    
}

export default Childcomp;