import React from "react";
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectSpecs from '../ProjectSpecs/ProjectSpecs';
import sentry from "../../images/sentry/sentry.png";
import {
  ProjectPage,
  ProjectOverview,
  LargeImage,
  BodyText
} from '../ProjectTemplate/ProjectTemplate';

function Sentry() {
  const header = (
    <ProjectHeader 
      title="sentry" 
      description="full stack development" 
      details="application and performance monitoring platform"
    />
  );

  const specs = (
    <ProjectSpecs 
      role="software engineer" 
      skills="full stack development, project management" 
      tools="TypeScript / React, Python / Django"
    />
  );

  const description = (
    <>
    <BodyText>
      <a href="https://sentry.io/welcome//" target="_blank" rel="noopener noreferrer" className="highlight-link">
      Sentry</a> is an application debugging tool built for developers, by developers. We provide a suite of 
       tools that not only help users detect errors and performance issues effortlessly, but also to diagnose and solve them quickly. 
      Sentry's customers include Duolingo, Disney, Anthropic, Slack, and more. 
      </BodyText>
      <BodyText>I joined Sentry as a software engineer
      in July 2023 and have since worked on various high-impact features across the product, including Session Replay and
      User Feedback. The most recent project I led was our AI Replay Summaries feature.
    </BodyText>
    <BodyText>
    Our code is completely open source; as a result, I interact directly with customers through GitHub often.
    </BodyText>
    <BodyText>In July 2024, I had the incredible opportunity of being able to speak at <a href="https://sf.droidcon.com//" 
        target="_blank" rel="noopener noreferrer" className="highlight-link">
        droidcon SF</a> on behalf of my company. 
        droidcon is an annual Android conference that takes place in various cities around the world. 
        During this 20 minute talk, I presented my work on our up-and-coming Mobile Session Replay product (now fully launched)
        and gave developers a first look at the product.
    </BodyText>
    </>  
    );

    const links = (
    <>
      <a href="https://github.com/getsentry/sentry" target="_blank" rel="noopener noreferrer" className="highlight-link">
        github
      </a>
      <span> &nbsp; / &nbsp; </span>
      <a href="https://www.droidcon.com/2024/07/17/solve-your-mobile-bugs-with-session-replay/" target="_blank" rel="noopener noreferrer" className="highlight-link">
        talk at droindcon SF
      </a>
      <span> &nbsp; / &nbsp; </span>
      <a href="https://www.youtube.com/watch?v=fdh_r_v1-EI&ab_channel=Sentry" target="_blank" rel="noopener noreferrer" className="highlight-link">product demo</a>
      </>
    );

  return (
    <ProjectPage header={header}>
      <ProjectOverview 
        specs={specs}
        description={description}
        links={links}
      />

       <LargeImage 
        src={sentry}
        alt="Sentry"
      />
    </ProjectPage>
  );
}

export default Sentry;
