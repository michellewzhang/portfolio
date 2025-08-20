import React from "react";
import "./Choosie.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import choosie from "../../images/choosie.png";
import choosie_problem from "../../images/choosie_problem.png";
import choosie_set from "../../images/choosie_set.png";
import choosie_stat1 from "../../images/choosie_stat1.png";
import choosie_stat2 from "../../images/choosie_stat2.png";
import choosie_interview from "../../images/choosie_interview.png";
import choosie_insight from "../../images/choosie_insight.png";
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

  const FinalItemDescription = styled(Paper)(({ theme }) => ({
    margin: '0.3rem',
    marginTop: '0rem',
    color: 'var(--black)',
    boxShadow: 'none',
    textAlign: 'left',
    paddingTop: '3rem',
    paddingLeft: '15vw',
    paddingRight: '15vw',
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
function Choosie() {
  return (
    <>
    <ProjectHeader title="choosie" description="digital startup pitch" details="group recommendation engine for allergen-friendly restaurants"/>
    <Box sx={gridContainer}>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <ProjectSpecs role="product manager, customer researcher, concept video creator" 
                        skills="user + market research, lean business methods, pitching, creating personas" 
                        tools=""/>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <ItemText>
            <p> Choosie is the product of a group project I worked on while taking 05-470: 
                Digital Service Innovation in Spring 2021. 
                In 8 weeks, we conceived and refined a digital service startup, 
                 conducted customer discovery and other market research, 
                 and eventually pitched our startup to investors at the end of the semester (where we placed second!)
                <br></br> <br></br>
                My primary role in the group was product manager: I helped my team stay accountable,
                 and also led weekly meetings. In these meetings, 
                I ensured that each team member understood the deliverable requirements and 
                delegated tasks according to the members' strengths. In addition, 
                I helped direct the team in revising our vision based on feedback 
                we received from peers, professors, and other guests after numerous critiques.<br></br><br></br>
            </p>
            <div className="about-links-container">
            <a
							href="https://drive.google.com/file/d/1cKiYJfFLZa99bQpKCNVmPDIyv4VGbZHp/view"
							target="_blank" rel="noopener noreferrer"><span className="about-link">final pitch slide deck </span>
            </a>
            </div>
          </ItemText>
          </span>
        </Grid>
        <ImgLarge src={choosie}/>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '3rem', paddingBottom: '0rem'}}>
            <span className="header-title">problem space</span>
        </section>
            <ItemDescription>Within a group, deciding on a restaurant is challenging 
                because people may have different allergies, 
                dietary restrictions, and cuisine preferences. 
                In addition, each group member may have differing budget and distance-related needs. 
                And lastly, some people may not feel comfortable voicing their opinions aloud, 
                which occurs sometimes in workplaces as a result of social dynamics.
                <br></br><br></br>
                Our digital service startup aims to address this problem
                 space by providing efficient restaurant recommendations for groups, 
                 while simultaneously benefiting restaurants by providing them with potential 
                 food-allergic customers who would otherwise not dine there due to safety concerns.</ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">mvp</span>
        </section>
            <ItemDescription>We decided to start small by initially providing the
                 food recommendation service to users in the Pittsburgh area. 
                <br></br><br></br>
                 To validate our MVP, we devised a short four-step process
                  that would simulate the most basic features of Choosie: user input including
                  allergies, diets, and budget; algorithmic selection of recommendations,
                  sending recommendations back to users, and asking users for feedback on the process
                  and quality of recommendations.</ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={choosie_problem}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={choosie_stat1}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={choosie_stat2}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={choosie_interview}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">market research </span>
        </section>
            <ItemDescription>To validate our understanding of the problem space, 
                our team conducted extensive market research to understand the environmental 
                factors that would provide opportunities for Choosie to create value for consumers.
                <br></br><br></br>
                We used lean business tools like PESTLE (political, economic, social, technological, legal,
                 and environmental) analysis, as well as SET + 
                 Product Opportunity Gap (POG) analysis. 
                 We also defined stakeholders and created a value flow chart to help us better 
                 understand the parties involved and how value could be exchanged and co-created between parties.</ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">customer discovery</span>
        </section>
            <ItemDescription>In addition to conducting market research and analyzing third-party data,
                 our team conducted a series of customer interviews with potential target users.
                  We conducted structured individual interviews, in which we used a directed
                   storytelling technique.
                <br></br><br></br>
                We also conducted group interviews and contextual observation to 
                 observe group decision-making behavior.
                 From these interviews, we narrowed down the target users and 
                 key stakeholders involved.
                 </ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={choosie_set}/>
          </Item>
          </span>
        </Grid>

        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={choosie_insight}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>

        </Grid>
    </Grid>
    </Box>
    <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '3rem'}}>
            <span className="header-title">feedback from investors</span>
        </section>
            <FinalItemDescription>During our discussions with 9 potential investors,
                 we learned that a large proportion of them actually have dietary 
                 restrictions, allergies, or otherwise strongly resonated 
                 with the problem space we were targeting. 
                 It was exciting to see the value that Choosie could hold in consumers'
                  lives and to be able to validate our stakeholder value.
                 <br></br><br></br>
                 A majority of our feedback surrounded the restaurant side of the partnership; our investors asked 
                 us to really narrow down how we would get restaurant menus and parse it efficiently; 
                 how we would build trust with food-allergic 
                 users and how we'd deal with liability if the allergens were tagged incorrectly. <br></br><br></br>
        </FinalItemDescription>
    </span>
    <section style={{textAlign: 'center', paddingTop: '3rem', paddingBottom: '3rem'}}>
            <span className="header-title">concept video</span>
        </section>
    <div className="video-container">
        <iframe title="choosie_video" src="https://drive.google.com/file/d/11M-NxvHEifWwNrIgz3mdHEFiHnrmZINR/preview" frameborder="0" allow="autoplay" seamless=""></iframe>
    </div>
  </>
  );
}

export default Choosie;
