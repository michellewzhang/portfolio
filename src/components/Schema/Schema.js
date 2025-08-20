import React from "react";
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
import dialog1 from "../../images/dialog/dialog1.png";
import dialog2 from "../../images/dialog/dialog2.png";
import dialog3 from "../../images/dialog/dialog3.png";
import dialog4 from "../../images/dialog/dialog4.png";
import dialog5 from "../../images/dialog/dialog5.png";
import dialog_overview from "../../images/dialog/dialog_overview.png";
import dialog_example from "../../images/dialog/dialog_example.png";

function Schema() {
  const header = (
    <ProjectHeader 
      title="dialog schema builder" 
      description="full stack development" 
      details="application for building chat dialog flows and testing them via a chat interface"
    />
  );

  const specs = (
    <ProjectSpecs 
      role="full stack engineer, UI designer" 
      skills="frontend development, API design and integration, prototyping" 
      tools="JavaScript / React, Python, Tornado, Postman, Figma"
    />
  );

  const description = (
    <>
      <BodyText>
        Schema Builder is an application that allows users to build dialog schema, 
        which are then passed into models trained on a dataset for transfer learning. 
        I designed and developed Schema Builder under 
        the guidance of Shikib Mehri and Dr. Eskenazi (DialRC, Language Technologies Institute, CMU).
      </BodyText>
      <BodyText>
        The completed application allows users to drag and drop components 
        to create a flowchart graph representing their schema diagram, 
        and subsequently offers users the ability to test their dialog implementation 
        by interacting with the system through a chatbox.
      </BodyText>
      <BodyText>
        In three months, I designed a feasible prototype,
         developed functional user interfaces, 
         created a useful data representation,
          developed the API, and finally integrated the frontend and backend together with a model.
      </BodyText>
    </>
  );

  const links = (
    <>
      <a href="https://github.com/michellewzhang/schema" target="_blank" rel="noopener noreferrer">
        <span className="highlight-link">github repo </span>
      </a>
      <span> &nbsp; / &nbsp; </span>
      <a href="https://drive.google.com/file/d/1IN6RDCEs8KLbLBMYelfEsTRW67i29Dat/view" target="_blank" rel="noopener noreferrer">
        <span className="highlight-link">final paper </span>
      </a>
    </>
  );

  const prototypeImages = [
    { src: dialog1, alt: "Dialog prototype 1" },
    { src: dialog2, alt: "Dialog prototype 2" },
    { src: dialog3, alt: "Dialog prototype 3" },
    { src: dialog5, alt: "Dialog prototype 5" },
    { src: dialog4, alt: "Dialog prototype 4" },
  ];

  return (
    <ProjectPage header={header}>
      <ProjectOverview 
        specs={specs}
        description={description}
        links={links}
      />

      <TextSection 
        title="prototype"
        content={
          <BodyText>
            For this design, I focused on incorporating elements of material design to form a clean and intuitive user interface. The main features
            included a chat UI, drag and drop UI, and expanded states.
          </BodyText>
        }
      />

      <ImageGallery 
        title=""
        images={prototypeImages}
        columns={2}
      />

      <TextSection 
        title="development"
        content={
          <BodyText>
            The frontend could be broken down into two components: 
            the drag and drop dialog builder area and the messaging area. I also needed to design a data representation 
            that would be useful for passing information to the backend, including
            message exchange history, nodes and edges in the graph, exact connections between nodes, 
            and unique user IDs. The API I developed stores the user 
            and system message exchange history as well as the saved schema. 
            Each user is defined by a unique ID generated on the frontend.
          </BodyText>
        }
      />

      <TextSection 
        title="impact"
        content={
          <BodyText>
            With the development of novel schema-guided dialog models that use an explicit 
            description of known tasks to generalize to unknown tasks, 
            Schema Builder allows users to build arbitrary schemas, pass them to learning models,
             and potentially create a dialog model for a new domain.
          </BodyText>
        }
      />

      <LargeImage 
        title="final poc"
        src={dialog_overview}
        alt="Dialog overview"
        caption="The completed application showing all key features and functionality"
      />
      
      <LargeImage 
        title=""
        src={dialog_example}
        alt="Dialog example"
        caption="Example of the dialog system in use with actual user interactions"
      />
    </ProjectPage>
  );
}

export default Schema;
