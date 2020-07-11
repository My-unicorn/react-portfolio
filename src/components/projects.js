import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Grid className="projects-grid">
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/project1.png) center / cover' }}>
                React Project #1
                    </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                   </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/projest2.png) center / cover' }}>
                React Project #2
               </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/dashboard.png) center / cover' }}>
                React Project #3
                 </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/project1.png) center / cover' }}>
                React Project #1
                    </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                   </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/projest2.png) center / cover' }}>
                React Project #2
               </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/dashboard.png) center / cover' }}>
                React Project #3
                 </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
        </Grid>
      )
    } else if (this.state.activeTab === 1) {
      return (
        
<Grid className="projects-grid">
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/project1.png) center / cover' }}>
                React Project #1
                    </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                   </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/projest2.png) center / cover' }}>
                React Project #2
               </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/dashboard.png) center / cover' }}>
                React Project #3
                 </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
        </Grid>

      )
    } else if (this.state.activeTab === 2) {
      return (
        <Grid className="projects-grid">
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/project1.png) center / cover' }}>
                React Project #1
                    </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                   </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/projest2.png) center / cover' }}>
                React Project #2
               </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/dashboard.png) center / cover' }}>
                React Project #3
                 </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
        </Grid>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div><h1>This is Command Line Interface</h1></div>
      )
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>All Projects</Tab>
          <Tab>Projects</Tab>
          <Tab>Team Projects</Tab>
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
export default Projects;