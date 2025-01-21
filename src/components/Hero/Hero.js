import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Nafis Nihal
        </SectionTitle>
        <SectionText style={{ paddingBottom: "30px" }}>
          A software engineer based in Dhaka who loves to build things for the
          web.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
