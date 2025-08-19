import React from "react";
import "./Ripe.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ripe from "../../images/ripe.png";
import ripe2 from "../../images/ripe2.png";
import ripe3 from "../../images/ripe3.png";
import ripe4 from "../../images/ripe4.png";
import ripe5 from "../../images/ripe5.png";
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
    paddingBottom: '0.3rem',
});
  

const ItemText = styled(Paper)(({ theme }) => ({
    height: '25rem',
    margin: '0.3rem',
    color: 'var(--black)',
    boxShadow: 'none',
    textAlign: 'left',
    paddingTop: '0rem',
    padding: '2rem',
    paddingBottom: '4rem',
    lineHeight: '1.5rem',
    background: 'transparent',
  }));
  

const Item = styled(Paper)(({ theme }) => ({
  height: '25rem',
  textAlign: 'center',
  margin: '0.3rem',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

const gridContainer = {
  display: "grid",
  gridAutoColumns: "1fr",
  gridAutoFlow: "column",
};
function Ripe() {
  return (
    <>
    <ProjectHeader title="ripe!" description="app prototype" details="eliminating food waste by helping users build smarter grocery lists"/>
    <Box sx={gridContainer}>
      <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <ProjectSpecs role="UX designer" 
                        skills="user interface design, rapid prototyping" 
                        tools="Figma"/>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <ItemText>
            <p> ripe! is an app designed to decrease the amount of food waste produced by the everyday person. 
                <br></br> <br></br>
                Users keep track of their grocery lists in the app and record what food they've thrown out, which subsequently helps the app
                build a smarter, more personalized, grocery list for their next trip. 
                <br></br> <br></br>
                ripe! also helps users understand how to store food properly, which decreases the possibility that consumers will need to throw food out
                due to improper storage. Users also have the ability to search for a nearby food pantry 
                to donate unused food at the end of the period.
                <br></br> <br></br>
                I created this             <span className="about-links-container">
            <a
							href="https://www.figma.com/proto/eIahnqomGcc3zzHsxXsYxM/ripe!?node-id=427%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=427%3A2"
							target="_blank" rel="noopener noreferrer"><span className="white-text about-link">prototype </span>
            </a>
            </span> during a hackathon focused on environmental sustainability.
            </p>

          </ItemText>
          </span>
        </Grid>
        <ImgLarge src={ripe}/>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={ripe2}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={ripe3}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={ripe5}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={ripe4}/>
          </Item>
          </span>
        </Grid>
    </Grid>
    </Box>
  </>
  );
}

export default Ripe;
