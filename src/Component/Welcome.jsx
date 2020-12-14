import React from 'react';


const Welcome = (props) =>{
    const{name,heroname}=props
    return(
        <h1>Hello I am {name} Also known as {heroname} My Hoobies are </h1>
    )
}

export default Welcome;