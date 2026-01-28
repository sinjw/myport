import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, HelpCircle, MapPin, Calendar } from "lucide-react";
import { FloatingCircle } from "../components/circle";

const skillsWithColors = [
  { name: "HTML5", textColor: "#E44D26", bgColor: "#F1652920" },
  { name: "CSS3", textColor: "#1572B6", bgColor: "#2965f120" },
  { name: "JavaScript", textColor: "#F0DB4F", bgColor: "#F0DB4F20" },
  { name: "TypeScript", textColor: "#007ACC", bgColor: "#007ACC20" },
  { name: "React", textColor: "#61DAFB", bgColor: "#61DAFB20" },
  { name: "Next.js", textColor: "#333333", bgColor: "#55555520" },
  { name: "Styled-Components", textColor: "#DB7093", bgColor: "#DB709320" },
  { name: "Figma", textColor: "#F24E1E", bgColor: "#F24E1E20" },
  { name: "Git", textColor: "#F1502F", bgColor: "#F1502F20" },
  { name: "Responsive Design", textColor: "#4A90E2", bgColor: "#4A90E220" },
];

const experiences = [
  " React nextjs 웹 애플리케이션 개발",
  " 반응형 웹 디자인 구현",
  " 팀 프로젝트 협업 경험",
  " EZEN 사원으로 근무",
  " 코드스테이츠 프론트엔드 과정수료",
  " EZEN UI/UX 웹디자인 과정수료",
  " GOGUEME 프로젝트 개발 참여",
];
const personalInfo = [
  { icon: Calendar, label: "생년", value: "1994년" },
  { icon: MapPin, label: "거주지", value: " 전북 전주시 ,대한민국" },
];
export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("skills");
  const [rightTab, setRightTab] = useState("intro");

  return (
    <Container>
      <FloatingCircle />

      <MainContent>
        <LeftPanel
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ProfileSection>
            <ProfileTitle>PROFILE</ProfileTitle>
            <ProfileSubtitle>Frontend developer</ProfileSubtitle>
          </ProfileSection>

          <TabContainer>
            <TabButtons>
              <TabButton
                active={activeTab === "skills"}
                onClick={() => setActiveTab("skills")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Skills
              </TabButton>
              <TabButton
                active={activeTab === "experience"}
                onClick={() => setActiveTab("experience")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Experience
              </TabButton>
            </TabButtons>

            <AnimatePresence mode="wait">
              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <SkillsGrid>
                    {skillsWithColors.map((skill, index) => (
                      <SkillTag
                        key={skill.name}
                        bgColor={skill.bgColor}
                        textColor={skill.textColor}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.1 },
                        }}
                      >
                        {skill.name}
                      </SkillTag>
                    ))}
                  </SkillsGrid>
                </motion.div>
              )}

              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      style={{
                        padding: "12px 0",
                        borderBottom:
                          index < experiences.length - 1
                            ? `1px solid ${mainColor}20`
                            : "none",
                        color: "#475569",
                        fontSize: "14px",
                      }}
                    >
                      • {exp}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </TabContainer>
        </LeftPanel>

        <RightPanel
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <ContentCard>
            <TabButtons>
              <TabButton
                active={rightTab === "intro"}
                onClick={() => setRightTab("intro")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={16} style={{ marginRight: "8px" }} />
                자기소개
              </TabButton>
              <TabButton
                active={rightTab === "qa"}
                onClick={() => setRightTab("qa")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HelpCircle size={16} style={{ marginRight: "8px" }} />
                Q&A
              </TabButton>
            </TabButtons>

            <AnimatePresence mode="wait">
              {rightTab === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContentTitle>
                    안녕하세요, 프론트엔드 개발자 신중원입니다.
                  </ContentTitle>
                  <PersonalInfoGrid>
                    {personalInfo.map((info, index) => (
                      <InfoCard
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <InfoIcon>
                          <info.icon size={20} />
                        </InfoIcon>
                        <InfoContent>
                          <h4>{info.label}</h4>
                          <p>{info.value}</p>
                        </InfoContent>
                      </InfoCard>
                    ))}
                  </PersonalInfoGrid>
                  <QuoteSection
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <ContentText>
                      사용자 중심의 인터페이스와 깔끔한 코드 구조로 문제를
                      해결하는 방향성으로 노력합니다. 기술적 구현과 사용자의
                      경험을 세심하게 관찰하고 개선하는 과정에서 가치를
                      만들어가기위해 노력하고있습니다.
                    </ContentText>
                    <ContentText>
                      저는 React와 TypeScript를 주축으로 Next.js, Vite,
                      TailwindCSS 등의 기술들을 공부하고있으며, 컴포넌트
                      재사용성과 유지보수성을 고려한 코드 작성을 하기위해
                      노력하고 있고, 프로젝트를 진행하면서 협업 툴과 Git
                      워크플로우를 익혀 팀 내 커뮤니케이션과 개발 효율을
                      높이기위해 배우고있습니다. 학습과 성장에는 끝이 없다고
                      믿습니다. 새로운 기술을 빠르게 학습하고 실무에 적용하는
                      것을 즐겁게 생각하고 있고 , 작은 실험과 반복적인 개선을
                      통해 더 나은 결과를 만들어 내기위해 노력합니다.
                      <Highlight>
                        “기회는 준비된 사람이 잡는다” 라는 생각으로 매일 코딩을
                        즐기면서 , 발전하기 위한 경험을 쌓아가고 있습니다.
                      </Highlight>
                    </ContentText>

                    <ContentText>
                      앞으로도 더욱 발전해나가면서 배우고 좋은개발자, 성실히
                      배우고 협업하는 개발자가 되고 싶습니다.
                    </ContentText>
                  </QuoteSection>
                </motion.div>
              )}

              {rightTab === "qa" && (
                <motion.div
                  key="qa"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContentTitle>자주 묻는 질문</ContentTitle>
                  <ContentText>
                    <Highlight>
                      Q. 어떤 기술 스택을 주로 사용하시나요?
                    </Highlight>
                    <br />
                    주로 React + TypeScript 기반으로 개발합니다. Next.js
                    프로젝트 경험이 있고, 스타일링은
                    Styled-Components/Tailwind를 프로젝트 성격에 맞게
                    사용합니다.
                  </ContentText>
                  <ContentText>
                    <Highlight>
                      Q. 개발할 때 가장 중요하게 생각하는 것은?
                    </Highlight>
                    <br />
                    사용자 경험과 접근성: 접근성 기준(키보드 내비게이션, 명확한
                    대체 텍스트)을 적용해 모든 사용자가 접근 가능한 UI를
                    만들기위해 노력합니다. 가독성·유지보수성 있는 코드, 일관된
                    네이밍, 타입 안전성을 지켜 코드 리뷰가 쉬운 구조로
                    작성하기위해 노력합니다. 협업 태도: 명확한 커밋 메시지, PR
                    설명, 적극적인 코드 리뷰 참여로 지식 공유와 빠른 피드백을
                    지향합니다. 모르는 건 숨기지 않고 질문하며 팀과 함께
                    성장하기위해 노력 합니다.
                  </ContentText>
                  <ContentText>
                    <Highlight>Q. 앞으로의 목표는 무엇인가요?</Highlight>
                    <br />
                    A. 단기적으로는 신입 개발자로서 빠르게 현업에 기여하는 것이
                    목표입니다. 이를 위해 다음을 실천 중입니다. 작은 기능이라도
                    끝까지 맡아 배포해보기: 요구사항 분석 → 구현 → 테스트 → 배포
                    사이클을 직접 경험합니다. 테스트와 CI 문화를 익히기: 테스트
                    커버리지와 자동화 파이프라인을 통해 신뢰성 있는 코드를
                    만드는 법을 체득합니다. 팀에서의 커뮤니케이션 스킬 강화:
                    비기술자와의 의사소통, 문서화로 의도를 명확히 전달하는
                    연습을 합니다. 중장기적으로는 풀스택 역량을 갖추어 서비스의
                    기획적·기술적 맥락을 넓게 이해하고 싶습니다. 구체적으로는:
                    백엔드 기본기(REST, GraphQL, Node.js/Express, DB 설계) 를
                    익혀 프론트엔드와 원활히 연동할 수 있게 되고,
                    클라우드·인프라(배포 자동화, 모니터링, 비용 최적화) 를
                    이해해 서비스 운영 관점에서도 가치를 제공하는것이 목표
                    입니다. 무엇보다 중요한 건 “배우려는 태도”라고 생각합니다.
                    신입으로서 빠르게 질문하고 피드백을 흡수하며, 작은 성공을
                    쌓아 팀에 긍정적인 영향을 주는 개발자가 되는 것이 제
                    목표입니다.
                  </ContentText>
                </motion.div>
              )}
            </AnimatePresence>
          </ContentCard>
        </RightPanel>
      </MainContent>
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
  display: flex;
  min-height: 90vh;
  padding: 32px 32px; // Adjusted padding for header
  gap: 48px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 80px 16px 32px;
    gap: 32px;
  }
`;

const LeftPanel = styled(motion.div)`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1024px) {
    flex: 1;
    width: 100%;
    max-width: 600px;
  }
`;

const ProfileSection = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ProfileTitle = styled.h2`
  font-size: 32px;
  font-weight: 300;
  color: #1e293b;
  margin-left: 20px;
  font-family: "Caveat", cursive;
`;

const ProfileSubtitle = styled.p`
  color: #64748b;
  font-size: 16px;
  margin-bottom: 24px;
  margin-left: 24px;
  font-style: italic;
`;

const TabContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex: 1;
`;

const TabButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

const TabButton = styled(motion.button)<{ active: boolean }>`
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  background: ${(props) => (props.active ? mainColor : "transparent")};
  color: ${(props) => (props.active ? "white" : "#64748b")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.active ? mainColor : `${mainColor}20`)};
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
`;

const SkillTag = styled(motion.div)<{ bgColor: string; textColor: string }>`
  padding: 4px 12px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  border: 1px solid ${(props) => props.textColor}40; // Using textColor with alpha
`;

const RightPanel = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 600px;
  }
`;
const PersonalInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`;
const InfoCard = styled(motion.div)`
  background: linear-gradient(135deg, ${mainColor}08, ${mainColor}15);
  border: 1px solid ${mainColor}20;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const InfoIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${mainColor}20;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${mainColor};
`;
const QuoteSection = styled(motion.div)`
  background: linear-gradient(135deg, ${mainColor}10, ${mainColor}20);
  border-left: 4px solid ${mainColor};
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 40px;
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 60px;
    color: ${mainColor}40;
    font-family: serif;
  }
`;

const InfoContent = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 4px;
  }
  p {
    font-size: 16px;
    color: #475569;
    font-weight: 500;
  }
`;
const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex: 1;
`;

const ContentTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ContentText = styled.p`
  color: #475569;
  line-height: 1.8;
  font-size: 16px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Highlight = styled.span`
  color: ${mainColor};
  font-weight: 600;
`;
