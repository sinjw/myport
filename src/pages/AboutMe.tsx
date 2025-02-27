import styled from "styled-components";
import { useState, useEffect } from "react";
import proFile from "../assets/PF.png";
import React from "react";
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
  const [tabAnimate, setTabAnimate] = useState(false);
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
    { name: "Expo", bgColor: "#000020" },
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
                  fontFamily: "Caveat",
                  fontSize: "35px",
                  fontWeight: "bold",
                  color: "#777",
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
          <div
            style={{
              position: "relative",
              width: "80vw",
              left: "20vw",
              right: "5vw",
            }}
          >
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
              <LeftDeco>
                <Introduce animate={Animate}>
                  <AboutTitle>Introduce</AboutTitle>
                  <IntroText>
                    안녕하세요, 프론트엔드 개발자가 되기위해 한 걸음씩
                    쌓아가고있는
                    <span style={{ fontSize: "30px", color: "#00539C" }}>
                      신중원
                    </span>
                    입니다.
                    <br /> 아직은 부족한 부분이 많지만 새로운 것을 시도하는 것과
                    배우는 것을 좋아하기때문에 무엇이든 항상 배워가는
                    마음가짐으로 발전하는 개발자가 되기위해 노력하고 있습니다
                  </IntroText>
                  <br />
                  <IntroText>
                    “기회는 준비된사람이 잡는다” 제가 가장 좋아하는 명언 입니다.
                    기회가 왔을때 그 기회를 잡을 수 있도록 준비되어 있는 사람이
                    되기위해 준비하고 쌓아가려고 항상 노력하고 있습니다.
                  </IntroText>
                </Introduce>
              </LeftDeco>
            )}
            {tabAbout === 2 && (
              <LeftDeco>
                <Introduce animate={Animate}>
                  <AboutTitle>ABOUT ME</AboutTitle>
                  <IntroText>hi</IntroText>
                  <IntroText>h2</IntroText>
                </Introduce>
              </LeftDeco>
            )}
          </div>
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
                  <ExpText>EZEN ACADEMY</ExpText>
                  <ExpText>
                    코딩을 활용한 웹디자인 과정 수료
                    <span>2021.2~2021.8</span>
                  </ExpText>
                  <ExpText>EZEN ACADEMY</ExpText>
                  <ExpText>
                    사원으로 근무 <span>2021.8~2022.3</span>
                  </ExpText>
                  <ExpText>
                    스파르타코딩클럽 Expo를활용한 앱개발 기초 수료료
                    <span>2023.12~2022.2</span>
                  </ExpText>
                  <ExpText>
                    CodeStates 프론트엔드 부트캠프 45기 수료
                    <span>2023.4~2023.10</span>
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
  font-size: 180px;
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
const LeftDeco = styled.div`
  position: absolute;
  top: 2.5vh;
  width: 90%;
  left: 5vw;
  right: 5vw;
  height: 95vh;
  background-color: rgb(45, 45, 45);
  opacity: 1;
  border-radius: 20px 20px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.7);
  @media (max-width: 500px) {
    display: none;
  }
`;
const AboutButton = styled.div<{ tababout: number }>`
  position: absolute;
  width: 3.5vw;
  height: 45px;
  top: 15vh;
  left: 1.5vw;
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
    margin-top: 10vh;
    &img {
      width: 120px;
    }
  }
`;
const ProFileImg = styled.div`
  &::after {
    content: "";
    width: 100px;
    height: 130px;

    z-index: -1;
    border: 1px solid#ccc;
    top: 45px;
    left: 11px;
    border-radius: 5px;
    position: absolute;
  }
`;
const CircleProfile = styled.img`
  transition: all 0.3s;
  border-radius: 0;
  border: 1px solid#ccc;
  border-radius: 5px;
  @media (max-width: 500px) {
    width: 150px;
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
`;
const ExpText = styled.div`
  font-size: 15px;
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
    background-color: white;
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
    padding: 20px 20px;
    max-width: 100%;
    margin-top: 42vh;
    margin-left: 0;
  }
`;
const IntroText = styled.div`
  color: rgb(220, 220, 220);
  position: relative;
  transition: all 0.4s;
  margin-left: 5%;

  &::after {
    content: "";
    width: 0rem;
    transition: all 0.4s;
    position: absolute;
    top: 2rem;
    left: 0;
    border-bottom: 1px solid#ccc;
  }

  color: rgb(199, 199, 199);
  &::after {
    width: 16.2rem;
  }
`;
const TabContianer = styled.div`
  position: absolute;
  left: 3vw;
  top: 50%;

  @media (max-width: 500px) {
    margin-left: 30px;
    height: 260px;
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
`;
const TabContent = styled.div`
  max-width: 300px;
  z-index: 3;
`;
