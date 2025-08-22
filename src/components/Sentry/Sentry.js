import React from "react";
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectSpecs from '../ProjectSpecs/ProjectSpecs';
import sentry from "../../images/sentry/sentry.png";
import feedback from "../../images/sentry/feedback.png";
import mobilereplay from "../../images/sentry/mobile_replay.png";
import mobilereplay2 from "../../images/sentry/mobile_replay_2.png";
import flags from "../../images/sentry/flags.png";
import insights from "../../images/sentry/insights.png";
import aisummary from "../../images/sentry/ai_summary.png";
import onboarding from "../../images/sentry/onboarding.gif";
import {
  ProjectPage,
  ProjectOverview,
  LargeImage,
  BodyText,
  TextSection,
  TextImageSection,
  ImageGallery,
} from '../ProjectTemplate/ProjectTemplate';

function Sentry() {
  const header = (
    <ProjectHeader 
      title="sentry" 
      description="full stack development" 
      details="application and performance monitoring platform — select projects"
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
      User Feedback. The most recent project I led was our AI Session Replay Summaries feature.
    </BodyText>
    <BodyText>In July 2024, I had the incredible opportunity of being able to speak at <a href="https://sf.droidcon.com//" 
        target="_blank" rel="noopener noreferrer" className="highlight-link">
        droidcon SF</a> on behalf of my company. 
        droidcon is an annual Android conference that takes place in various cities around the world. 
        During this 20 minute talk, I presented my work on our up-and-coming Mobile Session Replay product (now fully launched)
        and gave developers a first look at the product.
    </BodyText>
    <BodyText>
    Our code is completely open source, so feel free to take a peek!
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

    const mobileImgs = [
        { src: mobilereplay, alt: "Mobile replay" },
        { src: mobilereplay2, alt: "Mobile breadcrumbs" },
      ];

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

      <TextImageSection
        title="AI replay summaries"
        content={
            <>
          <BodyText>
            Our Session Replay product is a frontend debugging tool that allows developers to playback
            user sessions, to easily pinpoint what happened before, during, and after a user 
            experienced an error. Recently, I led project work on our AI Replay Summaries feature,
            which is an enhancement that allows users to quickly understand replays (which can be up to 
            60 minutes long.)
          </BodyText>
          <BodyText>
            This feature leverages an LLM to take in replay data and output a summary and "chapters" for the replay.
            This project required fullstack work to build the backend endpoints, send data to the LLM, and display the results on the frontend.
          </BodyText>
          </>
        }
        image={{ src: aisummary, alt: "AI Session Replay" }}
      />

        <TextSection
        title="user feedback"
        content={
            <>
          <BodyText>
            Sentry's User Feedback tool gives our customers the ability to collect feedback from users
            at any time. My team developed a installable widget that can be embedded in any website, and
            the feedback submitted gets routed back to Sentry, where users can triage and resolve feedbacks
            alongisde the rest of their Sentry errors. 
            </BodyText>
            <BodyText>I developed the frontend interface for User Feedback
            and contributed to development of our AI spam detection feature, which filters out unhelpful
            feedbacks. Additionally, I worked on powering external issue linking (e.g. Jira, Linear, GitHub)
            with Sentry feedbacks.
            </BodyText>
            </>
        }
      />

      <LargeImage
        src={feedback}
        alt="User Feedback"
      />

    <TextSection
        title="mobile session replay"
        content={
            <>
          <BodyText>
            I had the opportunity to lead the UI development for Sentry's Mobile Session Replay product.
            I collaborated with our iOS and Android SDK engineers to build out a custom video player, 
            implement visual gestures such as scrolling, swipes, and taps, and adding new mobile-specific
            breadcrumb types. Mobile replays are unique from web replays in that mobile replays are a string of MP4 videos
            constructed from screenshots taken at a fixed interval. The difference between the two necessitated a custom video player for the new product.
            Throughout this project, I worked extensively with  
            <a href="https://github.com/rrweb-io/rrweb" target="_blank" rel="noopener noreferrer" className="highlight-link"> rrweb</a>, an open source recording library.
            </BodyText>
            <BodyText>
            Since its release in January 2025, mobile session replay has been adopted 
            by over 1700 orgs.
            </BodyText>
            </>
        }
      />

      <ImageGallery images={mobileImgs} columns={2}/>

    <TextSection
        title="feature flags"
        content={
            <>
            <BodyText>
            I helped launch Sentry's new feature flag product, which allows uesrs to link their external feature flagging
            platform (e.g. LaunchDarkly, OpenFeature) to Sentry. Through this integration, users can gain valuable
            insights into how their feature flags may be related to errors and which feature flags may be "suspect". 
            </BodyText>
            <BodyText>
            During this project, I had had to opportunity to research feature flag providers and build compatible change tracking
            listeners for our Sentry audit logs. These audit logs help Sentry users see how the timing of their
            feature flag additions, modifications, and removals can relate to new errors. 
            </BodyText>
            </>
        }
      />

    <LargeImage
        src={flags}
        alt="Feature Flags"
      />


    <TextImageSection
        title="session health insights"
        content={
            <>
            <BodyText>
            Sentry's Insights product is a collection of dashboards that help users understand the health of their
            applications for frontend, backend, and mobile projects. From failure rates to slow transactions, users are able 
            to use these dashboards to quickly understand the performance of their applications at a glance. 
            As part of our Insights product, I built out the Session Health module and created dashboards for frontend, backend, and mobile platforms.
            </BodyText>
            <BodyText>
            I leveraged our existing sessions data to build out various charts on the frontend — including a chart
            that shows the rate of users experiencing sessions ending in a crash; a chart that shows the percentage breakdown
            of sessions that were healthy, abormal, errored, and crashed; a chart mapping release adoption for recent mobile releases; 
            and a chart showing the number of new issues per release.
            </BodyText>
            </>
        }
        image={{ src: insights, alt: "Session Health Insights" }}
        imagePosition="right"
      />

    <TextImageSection
        title="new user onboarding"
        content={
            <>
            <BodyText>
            I rewrote our product's new user onboarding structure, completely deprecating the old markdown-based onboarding
            and moving all the instructions to TypeScript in our main repository. In the process, I refactored onboarding instructions for over 90 platforms, and 
            added thousands of lines and deleted thousands more. Our previous onboarding experience had been unclear and 
            confusing, and didn’t sufficiently communicate the value of the Replay product or what platforms were supported.
            My changes lowered critical barriers to adoption, and made it clear which SDKs are supported and exactly how to set Replay up for each one.
            </BodyText>
            <BodyText>
            My onboarding changes led to a 15% increase in users viewing onboarding instructions within just 1 month. The refactored
            onboarding structure also paved the path for subsequent improvements in onboarding for other products across Sentry, as
            my structural changes led to a more reusable and configurable onboarding experience.
            </BodyText>
            </>
        }
        image={{ src: onboarding, alt: "Onboarding" }}
        imagePosition="left"
      />

    </ProjectPage>
  );
}

export default Sentry;
