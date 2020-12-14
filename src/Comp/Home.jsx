import React from 'react';
import { NavLink } from 'react-router-dom';
import images from '../Comp/images.jpg';


import { useState } from 'react';

function Home() {

    const[click ,setClick]=useState('Getting Started')
    return (
        <>

        















      
<section id="header" className="Main-header">
            <div className="container-fluid Nav-bg">
            <div className="row">
                <div className="col-10 mx-auto">
                        <div className="row">
              
                       
                        <div className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" id="H-main">
                           
                            <h1 style={{color:"green", marginTop:"10%"}}>You Are On the Right Path...!</h1>

                                 
                            <h2 className="my-3">
                            We Are The Team Of Developing Responsive Websites....!</h2>
                           <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <div className="mt-3">
                                <NavLink to="/" className="btn btn-success" onClick={() =>setClick("Loading..")}>{click}</NavLink>
                            </div>

      

                        </div>
                       
                        <div className="col-md-4 order-lg-1 pl-5 ">
                          <img src={images} alt="home-img " className="img-main  offset-0 "   />
                         
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

export default Home
