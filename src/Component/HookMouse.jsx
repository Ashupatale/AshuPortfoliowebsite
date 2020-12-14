import React,{useState , useEffect} from 'react'

function HookMouse(){

    const[x,setX]=useState(0)

    const[y,setY]=useState(0)


    const logMousePosition= Event=>{
        console.log("MOuse event")
        setX(Event.clientx)
        setY(Event.clienty)
    }

    useEffect(() =>{
        console.log("useEffect called")
        window.addEventListener('mousemove', logMousePosition)
    }, )


    return(
        <>

            Hooks X-{x} Y-{y}

        </>
    )
}

export default HookMouse