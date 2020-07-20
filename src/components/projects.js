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
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/googleBook.png) center / cover' }}>
                Book Search
                    </CardTitle>
              <CardText>
                this app search for Books provide Google API, you can search for you perfect books
                   </CardText>
              <CardActions border>
                {/* <Button colored>Github</Button> */}
                <Button colored href='https://github.com/My-unicorn/api-google-books-app'>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/burger.png) center / cover' }}>
                Yummy burger
               </CardTitle>
              <CardText>
                Burger-handleBars is a restaurant app that lets users input the names of burgers they'd like to eat.
                  </CardText>
              <CardActions border>
                {/* <Button colored>Github</Button> */}
                <Button colored href='https://github.com/My-unicorn/burger-handlebars'>Github</Button>
                <Button colored href="https://evening-wave-66529.herokuapp.com/index">Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/dashboard.png) center / cover' }}>
                Weather Dashboard
                 </CardTitle>
              <CardText>
                Weather Dashboard Developers using application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL.
                </CardText>
              <CardActions border>
                {/* <Button colored>Github</Button> */}
                <Button colored href='https://github.com/My-unicorn/weather-dashboard'>Github</Button>
                {/* <Button colored>Live Demo</Button> */}
                <Button colored href="https://my-unicorn.github.io/weather-dashboard/">Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/note.png) center / cover' }}>
                Note-Taker
                    </CardTitle>
              <CardText>
                The following API routes should be created, Get, Post and Delete function to rewrite the notes to the db.json file.
                   </CardText>
              <CardActions border>
                {/* <Button colored>Github</Button> */}
                <Button colored href='https://github.com/My-unicorn/note-taker'>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/bookSearch.png) center / cover' }}>
                Book-search
               </CardTitle>
              <CardText>
                Searc for books with add, save and delete function with API booksSearch.
                  </CardText>
              <CardActions border>
                {/* <Button colored>Github</Button> */}
                <Button colored href='https://github.com/My-unicorn/books-search'>Github</Button>
                {/* <Button colored>Live Demo</Button> */}
                <Button colored href="https://evening-wave-66529.herokuapp.com/index">Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/codequiz.png) center / cover' }}>
                Code-Quiz
                 </CardTitle>
              <CardText>
                Created a code quiz WHEN I click the start button THEN a timer starts and I am presented with a question WHEN I answer a question THEN I am presented with another question WHEN I answer a question incorrectly THEN time is subtracted from the clock WHEN all questions are done.
                </CardText>
              <CardActions border>
                {/* <Button colored>Github</Button> */}
                <Button colored href='https://github.com/My-unicorn/code-quiz'>Github</Button>
                {/* <Button colored>Live Demo</Button> */}
                <Button colored href="https://my-unicorn.github.io/code-quiz/">Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/day-plan.png) center / cover' }}>
                Day-Planner
                    </CardTitle>
              <CardText>
              Day Planner Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery
                   </CardText>
              <CardActions border>
                {/* <Button colored>Github</Button> */}
                <Button colored href='https://github.com/My-unicorn/Day-planner'>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/password.png) center / cover' }}>
              Password-Generator
               </CardTitle>
              <CardText>
                Created the Generator Password using javaScript.
                  </CardText>
              <CardActions border>
                {/* <Button colored>Github</Button> */}
                <Button colored href='https://github.com/My-unicorn/password-generator'>Github</Button>
                <Button colored href="">Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/budget.png) center / cover' }}>
                Budget Tracker
                 </CardTitle>
              <CardText>
              Online/Offline Budget Trackers Add functionality to our existing Budget Tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online. .
                </CardText>
              <CardActions border>
                {/* <Button colored>Github</Button> */}
                <Button colored href='https://github.com/My-unicorn/Online-Offline-budget-trackers'>Github</Button>
                {/* <Button colored>Live Demo</Button> */}
                <Button colored href="https://immense-cliffs-76995.herokuapp.com/">Live Demo</Button>
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
                Project#1
                    </CardTitle>
              <CardText>
              Date Night App: Search for Reasturants and Movies .
                   </CardText>
              <CardActions border>
                {/* <Button colored>Github</Button> */}
                <Button colored href='https://team-kia.github.io/Project-1/'>Github</Button>
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
                Project#2
               </CardTitle>
              <CardText>
              Grocery Assistance App: The simple app that helps users with grocery shopping. It lets users organize their grocery items and update them when needed. It also helps the user effectively locate grocery stores in their neighborhoods based on whatever zip code their enter
                  </CardText>
              <CardActions border>
                {/* <Button colored>Github</Button> */}
                <Button colored href='https://github.com/My-unicorn/project-2-grocery-app'>Github</Button>
                {/* <Button colored>Live Demo</Button> */}
                <Button colored href="https://groceryassistance.herokuapp.com/">Live Demo</Button>
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
          <Tab>Projects</Tab>
          {/* <Tab>Projects</Tab> */}
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