import styled, { css } from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Github,
  X,
  Calendar,
  Users,
  Code,
  ExternalLink,
  Check,
} from "lucide-react";

import { ImageBox } from "../portfolioModal/imageBox";
const mainColor = "rgb(123, 154, 204)";

import { type Project } from "./projectData";

type AnimatedProjectModalProps = {
  selectedProject: Project | null;
  onClose: () => void;
};

export const AnimatedProjectModal = ({
  selectedProject,
  onClose,
}: AnimatedProjectModalProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <AnimatePresence>
      {selectedProject && (
        <Modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader customStyle={selectedProject?.modalTopStyle}>
              <div>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <ProjectTag>{selectedProject.type}</ProjectTag>
              </div>
              <CloseButton
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={20} />
              </CloseButton>
            </ModalHeader>

            <ModalBody>
              <ModalDescription>{selectedProject.description}</ModalDescription>

              <ProjectDetails>
                <DetailItem>
                  <DetailIcon>
                    <Calendar size={20} />
                  </DetailIcon>
                  <DetailText>
                    <h4>개발 기간</h4>
                    <p>{selectedProject.period}</p>
                  </DetailText>
                </DetailItem>
                <DetailItem>
                  <DetailIcon>
                    <Users size={20} />
                  </DetailIcon>
                  <DetailText>
                    <h4>팀 구성</h4>
                    <p>{selectedProject.team}</p>
                  </DetailText>
                </DetailItem>
                <DetailItem>
                  <DetailIcon>
                    <Code size={20} />
                  </DetailIcon>
                  <DetailText>
                    <h4>담당 역할</h4>
                    <p>{selectedProject.role}</p>
                  </DetailText>
                </DetailItem>
              </ProjectDetails>

              <TechStack>
                <TechTitle>기술 스택</TechTitle>
                <TechList>
                  {selectedProject.techStack.map((tech) => (
                    <TechItem key={tech}>{tech}</TechItem>
                  ))}
                </TechList>
              </TechStack>

              <TechStack>
                <TechTitle>주요 기능</TechTitle>
                <FeatureList>
                  {selectedProject.features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <Check size={16} color="#34d399" />
                      {feature}
                    </FeatureItem>
                  ))}
                </FeatureList>
              </TechStack>

              <TechStack>
                <TechTitle>이미지 갤러리</TechTitle>
                <ImageGalleryContainer>
                  {selectedProject.galleryImages &&
                    selectedProject.galleryImages.map((imgSrc, index) => {
                      const total = selectedProject.galleryImages.length;
                      const initialAngle = (index - (total - 1) / 2) * 6;
                      const hoverAngle = (index - (total - 1) / 2) * 15;

                      return (
                        <GalleryImage
                          key={index}
                          src={imgSrc}
                          alt={`${selectedProject.title} gallery image ${
                            index + 1
                          }`}
                          $angleInitial={`${initialAngle}deg`}
                          $angleHover={`${hoverAngle}deg`}
                          style={{ zIndex: index }}
                          onClick={() => {
                            setIsLightboxOpen(true);
                          }}
                        />
                      );
                    })}
                </ImageGalleryContainer>
              </TechStack>
              <ModalDescription>
                {selectedProject.fullDescription}
              </ModalDescription>

              <ActionButtons>
                {selectedProject.webLink !== "" && (
                  <a
                    href={selectedProject.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ActionButton
                      variant="primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      web
                    </ActionButton>
                  </a>
                )}
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ActionButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Github
                  </ActionButton>
                </a>

                {selectedProject.youtubeLink !== "" && (
                  <a href={selectedProject.youtubeLink}>
                    <ActionButton>Youtube</ActionButton>{" "}
                  </a>
                )}
              </ActionButtons>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      {isLightboxOpen && selectedProject && (
        <>
          <ImageBox
            images={selectedProject.galleryImages}
            id={selectedProject.id}
            isOpen={isLightboxOpen}
            onClose={() => setIsLightboxOpen(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
};
const Modal = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 32px;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 24px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const ModalHeader = styled.div<{ customStyle?: string }>`
  ${(props) =>
    props.customStyle &&
    css`
      ${props.customStyle}
    `};
  padding: 32px 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CloseButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border: none;
  background: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #64748b;

  &:hover {
    background: #e2e8f0;
  }
`;

const ModalBody = styled.div`
  padding: 32px;
`;

const ModalTitle = styled.h2`
  font-size: 38px;
  font-weight: 600;

  margin-bottom: 16px;
  font-family: "Caveat", cursive;
`;

const ModalDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 12px;
`;

const DetailIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${mainColor}20;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${mainColor};
`;

const DetailText = styled.div`
  h4 {
    .jua-regular {
      font-family: "Jua", sans-serif;
      font-weight: 400;
      font-style: normal;
    }
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 4px;
  }
  p {
    font-size: 12px;
    color: #64748b;
  }
`;

const TechStack = styled.div`
  margin-bottom: 32px;
`;

const TechTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechItem = styled.span`
  padding: 8px 16px;
  background: ${mainColor}10;
  color: ${mainColor};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${mainColor}20;
`;

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #f1f5f9;
  color: #334155;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e2e8f0;
`;

const ImageGalleryContainer = styled.div`
  margin-top: 24px;
  position: relative;
  min-height: 280px; /* Increased height for effect */
  display: flex;
  align-items: center;
  justify-content: center;

  /* On hover, fan out the images by affecting direct children */
  &:hover > img {
    transform: rotate(var(--angle-hover)) translateY(-20px) scale(1.05);
  }
`;

const GalleryImage = styled(motion.img)<{
  $angleInitial: string;
  $angleHover: string;
}>`
  --angle-initial: ${(p) => p.$angleInitial};
  --angle-hover: ${(p) => p.$angleHover};
  position: absolute;
  width: 250px;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.4s ease-out;
  /* Rotate from a point below the container to get a nice arc */
  transform-origin: center 300px;
  transform: rotate(var(--angle-initial));
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
`;

const ActionButton = styled(motion.button)<{
  variant?: "primary" | "secondary";
}>`
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${(props) =>
    props.variant === "primary" ? mainColor : "transparent"};
  color: ${(props) => (props.variant === "primary" ? "white" : mainColor)};
  border: ${(props) =>
    props.variant === "primary" ? "none" : `1px solid ${mainColor}`};

  &:hover {
    background: ${(props) =>
      props.variant === "primary" ? `${mainColor}dd` : `${mainColor}10`};
  }
`;

const ProjectTag = styled.span`
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.2);
  color: rgb(250, 250, 250);
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
