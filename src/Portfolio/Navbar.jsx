import React, { Component } from 'react'


import{Layout,Drawer,Content,Header,Navigation} from 'react-mdl';
import Main from './Main';
import {Link }from 'react-router-dom';

 class Navbar extends Component {
    render() {
        return (
            <>
    
<div className="demo-big-content">
    <Layout>
        <Header className="brand-name" title="Ashu's PortFolio"  >
        


            <Navigation>
                <Link to="/aboutme">AboutMe</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact Us</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/aboutme">AboutMe</Link>
            <Link to="/resume">Resume</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact Us</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
           <Main />
        </Content>
    </Layout>
</div>




          </>  
        )
    }
}

export default Navbar;
