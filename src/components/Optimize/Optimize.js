import React from "react";
import "./Optimize.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import prototype0 from "../../images/prototype0.gif";
import prototype1 from "../../images/prototype1.gif";
import prototype2 from "../../images/prototype2.gif";
import prototype3 from "../../images/prototype3.gif";
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
function Optimize() {
  return (
    <>
    <ProjectHeader title="optimized object manipulation" description="creative coding" details="developing an improved object manipulation design"/>
    <Box sx={gridContainer}>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <ProjectSpecs role="front end developer, user researcher" 
                        skills="user testing, rapid prototyping" 
                        tools="Processing.js"/>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <ItemText>
            <p>I worked on this group project while taking 05-392: Designing Human Centered Software. This project
                involved improving upon a poorly designed scaffold program, where the goal was to have
                the user use only a laptop trackpad to manipulate an object 4 ways (translating, rotating, and shrinking/enlarging) to
                 match a target object location, orientation, and size as fast as possible, with
                 minimal errors.
                <br></br> <br></br>
                This project involved conducting several rounds of user testing to discover what sorts of visual cues and physical manipulation tactics 
                felt intuitive to people, since speed was a goal. After each round of testing, we developed a new prototype based
                on our analysis of user feedback. 
                <br></br><br></br>
                The entire project used Processing.js, and we were limited by many design restrictions, as well as a deadline of two weeks.
            </p>
          </ItemText>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '3rem', paddingBottom: '0rem'}}>
            <span className="header-title">issues with the scaffold design</span>
        </section>
            <ItemDescription>The scaffold design we were given initially was very poorly designed; buttons
                for manipulation were placed in the corners of the screen, and there was one button for each
                type of manipulation, so eight buttons total (e.g. two button for size, 
                two for orientation, and four for X/Y position). In
                order to manipulate the object, the user had to click and hold down on a specific button.
                This was obviously very slow.
                  <br></br><br></br>
                  Another problem was the lack of a correctness indicator. At any given point, the user 
                  had no idea whether they had successfully manipulated the object to match the target. 
                  If the object was close to the target, but not exact, it would still count as an error.
                  Thus, when testing the initial design, errors were frequent.
                  </ItemDescription>
        </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={prototype0}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">first prototype</span>
        </section>
            <ItemDescription>The first issue we addressed
                was optimizing translation. Instead of having the user hold down a button to move the object,
                we allowed the user to drag and drop the object anywhere on the screen.
                <br></br><br></br>
                We also added correctness indiciators for each degree of freedom, which
                turned green when the user was correct in that aspect. When all three aspects
                were correct, the object turned green as well. Our testers expressed that this visual
                feedback was extremely helpful.
                <br></br><br></br>
                Per round, average time decreased by 19 seconds.
                </ItemDescription>
        </span>
        </Grid>

        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={prototype1}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">second prototype</span>
        </section>
            <ItemDescription>We then optimized rotation by allowing users to click and drag the box to rotate.
                We also added an arrow extending from the object and pointing towards the target to visually guide users towards the target,
                since previous rounds of testing indicated that it was often difficult to see where to go next.
                <br></br><br></br>
                Although we weren't satisfied with the size buttons, we decided to save that optimization for the next prototype.
                We did, however, move the buttons closer together so that the time to switch between the two would decrease.
                <br></br><br></br>
                From prototype 1, average time per round decreased by 5 seconds.

                </ItemDescription>
        </span>
        </Grid>

        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={prototype2}/>
          </Item>
          </span>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container-subheading">
        <section style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '0rem'}}>
            <span className="header-title">final prototype</span>
        </section>
            <ItemDescription>We optimized the manipulation of size by grouping it
                with the rotation manipulation. Users could drag the object to rotate and resize at the same time.
                Allowing users to manipulate two degrees of freedom at once drastically increased efficiency.
                <br></br><br></br>
                We were also unsatisfied with the position of the submit button, since users were wasting time
                navigating to the top of the screen to submit. We therefore moved the submit button onto the 
                object itself; the button would only appear if the user was correct in all three aspects.
                <br></br><br></br>
                From prototype 2, average time per round decreased 3 seconds. This
                was a 75% decrease from the original design!
                </ItemDescription>
        </span>
        </Grid>

        <Grid item xs={4} sm={8} md={6}>
        <span className="proj-container">
          <Item>
            <Img src={prototype3}/>
          </Item>
          </span>
        </Grid>
    </Grid>
    </Box>
  </>
  );
}

export default Optimize;
