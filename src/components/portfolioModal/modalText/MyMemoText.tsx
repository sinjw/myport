import styled from "styled-components";
import { useState } from "react";
import MemoScreen1 from "../../../assets/memo1.jpg";
import MemoScreen2 from "../../../assets/memo2.jpg";
import MemoScreen3 from "../../../assets/memo3.jpg";
import MemoScreen4 from "../../../assets/memo4.jpg";
import MemoScreen5 from "../../../assets/memo5.jpg";
export const MyMemoAppText = () => {
  const [modal, onModal] = useState(0);
  const handleClickIMG = (n: number) => {
    onModal(n);
    console.log(modal);
  };
  return (
    <>
      <div style={{ marginTop: 230, position: "relative" }}>
        <TitleText
          style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}
        >
          <p>
            MyMemoApp은 Expo를 이용해서 어플리케이션의 형식으로 만든 기본적인
            기능들만 사용하는 앱입니다.
            <br /> 과거에 배웠던 엑스포를 활용해서 앱을 만들고 베포하기 까지의
            과정을 답습해보고싶어서 복잡하기보단 간단하게 만들게되었습니다.
            <br />
            메모 저장 기능은 AsyncStorage를사용해서 저장 하도록 하였고 캘린더와
            연동시켜서 당일작성한 메모를 캘린더를통해 확인 할 수있는 기능을 구현
            하였습니다.
            <br />
            <br />
          </p>
        </TitleText>
        <TitleDeco></TitleDeco>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SkillTitle>사용 기술 및 언어</SkillTitle>
          <p style={{ marginBottom: "20px" }}>
            <Skill>Expo</Skill> <Skill>React-Native</Skill>{" "}
            <Skill>TypeScript</Skill>
            <Skill>React Native Calendar</Skill>
          </p>
          <SkillTitle>작업 내용</SkillTitle>
          <DetailText>
            처음 계획했던 기능들이 아직 남아있어서 계속 추가하면서 앱을 좀더
            발전 시킬 계획입니다.
            <br /> 여러가지 새로운 아이디어나 기능들이 떠오르게되면 연습하면서
            수정하고 계속 업데이트할 계획입니다.
            <br /> 처음 이 프로젝트를 만들때는 리액트네이티브 문법이나 여러가지
            사용하는 방법들이 떠오르지않아 알아보고 찾아보는데에 시간을 많이
            사용했지만 그래도 재미있게 작업 할 수 있었고 차차 코드를 효율적으로
            바꿔나가면서 지속적으로 다듬어가는 중인 앱 입니다.
          </DetailText>
          <SkillTitle>작업 화면</SkillTitle>
          <DetailScreen>
            <DetailWrapper modal={modal} onClick={() => handleClickIMG(1)}>
              <DetailIMG src={MemoScreen1} />
              <p style={{ textAlign: "center" }}>메인화면</p>
            </DetailWrapper>
            {modal !== 0 && (
              <DetailModalContain>
                <DetailModal>
                  <Bxicons
                    onClick={() => handleClickIMG(0)}
                    className="bx bxs-x-circle"
                  ></Bxicons>
                  {(modal === 1 && (
                    <img style={{ marginTop: 30 }} src={MemoScreen1} />
                  )) ||
                    (modal === 2 && (
                      <img style={{ marginTop: 30 }} src={MemoScreen2} />
                    )) ||
                    (modal === 3 && (
                      <img style={{ marginTop: 30 }} src={MemoScreen3} />
                    )) ||
                    (modal === 4 && (
                      <img style={{ marginTop: 30 }} src={MemoScreen4} />
                    )) ||
                    (modal === 5 && (
                      <img style={{ marginTop: 30 }} src={MemoScreen5} />
                    ))}
                </DetailModal>
              </DetailModalContain>
            )}
            <DetailWrapper modal={modal}>
              <DetailIMG
                style={{ width: "100%" }}
                src={MemoScreen2}
                onClick={() => handleClickIMG(2)}
              />
              <p style={{ textAlign: "center" }}>작성한 메모화면</p>
            </DetailWrapper>
            <DetailWrapper modal={modal}>
              <DetailIMG src={MemoScreen3} onClick={() => handleClickIMG(3)} />
              <p style={{ textAlign: "center" }}> 메모 작성 화면</p>
            </DetailWrapper>
            <DetailWrapper modal={modal}>
              <DetailIMG src={MemoScreen4} onClick={() => handleClickIMG(4)} />
              <p style={{ textAlign: "center" }}>메뉴 화면</p>
            </DetailWrapper>
            <DetailWrapper modal={modal}>
              <DetailIMG src={MemoScreen5} onClick={() => handleClickIMG(5)} />
              <p style={{ textAlign: "center" }}>캘린더 화면</p>
            </DetailWrapper>
          </DetailScreen>
        </div>
      </div>
    </>
  );
};

const TitleDeco = styled.h2`
  margin-top: 50px;
  margin-bottom: 50px;
  &::before {
    content: "";
    width: 60%;
    display: block;
    margin: 0 auto;

    border-top: 1px solid#333;
  }
`;
const TitleText = styled.div`
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;
`;

const SkillTitle = styled.p`
  font-size: 20px;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 600;
`;
const Skill = styled.span`
  border: 1px solid#333;
  background-color: #333;
  color: white;
  font-size: 14px;
  padding: 2px 5px;
  margin-right: 5px;
  border-radius: 6px 1px;
`;

const DetailText = styled.p`
  margin-bottom: 20px;
`;
const DetailScreen = styled.div`
  display: flex;
`;
const DetailWrapper = styled.div<{ modal: number }>`
  padding: 10px;
  margin-right: 10px;
  border-radius: 8px;

  ${(props) =>
    (props.modal === 1 && ``) ||
    (props.modal === 2 && ``) ||
    (props.modal === 3 && ``)}
`;

const DetailIMG = styled.img`
  width: 100%;
  cursor: pointer;
  max-height: 300px;
  &:hover {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.4);
  }
`;

const Bxicons = styled.i`
  font-size: 50px;
  cursor: pointer;
  position: absolute;
  color: rgba(0, 0, 0, 0.5);
  right: -30px;
  top: 3%;
  &:hover {
    color: rgba(0, 0, 0, 0.9);
  }
`;
const DetailModal = styled.div`
  position: relative;
  width: 450px;
  left: 40%;

  @media (max-width: 500px) {
    left: 0;
    width: 90%;
  }
`;
const DetailModalContain = styled.div`
  width: 100%;
  position: fixed;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  left: 0;
  top: 0;

  @media (max-width: 500px) {
    text-align: center;

    img {
      width: 80%;
      padding-top: 15%;
      padding-left: 10%;
    }
  }
`;
