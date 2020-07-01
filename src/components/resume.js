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
                src="https://images.unsplash.com/photo-1591394093170-a2b3ea374716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                alt="avatar"
                style={{ height: "250px", paddingTop: "2rem"}}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Araya Nawrath</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr syle={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
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
              schoolName="Rajamokala University Thailand"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since"
            />

            <Experience
              startYear={2012}
              endYear={20114}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since"
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