import React from 'react';

const Contact= () =>{
    return(
        <>
           

   <section className="contactus  " id="contactdiv p-4">
          <div className="container headings text-center">
            <h1 className="text-center font-weight-bold ">Contact us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>

          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-md-8 col-10 offset-lg-2 ">
                          <form action="/action_page.php">
                  
                  <div className="form-group">
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
    

        </>
    )
}


export default Contact;