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
          A frontend developer based on Dhaka who loves to build things for the
          web.
        </SectionText>
        <HeroButton
          href="https://drive.usercontent.google.com/download?id=1oq6u-Dtd7zCZ798ZEmeKuptlI6049wDh&export=download&authuser=0&confirm=t&uuid=02cff992-4046-4e32-a304-94953b3c3c11&at=APZUnTU9jRON1UAq-3gFhr-P6r3g:1692868422400"
          className="link-to"
          title="Download Resume"
        >
          Resume
        </HeroButton>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
