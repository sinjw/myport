/*
import styled, { css } from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

// projectData.ts에서 타입을 가져옵니다.
import { projects } from "./projectData";
type Project = (typeof projects)[0];

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [etc, setEtc] = useState(false);

  const handleClickSetting = () => {
    setEtc(!etc);
  };

  const { 
    title, 
    image, 
    TextComponent, 
    githubLink, 
    youtubeLink, 
    teamInfo, 
    imgWrapperStyle, 
    modalTopStyle 
  } = project;

  return (
    <MainContainerModal
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        as={motion.div}
        layoutId={`card-${project.id}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCloseButton>
          <Bxicons onClick={onClose} className="bx bxs-x-circle"></Bxicons>
          <br />
          <BxDot
            onClick={handleClickSetting}
            className="bx bx-dots-vertical-rounded"
          ></BxDot>
          <GitHubButton
            etc={etc}
            href={githubLink}
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </GitHubButton>
          {youtubeLink && (
            <YoutubeButton
              etc={etc}
              href={youtubeLink}
              target="_blank"
            >
              <i className="bx bxl-youtube"></i>
            </YoutubeButton>
          )}
        </ModalCloseButton>
        <ModalMain>
          <ModalTop customStyle={modalTopStyle}>
            <h2 style={{ color: "#fcfcfc" }}>{title}</h2>
            <ImgWrapper customStyle={imgWrapperStyle}>
              <img
                src={image}
                style={{
                  borderRadius: "20px 20px",
                  width: "100%",
                }}
              />
            </ImgWrapper>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {teamInfo.map((info, index) => (
                <ModalTopText key={index}>{info}</ModalTopText>
              ))}
            </div>
          </ModalTop>
          <TextComponent />
        </ModalMain>
      </ModalContent>
    </MainContainerModal>
  );
};

const BxDot = styled.i`
  font-size: 50px;
  margin-left: 2px;
  border: 1px solid#a3a3a3;
  border-radius: 50px 50px;
  cursor: pointer;
  transition: all 0.4s;
  color: #a3a3a3;
  &:hover {
    color: #333;
    border: 1px solid#333;
  }
`;
const Bxicons = styled.i`
  font-size: 60px;
  color: #a3a3a3;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;
const MainContainerModal = styled.div`
  position: fixed;
  top: 0;
  backdrop-filter: blur(5px);
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(238, 251, 255, 0.8);
  max-height: 100vh;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalCloseButton = styled.div`
  position: absolute;
  right: 7vw;
  top: 80px;
`;

const ModalContent = styled.div`
  margin: 0 auto;
  overflow-y: auto;
  background-color: rgba(100, 100, 100, 0.2);
  width: 100vw;
  height: 100vh;
`;

const ModalTop = styled.div<{ customStyle: string }>`
  width: 100%;
  margin-top: 40px;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${(props) => props.customStyle}
`;

const ImgWrapper = styled.div<{ customStyle: string }>`
  ${(props) => props.customStyle}
`;

const ModalTopText = styled.p`
  color: #fcfcfc;
  border: 1px solid#fff;
  border-radius: 8px 8px;
  margin-right: 7px;
  padding: 2px 5px;
  font-size: 13px;
`;
const ModalMain = styled.div`
  width: 80%;
  padding-bottom: 70px;
  background-color: rgb(242, 249, 255);
  margin: 0 auto;
  margin-top: 60px;
  max-height: 90vh;
  overflow-y: auto;
`;

const commonButtonStyles = css<{ etc: boolean }>`
  opacity: 0;
  position: absolute;
  left: 0;
  cursor: pointer;
  transition: all 0.4s;
  z-index: -1;
  font-size: 34px;
  border-radius: 50%;
  padding: 0 9px;

  ${(props) =>
    props.etc &&
    `
    opacity: 1;
    z-index: 0;
  `};
`;

const YoutubeButton = styled.a<{ etc: boolean }>`
  ${commonButtonStyles}
  transform: translateY(0px);
  color: rgba(255, 0, 0, 0.8);
  border: 1px solid#900;
  &:hover {
    background-color: rgba(255, 0, 0, 0.8);
    color: #fff;
    border: 1px solid#900;
  }
  ${(props) =>
    props.etc &&
    `
    transform:translateY(110px);
  `};
`;

const GitHubButton = styled.a<{ etc: boolean }>`
  ${commonButtonStyles}
  transform: translateY(0px);
  border: 1px solid#333;
  color: rgba(0, 0, 0, 1);
  &:hover {
    background-color: #333;
    color: #fff;
  }
  ${(props) =>
    props.etc &&
    `
    transform:translateY(55px);
  `};
`;
*/

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
    Github,
    X,
    Calendar,
    Users,
    Code,
    ExternalLink,
} from "lucide-react";

const mainColor = "rgb(123, 154, 204)";

const projects = [
    {
      id: 1,
      title: "StockHolm",
      description: "모의 주식 거래를 위한 사이트입니다",
      type: "Team Project",
      image: "주식 차트 인터페이스",
      fullDescription:
        "실시간 주식 데이터를 활용한 모의 투자 플랫폼입니다. 사용자들이 가상의 자금으로 실제 주식 시장과 동일한 환경에서 투자 경험을 쌓을 수 있도록 설계되었습니다.",
      period: "2024.01 - 2024.03",
      team: "4명 (프론트엔드 2명, 백엔드 2명)",
      role: "프론트엔드 개발",
      techStack: [
        "React",
        "TypeScript",
        "Styled-Components",
        "Chart.js",
        "WebSocket",
      ],
      features: [
        "실시간 주식 가격 차트",
        "포트폴리오 관리 시스템",
        "거래 내역 및 수익률 분석",
        "랭킹 시스템",
      ],
    },
    {
      id: 2,
      title: "My Portfolio",
      description: "포트폴리오를 위한 사이트입니다",
      type: "Solo Project",
      image: "포트폴리오 레이아웃",
      fullDescription:
        "개인 포트폴리오를 효과적으로 보여주기 위한 반응형 웹사이트입니다. 모던한 디자인과 부드러운 애니메이션으로 사용자 경험을 향상시켰습니다.",
      period: "2024.04 - 2024.05",
      team: "1명 (개인 프로젝트)",
      role: "풀스택 개발",
      techStack: ["Next.js", "TypeScript", "Framer Motion", "Styled-Components"],
      features: [
        "반응형 디자인",
        "다크/라이트 모드",
        "부드러운 페이지 전환",
        "프로젝트 필터링",
      ],
    },
    {
      id: 3,
      title: "My Memo",
      description: "간단한 메모장 역할을 하는 앱입니다",
      type: "Solo Project",
      image: "메모 앱 인터페이스",
      fullDescription:
        "일상의 아이디어와 할 일을 효율적으로 관리할 수 있는 메모 애플리케이션입니다. 직관적인 UI와 빠른 검색 기능으로 생산성을 높였습니다.",
      period: "2024.06 - 2024.07",
      team: "1명 (개인 프로젝트)",
      role: "풀스택 개발",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Material-UI"],
      features: [
        "실시간 메모 저장",
        "카테고리별 분류",
        "검색 및 필터링",
        "마크다운 지원",
      ],
    },
  ];

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
`;

const ModalHeader = styled.div`
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
  font-size: 28px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
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
  background: rgba(123, 154, 204, 0.2);
  color: rgb(123, 154, 204);
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(123, 154, 204, 0.3);
`;

type AnimatedProjectModalProps = {
    selectedProject: (typeof projects)[0] | null;
    onClose: () => void;
  };
  
  export const AnimatedProjectModal = ({
    selectedProject,
    onClose,
  }: AnimatedProjectModalProps) => {
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
              <ModalHeader>
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
                <ModalDescription>
                  {selectedProject.fullDescription}
                </ModalDescription>
  
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
                  <ul style={{ paddingLeft: "20px", color: "#64748b" }}>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: "8px" }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TechStack>
  
                <ActionButtons>
                  <ActionButton
                    variant="primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    라이브 데모
                  </ActionButton>
                  <ActionButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    GitHub
                  </ActionButton>
                </ActionButtons>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    );
  };