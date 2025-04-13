import styled from "styled-components";

export const PortFolioText = () => {
  return (
    <>
      <div style={{ marginTop: 230, position: "relative" }}>
        <TitleText
          style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}
        >
          <p>
            개인 포트폴리오를 목적으로 만들어진 사이트입니다.
            <br />
            템플릿 소스 나 노션 등 다른 방법을 이용할 수 있지만 개인 사이트를
            만들고싶었습니다.
            <br />
            아직은 부족한 부분이 많이 있지만 저의 성장과함께 바뀌어나가는
            포트폴리오를 만들기위해서 진행했습니다.
          </p>
        </TitleText>
        <TitleDeco></TitleDeco>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SkillTitle>사용 기술 및 언어</SkillTitle>
          <p style={{ marginBottom: "20px" }}>
            <Skill>Vite</Skill> <Skill>React</Skill> <Skill>TypeScript</Skill>
            <Skill>Styled-Component</Skill>
            <Skill>framer-motion</Skill>
          </p>
          <SkillTitle>작업 내용</SkillTitle>
          <DetailText>
            디자인적인 요소는 다른 포트폴리오 사이트들을 많이 참고해서
            작업하였습니다. framer-motion 을사용해서 조금더 동적인 웹사이트를
            만드는 것을 목표로 하였습니다. 아직은 거쳐가는 단계이기 때문에
            지속적으로 업데이트하면서 다듬어서 사용자 친화적인 웹사이트 환경으로
            만들어나가는게 목표입니다.
          </DetailText>
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
