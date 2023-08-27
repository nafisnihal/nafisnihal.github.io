import React from "react";
import { HiOutlineCode } from "react-icons/hi";
import { VscTools } from "react-icons/vsc";
import { FiFigma } from "react-icons/fi";
import { FaReact, FaCode, FaFigma, FaTools } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
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
            JavaScript, ES6, Node.js, HTML, CSS, SCSS/SASS, Python, C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaReact size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            React, Next.js, Redux, RESTful APIs, Material-UI, Bootstrap,
            TailwindCSS, Framer.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaFigma size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma, Photoshop.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaTools size="5.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git, Postman, VS Code, Visual Studio.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
