import React, { useRef, useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ripe from "../../images/ripe/ripe1.png";
import dialog from "../../images/dialog/dialog.png";
import choosie from "../../images/choosie/choosie.png";
import awareAI from "../../images/aware/awareai.png";
import sentry from "../../images/sentry/sentry.png";
import { Link, Outlet } from 'react-router-dom';

const ImgCenter = styled('img')({
  objectFit: 'cover',
  objectPosition: 'center',
  width: '100%',
  height: '100%',
  borderRadius: '5px',
});

const ImgLeft = styled('img')({
  objectFit: 'cover',
  objectPosition: 'left',
  width: '100%',
  height: '100%',
  borderRadius: '5px',
});

const ImgRight = styled('img')({
  objectFit: 'cover',
  objectPosition: 'right',
  width: '100%',
  height: '100%',
  borderRadius: '5px',
});

const Item = styled(Paper)(({ theme }) => ({
  height: '25rem',
  textAlign: 'center',
  margin: '0.3rem',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

const SideNav = styled('div')({
  position: 'fixed',
  top: '45%',
  right: '2rem',
  transform: 'translateY(-50%)',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  
  '@media (max-width: 768px)': {
    display: 'none',
  },
});

const TocHeader = styled('div')({
  fontSize: '0.7rem',
  fontWeight: '600',
  color: 'var(--black)',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  transform: 'rotate(-30deg)',
  textAlign: 'center',
  
  '@media (max-width: 768px)': {
    transform: 'none',
    fontSize: '0.8rem',
    marginBottom: '0.5rem',
  },
});

const NavLink = styled('div')(({ active }) => ({
  fontSize: '0.75rem',
  fontWeight: active ? '500' : '400',
  color: active ? 'var(--highlight)' : 'var(--grey)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  transform: 'rotate(-30deg)',
  
  '&:hover': {
    color: 'var(--highlight)',
    transform: 'rotate(-30deg) translateX(-3px)',
  },
}));

const SectionContainer = styled('div')({
  marginBottom: '1rem',
});

const SectionHeader = styled('span')({
  padding: '0',
  marginLeft: '0',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  transition: 'all 0.3s ease',
});

const SectionTitle = styled('h1')({
  fontSize: '1rem',
  color: 'var(--black)',
  fontWeight: '450',
  textAlign: 'left',
  opacity: 0.6,
  marginLeft: '1.3rem',
  letterSpacing: '0.3px',
  background: 'linear-gradient(135deg, var(--highlight-light) 20%, var(--white) 100%)',
  padding: '0.6rem 1.2rem',
  borderRadius: '5px',
  display: 'inline-block',
  transition: 'all 0.3s ease',
  
  '&:hover ~ .section-subtitle': {
    opacity: 1,
    transform: 'translateX(20px)',
  },
  
  '@media (max-width: 768px)': {
    fontSize: '1rem',
    padding: '0.5rem 1rem',
  },
});

const SectionSubtitle = styled('p')({
  fontSize: '0.8rem',
  color: 'var(--grey)',
  textAlign: 'left',
  fontWeight: '400',
  transition: 'all 0.3s ease',
  margin: 0,
  opacity: 0,
  transform: 'translateX(0)',
  
  '@media (max-width: 768px)': {
    fontSize: '0.75rem',
  },
});

// Staggered reveal component
const FadeInSection = ({ children, className = "", immediate = false }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    if (immediate) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      // For scroll-triggered animations, use intersection observer
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          // Only animate if we haven't animated yet and element is visible
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Once animated, stop observing this element
            observer.unobserve(entry.target);
          }
        });
      });
      
      const { current } = domRef;
      observer.observe(current);
      
      return () => observer.unobserve(current);
    }
  }, [hasAnimated, immediate]);

  return (
    <FadeInSectionStyled
      ref={domRef}
      className={hasAnimated ? 'visible' : ''}
    >
      {children}
    </FadeInSectionStyled>
  );
};

const ProjectGrid = styled(Box)({
  display: "grid",
  width: "100%",
  maxWidth: "100%",
  overflow: "hidden",
});

const ProjectContainer = styled('span')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  
  '& img': {
    transition: 'opacity 0.3s ease',
  },
  
  '&:hover img': {
    opacity: 0.7,
  },
});

const ProjectTitle = styled('p')({
  fontSize: '0.8rem',
  fontWeight: 500,
  color: 'var(--grey)',
  margin: 0,
  lineHeight: 1.2,
  marginTop: '0.4rem',
  marginLeft: '0.3rem',
  textAlign: 'left',
  position: 'relative',
  zIndex: 1,
});

// Fade-in animation styles
const FadeInSectionStyled = styled('div')({
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'all 0.8s ease',
  marginBottom: '10px',
  
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  
  '&:nth-child(1)': { transitionDelay: '0.3s' },
  '&:nth-child(2)': { transitionDelay: '0.5s' },
  '&:nth-child(3)': { transitionDelay: '0.7s' },
  '&:nth-child(4)': { transitionDelay: '0.9s' },
});

function Project() {
  const developmentRef = useRef(null);
  const designRef = useRef(null);
  const [activeSection, setActiveSection] = useState('dev');

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleScroll = () => {
    const developmentTop = developmentRef.current?.offsetTop || 0;
    const designTop = designRef.current?.offsetTop || 0;
    const scrollY = window.scrollY + 300; 

    if (scrollY >= designTop) {
      setActiveSection('design');
    } else if (scrollY >= developmentTop) {
      setActiveSection('dev');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Responsive Navigation */}
      <SideNav>
        <TocHeader>Table of Contents</TocHeader>
        <NavLink 
          active={activeSection === 'dev'} 
          onClick={() => scrollToSection(developmentRef)}
        >
          i. development
        </NavLink>
        <NavLink 
          active={activeSection === 'design'} 
          onClick={() => scrollToSection(designRef)}
        >
          ii. design & research
        </NavLink>
      </SideNav>

      {/* Section 1 - dev */}
      <SectionContainer ref={developmentRef}>
        <SectionHeader>
          <SectionTitle>development</SectionTitle>
          <SectionSubtitle className="section-subtitle">code-based work</SectionSubtitle>
        </SectionHeader>
        
        <ProjectGrid>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden', padding: '0 0.5rem 0 1rem' }}>
          <Grid item xs={4} sm={8} md={6}>
              <FadeInSection immediate={true}>
                <ProjectContainer>
                  <Item>
                    <Link to="/sentry" className="project-image-link">
                      <ImgRight src={sentry}/>
                    </Link>
                  </Item>
                  <ProjectTitle>sentry - full stack development</ProjectTitle>
                </ProjectContainer>
              </FadeInSection>
            </Grid>
            <Grid item xs={4} sm={8} md={6}>
              <FadeInSection immediate={true}>
                <ProjectContainer>
                  <Item>
                    <Link to="/schema" className="project-image-link">
                      <ImgRight src={dialog}/>
                    </Link>
                  </Item>
                  <ProjectTitle>dialog schema builder - full stack development</ProjectTitle>
                </ProjectContainer>
              </FadeInSection>
            </Grid>
          </Grid>
        </ProjectGrid>
      </SectionContainer>

      {/* Section 2 - design */}
      <SectionContainer ref={designRef}>
        <SectionHeader>
          <SectionTitle>design & research</SectionTitle>
          <SectionSubtitle className="section-subtitle">creative & exploratory work</SectionSubtitle>
        </SectionHeader>
        
        <ProjectGrid>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden', padding: '0 0.5rem 0 1rem' }}>
            <Grid item xs={4} sm={8} md={6}>
              <FadeInSection>
                <ProjectContainer>
                  <Item>
                    <Link to="/choosie" className="project-image-link">
                      <ImgLeft src={choosie}/>
                    </Link>
                  </Item>
                  <ProjectTitle>choosie - digital startup pitch</ProjectTitle>
                </ProjectContainer>
              </FadeInSection>
            </Grid>
            <Grid item xs={4} sm={8} md={6}>
              <FadeInSection>
                <ProjectContainer>
                  <Item>
                    <Link to="/awareai" className="project-image-link">
                      <ImgRight src={awareAI}/>
                    </Link>
                  </Item>
                  <ProjectTitle>aware.ai - startup brand identity</ProjectTitle>
                </ProjectContainer>
              </FadeInSection>
            </Grid>
            <Grid item xs={4} sm={8} md={6}>
              <FadeInSection>
                <ProjectContainer>
                  <Item>
                    <Link to="/ripe" className="project-image-link">
                      <ImgCenter src={ripe}/>
                    </Link>
                  </Item>
                  <ProjectTitle>ripe! - app prototype</ProjectTitle>
                </ProjectContainer>
              </FadeInSection>
            </Grid>
          </Grid>
        </ProjectGrid>
      </SectionContainer>

      <Outlet />
    </>
  );
}

export default Project;
