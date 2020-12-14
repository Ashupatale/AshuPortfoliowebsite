import React, { Component  } from 'react'
import {Grid , Cell, List , ListItem, ListItemContent , ProgressBar } from 'react-mdl';


export class Contact extends Component {
    render() {
        return (
            <>
            <div className="contact-body">
             <Grid className="contact-grid" 
             >
               
             <Cell col ={6} >
              <h2>Ashutosh Patale</h2>

              <img src="https://www.monsterbacklinks.com/pics/319222-1IvI0s1421931178.png" 
              alt="my-img"
               style={{height:'250px'}}

              />

              <h4>~React js Developer~</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the.
              </p>



             </Cell>

             <Cell col ={6} >
                <h2>Social Media</h2>

                <ProgressBar indeterminate />


                <div className="contact-list">

                
                                <List>
                <ListItem className="listitem">
                    <ListItemContent style={{fontSize:'25px' , fontFamily:'Anton'}}>
                   <i class="fab fa-linkedin"  style={{fontSize:'60px', paddingRight:'4rem'}}></i> My LinkedIn Id </ListItemContent>
                </ListItem>  
                <ListItem className="listitem">
                    <ListItemContent  style={{fontSize:'25px' , fontFamily:'Anton'}}>
                    <i class="fab fa-github" style={{fontSize:'60px' , paddingRight:'4rem'}}></i> my GitHub Id</ListItemContent>
                </ListItem>
                <ListItem className="listitem">
                    <ListItemContent  style={{fontSize:'25px' , fontFamily:'Anton'}} >
                    <i class="fas fa-envelope"  style={{fontSize:'60px',paddingRight:'4rem'}}></i>
                    akashpatale88@gmail.com</ListItemContent>
                </ListItem>

                <ListItem className="listitem">
                    <ListItemContent  style={{fontSize:'25px' , fontFamily:'Anton'}} >
                    <i class="fas fa-phone-square"  style={{fontSize:'60px',paddingRight:'4rem'}}></i>
                        (8788113725 / 8237272161)</ListItemContent>
                </ListItem>
                </List>



                </div>

             </Cell>



             </Grid> 
              
            </div>
            </>
        )
    }
}

export default Contact
