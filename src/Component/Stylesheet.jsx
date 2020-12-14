import React from 'react';
import './Mystyle.css';

function stylesheet(props){
    let className=props.primary ? 'primary':""
    return(
        <>
            <h1 className={`${className} font`} >Stylesheet</h1>

        </>
    )

}

export default stylesheet;