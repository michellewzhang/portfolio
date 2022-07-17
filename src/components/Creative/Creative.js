import React from "react";
import "./Creative.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bounce from "../../images/creative_bounce.gif";
import lattice from "../../images/creative_lattice.gif";
import starry from "../../images/creative_starry.gif";
import etc from "../../images/creative.png";
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import ProjectHeader from '../ProjectHeader/ProjectHeader';

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

function Creative() {
  return (
    <>
    <ProjectHeader title="etc" description="creative coding" details="small visualizations i've made just for fun"/>
    <Box sx={gridContainer}>
      <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
          <Img src={starry}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={lattice}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={bounce}/>
          </Item>
          </span>
        </Grid>
    </Grid>
    </Box>
  </>
  );
}

export default Creative;
