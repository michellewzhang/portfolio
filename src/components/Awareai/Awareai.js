import React from "react";
import awareai from "../../images/aware/awareai.png";
import aware1 from "../../images/aware/aware1.png";
import aware2 from "../../images/aware/aware2.png";
import aware3 from "../../images/aware/aware3.png";
import aware4 from "../../images/aware/aware4.png";
import aware5 from "../../images/aware/aware5.png";
import aware6 from "../../images/aware/aware6.png";
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectSpecs from '../ProjectSpecs/ProjectSpecs';
import {
  ProjectPage,
  ProjectOverview,
  TextSection,
  ImageGallery,
  LargeImage,
  BodyText
} from '../ProjectTemplate/ProjectTemplate';

function Aware() {
  const header = (
    <ProjectHeader 
      title="aware.ai" 
      description="startup brand identity" 
      details="mobile app design and brand identity curation for an artificial intelligence startup"
    />
  );

  const specs = (
    <ProjectSpecs 
      role="product specialist, customer researcher, UI designer" 
      skills="user research, competitor analysis, prototyping, storyboarding" 
      tools="Figma"
    />
  );

  const description = (
    <>
      <BodyText>
        <a href="https://www.getaware.ai/" target="_blank" rel="noopener noreferrer" className="highlight-link">
        Aware.ai</a> is a Pittsburgh-based AI 
        startup that aims to address the maternal mortality 
        issue in the US. The virtual pregnancy assistant leverages AI 
        to connect new and expectant mothers to vital community and health resources before, 
        during, and after pregnancy while providing personalized and actionable maternal health education.
      </BodyText>
      <BodyText>
        As a product specialist for Aware.ai in its early stages, 
        I worked with founder <a href="https://www.linkedin.com/in/davidajoku/" target="_blank" rel="noopener noreferrer" className="highlight-link">
         David Ajoku </a> to conduct extensive user research and competitor analysis; 
        in addition, I directed the brand vision by developing the mobile 
        app prototype UI, and designing the website UI.
      </BodyText>
    </>
  );

  const prototypeImages = [
    { src: aware1, alt: "Aware.AI mobile app prototype 1" },
    { src: aware3, alt: "Aware.AI mobile app prototype 3" },
    { src: aware2, alt: "Aware.AI mobile app prototype 2" },
    { src: aware4, alt: "Aware.AI mobile app prototype 4" },
  ];

  const prototypeImages2 = [
    { src: aware6, alt: "Aware.AI research insights" },
    { src: aware5, alt: "Aware.AI competitor analysis" },
  ];

  return (
    <ProjectPage header={header}>
      <ProjectOverview 
        specs={specs}
        description={description}
      />

      <LargeImage 
        src={awareai}
        alt="Aware.AI startup concept"
      />

      <TextSection 
        title="customer discovery"
        content={
          <BodyText>
            To explore our problem space and better understand
             how we can serve our target audience (new and expectant mothers),
              we conducted many interviews over a period of several months. 
              Along with interviewing mothers, we also interviewed healthcare 
              experts for additional insights on our problem space. 
              The key issues we wanted to explore included barriers with current healthcare providers,
              problems with existing solutions in the market, and the desirability of community.
          </BodyText>
        }
      />

      <TextSection 
        title="competitor analysis"
        content={
          <BodyText>
            The current market of pregnancy apps is saturated, 
            so it was important to first distinguish what made Aware.ai  worthy of customer investment. 
            I explored sixteen existing 
            pregnancy apps and compared their 
            mission to that of Aware.ai. 
            At the end, I compiled a list of emerging themes that Aware.ai 
            could take inspiration from, as well as ways that Aware.ai could differentiate itself from existing solutions.
          </BodyText>
        }
      />

      <ImageGallery 
        images={prototypeImages2}
        columns={1}
      />

      <TextSection 
        title="mobile app prototyping"
        content={
          <BodyText>
            Using the insights gathered from research, I began synthesizing our users' 
            core needs and brainstorming ways we could address 
            the problems we observed through design principles.
            We then translated design principles into functional elements
             (i.e. how the user would be able to achieve the desired solution). 
            I created a mobile app prototype with elements that showcased these desired core features.
            Features designed include a resource hub, community groups and message boards, questionnaires,
            educational and health-related resources, as well 
             as push notifications.
          </BodyText>
        }
      />

      <TextSection 
        title="website + brand identity"
        content={
          <>
            <BodyText>
              In addition to creating the mobile app features, I designed the website UI
              for the startup, which included a mailing list and more information
              about the company mission.
              Throughout this process, I had to thoughtfully curate a brand vision.
               When considering the target audience, I decided that it was important to me for Aware.ai to exude a friendly, approachable personality.
               I communicated this idea through a pastel color palette,
                soft edges, and an intuitive, uncluttered interface (using familiar design patterns so users feel at ease) across all platforms.
            </BodyText>
          </>
        }
      />

      <ImageGallery 
        title="mobile app prototype"
        images={prototypeImages}
        columns={2}
      />
    </ProjectPage>
  );
}

export default Aware;
