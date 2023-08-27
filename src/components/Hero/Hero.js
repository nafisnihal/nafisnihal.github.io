import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { HeroButton, LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          It's Nafis Nihal
        </SectionTitle>
        <SectionText style={{ paddingBottom: "30px" }}>
          A frontend developer based in Dhaka who loves to build things for the
          web.
        </SectionText>
        <HeroButton
          href="https://drive.google.com/file/d/1oq6u-Dtd7zCZ798ZEmeKuptlI6049wDh/view?usp=sharing"
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
