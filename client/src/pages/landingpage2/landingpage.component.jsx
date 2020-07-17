import React from 'react';
import Hero from "../../components/atomic/hero/hero.component";
import SideNav from "../../components/atomic/side-nav/side-nav.component";
import TopRealtors from "../../components/atomic/top-realtors/top-realtors.component";
import SectionFeature from "../../components/complex/section/feature/feature.component";
import SectionFooter from "../../components/complex/section/landing.footer/landing.footer.component";
import SectionHome from "../../components/complex/section/landing.home/landing.home.component";
import SectionStoriesPicture from "../../components/complex/section/stories-picture/stories-picture.component";
import { LandingPageContainer } from "./landingpage.styles";

const LandingPage = () => (
  <LandingPageContainer>
    <SideNav />
    <Hero />
    <TopRealtors />
    <SectionFeature />
    <SectionStoriesPicture />
    
    <div className="story__content">
      <h3 className="heading-3 u-margin-bottom-small">Happy Customers</h3>
      <h2 className="heading-2 heading-2-dark u-margin-bottom-medium">
        &ldquo;The best decision&rdquo;
      </h2>
      <p className="story__text">
        Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
        necessitatibus pariatur voluptatibus.
      </p>
      <button className="btn">Find your home</button>
    </div>
    <SectionHome />
    <SectionFooter />
    
  </LandingPageContainer>
);

export default LandingPage;
