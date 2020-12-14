import React from 'react';

function Hero({heroName}){
    if(heroName === 'joker'){
        throw new Error('Abeeee Not A Herooo !')
    }
    return(
        <>
        {heroName}
        </>

    )
}

export default Hero;