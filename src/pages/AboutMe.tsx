import styled from "styled-components";
import { useState, useEffect } from "react";
import proFile from "../assets/PF.png";
import React from "react";
import { AboutMeText } from "../components/aboutTabs/aboutMeText";
interface TechProps {
  bgColor: string;
}
export const AboutMe = () => {
  const InfoMenu = [
    { id: 1, tabs: "Skills" },
    { id: 2, tabs: "Experience" },
  ];

  const [Animate, setAnimate] = useState(false);
  const [tabAbout, setTabAbout] = useState<number>(1);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
    setAnimate(false);
  }, []);

  const [tabButton, setTabButton] = useState<number>(1);

  const handleOnClick = (n: number) => {
    setTabButton(n);
  };
  const handleClickAbout = () => {
    setTabAbout(1);
  };
  const handleClickQA = () => {
    setTabAbout(2);
  };
  const techs = [
    { name: "HTML5", bgColor: "#f16529" },
    { name: "CSS", bgColor: "#2965f1" },
    { name: "JavaScript", bgColor: "#f7df1e" },
    { name: "TypeScript", bgColor: "#3178c6" },
    { name: " React", bgColor: "#61DAFB" },
    { name: "Styled-Component", bgColor: "#DB7093" },
    { name: "Expo", bgColor: "#339999" },
    { name: "Figma", bgColor: "#F24E1E" },
    { name: "PhotoShop", bgColor: "#31A8FF" },
    { name: "illerstrator", bgColor: "#FF9A00" },
  ];
  return (
    <>
      <AboutContainer>
        <IntroduceContainer>
          <NameText animate={Animate}>
            <ProFileImg>
              <p
                style={{
                  marginBottom: "-9px",
                  fontFamily: "IBM Plex Sans KRsans-serif",
                  fontSize: "35px",
                  fontWeight: "bold",
                  color: "#777",
                  marginLeft: "-17px",
                }}
              >
                PROFILE
              </p>
              <CircleProfile src={proFile} />
              <p
                style={{
                  fontSize: "18px",
                  marginLeft: "0px",
                  fontFamily: "Caveat",
                }}
              >
                Front-end developer
              </p>
            </ProFileImg>
            <div style={{ display: "flex", alignItems: "center" }}></div>
          </NameText>
          <RightContents>
            <AboutButton onClick={handleClickAbout} tababout={tabAbout}>
              <i
                style={{
                  fontSize: "40px",
                  color: "white",
                  marginLeft: "10px",
                  marginTop: "3px",
                }}
                className="bx bx-message-square-dots"
              ></i>
            </AboutButton>
            <QuestionButton onClick={handleClickQA} tababout={tabAbout}>
              <i
                style={{
                  fontSize: "40px",
                  color: "white",
                  marginLeft: "10px",
                  marginTop: "3px",
                }}
                className="bx bx-question-mark"
              ></i>
            </QuestionButton>
            {tabAbout === 1 && (
              <RightBG>
                <Introduce animate={Animate}>
                  <AboutTitle>Introduce</AboutTitle>
                  <IntroText
                    className={`${tabAbout === 1 ? "onTab" : "outTab"}`}
                  >
                    안녕하세요, 프론트엔드 개발자
                    <span style={{ fontSize: "30px", color: "#fff" }}>
                      신중원
                    </span>
                    입니다. <br />
                    아직 배울 것이 많지만, 새로운 도전을 즐기고 끊임없이
                    성장하는 개발자가 되기 위해 노력하고 있습니다.
                    <br />
                  </IntroText>
                  <br />
                  <IntroText
                    className={`${tabAbout === 1 ? "onTab" : "outTab"}`}
                  >
                    저는 "기회는 준비된 사람이 잡는다"라는 말을 좋아합니다.
                    기회는 우연히 찾아오는 것이 아니라, 철저한 준비와 꾸준한
                    노력 속에서 비로소 내 것이 된다고 믿기 때문입니다. 언제든
                    기회를 잡을 수 있도록 배움을 멈추지 않고, 경험을 쌓아가며,
                    발전하는 개발자가 되겠습니다.
                  </IntroText>
                </Introduce>
              </RightBG>
            )}
            {tabAbout === 2 && (
              <RightBG>
                <Introduce animate={Animate}>
                  <AboutTitle>ABOUT ME</AboutTitle>
                  <AboutText>
                    <AboutMeText />
                  </AboutText>
                </Introduce>
              </RightBG>
            )}
          </RightContents>
          <TabContianer>
            <TabBox>
              {InfoMenu.map((el) => (
                <React.Fragment key={el.id}>
                  <InfoTab
                    tabButton={tabButton}
                    className={`${tabButton === el.id ? "on" : "off"}`}
                    onClick={() => handleOnClick(el.id)}
                  >
                    {el.tabs}
                  </InfoTab>
                </React.Fragment>
              ))}
            </TabBox>
            <TabContent>
              {tabButton === 1 && (
                <>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {techs.map((el, index) => (
                      <TechName key={index} bgColor={el.bgColor}>
                        {el.name}
                      </TechName>
                    ))}
                  </div>
                </>
              )}
              {tabButton === 2 && (
                <>
                  <ExpText>
                    <span
                      style={{
                        backgroundColor: "#333",
                        color: "white",
                        fontSize: "13px",
                        borderRadius: "3px",
                        padding: "2px 6px",
                        margin: "3px 3px",
                      }}
                    >
                      EZEN
                    </span>
                    <p style={{ fontWeight: "500", display: "inline" }}>
                      2021~2022
                    </p>
                  </ExpText>
                  <ExpText>- 코딩을 활용한 웹디자인 과정 수료</ExpText>
                  <ExpText></ExpText>
                  <ExpText>- 사원으로 근무</ExpText>

                  <ExpText>
                    <span
                      style={{
                        backgroundColor: "#333",
                        color: "white",
                        fontSize: "13px",
                        borderRadius: "3px",
                        padding: "2px 6px",
                        margin: "3px 3px",
                      }}
                    >
                      CodeStates
                    </span>{" "}
                    <p style={{ fontWeight: "500", display: "inline" }}>
                      2023~2024
                    </p>
                    <br />- 프론트엔드 부트캠프 45기 수료{" "}
                  </ExpText>
                  <ExpText>
                    <span
                      style={{
                        backgroundColor: "#333",
                        color: "white",
                        fontSize: "13px",
                        borderRadius: "3px",
                        padding: "2px 6px",
                        margin: "3px 3px",
                      }}
                    >
                      SpartaCodingClub
                    </span>{" "}
                    <br />- Expo를활용한 앱개발 기초 수료
                  </ExpText>
                </>
              )}
              {tabButton === 3 && <div>etc.</div>}
            </TabContent>
          </TabContianer>
          <BackgroudText>
            <p>ABOUT ME </p>
          </BackgroudText>
        </IntroduceContainer>
        <div style={{ height: 100 }}></div>
      </AboutContainer>
    </>
  );
};
const BackgroudText = styled.div`
  position: absolute;
  top: 60%;

  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  font-size: 150px;
  font-weight: bold;
  right: 0;
  opacity: 0.1;
  z-index: 1;

  @media (max-width: 500px) {
    display: none;
  }
`;
const AboutContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

const RightContents = styled.div`
  position: relative;
  width: 80vw;
  left: 20vw;
  right: 5vw;
  @media (max-width: 500px) {
    position: static;

    height: 100vh;
    width: 100vw;
  }
`;
const RightBG = styled.div`
  position: absolute;
  top: 2.5vh;
  width: 90%;
  left: 5vw;
  right: 5vw;
  height: 95vh;
  background-color: rgb(45, 45, 45);
  opacity: 1;
  border-radius: 8px 10px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.7);
  @media (max-width: 500px) {
    width: 100%;
    height: 100vh;
    position: static;
  }
`;
const AboutButton = styled.div<{ tababout: number }>`
  position: absolute;
  width: 3.5vw;
  height: 45px;
  top: 15vh;
  left: 1.4vw;
  z-index: 3;
  border: 1px solid transparent;

  border-radius: 10px 0 0 10px;
  transition: border 1s;
  background-color: #ccc;

  transition: all.4s;
  &:hover {
    animation: drawBorder 1s forwards;
  }
  ${(props) => props.tababout === 1 && `background-color:rgb(45, 45, 45);`}

  @media(max-width:500px) {
    top: 100px;
    left: 10px;
    width: 60px;
    border-radius: 10px 10px 0 0;
  }
`;
const QuestionButton = styled.div<{ tababout: number }>`
  position: absolute;
  transition: all.4s;
  width: 3.5vw;
  height: 45px;
  top: 22vh;
  left: 1.5vw;
  z-index: 3;
  background-color: #ccc;

  border-radius: 10px 0 0 10px;

  ${(props) => props.tababout === 2 && `background-color:rgb(45, 45, 45);`}
  @media(max-width:500px) {
    top: 102px;
    left: 75px;
    width: 60px;
    border-radius: 10px 10px 0 0;
  }
`;
const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const AboutTitle = styled.div`
  margin-top: 20px;
  margin-left: 5%;
  margin-bottom: 20px;
  font-size: 20px;
  color: rgb(208, 209, 210);
  font-weight: 800;
  margin-bottom: 20%;
  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;
const NameText = styled.div<{ animate: boolean }>`
  font-size: 30px;
  position: absolute;
  left: 5vw;
  margin-top: 22vh;
  opacity: 0;
  transition: all 1s;
  transform: translateX(-200px);
  ${(props) =>
    props.animate &&
    `
  transform:translateX(0);
    opacity:1;
    `}
  @media (max-width: 500px) {
    position: static;
    margin-top: 147px;
    text-align: center;
    ::after {
      display: none;
    }
  }
`;
const ProFileImg = styled.div`
  &::after {
    content: "";
    width: 100px;
    height: 132px;

    z-index: -1;
    border: 1px solid#ccc;
    top: 50px;
    left: 11px;
    border-radius: 5px;
    position: absolute;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const CircleProfile = styled.img`
  transition: all 0.3s;
  border-radius: 0;
  border: 1px solid#ccc;
  border-radius: 5px;
  @media (max-width: 500px) {
    display: none;
  }
`;
const InfoTab = styled.div<{ tabButton: number }>`
  display: flex;
  font-family: "Noto Sans KR", sans-serif;

  font-weight: bold;
  font-size: 17px;
  flex-direction: row;
  color: #333;
  position: relative;
  margin-right: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  &.off {
    &::after {
      content: "";
      position: absolute;
      width: 1rem;
      height: 3px;
      background-color: #333;
      border-radius: 15px;
      bottom: -8px;
      left: 0;

      transition: all 0.4s;
    }
    transition: all 0.4s;
  }
  &.on {
    transition: all 0.4s;

    &::after {
      content: "";
      position: absolute;
      transition: all 0.4s;
      width: 100%;
      height: 3px;
      background-color: #333;
      border-radius: 15px;
      left: 0;
      bottom: -8px;
    }
  }

  ${(props) =>
    props.tabButton &&
    `

  `}
  @media(max-width:500px) {
    position: relative;
  }
`;
const ExpText = styled.div`
  font-size: 15px;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;
`;
const Introduce = styled.div<{ animate: boolean }>`
  font-size: 21px;
  max-width: 90%;

  position: relative;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #ccc;
    position: absolute;
    top: 40px;
    left: 5%;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgb(45, 45, 45);
    top: 0;
    left: 0;
    transform: scaleX(1);
    transform-origin: 0% 0%;
    transition: all 1s;

    ${(props) =>
      props.animate &&
      `
      transform: scaleX(0);
    transform-origin: 0% 0%;
    `}
  }
  @media (max-width: 500px) {
    position: static;
    padding: 20px 20px;
    max-width: 100%;

    margin-left: 0;
  }
`;
const IntroText = styled.div`
  transition: all 0.4s;

  opacity: 1;
  color: rgb(220, 220, 220);
  position: relative;
  transition: all 0.4s;
  margin-left: 5%;
  font-size: 20px;

  color: rgb(199, 199, 199);
  &::after {
    width: 16.2rem;
  }
  @media (max-width: 500px) {
    position: static;
    padding: 20px 20px;
  }
`;
const AboutText = styled.div`
    transition: all 0.4s;
    opacity: 1;
    color: rgb(220, 220, 220);
    position: relative;
    transition: all 0.4s;
    margin-left: 5%;
    
  }
  @media(max-width:500px){
      margin-top:0px;
      }
`;
const TabContianer = styled.div`
  position: absolute;
  left: 3vw;
  top: 400px;
  max-width: 20vw;

  @media (max-width: 500px) {
    margin-left: 30px;
    max-width: 90%;
    position: static;
  }
`;
const TabBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const TechName = styled.p<TechProps>`
  background-color: ${(props) => props.bgColor};
  background-opacity: 0.2;
  border-radius: 8px;
  margin-right: 5px;
  margin-bottom: 8px;
  padding: 2px 7px 2px 7px;
  font-size: 13px;
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.3);
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;
  color: black;
`;
const TabContent = styled.div`
  max-width: 300px;
  width: 100%;
  z-index: 3;
  @media (max-width: 500px) {
    width: 100%;
    max-width: 100%;

    margin: 0 auto;
  }
`;
