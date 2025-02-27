import styled from "styled-components";
import { Particle } from "../components/particlesContainer";
import { useEffect, useState } from "react";
export const MainPage = () => {
  const [textAnimate, setTextAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setTextAnimate(true), 400);

    return () => {
      setTextAnimate(false);
    };
  }, []);

  return (
    <MainContainer>
      <TextContainer textanimate={textAnimate}>
        <Text>SHINJOONGWON</Text>
        <Text>Frontend developer </Text>
        <br />
        <Text></Text>
      </TextContainer>
      <Particle />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 500px) {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
const Text = styled.li``;

const TextContainer = styled.ul<{ textanimate: boolean }>`
  display: flex;
  z-index: 11;
  flex-direction: column;
  max-width: 700px;
  transition: all 1s;
  text-align: center;
  > :nth-child(1) {
    font-size: 80px;
    opacity: 0;
    transform: translateY(-100px);
    transition: all 0.4s;
    font-family: "Caveat", cursive;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
  }
  > :nth-child(2) {
    font-size: 30px;
    opacity: 0;
    transform: translateX(-100px);
    font-family: "Caveat", cursive;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
  }
  > :nth-child(4) {
    font-size: 20px;
    transition: all 1.2s;
    opacity: 0;
    color: #333;
    transform: translateY(100px);
    font-family: "Jua", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  ${(props) =>
    props.textanimate &&
    `
  > :nth-child(1){
    opacity:1;
    transform:translateY(0);
    transition: all 1s;
    
  }
   > :nth-child(2) {
     transition: all 1.2s;
      opacity: 1;
   
     transform: translateX(0);
  }
  > :nth-child(4) {
   
     transition: all 1.2s;
      opacity: 1;
     transform: translateY(0);
  }
`}

  @media (max-width: 500px) {
    margin-top: 10vh;
    width: 85vw;

    > :nth-child(1) {
      font-size: 45px;
      opacity: 0;
      transform: translateY(-100px);
      transition: all 1s;
    }
    > :nth-child(2) {
      transition: all 1.2s;
      opacity: 0;
      font-size: 35px;
      transform: translateX(-100px);
    }
    > :nth-child(4) {
      transition: all 1.2s;
      opacity: 0;
      font-size: 20px;
      transform: translateY(100px);
    }
    ${(props) =>
      props.textanimate &&
      `
    > :nth-child(1){
      opacity:1;
      transform:translateY(0);
      transition: all 1s;
      
    }
     > :nth-child(2) {
       transition: all 1.2s;
        opacity: 1;
     
       transform: translateX(0);
    }
    > :nth-child(4) {
     
       transition: all 1.2s;
        opacity: 1;
       transform: translateY(0);
    }
  `}
  }
`;
