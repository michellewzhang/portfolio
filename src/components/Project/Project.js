import React from "react";
import "./Project.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import creatorStudio from "../../images/creator_studio.png";
import vuzix from "../../images/vuzix.png";
import ripe from "../../images/ripe.png";
import dialog from "../../images/dialog.png";
import dhcs from "../../images/dhcs.png";
import choosie from "../../images/choosie.png";
import awareAI from "../../images/awareai.png";
import etc from "../../images/creative.png";

const Img = styled('img')({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});


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

const imgSrc = '../../images/creator_studio.png';

function Project() {
  return (
    <Box sx={gridContainer}>
      <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
          <Img src={vuzix}/>
          <span className="overlay">
              <span className="overlay-text-title">verizon internship
                <div className="overlay-text-description">3D software development for AR glasses</div>
              </span>
            </span>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={creatorStudio}/>
            <span className="overlay">
              <span className="overlay-text-title">meta internship
                <div className="overlay-text-description">full stack development</div>
              </span>
            </span>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={choosie}/>
            <span className="overlay">
              <span className="overlay-text-title">choosie
                <div className="overlay-text-description">digital startup pitch</div>
              </span>
            </span>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={ripe}/>
            <span className="overlay">
              <span className="overlay-text-title">ripe!
                <div className="overlay-text-description">app prototype</div>
              </span>
            </span>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={dialog}/>
            <span className="overlay">
              <span className="overlay-text-title">dialog schema builder
                <div className="overlay-text-description">full stack development</div>
              </span>
            </span>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={awareAI}/>
            <span className="overlay">
              <span className="overlay-text-title">aware.ai
                <div className="overlay-text-description">startup brand identity</div>
              </span>
            </span>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={dhcs}/>
            <span className="overlay">
              <span className="overlay-text-title">optimized object manipulation
                <div className="overlay-text-description">creative coding</div>
              </span>
            </span>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={etc}/>
            <span className="overlay">
              <span className="overlay-text-title">etc
                <div className="overlay-text-description">creative coding</div>
              </span>
            </span>
          </Item>
          </span>
        </Grid>
    </Grid>
    </Box>
  );
}

export default Project;
