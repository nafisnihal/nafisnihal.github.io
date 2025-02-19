import { AnimateSharedLayout } from "framer-motion";
import React, { useEffect, useState } from "react";
import ProjectCard from "../components/Cards/ProjectCard";
import { GridContainer } from "../components/Projects/ProjectsStyles";
import { projects } from "../constants/constants";
import { Layout } from "../layout/Layout";
import { PageTitle, Section, SectionDivider } from "../styles/GlobalComponents";

const AllProjects = () => {
  const [data, setData] = useState([]);
  // const [filterBy, setFilterBy] = useState("All");

  useEffect(() => {
    setData(projects);
  }, []);

  // const handleFilter = (type) => {
  //   switch (type) {
  //     case "javascript":
  //       setData([...projects].filter((p) => p.mainType === "javascript"));
  //       setFilterBy("JavaScript");
  //       break;

  //     case "react":
  //       setData([...projects].filter((p) => p.mainType === "react"));
  //       setFilterBy("React");
  //       break;

  //     default:
  //       setData([...projects]);
  //       setFilterBy("All");
  //       break;
  //   }
  // };

  return (
    <Layout>
      <Section nopadding id="projects">
        <SectionDivider divider style={{ marginBottom: 0 }} />
        <PageTitle>All Projects</PageTitle>
        {/* <ProjectsFilter filter={handleFilter} filterBy={filterBy} /> */}
        <AnimateSharedLayout>
          <GridContainer layout>
            {data
              .sort((a, b) => a.order - b.order)
              .map((card) => (
                <ProjectCard item={card} key={card.id} />
              ))}
          </GridContainer>
        </AnimateSharedLayout>
      </Section>
    </Layout>
  );
};

export default AllProjects;
