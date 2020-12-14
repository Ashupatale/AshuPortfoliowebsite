import React, { Component  } from 'react'
import { Tab, Tabs , Grid , Cell , Card, CardActions ,CardTitle, CardText, CardMenu , Button , IconButton} from 'react-mdl'

export class Project extends Component {
    constructor(props){
        super(props);
        this.state={ActiveTab:0};
    }


    toggleCategories(){
        if(this.state.ActiveTab === 0){
            return(
                <div className="project-grid-1 ">
                <Card shadow={5} style={{minWidth:'400' , margin:'auto', marginTop:'3%'}} className="card-1">
                        <CardTitle style={{height :'200px' ,
                         background: 'url(https://practity.com/en/wp-content/uploads/sites/2/2018/03/html-css-tutorials2.jpg) center/cover'}}
                            >

                            HTML/CSS Project #1
                          
                        </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </CardText>
                        <CardActions border>
                            <Button colored>GitHUb</Button>
                            <Button colored>Linked In</Button>
                            <Button colored> Wesbite</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share" className="icon-btn">

                            </IconButton>
                        </CardMenu>

                        </Card>

                        <Card shadow={5} style={{minWidth:'400' , margin:'auto' ,marginTop:'3%'}} className="card-2">
                        <CardTitle style={{height :'200px' ,
                         background: 'url(https://practity.com/en/wp-content/uploads/sites/2/2018/03/html-css-tutorials2.jpg) center/cover'}}
                            >

                            HTML/CSS Project #2
                          
                        </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </CardText>
                        <CardActions border>
                            <Button colored>GitHUb</Button>
                            <Button colored>Linked In</Button>
                           
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share">

                            </IconButton>
                        </CardMenu>

                        </Card>

<Card shadow={5} style={{minWidth:'400' , margin:'auto' , marginTop:'3%'}} className="card-3">
                        <CardTitle style={{height :'200px' ,
                         background: 'url(https://practity.com/en/wp-content/uploads/sites/2/2018/03/html-css-tutorials2.jpg) center/cover'}}
                            >

                            HTML/CSS Project #3
                          
                        </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </CardText>
                        <CardActions border>
                            <Button colored>GitHUb</Button>
                            <Button colored>Linked In</Button>
                           
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share">

                            </IconButton>
                        </CardMenu>

                        </Card>


                        </div>

                
            )
        } 
        else if(this.state.ActiveTab ===1){
            return(
                <div className="project-grid-boot">
                    <Card shadow={5} style={{minWidth:'400' , margin:'auto'}}>
                        <CardTitle style={{height :'200px' ,
                         background: 'url(https://pbs.twimg.com/profile_images/1273081551354396672/-Tzadxix_400x400.jpg) center/cover'}}
                            >

                        bootstrap Project #1
                          
                        </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </CardText>
                        <CardActions border>
                            <Button colored>GitHUb</Button>
                            <Button colored>Linked In</Button>
                           
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share">

                            </IconButton>
                        </CardMenu>

                        </Card>


                        <Card shadow={5} style={{minWidth:'400' , margin:'auto'}}>
                        <CardTitle style={{height :'200px' ,
                         background: 'url(https://pbs.twimg.com/profile_images/1273081551354396672/-Tzadxix_400x400.jpg) center/cover'}}
                            >

                            bootstrap Project #2
                          
                        </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </CardText>
                        <CardActions border>
                            <Button colored>GitHUb</Button>
                            <Button colored>Linked In</Button>
                           
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="download">

                            </IconButton>
                        </CardMenu>

                        </Card>


                        <Card shadow={5} style={{minWidth:'400' , margin:'auto'}}>
                        <CardTitle style={{height :'200px' ,
                         background: 'url(https://pbs.twimg.com/profile_images/1273081551354396672/-Tzadxix_400x400.jpg) center/cover'}}
                            >

                            bootstrap Project #3
                          
                        </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </CardText>
                        <CardActions border>
                            <Button colored>GitHUb</Button>
                            <Button colored>Linked In</Button>
                           
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share">

                            </IconButton>
                        </CardMenu>

                        </Card>
                </div>
            )
        }
        else if(this.state.ActiveTab === 2){
            return(

                <div className="project-grid-react">
                    <Card shadow={5} style={{minWidth:'400' , margin:'auto'}}>
                        <CardTitle style={{height :'200px' ,
                         background: 'url(https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe) center/cover'}}
                            >

                            React Project #1
                          
                        </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </CardText>
                        <CardActions border>
                            <Button colored>GitHUb</Button>
                            <Button colored>Linked In</Button>
                           
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share">

                            </IconButton>
                        </CardMenu>

                        </Card>


                        <Card shadow={5} style={{minWidth:'400' , margin:'auto'}}>
                        <CardTitle style={{height :'200px' ,
                         background: 'url(https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe) center/cover'}}
                            >

                            React Project #2
                          
                        </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </CardText>
                        <CardActions border>
                            <Button colored>GitHUb</Button>
                            <Button colored>Linked In</Button>
                           
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="download">

                            </IconButton>
                        </CardMenu>

                        </Card>


                        <Card shadow={5} style={{minWidth:'400' , margin:'auto'}}>
                        <CardTitle style={{height :'200px' ,
                         background: 'url(https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe) center/cover'}}
                            >

                            React Project #3
                          
                        </CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </CardText>
                        <CardActions border>
                            <Button colored>GitHUb</Button>
                            <Button colored>Linked In</Button>
                           
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share">

                            </IconButton>
                        </CardMenu>

                        </Card>
                </div>
                        




                )

        }
    }


    render() {
        return (
            <div>
                <div className="category-tab ">
                    
                    <Tabs ActiveTab={this.state.ActiveTab} onChange={(TabId)=>this.setState({ActiveTab:TabId})} className='Tabs'>

                    <Tab> HTML/CSS Website</Tab>
                    <Tab>BOOTSTRAP/JS</Tab>
                    <Tab> REACT JS Website</Tab>
            


                    </Tabs>

            <section className="projects-grid">
                <Grid >
                <Cell col={12}>
                    <div className="content">
                    {this.toggleCategories()}
                    </div>


                </Cell>


                </Grid>
               



            </section>




                </div>



            </div>
        )
    }
}

export default Project
