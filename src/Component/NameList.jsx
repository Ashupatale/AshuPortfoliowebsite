import React from 'react'

function NameList(){
    const Persons=[
        {
            id:3,
            name:'ashutosh',
            skill:'Reactjs',
        },

        {
            id:3,
            name:'shree',
            skill:'web dev',
        },

        {
            id:3,
            name:'kiran',
            skill:'Mysql',
        }
    ]

    const  PersonList= Persons.map(Person => (<h2>I am {Person.name}. I am working as {Person.skill}</h2>))

    return(
        <>
           {PersonList}

        </>
    )
}


export default NameList;