import React from "react";
import { Grid, Cell,} from "react-mdl";



const About = () => {
  return (
    <div className="container-fluid">
     <Grid className="contact-grid">
      <Cell col={12}>
    
            <h2>Araya Nawrath</h2>
            <img src = "https://images.unsplash.com/photo-1533323905636-7f0bfa0ba5ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="me"
              style={{ height: "250px" }}
            />
            <h4 style={{ color: "grey" }}>My Story</h4>
            <hr syle={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          
          
            <p>
            I am a Full stack web developer adept at building responsive web application from front to back. Passionate about learing teachnologies, bring ideas to life, and working with delicated teams to build efficient and robust application suited to the user's needs.

Skill:HTML, CSS, Javascript, MongoDB, Express, React, Node, AJAX, JQuery, SQL, Git

Education:University of Connecticut(Full Stack Web Development Bootcamp) An intensive 6-month long coding bootcamp in which I learned to design and build web application from the front-end to back-end with the MERN stack (MongoDB, Express.js, Node.js).

Rajamangala University of Technology Bangkok Thailand(Bachelor's in Information Systems Technology BICIS).
            </p>
          </Cell>
          </Grid>
    </div>
  );
}

export default About;