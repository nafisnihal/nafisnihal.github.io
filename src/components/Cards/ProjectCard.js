import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  CardInfo,
  HeaderThree,
  PictureImg,
  Picture,
  Hr,
  ImgContainer,
  Tag,
  TagList,
  TitleContent,
  LinkContainer,
  Links,
  LinkText,
} from "./CardStyles";
import { DiGitBranch } from "react-icons/di";
import { FiExternalLink } from "react-icons/fi";
import ProjectModal from "../Modal/ProjectModal";

const variants = {
  pageInitial: {
    opacity: 0,
    scale: 0.5,
  },
  pageAnimate: {
    opacity: 1,
    scale: 1,
  },
  pageExit: {
    opacity: 0,
    scale: 0.5,
  },
};

const ProjectCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const toggleModal = () => setIsOpen(!isOpen);

  const { title, description, tags, image, imageWebp, liveLink, sourceLink } =
    item;

  return (
    <motion.div
      key={title}
      className="project-card"
      layout
      initial="pageInitial"
      animate="pageAnimate"
      variants={variants}
      transition={{ type: "tween" }}
    >
      <ImgContainer>
        <Picture>
          <source srcSet={imageWebp} type="image/webp" />
          <PictureImg src={image} alt={title} />
        </Picture>
        {/* <Button
          type="button"
          aria-label="Open Project Gallery in a modal window"
          onClick={openModal}
        >
          <BsPlusCircleFill />
        </Button>
        <ProjectModal
          isOpen={isOpen}
          toggleModal={toggleModal}
          title={title}
          images={images}
        /> */}
      </ImgContainer>
      <TitleContent>
        <HeaderThree title>{title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo className="card-info">{description}</CardInfo>
      <div className="card-footer">
        <TitleContent style={{ marginTop: "20px" }}>
          <b>Stack</b>
        </TitleContent>
        <TagList>
          {tags.map((t, i) => {
            return <Tag key={i}>{t}</Tag>;
          })}
        </TagList>
      </div>
      <LinkContainer>
        {Boolean(sourceLink) && (
          <Links href={sourceLink} target="_blank" rel="noopener noreferrer">
            <DiGitBranch />
            <LinkText>Source</LinkText>
          </Links>
        )}
        {Boolean(liveLink) && (
          <Links href={liveLink} target="_blank" rel="noopener noreferrer">
            <FiExternalLink />
            <LinkText>Live</LinkText>
          </Links>
        )}
        {Boolean(!liveLink && !sourceLink) && (
          <Links>
            <LinkText>Confidential</LinkText>
          </Links>
        )}
      </LinkContainer>
    </motion.div>
  );
};

export default ProjectCard;
