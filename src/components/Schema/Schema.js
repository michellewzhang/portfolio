import React from "react";
import "./Schema.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import dialog1 from "../../images/dialog1.png";
import dialog2 from "../../images/dialog2.png";
import dialog3 from "../../images/dialog3.png";
import dialog4 from "../../images/dialog4.png";
import dialog5 from "../../images/dialog5.png";
import dialog_overview from "../../images/dialog_overview.png";
import dialog_example from "../../images/dialog_example.png";
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectSpecs from '../ProjectSpecs/ProjectSpecs';

const Img = styled('img')({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

const ImgLarge = styled('img')({
    width: '100%',
    paddingTop: '0.3rem',
});
  
const ItemText = styled(Paper)(({ theme }) => ({
    height: '32rem',
    margin: '0.3rem',
    color: 'var(--black)',
    boxShadow: 'none',
    textAlign: 'left',
    paddingTop: '0rem',
    padding: '2rem',
    lineHeight: '1.5rem',
    background: 'transparent',
  }));
  
  const ItemDescription = styled(Paper)(({ theme }) => ({
    margin: '0.3rem',
    marginTop: '0rem',
    color: 'var(--black)',
    boxShadow: 'none',
    textAlign: 'left',
    padding: '5rem',
    paddingTop: '3rem',
    lineHeight: '1.5rem',
    background: 'transparent',
  }));

const Item = styled(Paper)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  margin: '0.3rem',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  borderRadius: '0',
}));

const gridContainer = {
  display: "grid",
  gridAutoColumns: "1fr",
  gridAutoFlow: "column",
};
function Schema() {
  return (
    <>
    <ProjectHeader title="dialog schema builder" description="full stack development" details="application for building chat dialog flows and testing them via a chat interface"/>
    <Box sx={gridContainer}>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <ProjectSpecs role="full stack intern, UI designer" 
                        skills="front end development, API design and integration, prototyping" 
                        tools="JavaScript / React, Python, Tornado, Postman, Figma"/>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <ItemText>
            <p> Schema Builder is an application that allows users to build dialog schema, 
                which are then passed into models trained on a dataset for transfer learning. 
                In Fall 2020, I designed and developed Schema Builder under 
                the guidance of Shikib Mehri and Dr. Eskenazi (DialRC, Language Technologies Institute, CMU).
                <br></br> <br></br>
                The completed application allows users to drag and drop components 
                to create a flowchart graph representing their schema diagram, 
                and subsequently offers users the ability to test their dialog implementation 
                by interacting with the system through a chatbox.
                <br></br> <br></br>
                In three months, I designed a feasible prototype,
                 developed functional user interfaces, 
                 created a useful data representation,
                  developed the API, and finally integrated the frontend and backend together with a model. <br></br><br></br>
            </p>
            <div className="about-links-container">
          <a
							href="https://github.com/michellewzhang/schema"
							target="_blank" rel="noopener noreferrer"><span className="about-link">github repo </span>
          </a>
          <span className="header-about-description"> &nbsp; / &nbsp; </span>
          <a
							href="https://drive.google.com/file/d/1IN6RDCEs8KLbLBMYelfEsTRW67i29Dat/view"
							target="_blank" rel="noopener noreferrer"><span className="about-link">final paper </span>
          </a>
          </div>
          </ItemText>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '0.3rem'}}>
            <span className="header-title">prototype</span>
        </section>
            <ItemDescription>For this design, I focused on incorporating elements of material design to form a clean and intuitive user interface. The main features
            included a chat UI, drag and drop UI, and expanded states.</ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={dialog1}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={dialog2}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={dialog3}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={dialog5}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={dialog4}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '3rem'}}>
            <span className="header-title">development</span>
        </section>
            <ItemDescription>The front end could be broken down into two components: 
                the drag and drop dialog builder area and the messaging area. <br></br><br></br>
                I also needed to design a data representation 
                that would be useful for passing information to the backend, including
                message exchange history, nodes and edges in the graph, exact connections between nodes, 
                and unique user IDs.  <br></br><br></br>
                The API I developed stores the user 
                and system message exchange history as well as the saved schema. 
                Each user is defined by a unique ID generated on the frontend.</ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '3rem'}}>
            <span className="header-title">impact</span>
        </section>
            <ItemDescription>With the development of novel schema-guided dialog models that use an explicit 
                description of known tasks to generalize to unknown tasks, 
                Schema Builder allows users to build arbitrary schemas, pass them to learning models,
                 and potentially create a dialog model for a new domain.
                 <br></br><br></br>
            Preliminary testing of the schema-guided models for model generalizability
             and task transfer shows potential for performance improvement on unseen tasks, 
             which provides a baseline for future research in the field. 
             I built a user interface that can, in the future, work in conjunction with zero-shot learning models.  <br></br><br></br>
        </ItemDescription>
        </span>
        </Grid>
        <ImgLarge src={dialog_overview}/>
        <ImgLarge src={dialog_example}/>
    </Grid>
    </Box>
  </>
  );
}

export default Schema;
