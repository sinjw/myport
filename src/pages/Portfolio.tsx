import styled from "styled-components";
import { useState } from "react";
import {
  PortFolioModal,
  StockHolmModal,
  MyMemoAppModal,
} from "../components/portfolioModal/Modal";

export default function Portfoilo() {
  const projects = [
    {
      id: 1,
      title: "StockHolm",
      description: "모의 주식 거래를 위한 사이트 입니다",
      type: "Team Project",
    },
    {
      id: 2,
      title: "My Portfolio",
      description: "포트폴리오를 위한 사이트 입니다",
      type: "Solo Project",
    },
    {
      id: 3,
      title: "My Memo",
      description: "간단한 메모장 역할을 하는 앱 입니다",
      type: "Solo Project",
    },
  ];
  const [OnModal, setOnModal] = useState<number | null>(null);
  const handleCloseModal = () => {
    setOnModal(null);
  };
  return (
    <Container>
      <h1
        style={{
          marginLeft: "20vw",
          marginTop: "20vh",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        PROJECT
      </h1>
      <CardContain>
        {projects.map((project) => (
          <Card key={project.id}>
            <div>
              <CardText>{project.title}</CardText>
              <CardText>{project.description}</CardText>
              <CardTextBottom>{project.type}</CardTextBottom>
            </div>
            <HoverCard>
              <p>{project.title}</p>
              <DetailButton onClick={() => setOnModal(project.id)}>
                자세히 보기
              </DetailButton>
            </HoverCard>
          </Card>
        ))}
      </CardContain>
      {OnModal === 1 && (
        <StockHolmModal onClose={handleCloseModal} onModal={OnModal} />
      )}
      {OnModal === 2 && (
        <PortFolioModal onClose={handleCloseModal} onModal={OnModal} />
      )}

      {OnModal === 3 && (
        <MyMemoAppModal onClose={handleCloseModal} onModal={OnModal} />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CardContain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1 1;
`;
const Card = styled.div`
  width: 22%;
  background-color: #7b9acc;
  color: rgb(53, 53, 53);
  padding: 10px;
  margin-right: 20px;
  height: 300px;
  border-radius: 3px;
  transition: all 0.3s;
  overflow: hidden;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    & > :nth-child(1) {
      opacity: 0;
    }
    & > div {
      opacity: 1;
    }
  }
  position: relative;
  @media (max-width: 500px) {
    opacity: 1;
    & > div {
      opacity: 1;
    }
  }
`;
const CardText = styled.p`
  color: #fcf6f5;
`;
const CardTextBottom = styled.p`
  color: #7b9acc;
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 3px 7px;
  font-size: 14px;
  background-color: #fcf6f5;
  border-radius: 7px;
`;
const HoverCard = styled.div`
  z-index: 20;
  opacity: 0;

  margin-top: 20%;
  left: 35%;
  background-color: #7b9acc;
  color: #fcf6f5;
  text-align: center;
`;

const DetailButton = styled.div`
  cursor: pointer;
  padding: 3px 7px;
  font-size: 15px;
  border: 1px solid#fff;
  border-radius: 6px 6px;
  transition: all 0.4s;
  margin-top: 4px;

  &:hover {
    background-color: white;

    color: #7b9acc;
  }
`;
