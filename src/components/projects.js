import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props)
        this.state ={ activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background:'url(https://hackernoon.com/drafts/ux832eqm.png) center / cover'}}>
                    React Project #1
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background:'url(https://hackernoon.com/drafts/ux832eqm.png) center / cover'}}>
                    React Project #1
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background:'url(https://hackernoon.com/drafts/ux832eqm.png) center / cover'}}>
                    React Project #1
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div><h1>This is React</h1></div>
            )  
        }else if(this.state.activeTab === 2){
            return(
                <div><h1>This is Full Stack</h1></div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div><h1>This is Command Line Interface</h1></div>
            )
        }
    }

    render() { 
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Vanilla JS/JQuery</Tab>
                    <Tab>React</Tab>
                    <Tab>Full Stack</Tab>
                    <Tab>Command Line Interface</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
            
                
            </div>
          );
    }
}
 
export default Projects ;