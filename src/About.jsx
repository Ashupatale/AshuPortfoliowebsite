import React, { useState } from 'react';
import Ashu from '../Portfolio/Ashu';

import Card1 from './Card1';
import Sdt from './Sdt';

const About= () =>{


  
    

    const[count , setCount]=useState( 1);
  
  const[name, newName]=useState('Like Here');
  
  
    
    const InCum = () =>{
      setCount(count + 1);
      newName("Thank you for your Response");
      
     
    
    }
  
    const dbg = ()=>{
      newName("Great Job");
    }
  

    return(
        <>
            <section id="header" className="Main-header">
            <div className="container-fluid Nav-bg">
            <div className="row">
                <div className="col-10 mx-auto">
                        <div className="row">
              
                       
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                           
                            <h1>About us</h1>

                            

                                 

                             
                            <p className="my-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                           
                             
                            <div className="mt-3">

                            <button  className="btn btn-success"
                            
                            
                            
                            
                            onClick={InCum} onDoubleClick={dbg} >{name}</button>

                            </div>

      

                        </div>
                       
                        <div className="col-md-4 order-lg-1 pl-4 ">
                            <img src={Ashu} />

                        </div>

                        import Ashu from '../Portfolio/Ashu';

                    </div>

                   
                    

                    </div>

                </div>
                </div>





            </section>


            <div className="our team pt-5">
                <h1 className="text-center">Our Best Team</h1>
               <center><h4 className="pt-3"> The Ones who Run this Company</h4></center> 
                 <div className="container-fluid mb-5">
                     <div className="row">
                         <div className="col-10 mx-auto">
                         <div className="row gy-5">
                              {
                                Sdt.map((val , ind)=>{
                                return <Card1 
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    btn ={val.btn}

                                />
                                })


                              }  
                               
   
                           
              
                        
                        
                        
                        
                         </div>
                            </div>
                                </div>
                                </div>

            </div>



        </>
    );
};


export default About;