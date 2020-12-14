import React , {useReducer} from 'react'

const initialState={
    firstCounter : 0
}
const reducer= (state , action )=>{
   switch(action.type){
       case 'increment':
           return {firstCounter : state.firstCounter + 1}
        case 'decrement':
            return{firstCounter : state.firstCounter - 1}
        case 'reset':
            return initialState
        default :
        return state
   }
}

function CounterOne (){


    const [count , dispatch]=useReducer(reducer , initialState)
    const[countTwo , dispatchTwo]=useReducer(reducer , initialState)

    return(
        <>
            <h3>count - {count.firstCounter}</h3>
            <button onClick={()=>dispatch({type:'increment'})} className="btn btn-success">Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})} className="btn btn-danger">Decrement</button>
            <button onClick={()=>dispatch({type: 'reset'})}className="btn btn-">Reset</button>

            
            <h3>count - {countTwo.firstCounter}</h3>
            <button onClick={()=>dispatchTwo({type:'increment'})} className="btn btn-success">Increment</button>
            <button onClick={()=>dispatchTwo({type:'decrement'})} className="btn btn-danger">Decrement</button>
            <button onClick={()=>dispatchTwo({type: 'reset'})}className="btn btn-">Reset</button>
        </>
    )
}

export default CounterOne