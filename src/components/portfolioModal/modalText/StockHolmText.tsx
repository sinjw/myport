import styled from "styled-components";

export const StockHolmText = () => {
  return (
    <>
      <div style={{ marginTop: 230, position: "relative" }}>
        <TitleText
          style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}
        >
          <p>
            StockHolm은 스웨덴의 수도의 이름을 이용해서 모의 주식 사이트를
            주식(Stock) + 섬(Holm)이라는 의미를 가지도록 표현한 이름입니다.
            <br />
            모의 주식 투자를 목적으로 만들어진 사이트이며 주식시장의 Open API를
            활용해서 주식정보를 받아와 차트로 그려내었습니다.
            <br /> 또한 OAuth2.0을통해 구글로그인 기능과 이메일인증 기능을 구현
            하였습니다.
          </p>
        </TitleText>
        <TitleDeco></TitleDeco>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SkillTitle>사용 기술 및 언어</SkillTitle>
          <p style={{ marginBottom: "20px" }}>
            <Skill>Vite</Skill> <Skill>React</Skill> <Skill>TypeScript</Skill>
            <Skill>Redux</Skill> <Skill>ReactQuery</Skill>
            <Skill>Styled-Component</Skill> <Skill>ChartJS</Skill>
          </p>
          <SkillTitle>작업 내용</SkillTitle>
          <DetailText>
            StockHolm은 현재 주식시장 정보를 기반으로 모의주식 투자를 경험해 볼
            수 있는 사이트입니다.
            <br /> 회원 가입기능으로는 구글로그인과 이메일인증을 통한 회원가입이
            가능하며 회원가입 시 본인이 원하는 만큼의 금액을 갖고 시작 할 수
            있도록 설정했습니다.
            <br /> 이후에 자신의 금액으로 현재 주식시장에서 주식을 매수 및
            매도를 할 수 있도록 하여습니다. <br />
            제가 당담했던 부분은 홈페이지의의 우측 영역에서서
            시장정보,종목정보,커뮤니티 탭 부분들을 구현하였습니다. <br />
            시장정보에는 현재 코스피지수에 대한 api를 이용해서 차트로 구현하였고
            현재 종목에서의 등락률에 따른 랭킹과 오름차순,내림차순으로 정렬 할
            수있도록 구현하였습니다. 관련 뉴스들은 바로 타고 넘어 갈 수있도록
            링크로 연결해두었습니다. 또한 로그인을 하게되면 커뮤니티 기능을 이용
            할 수있게 만들었고 게시판 과 같은 기본적인CRUD와 댓글기능까지
            구현하였습니다.
          </DetailText>
          <SkillTitle>에러사항</SkillTitle>
          <DetailText>
            <span style={{ fontWeight: "bold" }}>[문제점]</span>- 주식API를
            지속적으로 요청해서 받아와야 하기때문에 백엔드에서의 데이터 처리량
            과 신선한 데이터를 지속적으로 업데이트 시켜줘야하는 부분에있어서
            문제가있었습니다
          </DetailText>
          <DetailText>
            <span style={{ fontWeight: "bold" }}>[해결]</span>- API요청 횟수가
            많아지면 백엔드 쪽에서의 부담이 있어서 30분봉단위로 요청하기로
            해결하였습니다 또한 데이터를 지속적으로 업데이트 하는 것은
            ReactQuery를 사용해서 30분단위로 새로운 데이터를 업데이트하고 관리
            할 수 있도록 하였습니다
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
