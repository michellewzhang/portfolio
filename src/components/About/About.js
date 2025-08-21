import "./About.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Michelle from "../../images/michelle.png";
import { useState, useEffect, useRef } from 'react';
import arrow from "../../images/arrow_about.png";

const Img = styled('img')({
  maxHeight: '40rem',
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  objectFit: 'contain',
  borderRadius: '5px',
  top: '50%',
  left: '50%',
});

const ItemLeft = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(5),
  marginBottom: 0,
  paddingTop: 0,
  paddingBottom: 0,
  textAlign: 'center',
  boxShadow: 'none',
}));

const ItemRight = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(8),
  paddingTop: theme.spacing(2),
  paddingLeft: theme.spacing(8),
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

// Staggered reveal component
const FadeInSection = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    
    const { current } = domRef;
    observer.observe(current);
    
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
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
                <FadeInSection>
                  <h1>  
                    <span className="about-title">
                      hi, this is <TypingAnimation text="michelle!" speed={120} className="typing-text" />
                    </span>
                  </h1>
                </FadeInSection>

                <FadeInSection>
                  <div className="about-description-small"> 
                   ✣ full stack software engineer at <a className="highlight-link" href="https://sentry.io/welcome/" target="_blank" rel="noopener noreferrer">sentry</a>
                   <br></br>
                   ✣ based in sf, raised in ny, born in pa!
                  </div>
                </FadeInSection>

                <FadeInSection>
                  <div className="about-description"> 
                    i'm a developer & aspiring product designer based in san francisco. 
                    i graduated from <a className="highlight-link" href="https://www.cs.cmu.edu/" target="_blank" rel="noopener noreferrer">
                    carnegie mellon</a> with a bachelors in computer science, a concentration in human-computer interaction,
                    and a minor in business administration.
                  </div>
                </FadeInSection>

                <FadeInSection>
                  <div className="about-description"> 
                    from my interdisciplinary background, i'm fascinated by the convergence of design
                    and innovative computing, and how we can use this harmonization for positive social impact
                    and human connection. i love working in cross-functional teams and mentoring others when i can.
                  </div>
                </FadeInSection>

                <FadeInSection>
                  <div className="about-description"> 
                    i'm a fan of trying weird recipes and making a mess in my kitchen, 
                    chasing my next running pr, making elaborate charcuterie boards for gatherings i host,
                    and capturing moments on camera. on the weekends, i also work as an 
                    event facilitator at a <a href="https://thepuppysphere.com/" className="highlight-link" target="_blank" rel="noopener noreferrer">puppy yoga studio</a>!
                  </div>
                </FadeInSection>

                <FadeInSection>
                  <div className="connect-title">let's connect!<img src={arrow} alt="arrow" className="connect-arrow" /></div>
                  <div>
                    <a
                        href="https://drive.google.com/file/d/1Z4FkAbLTzxAMG3K5KDyqJPRlqfhD0Q2i/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer"><span>resume</span>
                    </a>
                    <span> &nbsp; / &nbsp; </span>
                    <a
                        href="mailto:mwzhang@alumni.cmu.edu"
                        target="_blank" rel="noopener noreferrer"><span>say hi</span>
                    </a>
                    <span> &nbsp; / &nbsp; </span>
                    <a
                        href="https://www.linkedin.com/in/michellezhang1015/"
                        target="_blank" rel="noopener noreferrer"><span>linkedin</span>
                    </a>
                  </div>
                </FadeInSection>
              </ItemRight>
            </Grid>
        </Grid>
    </Box>
    </>
    );
  }
  