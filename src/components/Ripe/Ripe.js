import React from "react";
import "./Ripe.css";
import ripe_hero from "../../images/ripe_hero.png";
import ripe1 from "../../images/ripe1.png";
import ripe2 from "../../images/ripe2.png";
import ripe3 from "../../images/ripe3.png";
import ripe4 from "../../images/ripe4.png";
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectSpecs from '../ProjectSpecs/ProjectSpecs';
import {
  ProjectPage,
  ProjectOverview,
  ImageGallery,
  LargeImage,
  BodyText
} from '../ProjectTemplate/ProjectTemplate';

function Ripe() {
  const header = (
    <ProjectHeader 
      title="ripe!" 
      description="app prototype" 
      details="eliminating food waste by helping users build smarter grocery lists"
    />
  );

  const specs = (
    <ProjectSpecs 
      role="UX designer" 
      skills="user interface design, rapid prototyping" 
      tools="Figma"
    />
  );

  const description = (
    <>
    <BodyText>
      ripe! is an app designed to decrease the amount of food waste produced by the everyday person. 
      Users keep track of their grocery lists in the app and record what food they've thrown out, which subsequently helps the app
      build a smarter, more personalized, grocery list for their next trip. 
    </BodyText>
    <BodyText>ripe! also helps users understand how to store food properly, which decreases the possibility that consumers will need to throw food out
    due to improper storage. Users also have the ability to search for a nearby food pantry 
    to donate unused food at the end of the period.
    </BodyText>
    <BodyText>I created this app concept during a hackathon focused on environmental sustainability.</BodyText>
    </>  
    );

  const prototypeImages = [
    { src: ripe1, alt: "Ripe app prototype screen 1" },
    { src: ripe2, alt: "Ripe app prototype screen 2" },
    { src: ripe3, alt: "Ripe app prototype screen 3" },
    { src: ripe4, alt: "Ripe app prototype screen 4" },
  ];

  return (
    <ProjectPage header={header}>
      <ProjectOverview 
        specs={specs}
        description={description}
      />

      <LargeImage 
        src={ripe_hero}
        alt="Ripe app concept"
      />

      <ImageGallery 
        title="screens"
        images={prototypeImages}
        columns={2}
      />
    </ProjectPage>
  );
}

export default Ripe;
