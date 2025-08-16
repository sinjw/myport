"use client";

import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { AnimatedProjectModal } from "../components/portfolioModal/Modal";

const mainColor = "rgb(123, 154, 204)";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
`;

const FloatingCircles = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

const Circle = styled(motion.div)<{
  size: number;
  top: string;
  left: string;
  opacity: number;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${mainColor};
  border-radius: 50%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  opacity: ${(props) => props.opacity};
`;

const Header = styled.header`
  position: absolute;
  top: 32px;
  left: 32px;
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  z-index: 10;
`;

const Navigation = styled.nav`
  position: fixed;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 20;
`;

const NavButton = styled(motion.button)<{ active?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.active ? mainColor : "rgba(255, 255, 255, 0.9)"};
  color: ${(props) => (props.active ? "white" : "#64748b")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: ${mainColor};
    color: white;
    transform: scale(1.1);
  }
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

const circles = [
  { size: 100, top: "20%", left: "15%", opacity: 0.3 },
  { size: 60, top: "70%", left: "80%", opacity: 0.4 },
  { size: 80, top: "40%", left: "90%", opacity: 0.3 },
  { size: 120, top: "80%", left: "10%", opacity: 0.2 },
];

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

interface ProjectPageProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function ProjectPage({}) {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <Container>
      <FloatingCircles>
        {circles.map((circle, index) => (
          <Circle
            key={index}
            size={circle.size}
            top={circle.top}
            left={circle.left}
            opacity={circle.opacity}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 7 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </FloatingCircles>

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
              <ProjectImage>{project.image}</ProjectImage>
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
