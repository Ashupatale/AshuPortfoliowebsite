import React, { Component } from 'react';

class Form extends Component{

    constructor(props){
        super(props)
        
        this.state={
            username : "" ,
            comment : "",
            topic:"React js"

        }


    }

    handleUsernameChange = (event) =>{
        this.setState({
            username:event.target.value
        })

    }

    handleCommentsChange = (event) =>{
        this.setState({
            comment:event.target.value
        })

    }
    handleTopicChange= (event) =>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = (event) =>{
        
        alert( `${this.state.username} ${this.state.comment}  ${this.state.topic}`)

    }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Enter username</label>
                <input type="text" 
                    value={this.state.username}
                    onChange={this.handleUsernameChange}



                />

                <label>Enter Your Details</label>
                <textarea
                value={this.state.comment}
                onChange={this.handleCommentsChange} />


                <label>Enter your Topics</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="React">React js</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>


                    </select>
                    
                    
                    <button>Submit</button>

                    </form>  



        
                

            </>
        )
    }
}

export default Form;