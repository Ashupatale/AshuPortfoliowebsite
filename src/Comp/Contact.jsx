import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
    return (
        <div>



           

   <section className="contactus  " id="contactdiv p-4">
          <div className="container headings text-center ">
            <h1 className="text-center font-weight-bold ">Contact us</h1>
            <p className= "offset-1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>

          <div className="container  offset-1">
              <div className="row  offset-1">
                  <div className="col-lg-8 col-md-8 col-10 offset-lg-2  ">
                          <form action="/action_page.php">
                  
                  <div className="form-group ">
                    <label for="email">Email username:</label>
                    <input type="text" className="form-control"  id="username" required autocomplete="off" placeholder="Enter your name" />
                  </div>


                  <div className="form-group" >
                    <label for="email" >Email email:</label>
                    <input type="email" className="form-control"  id="email" required autocomplete="off" placeholder="Enter your Email" />


                  </div>
 

                  
                    <div className="form-group">
                        <label for="comment"></label>
                    <textarea className="form-control" rows="4" id="comment" placeholder="Enter your message"></textarea>
                  </div>



                <div class="d-flex justify-content-center form-button p-2" />
                <center>  <button type="submit" class="btn btn-primary">Submit</button></center>
                </form> 
                  </div>




                  </div>


              </div>



         



    </section>

        <p className="text-center p-5">CopyRights @ Amazone  1997-2020 |  All Rights Are reserved</p>
    




             
             <div className="icon-bar">
<NavLink to="/" className="facebook"><i className="fa fa-facebook"></i></NavLink> 
<NavLink to="/" className="twitter"><i className="fa fa-twitter"></i></NavLink>  
<NavLink to="/" className="google"><i className="fa fa-google"></i></NavLink>  
<NavLink to="/" className="linkedin"><i className="fa fa-linkedin"></i></NavLink> 
<NavLink to="/" className="youtube"><i className="fa fa-youtube"></i></NavLink>  
</div>



{/* // import { Switch ,Route,Redirect } from 'react-router-dom'; */}



{/* // import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import Home from './Comp/Home';
// import About from './Comp/About';
// import Services from './Comp/Services';
// import Contact from './Comp/Contact';
// import Navbar from './Comp/Navbar'; */}

{/* <center>
  <Navbar />
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/services" component={Services}></Route>
    <Route path="/contact" component={Contact}></Route>
     <Redirect to ="/" />
  </Switch>
   




</center>  */}
            
        </div>
    )
}

export default Contact
