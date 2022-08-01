import React from "react";
import "./Verizon.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import verizon from "../../images/vuzix.png";
import unity from "../../images/unity.png";
import threats from "../../images/verizon_threats.png";
import strength2 from "../../images/verizon_strength2.png";
import strength1 from "../../images/verizon_strength1.png";
import opp1 from "../../images/verizon_opp1.png";
import opp2 from "../../images/verizon_opp2.png";
import weak from "../../images/verizon_weak.png";
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectSpecs from '../ProjectSpecs/ProjectSpecs';


const Img = styled('img')({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});
  
const ItemText = styled(Paper)(({ theme }) => ({
    height: '32rem',
    margin: '0.3rem',
    color: 'var(--light-green-color)',
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
    color: 'var(--light-green-color)',
    boxShadow: 'none',
    textAlign: 'left',
    paddingTop: '0rem',
    padding: '5rem',
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
function Verizon() {
  return (
    <>
    <ProjectHeader title="verizon internship" description="3D software development for AR glasses" details="extended reality (XR) app development and ecosystem analysis &mdash; summer 2021"/>
    <Box sx={gridContainer}>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <ProjectSpecs role="device technology intern" 
                        skills="3D software development, market research and analysis" 
                        tools="Unity, Vuforia Engine, Android Studio"/>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <ItemText>
            <p>During the summer of 2021, I worked at Verizon as a Device Technology
                 Intern under the guidance of Monte Giles. 
                 I explored and developed with augmented reality (AR) glasses for the first time.
                <br></br> <br></br>
                The main objective of the internship was to explore the gaps and
                 opportunities associated with hands-free XR over 5G.
                  Using Unity and Vuforia Engine, I created a scalable AR 
                  image tracking app to illustrate enterprise use cases 
                  for AR glasses over 5G. 
                  <br></br> <br></br>
                  Running the demo on both Vuzix M4000 glasses and the Samsung Galaxy S21
                   allowed for performance comparisons showing value in integrating XR with 5G MEC. 
                  In addition, I analyzed the current XR market and presented the key HCI 
                  requirements and opportunities for Verizon in the XR industry.
                  <br></br><br></br>

            </p>
            <div className="about-links-container">
          <a
							href="https://drive.google.com/file/d/1uQgq2zrmNxcYyVLbPgVpnbW1ori8xJsg/view"
							target="_blank" rel="noopener noreferrer"><span className="mode-left white-text about-link">final presentation </span>
          </a>
          </div>
          </ItemText>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={verizon}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '3rem', paddingBottom: '0rem'}}>
            <span className="header-title">XR image tracking</span>
        </section>
            <ItemDescription>The basic flow for image tracking involves choosing 
                an image to be the image target (e.g. a QR code) and associating it with a 3D asset 
                (e.g. model of a house).
                 Then, after the image target is printed out, 
                 users can view the 3D object through an AR lens.
                  <br></br><br></br>
                  I built the image tracking app using Unity and Vuforia Engine, 
                  and installed the APK file onto the AR glasses using ADB. 
                  The AR glasses already have a camera sensor, which makes it simple to 
                  detect the image target and subsequently render the 3D object.</ItemDescription>
                  
        </span>
        </Grid>
        
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">demo results</span>
        </section>
            <ItemDescription>The final demo I created involves three QR codes and
                 associated house models to highlight enterprise use cases in 
                 architecture or real estate industries. In these cases, XR can
                  be useful because clients don't have to go to a site to view a house model,
                   which saves both time and money. 
                   Additionally, clients can view and interact with these house 
                   models independently and on a smaller scale through a personal lens. 
                   In a more complicated demo, clients might even be able to manipulate the house colors or materials.
               </ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={unity}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">AR capability comparison: glasses </span>
        </section>
            <ItemDescription>The image-tracking app I developed is compatible 
                with both glasses and smartphone, allowing for comparison of AR
                 capability between the two. In the demos below, you can see that 
                 in the demo on the Vuzix M4000 glasses (shown first), there is quite a 
                 bit of jitter and the 360 degree rotation is not as stable. 
                 The glasses have relatively low compute power and thus the
                  performance is not ideal.
                  </ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <div className="video-container">
        <iframe src="https://drive.google.com/file/d/1KkqnDvuFFsnN9_wiMIngKCeO4L6--6fM/preview" allow="autoplay" frameborder="0"  seamless=""></iframe>
        </div>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">vs. phone </span>
        </section>
            <ItemDescription>
                In contrast, the second demo is run on the Samsung Galaxy S21, 
                which is a new phone and has high processing power,
                 so you can see that the graphics are much sharper 
                 and the image tracking is much more exact. 
                 Importantly, this shows the value in offloading XR compute onto the cloud.
            </ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <div className="video-container">
        <iframe src="https://drive.google.com/file/d/12roZH4qpmFQxcGHtveoeNuNvJqkJ4mHV/preview" allow="autoplay" frameborder="0"  seamless=""></iframe>
        </div>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">XR ecosystem analysis </span>
        </section>
            <ItemDescription>
            In addition to creating a demo for AR glasses, 
            I conducted a SWOT analysis of the current XR market for
             both enterprise and consumers, and analyzed the weaknesses of current XR offerings
              from a human-computer interaction standpoint.
                <br></br><br></br>
            For the full SWOT analysis, please see the appendix in my final presentation linked above.
            </ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">key takeaways from analysis</span>
        </section>
            <ItemDescription>
            (a) Currently, XR helps standardize training/education + improves workflow efficiency
            <br></br><br></br>
            (b) Weaknesses include physical design, input mechanisms, and hardware
            <br></br><br></br>
            (c) For widespread user adoption, need to consider a lighter design and more intuitive user experience
            </ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={strength1}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={strength2}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={weak}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={opp1}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={opp2}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={threats}/>
          </Item>
          </span>
        </Grid>
    </Grid>
    </Box>
  </>
  );
}

export default Verizon;
