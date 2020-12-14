import React, { Component } from 'react'
import { Cell, Grid, ProgressBar } from 'react-mdl';
import { NavLink , Link } from 'react-router-dom';


export class AboutMe extends Component {
    render() {
        return (
            <>
            <div style={{width:'100% ', margin:'auto' }}>
                <Grid  className="landing-grid">
                <Cell col={12}>
                    
                    <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                    
                    className="avt-img "
                    alt="avatar img"
                 
                     />

                     <div className="banner-text">
                        <h1>~Front End Developer~</h1>

                        <ProgressBar  buffer={0} 
                    style={{width:'100%'}} /> 


                        <p>HTML/CSS | BOOTSTRAP | JAVASCRIPT | REACT JS | </p>


                        <div className="social-links">
                            <Link to="" >
                            <i class="fab fa-facebook-square"></i>
                            </Link>

                            <NavLink to="www.linkedin.com/in/aakash-patale-093846184" >
                            <i class="fab fa-linkedin"></i>                            
                            </NavLink>

                            <NavLink to="" >
                            <i class="fab fa-github"></i>                             
                            </NavLink>

                            <NavLink to="" >
                            <i class="fab fa-google-plus-g"></i>                           
                             </NavLink>



                        
                        </div>

                     </div>

                </Cell>

                </Grid>

                
               
            </div>



            

            </>
        )
    }
}

export default AboutMe
