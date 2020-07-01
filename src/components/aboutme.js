import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";


const About = () => {
  return (
    <div className="container-fluid">
     <Grid className="contact-grid">
      <Cell col={12}>
    
            <h2>Araya Nawrath</h2>
            <img src = "https://images.unsplash.com/photo-1521863298757-8636aa338721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt="me"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Cell>
          </Grid>
    </div>
  );
}

export default About;