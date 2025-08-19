import "./About.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Michelle from "../../images/michelle.jpg";
import { useState, useEffect } from 'react';

const Img = styled('img')({
  height:'30rem',
  paddingTop: '0rem',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
});

const ItemLeft = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(5),
  marginBottom: 0,
  paddingBottom: 0,
  textAlign: 'center',
  boxShadow: 'none',
}));

const ItemRight = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(8),
  textAlign: 'left',
  boxShadow: 'none',
  justifyContent: 'center',
  alignItems: 'center',
}));

// Typing animation component
const TypingAnimation = ({ text, speed = 150, className = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return <span className={className}>{displayText}</span>;
};


export default function About() {
    return (
      <>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={8} md={6}>
            <ItemLeft>
            <Img src={Michelle}/>
            </ItemLeft>
          </Grid>
          <Grid item xs={4} sm={8} md={6}>
            <ItemRight>
            <h1>  
              <span className="header-about-title">
                hi, this is <TypingAnimation text="michelle!" speed={120} className="typing-text" />
              </span>
            </h1>
            <div className="header-about-description"> 
          i'm a student at carnegie mellon, studying <b>computer science </b>
          with a concentration in <b>human-computer interaction </b> and minor in business administration.
          <br></br><br></br>
          i'm fascinated by the convergence of design and innovative computing, 
          and how we can use this harmonization for positive social impact.
          i love working in interdisciplinary teams!
          <br></br><br></br>
          i'm a fan of trying weird recipes and making a mess in my kitchen, 
          hoarding small plants, making elaborate cheeseboards for picnics,
          and capturing moments on video.</div>
          <br></br><br></br>
          <div className="about-links-container">
          <a
							href="https://drive.google.com/file/d/1kVJnEJxXGIqruOmKy7nTE9uqBL7spPap/view?usp=sharing"
							target="_blank" rel="noopener noreferrer"><span className="about-link">resume </span>
          </a>
          <span className="header-about-description"> &nbsp; / &nbsp; </span>
          <a
							href="mailto:mwzhang@andrew.cmu.edu"
							target="_blank" rel="noopener noreferrer"><span className="about-link">email </span>
          </a>
          <span className="header-about-description"> &nbsp; / &nbsp; </span>
          <a
							href="https://www.linkedin.com/in/michellezhang1015/"
							target="_blank" rel="noopener noreferrer"><span className="about-link">linkedin </span>
          </a>
          </div>
            </ItemRight>
          </Grid>
      </Grid>
    </Box>
    </>
    );
  }
  