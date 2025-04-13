import styled from "styled-components";
import { StockHolmText } from "./modalText/StockHolmText";
import { PortFolioText } from "./modalText/MyPortFolioText";
import StockHolmIMG from "../../assets/StockHolmIMG.png";
import PortfolioIMG from "../../assets/PortIMG.png";
import { useState } from "react";
import MemoIMG from "../../assets/MemoIMG.png";
import { MyMemoAppText } from "./modalText/MyMemoText";
type StockHolmModalProps = {
  onClose: () => void; // onClose는 함수 타입
  onModal: number | null; // onModal은 숫자 타입
};
export const StockHolmModal = ({ onClose, onModal }: StockHolmModalProps) => {
  const [Etc, setEtc] = useState(false);

  const handleClickSetting = () => {
    setEtc(!Etc);
  };
  return (
    <MainContainerModal>
      <div></div>
      <ModalCloseButton>
        <Bxicons onClick={onClose} className="bx bxs-x-circle"></Bxicons>
        <br />
        <BxDot
          onClick={handleClickSetting}
          className="bx bx-dots-vertical-rounded"
        ></BxDot>
        <GitHubButton
          etc={Etc}
          href="https://github.com/codestates-seb/seb45_main_008.git"
          target="_blank"
        >
          <i className="bx bxl-github"></i>
        </GitHubButton>
        <YoutubeButton
          etc={Etc}
          href="https://youtu.be/sVluSlYsR8g"
          target="_blank"
        >
          <i className="bx bxl-youtube"></i>
        </YoutubeButton>
      </ModalCloseButton>
      <ModalContent>
        <ModalMain>
          <ModalTop onModal={onModal}>
            <h2 style={{ color: "#fcfcfc" }}>StockHolm</h2>
            <ImgWrapper>
              <img
                src={StockHolmIMG}
                style={{
                  borderRadius: "20px 20px",
                  width: "100%",
                }}
              />
            </ImgWrapper>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ModalTopText>Team</ModalTopText>
              <ModalTopText>Web</ModalTopText>
              <ModalTopText>7인</ModalTopText>
            </div>
          </ModalTop>

          <StockHolmText />
        </ModalMain>
      </ModalContent>
    </MainContainerModal>
  );
};

export const PortFolioModal = ({ onClose, onModal }: StockHolmModalProps) => {
  const [Etc, setEtc] = useState(false);

  const handleClickSetting = () => {
    setEtc(!Etc);
  };
  return (
    <MainContainerModal>
      <ModalCloseButton>
        <Bxicons onClick={onClose} className="bx bxs-x-circle"></Bxicons>
        <br />
        <BxDot
          onClick={handleClickSetting}
          className="bx bx-dots-vertical-rounded"
        ></BxDot>
        <GitHubButton etc={Etc}>
          <i className="bx bxl-github"></i>
        </GitHubButton>
      </ModalCloseButton>
      <ModalContent>
        <ModalMain>
          <ModalTop onModal={onModal}>
            <h2 style={{ color: "#fcfcfc" }}>PortFolio</h2>
            <ImgWrapper>
              <img
                src={PortfolioIMG}
                style={{
                  borderRadius: "20px 20px",
                  width: "100%",
                }}
              />
            </ImgWrapper>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ModalTopText>Solo</ModalTopText>
              <ModalTopText>Web</ModalTopText>
              <ModalTopText>1인</ModalTopText>
            </div>
          </ModalTop>
          <PortFolioText />
        </ModalMain>
      </ModalContent>
    </MainContainerModal>
  );
};
export const MyMemoAppModal = ({ onClose, onModal }: StockHolmModalProps) => {
  const [Etc, setEtc] = useState(false);

  const handleClickSetting = () => {
    setEtc(!Etc);
  };
  return (
    <MainContainerModal>
      <ModalCloseButton>
        <Bxicons onClick={onClose} className="bx bxs-x-circle"></Bxicons>
        <br />
        <BxDot
          onClick={handleClickSetting}
          className="bx bx-dots-vertical-rounded"
        ></BxDot>
        <GitHubButton etc={Etc}>
          <i className="bx bxl-github"></i>
        </GitHubButton>
      </ModalCloseButton>
      <ModalContent>
        <ModalMain>
          <ModalTop onModal={onModal}>
            <h2 style={{ color: "#fcfcfc" }}>MyMemo</h2>
            <ImgWrapper2>
              <img
                src={MemoIMG}
                style={{
                  borderRadius: "20px 20px",
                  width: "100%",
                }}
              />
            </ImgWrapper2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ModalTopText>Solo</ModalTopText>
              <ModalTopText>App</ModalTopText>
              <ModalTopText>1인</ModalTopText>
            </div>
          </ModalTop>
          <MyMemoAppText />
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
  position: absolute;

  top: 0;
  backdrop-filter: blur(5px);
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(238, 251, 255, 0.8);
  max-height: 100vh;
  z-index: 3;
`;
const ModalCloseButton = styled.div`
  position: absolute;
  right: 7vw;
  top: 80px;
`;

const ModalContent = styled.div`
  margin: 0 auto;
  overflow-x: hidden;
  background-color: rgba(100, 100, 100, 0.2);
  width: 100vw;
  height: 100vh;
`;
const ModalTop = styled.div<{ onModal: number | null }>`
  width: 100%;
  height: 200px;
  margin-top: 40px;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${(props) =>
    (props.onModal === 1 &&
      `background:linear-gradient(rgba(219, 91, 91, 1), rgba(220, 21, 21, 1));height: 400px;`) ||
    (props.onModal === 2 &&
      `background:linear-gradient(rgb(141, 164, 255), rgb(54, 92, 186));height: 400px;`) ||
    (props.onModal === 3 &&
      `background:linear-gradient(rgb(227, 171, 143), rgb(221, 156, 118));height:400px;`)}
`;

const ImgWrapper = styled.div`
  padding: 10px 10px;
  position: absolute;
  width: 50%;
  background-color: #f3f3f3;
  top: 240px;
  left: 25%;
  border: 1px solid#ccc;
  border-radius: 20px 20px;
`;
const ImgWrapper2 = styled.div`
  padding: 10px 10px;
  position: absolute;

  background-color: #f3f3f3;
  top: 240px;
  width: 26%;
  left: 36%;
  border: 1px solid#ccc;
  border-radius: 20px 20px;
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
`;

const YoutubeButton = styled.a<{ etc: boolean }>`
  transform: translateY(0px);
  opacity: 0;
  position: absolute;
  transition: all 0.4s;
  z-index: -1;
  font-size: 34px;
  color: rgba(255, 0, 0, 0.8);
  border: 1px solid#900;
  border-radius: 50% 50%;
  padding: 0 9px;
  cursor: pointer;
  left: 0;
  &:hover {
    background-color: rgba(255, 0, 0, 0.8);
    color: #fff;
    border: 1px solid#900;
  }
  ${(props) =>
    props.etc === true &&
    `opacity:1;
    transform:translateY(110px);
    
   z-index: 0;
    `};
`;

const GitHubButton = styled.a<{ etc: boolean }>`
  transform: translateY(0px);
  opacity: 0;
  position: absolute;
  left: 0;
  cursor: pointer;
  transition: all 0.4s;
  z-index: -1;
  font-size: 34px;
  border: 1px solid#333;
  border-radius: 50% 50%;
  padding: 0 9px;
  color: rgba(0, 0, 0, 1);
  &:hover {
    background-color: #333;
    color: #fff;
  }
  ${(props) =>
    props.etc === true &&
    `
    transform:translateY(55px);
    opacity: 1;
   z-index: 0;
    `};
`;
