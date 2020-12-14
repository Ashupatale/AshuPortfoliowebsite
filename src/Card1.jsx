import React from 'react';
import {NavLink} from 'react-router-dom';

const Card1= (props) =>{
    return(
        <>
            
                         
                        
                               
                                <div className="col-md-4 col-10 mx-auto pt-5">
                               
                                <div class="card ">
  <img src={props.imgsrc} className="card-img-top" alt="..." style={{height:"200px" , width:"100%"}}/>
  <div className="card-body">
  <h2>Ashutosh patale</h2>
   <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/" className="btn btn-primary">{props.btn}</NavLink>
  </div>
</div>
</div>

              
                        
                        
                        
                        
                         
                           
        </>
    )
}


export default Card1;