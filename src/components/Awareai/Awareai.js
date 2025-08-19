import React from "react";
import "./Awareai.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import awareai from "../../images/awareai.png";
import aware1 from "../../images/aware1.png";
import aware2 from "../../images/aware2.png";
import aware3 from "../../images/aware3.png";
import aware4 from "../../images/aware4.png";
import aware5 from "../../images/aware5.png";
import aware6 from "../../images/aware6.png";
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
    height: '100%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
}));

const gridContainer = {
  display: "grid",
  gridAutoColumns: "1fr",
  gridAutoFlow: "column",
};
function Aware() {
  return (
    <>
    <ProjectHeader title="aware.ai" description="startup brand identity" details="mobile app prototyping and brand identity curation for an artificial intelligence startup"/>
    <Box sx={gridContainer}>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <ProjectSpecs role="product specialist, customer researcher, UI designer" 
                        skills="user research, competitor analysis, prototyping, storyboarding" 
                        tools="Figma"/>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <ItemText>
            <p>Aware.ai is a Pittsburgh-based AI 
                startup that aims to address the maternal mortality 
                issue in the US. The virtual pregnancy assistant leverages AI 
                to connect new and expectant mothers to vital community and health resources before, 
                during, and after pregnancy while providing personalized and actionable maternal health education.
                <br></br> <br></br>
                As a product specialist for Aware.ai, 
                I conducted extensive user research and competitor analysis; 
                in addition, I directed the brand vision by developing the mobile 
                app prototype UI, and designing the website UI.<br></br><br></br>
            </p>
          </ItemText>
          </span>
        </Grid>
        <ImgLarge src={awareai}/>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '3rem', paddingBottom: '0rem'}}>
            <span className="header-title">customer discovery</span>
        </section>
            <ItemDescription>To explore our problem space and better understand
                 how we can serve our target audience (new and expectant mothers),
                  we conducted many interviews over a period of several months. 
                  Along with interviewing mothers, we also interviewed healthcare 
                  experts for additional insights on our problem space. 
                  <br></br><br></br>
                  The key issues we wanted to explore included barriers with current healthcare providers,
                  problems with existing solutions, and desirability of community.</ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">competitor analysis</span>
        </section>
            <ItemDescription>The current market of pregnancy apps is saturated, 
                so it was important to first distinguish what made Aware.ai  worthy of customer investment. 
                I explored sixteen existing 
                pregnancy apps and compared their 
                mission to that of Aware.ai. 
                At the end, I compiled a list of emerging themes that Aware.ai 
                could take inspiration from, as well as ways that Aware.ai could differentiate itself from existing solutions.
                <br></br><br></br>
                One important result of my competitor research 
                was gathering insights on how Aware.ai could combat 
                racism in the healthcare industry. 
                From my research, I brainstormed serveral ideas: 
                firstly, providing education (for both moms and dads) 
                on the state of racism in the healthcare industry (through articles, podcasts, etc.), 
                providing access to support groups for minorities, 
                and lastly, connecting pregnant women to healthcare providers that support diversity.</ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={aware6}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={aware5}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">mobile app prototyping </span>
        </section>
            <ItemDescription>From the insights gathered from research, I began synthesizing our users' 
                core needs and brainstorming ways we could address 
                the problems we observed through design principles.
                <br></br><br></br>
                We then translated design principles into functional elements
                 (i.e. how the user would be able to achieve the desired solution). 
                I created a mobile app prototype with elements that showcased these desired core features.
                <br></br><br></br>
                Features designed include a resource hub, community groups and message boards, questionnaires,
                educational and health-related resources, as well 
                 as push notifications.
                  </ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">website + brand identity </span>
        </section>
            <ItemDescription>
                  In addition to creating the mobile app features, I designed the website UI
                  for the startup, which included a mailing list and more information
                  about the company mission. <br></br><br></br> 
                  
                  Throughout this process, I had to thoughtfully curate a brand vision; 
                   When considering the target audience, I decided that it was important to me for Aware.ai to exude a friendly, approachable personality.
                   <br></br><br></br>
                   I communicated this idea through a pastel color palette,
                    soft edges, and an intuitive, uncluttered interface (using familiar design patterns so users feel at ease) across all platforms.</ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={aware1}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={aware2}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={aware3}/>
          </Item>
          </span>
        </Grid>

        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={aware4}/>
          </Item>
          </span>
        </Grid>
    </Grid>
    </Box>
  </>
  );
}

export default Aware;
