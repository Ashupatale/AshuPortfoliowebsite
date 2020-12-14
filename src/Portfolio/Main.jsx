import React from 'react';
import { Route, Switch , Redirect} from 'react-router-dom';
import AboutMe from './AboutMe';
import Project from './Project';
import Resume from '../Portfolio/Resume';
import Contact from '../Portfolio/Contact';


function Main(){
    return(
    <>
        <Switch>
            <Route exact path="/aboutme" component={AboutMe} />
            <Route path="/resume" component ={Resume} />
            <Route path="/project" component ={Project} />
             <Route path="/contact" component ={Contact} />
             <Redirect to ="/aboutme" />
        </Switch>

    </>
    )
}

export default Main;