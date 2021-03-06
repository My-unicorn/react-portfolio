import React from 'react';
import { Grid, Cell } from 'react-mdl';


const Landing = () => {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src= {process.env.PUBLIC_URL + '/mee.jpg'}
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Software Developer</h1>

                         <hr/>
                        <p>JavaScript | HTML5/CSS3 | MySQL | MongoDB | NodeJS | Express | React | Bootstrap</p>

                        <div className="reference-links">

                            <a href="https://www.linkedin.com/in/araya-nawrath-31268237/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            <a href="https://github.com/My-unicorn" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            <a href="https://www.arayanawrath.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-share-square" aria-hidden="true" />
                            </a>

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
          );
}
 
export default Landing ;

