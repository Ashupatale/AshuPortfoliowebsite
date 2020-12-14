import React ,{useState , useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne(){
    const[loading , setLoading]=useState(true)

    const[error, setError]=useState('')

    const[post , setPost]=useState({})

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts/10')
        .then(Response =>{
            setLoading(false)
            setPost(Response.data)
            setError('')
        })

        .catch(error =>{
            setLoading(false)
            setPost({})
            setError('something went wrong')
        })

    }, [])

    return(
        <>
            {loading ? 'loading........' : post.title }
            {error ? error : null}

        </>
    )
}

export default DataFetchingOne