import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

const Contact = () => {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Araya Nawrath</h2>
            <img src = "https://images.unsplash.com/photo-1592941713139-54ec3e3772be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
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
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Arvo'}}>
                <i className="fa fa-phone-square" aria-hidden="true"/>
                (917)543-4894
                </ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily: 'Arvo'}}>
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                <a href="https://www.linkedin.com/in/araya-nawrath-31268237/">Araya Nawrath</a> 
                </ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily: 'Arvo'}}>
                <i className="fa fa-envelope-square" aria-hidden="true"/>
                <a href="mailto:Arayanawrath@gmail.com">Arayanawrath@gmail.com</a>
                </ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
}

export default Contact;