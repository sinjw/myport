import styled from "styled-components";
export const AboutMeText = () => {
  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <Qtext> Q. 프론트엔드를 시작하게 된 이유?</Qtext>
        <MeText>
          처음 시작은 웹디자인 수업을 받으면서 HTML CSS JavaScript를 접하면서
          였습니다. <br />
          디자인을 진행하는 과정보단 만든디자인을 직접 상호작용하게끔 코딩을
          해나가는 작업이 더 즐거웠습니다. <br />좀 더 동적인 웹 사이트를 만들고
          싶은 욕심이 생기면서 만들어가는 과정에서 코딩을하고 생각하고 고민하는
          부분이 재미있게 느껴졌기때문에 시작하게 되었습니다.
        </MeText>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <Qtext>Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?</Qtext>
        <MeText>
          일은 제일처음 시작하는 부분이 가장중요 하고, 또한 일을 시작하기 전에
          전체적인 밑그림과 우선순위를 잘 정하는것이 중요하다고 생각합니다.
          <br /> 우선순위를 잘 정하고 일의 기본적인 밑그림을 잘 그리면 실수가
          줄어들고 업무효율이 높아진다고 생각합니다.
        </MeText>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Qtext>Q. 자기계발을 위해 어떤 것들을 해왔는지?</Qtext>
        <MeText>
          새로운 트렌드에 뒤쳐지지 않기위해서, 프론트엔드 관련 자료들을
          찾아보면서 학습하고 있습니다. 최신 기술들에 관해서는 주로 유튜브를
          통해서 접하고 자세한 부분은 공식문서나 구글링을 통해 한번더 확인하면서
          사용방법이나 작동 원리에대해 공부하고 있습니다.
        </MeText>
      </div>
    </div>
  );
};
const Qtext = styled.p`
  margin-bottom: 10px;
`;
const MeText = styled.p`
  font-size: 17px;
`;
