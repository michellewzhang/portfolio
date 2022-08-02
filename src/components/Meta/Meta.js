import React from "react";
import "./Meta.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectSpecs from '../ProjectSpecs/ProjectSpecs';

const Item = styled(Paper)(({ theme }) => ({
  height: '25rem',
  margin: '0.3rem',
  marginBottom: '5rem',
  color: 'var(--light-green-color)',
  boxShadow: 'none',
  textAlign: 'left',
  padding: '3rem',
  lineHeight: '1.5rem',
  background: 'transparent',
}));

const gridContainer = {
  display: "grid",
  gridAutoColumns: "1fr",
  gridAutoFlow: "column",
};

function Meta() {
  return (
    <>
    <ProjectHeader title="meta internship" description="full stack development" details="facebook creator and publisher experiences team &mdash; summer 2022"/>
    <Box sx={gridContainer}>
      <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={4} md={6}>
        <span className="proj-container">
          <ProjectSpecs role="software engineering intern" skills="front end development, API integration, building data stores, metric fetching" tools="React / JavaScript, PHP, GraphQL"/>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <p> During summer 2022, I interned at Meta on the Creator and Publisher Experiences (CPX) team.
                The CPX team builds insights tools for video creators who use Facebook's Creator Studio platform.
                <br></br> <br></br>
                I built interfaces that displayed video metrics (such as views data, ad revenue data, and comments, shares, and likes data)
                and video metadata in meaningful ways, to help creators analyze trends, compare insights, and visualize stats
                for their published videos on Facebook. 
                <br></br> <br></br>
                This project involved developing full stack line charts and tables, building data stores, 
                and querying data through PHP and GraphQL.
                <br></br> <br></br>
                Please contact me if you'd like to learn more. Although I can't publish my work online, 
                I'd be happy to chat with you about the role and project.
            </p>
          </Item>
          </span>
        </Grid>
    </Grid>
    </Box>
  </>
  );
}

export default Meta;
