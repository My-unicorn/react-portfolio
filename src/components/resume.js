import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

const Resume = () => {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://images.unsplash.com/photo-1533323905636-7f0bfa0ba5ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="avatar"
                style={{ height: "250px", paddingTop: "2rem"}}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Araya Nawrath</h2>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr syle={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
            I am Full stack web developer adept at building responsive web application from front to back. Passionate about learning teachnologies, bring ideas to life, and working with delicated teams to build efficient and robust application suited to the user's needs..
            </p>
            <hr syle={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Phone</h5>
            <p>917-543-4894</p>
            <h5>Email</h5>
            <p>Arayanawrath@gmail.com</p>
            <hr syle={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2006}
              endYear={2009}
              schoolName="Rajamangala University of Technology Bangkok Thailand"
              schoolDescription="Bachelor's in Information Systems Technology BICIS"
            />

           <Education
              startYear={2020}
              endYear={2020}
              schoolName="University of Connecticut(Full Stack Web Development Bootcamp)"
              schoolDescription="Full Stack Web Development Bootcamp"
            />

            
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills 
            skill="javascript"
            progress={80}
            />
            <Skills 
            skill="HTML/CSS"
            progress={80}
            />
            <Skills 
            skill="NodeJS"
            progress={70}
            />
            <Skills 
            skill="React"
            progress={50}
            />
          </Cell>
        </Grid>
      </div>
    );
  
}

export default Resume;