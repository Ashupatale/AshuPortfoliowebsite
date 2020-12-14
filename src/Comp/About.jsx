import React from 'react';
import { NavLink } from 'react-router-dom';
import task1 from '../Comp/task1.png';
import { useState } from 'react';

function About() {

    const[click ,setClick]=useState('Like Our Ideas')
    return (
        <>
            
     
<section id="header" className="Main-header">
            <div className="container-fluid Nav-bg">
            <div className="row">
                <div className="col-10 mx-auto">
                        <div className="row">
              
                       
                        <div className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" id="H-main">
                           
                           

                                 
                            <h2 className="my-3">
                            We Are The Team Of Developing Responsive Websites....!</h2>
                           <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <div className="mt-3">
                                <NavLink to="/about" className="btn btn-success" onClick={() =>setClick("Thanks for Your Feedback")}>{click}</NavLink>
                            </div>

      

                        </div>
                       
                        <div className="col-md-4 order-lg-1 ">
                          <img src={task1} alt="home-img" className="about-img "  />
                         
"
                        </div>


                    </div>

                   
                    

                    </div>

                </div>
                </div>





            </section>









        </>
    )
}

export default About
