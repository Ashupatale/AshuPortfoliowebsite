import React from 'react';
import {NavLink , Link} from 'react-router-dom';


const Home= () =>{
    return(
        <>
            <section id="header" className="Main-header">
            <div className="container-fluid Nav-bg">
            <div className="row">
                <div className="col-10 mx-auto">
                        <div className="row">
              
                       
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                           
                            <h1>Grow Your Bussiness With <strong >Ahsutosh Patale...</strong></h1>

                                 
                            <h2 className="my-3">
                            We Are The Team Of Developing Responsive Websites....!</h2>
                           <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <div className="mt-3">
                                <NavLink to="/about" className="btn btn-success">Get Started</NavLink>
                            </div>

      

                        </div>
                       
                        <div className="col-md-4 order-lg-1 pl-4 ">
                           <Link to='/' ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9yAYfQyAwMVV6Wi_oyxYys4B5xBmEQyXrDQ&usqp=CAU " alt="home-img" style={{width:"450px" ,height:"350px"}}/>
                           </Link>
"
                        </div>


                    </div>

                   
                    

                    </div>

                </div>
                </div>





            </section>

        </>
    );
};


export default Home;