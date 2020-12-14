import React, { Component } from 'react'
import {Grid , Cell } from 'react-mdl';
import Education from './Education';
import Exprience from './Exprience';

export class Resume extends Component {
    render() {
        return (
            <div>
            <div className="resume-grid">
            <Grid >
                <Cell col={5} >
                <img src="https://www.monsterbacklinks.com/pics/319222-1IvI0s1421931178.png" 
              alt="my-img" 
               style={{height:'250px', paddingLeft:'28%'}} />

             
             <h1 className='resume-name' style={{paddingLeft:'15%', fontFamily:' sens-serif'}}>Ashutosh Patale</h1>
             
             <h4>~React js Developer~</h4>

             
           <hr style={{borderTop:"3px solid blue",  width:"60%"}}/>


             

             <p className='' style={{paddingTop:'5%', fontWeight:'bold'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

               <hr style={{borderTop:"3px solid blue",  width:"60%"}}/>

            <h4>Address</h4>
                <p style={{fontWeight:"bold"}}>Adarsh Choek Mohol , Dist-Solapur  pinCode  -413213</p>

                <hr style={{borderTop:"3px solid blue",  width:"60%"}}/>

        <h4>Email_ID</h4>
        <i class="fas fa-envelope"  ></i> <p style={{fontWeight:"bold"}}>akashpatale88@gmail.com</p>

        <hr style={{borderTop:"3px solid blue",  width:"60%"}}/>

              
            
                </Cell>

               <Cell col={7} className="resume-right-col"     style={{backgroundColor:'black' }}>
               <h1>Education</h1>
                <Education 
                    startYear={2012}
                    endYear={2013}
                    schoolName="RIKP Mohol Dist -Solapur"
                    schoolDescription="Lorem Ipsum has been the industrys standard dummy text ever since the
              Lorem Ipsum is simply dummy text of the printing and typesetting industr"
                 />

            <Education 
                    startYear={2013}
                    endYear={2017}
                    schoolName="Government Polytechnic Solapur"
                    schoolDescription="Lorem Ipsum has been the industrys standard dummy text ever since the
              Lorem Ipsum is simply dummy text of the printing and typesetting industr"
                 />

            <Education 
                    startYear={2017}
                    endYear={2020}
                    schoolName="G.H. Raisoni Collage Of Engineering pune"
                    schoolDescription="Lorem Ipsum has been the industrys standard dummy text ever since the
              Lorem Ipsum is simply dummy text of the printing and typesetting industr"
                 />

            <hr style={{borderTop:"3px solid blue",  width:"60%"}}/>
                <h1>Exprience</h1>
              
               

                <Exprience 
                    startMonth={2019}
                    endMonth={2020} 
                    jobName="Web Developer Intern "
                    jobDescription="Lorem Ipsum has been the industrys standard dummy text ever since the
              Lorem Ipsum is simply dummy text of the printing and typesetting industr"

                />

              

               </Cell>
                

            </Grid>

            

            </div>
            </div> 
        )
    }
}

export default Resume
