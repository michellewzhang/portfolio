import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const ProjectContainer = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
});

export const Section = styled(Box)({
  marginBottom: '3rem',
});

export const SectionTitle = styled('h2')({
  fontSize: '1.4rem',
  fontWeight: '600',
  color: 'var(--black)',
  margin: '0 0 0.8rem 0',
  textAlign: 'left',
  letterSpacing: '-0.2px',
  lineHeight: '1.2',
});

export const BodyText = styled('p')({
  fontSize: '0.9rem',
  lineHeight: '1.5',
  color: 'var(--black)',
  margin: '0 0 1rem 0',
  opacity: '0.9',
  textAlign: 'left',
});

export const ProjectImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
  borderRadius: '0',
});

export const HeroImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
  marginBottom: '0.5rem',
});

export const LinksSection = styled(Box)({
  marginTop: '1.5rem',
  textAlign: 'left',
});

export const ProjectGrid = ({ children, spacing = 3 }) => (
  <ProjectContainer>
    <Grid container spacing={spacing}>
      {children}
    </Grid>
  </ProjectContainer>
);

export const HalfWidth = ({ children }) => (
  <Grid item xs={12} lg={6}>
    {children}
  </Grid>
);

export const FullWidth = ({ children }) => (
  <Grid item xs={12}>
    {children}
  </Grid>
);

export const ProjectPage = ({ 
  header, 
  children, 
  spacing = 3 
}) => (
  <>
    {header}
    <ProjectGrid spacing={spacing}>
      {children}
    </ProjectGrid>
  </>
);

export const ProjectOverview = ({ specs, description, links }) => (
  <>
    <HalfWidth>
      {specs}
    </HalfWidth>
    
    <HalfWidth>
      <Box sx={{ 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        minHeight: '200px',
        padding: '2rem',
        margin: '1rem'
      }}>
        <Box sx={{ textAlign: 'center' }}>
          {description}
        </Box>
        {links && (
          <Box sx={{ textAlign: 'left', width: '100%' }}>
            <LinksSection>
              {links}
            </LinksSection>
          </Box>
        )}
      </Box>
    </HalfWidth>
  </>
);

export const TextSection = ({ title, content }) => (
  <FullWidth>
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      {content}
    </Section>
  </FullWidth>
);

export const ImageGallery = ({ images, columns = 2, title }) => (
  <FullWidth>
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} lg={12 / columns} key={index}>
              <ProjectImage 
                src={image.src} 
                alt={image.alt || `Project image ${index + 1}`} 
              />
          </Grid>
        ))}
      </Grid>
    </Section>
  </FullWidth>
);

export const LargeImage = ({ src, alt, caption, title }) => (
  <FullWidth>
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
        <HeroImage src={src} alt={alt} />
        {caption && (
          <Box sx={{ 
            textAlign: 'left', 
            opacity: 0.7,
            fontSize: '0.85rem',
            marginTop: '0.5rem'
          }}>
            {caption}
          </Box>
        )}
    </Section>
  </FullWidth>
);

export const TextImageSection = ({ 
  title, 
  content, 
  image, 
  imagePosition = 'right' 
}) => {
  const textContent = (
    <Box>
      {title && <SectionTitle>{title}</SectionTitle>}
      {content}
    </Box>
  );

  const imageContent = (
      <ProjectImage src={image.src} alt={image.alt} />
  );

  return (
    <FullWidth>
      <Section>
        <Grid container spacing={4} alignItems="center">
          {imagePosition === 'left' ? (
            <>
              <Grid item xs={12} lg={6}>
                {imageContent}
              </Grid>
              <Grid item xs={12} lg={6}>
                {textContent}
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} lg={6}>
                {textContent}
              </Grid>
              <Grid item xs={12} lg={6}>
                {imageContent}
              </Grid>
            </>
          )}
        </Grid>
      </Section>
    </FullWidth>
  );
};

export const ProcessSection = ({ title, steps }) => (
  <FullWidth>
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      <Grid container spacing={3}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '0.8rem' 
              }}>
                <Box sx={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--highlight)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginRight: '0.8rem'
                }}>
                  {index + 1}
                </Box>
                <Box sx={{ 
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  color: 'var(--black)'
                }}>
                  {step.title}
                </Box>
              </Box>
              {step.content}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  </FullWidth>
);

// ===== RESPONSIVE BREAKPOINTS =====
// xs: 0px+ (mobile)
// sm: 600px+ (tablet)
// md: 900px+ (desktop)
// lg: 1200px+ (large desktop)

// AVAILABLE COMPONENTS:

// 1. ProjectPage - Main wrapper
// 2. ProjectOverview - Specs + description + links
// 3. TextSection - Title + subtitle + content
// 4. ImageGallery - Clean image grids
// 5. LargeImage - Hero images with captions
// 6. TextImageSection - Text + image side by side
// 7. ProcessSection - Numbered step process
// 8. Grid Components: HalfWidth, FullWidth