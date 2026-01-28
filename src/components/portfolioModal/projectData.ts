import StockHolmIMG from "../../assets/stockholm.png";
import PortfolioIMG from "../../assets/PortIMG.png";
import MemoIMG from "../../assets/MemoIMG.png";
import memoMian from "../../assets/memoMain.jpg";
import memo1 from "../../assets/memo1.jpg";
import memo2 from "../../assets/memo2.jpg";
import memo3 from "../../assets/memo3.jpg";
import memo4 from "../../assets/memo4.jpg";
import memo5 from "../../assets/memo5.jpg";
import about from "../../assets/portabout.png";
import project from "../../assets/portproject.png";
import ninewinit from "../../assets/ninewinit.png";
import ninewinit2 from "../../assets/ninewinit2.png";
import ninewinit3 from "../../assets/ninewinit3.png";
import ninewinit4 from "../../assets/ninewinit4.png";
import gogumeIMG from "../../assets/ic_logo_txt.svg";
import stock2 from "../../assets/stock2.png";
import stock3 from "../../assets/stock3.png";
import stock4 from "../../assets/stock4.png";
import stock5 from "../../assets/stock5.png";
import { MyMemoAppText } from "./modalText/MyMemoText";
import { PortFolioText } from "./modalText/MyPortFolioText";
import { StockHolmText } from "./modalText/StockHolmText";

export const projects = [
  {
    id: 1,
    title: "StockHolm",
    image: StockHolmIMG,
    description: "모의 주식 투자 플랫폼",
    type: "Web",
    TextComponent: StockHolmText,
    webLink: "",
    githubLink: "https://github.com/codestates-seb/seb45_main_008.git",
    youtubeLink: "https://youtu.be/sVluSlYsR8g",
    galleryImages: [StockHolmIMG, stock2, stock3, stock4, stock5], // Placeholder images
    teamInfo: ["Team", "Web", "7인"],
    imgWrapperStyle: `
      padding: 10px 10px;
      position: absolute;
      width: 50%;
      background-color: #f3f3f3;
      top: 240px;
      left: 25%;
      border: 1px solid#ccc;
      border-radius: 20px 20px;
    `,
    modalTopStyle: `
      background:linear-gradient(rgba(219, 91, 91, 1), rgba(220, 21, 21, 1));
      height: 100px;
      color:white;
    `,

    fullDescription:
      "StockHolm은 스웨덴의 수도의 이름을 이용해서 모의 주식 사이트를 주식(Stock) + 섬(Holm)이라는 의미를 가지도록 표현한 이름입니다. 모의 주식 투자를 목적으로 만들어진 사이트이며 주식시장의 Open API를활용해서 주식정보를 받아와 차트로 그려내었습니다. 또한 OAuth2.0을통해 구글로그인 기능과 이메일인증 기능을 구현하였습니다.",
    period: "2024.01 - 2024.03",
    team: "6명 (프론트엔드 3명, 백엔드 3명)",
    role: "프론트엔드 개발",
    techStack: [
      "React",
      "TypeScript",
      "Styled-Components",
      "Chart.js",
      "React-Query",
    ],
    features: [
      "실시간 주식 가격 차트",
      "실시간 주식 거래래",
      "거래 내역 및 수익률 분석",
      "랭킹 시스템",
    ],
  },
  {
    id: 2,
    title: "PortFolio",
    image: PortfolioIMG,
    description: "개인 포트폴리오 웹사이트",
    type: "Web",
    TextComponent: PortFolioText,
    webLink: "https://jwsport.vercel.app/portfolio",
    githubLink: "https://github.com/sinjw/myport.git",
    youtubeLink: "",
    galleryImages: [PortfolioIMG, about, project], // Placeholder images
    teamInfo: ["Solo", "Web", "1인"],
    imgWrapperStyle: `
      padding: 10px 10px;
      position: absolute;
      width: 50%;
      background-color: #f3f3f3;
      top: 240px;
      left: 25%;
      border: 1px solid#ccc;
      border-radius: 20px 20px;
    `,
    modalTopStyle: `
      background:linear-gradient(rgb(141, 164, 255), rgb(54, 92, 186));
      height: 100px;
      color:white;
    `,
    fullDescription:
      "개인 포트폴리오를 목적으로 만들어진 사이트입니다.템플릿 소스 나 노션 등 다른 방법을 이용할 수 있지만 개인 사이트를만들고싶었습니다. 아직은 부족한 부분이 많이 있지만 저의 성장과함께 바뀌어나가는 포트폴리오를 만들기위해서 진행했습니다.",
    period: "2025.08 - 2025.08",
    team: "1명 (개인 프로젝트)",
    role: "프론트엔드 개발",
    techStack: ["React", "TypeScript", "Framer Motion", "Styled-Components"],
    features: ["반응형 디자인", "부드러운 페이지 전환", "프로젝트 필터링"],
  },
  {
    id: 3,
    title: "MyMemo",
    image: MemoIMG,
    description: "간단한 메모 애플리케이션",
    type: "App",
    TextComponent: MyMemoAppText,
    webLink: "",
    githubLink: "https://github.com/sinjw/MemoApp.git",
    youtubeLink: "",
    galleryImages: [memoMian, memo1, memo2, memo3, memo4, memo5],
    teamInfo: ["Solo", "App", "1인"],
    imgWrapperStyle: `
      padding: 10px 10px;
      position: absolute;
      background-color: #f3f3f3;
      top: 240px;
      width: 26%;
      left: 36%;
      border: 1px solid#ccc;
      border-radius: 20px 20px;
    `,
    modalTopStyle: `
      background:linear-gradient(rgb(227, 171, 143), rgb(221, 156, 118));
      height:100px;
      color:white;
    `,
    fullDescription:
      "일상의 아이디어와 할 일을 효율적으로 관리할 수 있는 메모 애플리케이션입니다. 직관적인 UI와 검색기능 및 카테고리 기능으로 편리함을 높였습니다.",
    period: "2025.06.-",
    team: "1명 (개인 프로젝트)",
    role: "프론트엔드 개발",
    techStack: ["React-native", "expo", "Async-storage", "Figma"],
    features: [
      "실시간 메모 저장",
      "카테고리별 분류",
      "검색 및 필터링",
      "이미지 저장",
    ],
  },

  {
    id: 4,
    title: "ninewinit",
    image: ninewinit,
    description: "광고대행사",
    type: "web",
    TextComponent: MyMemoAppText,
    webLink: "https://ninewinit.store/",
    githubLink: "https://github.com/hiperrank01/Frontend_250625",
    youtubeLink: "",
    galleryImages: [ninewinit, ninewinit2, ninewinit3, ninewinit4],
    teamInfo: ["Team", "web", "2인(프론트1명,백엔드1명)"],
    imgWrapperStyle: `
      padding: 10px 10px;
      position: absolute;
      background-color: #f3f3f3;
      top: 240px;
      width: 26%;
      left: 36%;
      border: 1px solid#ccc;
      border-radius: 20px 20px;
    `,
    modalTopStyle: `
      background:linear-gradient(rgb(32, 32, 32), rgb(87, 87, 87));
      height:100px;
      color:white;
    `,
    fullDescription:
      "데이터 분석 기반 매출 및 매체별 데이터 분석 마케팅 전략 전문 광고대행 서비스입니다",
    period: "2025.06 -",
    team: "2명 (프론트1명,백엔드1명)",
    role: "프론트엔드 개발",
    techStack: ["Nextjs", "React-query", "tailwindcss"],
    features: ["상품/키워드분석", "보고서 자동화"],
  },
  {
    id: 5,
    title: "GOGUME",
    image: gogumeIMG,
    description: "쇼핑몰 사이트",
    type: "web/app",
    TextComponent: MyMemoAppText,
    webLink: "",
    githubLink: "",
    youtubeLink: "",
    galleryImages: [],
    teamInfo: ["Team", "web", "5인(프론트2명,백엔드3명)"],
    imgWrapperStyle: `
      padding: 10px 10px;
      position: absolute;
      background-color: #f3f3f3;
      top: 240px;
      width: 26%;
      left: 36%;
      border: 1px solid#ccc;
      border-radius: 20px 20px;
    `,
    modalTopStyle: `
      background:linear-gradient(rgb(32, 32, 32), rgb(87, 87, 87));
      height:100px;
      color:white;
    `,
    fullDescription:
      "아직 출시되지 않은 사이트 입니다 출시 후 추가 예정입니다. 사이트전체를 관리하는 관리자페이지를 작업하였습니다.",
    period: "2026.12 -",
    team: "5명 (프론트2명,백엔드3명)",
    role: "프론트엔드 개발",
    techStack: ["Nextjs", "React-query", "tailwindcss"],
    features: ["쇼핑몰", "관리자 페이지"],
  },
];

export type Project = (typeof projects)[0];
