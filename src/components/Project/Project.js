import React, { useRef, useState, useEffect } from "react";
import "./Project.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ripe from "../../images/ripe.png";
import dialog from "../../images/dialog.png";
import choosie from "../../images/choosie.png";
import awareAI from "../../images/awareai.png";
import { Link, Outlet } from 'react-router-dom';

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
    right: '1rem',
  },
});

const TocHeader = styled('div')({
  fontSize: '0.7rem',
  fontWeight: '600',
  color: 'rgba(0,0,0,0.6)',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  transform: 'rotate(-30deg)',
  textAlign: 'center',
});

const NavLink = styled('div')(({ active }) => ({
  fontSize: '0.75rem',
  fontWeight: active ? '500' : '400',
  color: active ? 'var(--highlight)' : 'rgba(0,0,0,0.4)',
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
  paddingTop: '2rem',
});

const FirstSectionContainer = styled('div')({
  marginBottom: '1rem',
});

const SectionHeader = styled('span')({
  paddingLeft: '0',
  marginLeft: '0',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
});

const SectionTitle = styled('h2')({
  fontSize: '1.1rem',
  fontWeight: '500',
  color: 'var(--black)',
  textAlign: 'left',
  opacity: 0.7,
  marginLeft: '2rem',
  letterSpacing: '0.3px',
  backgroundColor: 'rgba(255, 105, 92, 0.1)',
  padding: '0.4rem 0.8rem',
  borderRadius: '16px',
  display: 'inline-block',
  
  '@media (max-width: 768px)': {
    fontSize: '1rem',
  },
});

const SectionSubtitle = styled('p')({
  fontSize: '0.8rem',
  color: 'var(--black)',
  margin: '0.4rem 0 0 0',
  opacity: 0.5,
  textAlign: 'left',
  fontWeight: '400',
  letterSpacing: '0.2px',
  
  '@media (max-width: 768px)': {
    fontSize: '0.75rem',
  },
});

const ProjectGrid = styled(Box)({
  display: "grid",
  gridAutoColumns: "1fr",
  gridAutoFlow: "column",
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
      {/* Sticky Side Navigation */}
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
      <FirstSectionContainer ref={developmentRef}>
        <SectionHeader>
          <SectionTitle>development</SectionTitle>
          <SectionSubtitle>code-based work</SectionSubtitle>
        </SectionHeader>
        
        <ProjectGrid>
          <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={4} md={6}>
              <span className="proj-container">
                <Item>
                  <Img src={dialog}/>
                  <Link to="/schema">
                    <span className="overlay">
                      <span className="overlay-text-title">dialog schema builder
                        <div className="overlay-text-description">full stack development</div>
                      </span>
                    </span>
                  </Link>
                </Item>
              </span>
            </Grid>
          </Grid>
        </ProjectGrid>
      </FirstSectionContainer>

      {/* Section 2 - design */}
      <SectionContainer ref={designRef}>
        <SectionHeader>
          <SectionTitle>design & research</SectionTitle>
          <SectionSubtitle>creative & exploratory work</SectionSubtitle>
        </SectionHeader>
        
        <ProjectGrid>
          <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={4} md={6}>
              <span className="proj-container">
                <Item>
                  <Img src={choosie}/>
                  <Link to="/choosie">
                    <span className="overlay">
                      <span className="overlay-text-title">choosie
                        <div className="overlay-text-description">digital startup pitch</div>
                      </span>
                    </span>
                  </Link>
                </Item>
              </span>
            </Grid>
            <Grid item xs={4} sm={4} md={6}>
              <span className="proj-container">
                <Item>
                  <Img src={ripe}/>
                  <Link to="/ripe">
                    <span className="overlay">
                      <span className="overlay-text-title">ripe!
                        <div className="overlay-text-description">app prototype</div>
                      </span>
                    </span>
                  </Link>
                </Item>
              </span>
            </Grid>
            <Grid item xs={4} sm={4} md={6}>
              <span className="proj-container">
                <Item>
                  <Img src={awareAI}/>
                  <Link to="/awareai">
                    <span className="overlay">
                      <span className="overlay-text-title">aware.ai
                        <div className="overlay-text-description">startup brand identity</div>
                      </span>
                    </span>
                  </Link>
                </Item>
              </span>
            </Grid>
          </Grid>
        </ProjectGrid>
      </SectionContainer>

      <Outlet />
    </>
  );
}

export default Project;
