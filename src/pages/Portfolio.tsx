"use client";

import { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { AnimatedProjectModal } from "../components/portfolioModal/Modal";
import { FloatingCircle } from "../components/circle";

import { projects } from "../components/portfolioModal/projectData";

export default function ProjectPage({}) {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <Container>
      <FloatingCircle />
      <MainContent>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          PROJECT
        </PageTitle>

        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectImage>
                <ProjectCardImg src={project.image} />
              </ProjectImage>
              <ProjectContent>
                <div>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </div>
              </ProjectContent>
              <ProjectTag>{project.type}</ProjectTag>
              <HoverOverlay
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                자세히보기
              </HoverOverlay>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </MainContent>

      <AnimatedProjectModal
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Container>
  );
}
const mainColor = "rgb(123, 154, 204)";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
`;

const MainContent = styled.div`
  padding: 120px 32px 32px;
  max-width: 1400px;
  margin: 0 auto;
`;

const PageTitle = styled(motion.h1)`
  font-size: 48px;
  font-weight: 300;
  color: #1e293b;
  margin-bottom: 48px;
  text-align: center;
  font-style: italic;
  font-family: "Caveat", cursive;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
  margin-top: 32px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  position: relative;
  height: 300px;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${mainColor}40, ${mainColor}60);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;
const ProjectCardImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
const ProjectContent = styled.div`
  padding: 24px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
  font-family: "Caveat", cursive;
`;

const ProjectDescription = styled.p`
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
`;

const ProjectTag = styled.span`
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 6px 12px;
  background: ${mainColor}20;
  color: ${mainColor};
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid ${mainColor}30;
`;

const HoverOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 500;
  opacity: 0;
`;
