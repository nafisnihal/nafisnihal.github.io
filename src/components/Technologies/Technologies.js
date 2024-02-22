import React from "react";
import { FaCode, FaReact, FaTools } from "react-icons/fa";
import {
  frameworkSkills,
  languageSkills,
  toolsSkills,
} from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  IndividualItem,
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with the following technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaCode size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            {languageSkills.map((skill) => (
              <IndividualItem key={skill.name}>{skill.name}</IndividualItem>
            ))}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaReact size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          {
            <ListParagraph>
              {frameworkSkills.map((skill) => (
                <IndividualItem key={skill.name}>{skill.name}</IndividualItem>
              ))}
            </ListParagraph>
          }
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaTools size="5.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            {toolsSkills.map((skill) => (
              <IndividualItem key={skill.name}>{skill.name}</IndividualItem>
            ))}
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
