import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { HeroButton, LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Nafis Nihal
        </SectionTitle>
        <SectionText style={{ paddingBottom: "30px" }}>
          A frontend developer based in Dhaka who loves to build things for the
          web.
        </SectionText>
        <HeroButton
          href="/Resume_Nafis_Nihal.pdf"
          className="link-to"
          title="Download Resume"
          target="_blank"
        >
          Resume
        </HeroButton>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
