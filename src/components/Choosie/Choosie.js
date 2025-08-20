import React from "react";
import choosie from "../../images/choosie.png";
import choosie_problem from "../../images/choosie_problem.png";
import choosie_set from "../../images/choosie_set.png";
import choosie_stat1 from "../../images/choosie_stat1.png";
import choosie_stat2 from "../../images/choosie_stat2.png";
import choosie_interview from "../../images/choosie_interview.png";
import choosie_prototype_1 from "../../images/choosie_prototype_1.png";
import choosie_prototype_2 from "../../images/choosie_prototype_2.png";
import choosie_insight from "../../images/choosie_insight.png";
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

function Choosie() {
  const header = (
    <ProjectHeader 
      title="choosie" 
      description="digital startup pitch" 
      details="group recommendation engine for allergen-friendly restaurants"
    />
  );

  const specs = (
    <ProjectSpecs 
      role="product manager, customer researcher, concept video creator" 
      skills="user + market research, lean business methods, pitching, creating personas" 
      tools="Figma"
    />
  );

  const description = (
    <>
      <BodyText>
        Choosie is the product of a group project I worked on while taking a Digital Service Innovation course.
        In 8 weeks, we conceived and refined a digital service startup, 
         conducted customer discovery and other market research, 
         and eventually pitched our startup to investors at the end of the semester (where we placed second!)
      </BodyText>
      <BodyText>
        My primary role in the group was product manager: I helped my team stay accountable and led weekly meetings.
        In these meetings, 
        I ensured that each team member understood the deliverable requirements and 
        delegated tasks according to the members' strengths. In addition, 
        I helped direct the team in revising our vision based on feedback 
        we received from peers, professors, and other guests after numerous critiques.
      </BodyText>
    </>
  );

  const links = (
    <a
      href="https://drive.google.com/file/d/1cKiYJfFLZa99bQpKCNVmPDIyv4VGbZHp/view"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <span className="highlight-link">final pitch slide deck</span>
    </a>
  );

  const problemImages = [
    { src: choosie_problem, alt: "Choosie problem space visualization" },
    { src: choosie_stat1, alt: "Choosie statistics 1" },
    { src: choosie_stat2, alt: "Choosie statistics 2" },
    { src: choosie_interview, alt: "Choosie interview process" },
  ];

  const researchImages = [
    { src: choosie_set, alt: "Choosie research setup" },
    { src: choosie_insight, alt: "Choosie research insights" },
  ];

  const prototypeImages = [
    { src: choosie_prototype_1, alt: "Choosie prototype 1" },
    { src: choosie_prototype_2, alt: "Choosie prototype 2" },
  ];

  return (
    <ProjectPage header={header}>
      <ProjectOverview 
        specs={specs}
        description={description}
        links={links}
      />

      <LargeImage 
        src={choosie}
        alt="Choosie startup concept"
      />

      <TextSection 
        title="problem space"
        content={
          <BodyText>
            Within a group, deciding on a restaurant is challenging 
            because people may have different allergies, 
            dietary restrictions, and cuisine preferences. 
            In addition, each group member may have differing budget and distance-related needs. 
            Lastly, some people may not feel comfortable voicing their opinions aloud, 
            which occurs sometimes in workplaces as a result of social dynamics.
          </BodyText>
        }
      />

      <TextSection 
        title="mvp"
        content={
          <BodyText>
            We decided to start small by initially providing the
             food recommendation service to users in the Pittsburgh area. 
            To validate our MVP, we devised a short four-step process
             that would simulate the most basic features of Choosie: user input including
             allergies, diets, and budget; algorithmic selection of recommendations,
             sending recommendations back to users, and asking users for feedback on the process
             and quality of recommendations.
          </BodyText>
        }
      />

      <ImageGallery 
        title="problem analysis"
        images={problemImages}
        columns={2}
      />

      <TextSection 
        title="market research"
        content={
          <BodyText>
            To validate our understanding of the problem space, 
            our team conducted extensive market research to understand the environmental 
            factors that would provide opportunities for Choosie to create value for consumers.
            We used lean business tools like PESTLE (political, economic, social, technological, legal,
             and environmental) analysis, as well as SET + 
             Product Opportunity Gap (POG) analysis. 
             We also defined stakeholders and created a value flow chart to help us better 
             understand the parties involved and how value could be exchanged and co-created between parties.
          </BodyText>
        }
      />

      <TextSection 
        title="customer discovery"
        content={
          <BodyText>
            In addition to conducting market research and analyzing third-party data,
             our team conducted a series of customer interviews with potential target users.
              We conducted structured individual interviews, in which we used a directed
               storytelling technique. We also conducted group interviews and contextual observation to 
               observe group decision-making behavior.
               From these interviews, we narrowed down the target users and 
               key stakeholders involved.
          </BodyText>
        }
      />

      <ImageGallery 
        title="research insights"
        images={researchImages}
        columns={2}
      />

      <ImageGallery 
        title="prototype"
        images={prototypeImages}
        columns={2}
      />

      <TextSection 
        title="feedback from investors"
        content={
          <>
            <BodyText>
              During our discussions with 9 potential investors,
               we learned that a large proportion of them actually have dietary 
               restrictions, allergies, or otherwise strongly resonated 
               with the problem space we were targeting. 
               It was exciting to see the value that Choosie could hold in consumers'
                lives and to be able to validate our stakeholder value.
            </BodyText>
            <BodyText>
               A majority of our feedback surrounded the restaurant side of the partnership; our investors asked 
               us to really narrow down how we would get restaurant menus and parse it efficiently; 
               how we would build trust with food-allergic 
               users and how we'd deal with liability if the allergens were tagged incorrectly.
            </BodyText>
          </>
        }
      />
    </ProjectPage>
  );
}

export default Choosie;
