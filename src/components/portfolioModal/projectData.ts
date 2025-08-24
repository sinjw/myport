import StockHolmIMG from "../../assets/StockHolmIMG.png";
import PortfolioIMG from "../../assets/PortIMG.png";
import MemoIMG from "../../assets/MemoIMG.png";
import memo1 from "../../assets/memo1.png";
import memo2 from "../../assets/memo2.png";
import memo3 from "../../assets/memo3.png";
import memo4 from "../../assets/memo4.png";
import memo5 from "../../assets/memo5.png";
import ninewinit from "../../assets/ninewinit.png";
import { MyMemoAppText } from "./modalText/MyMemoText";
import { PortFolioText } from "./modalText/MyPortFolioText";
import { StockHolmText } from "./modalText/StockHolmText";

export const projects = [
  {
    id: 1,
    title: "StockHolm",
    image: StockHolmIMG,
    description: "주식 종합 정보 플랫폼",
    type: "Web",
    TextComponent: StockHolmText,
    githubLink: "https://github.com/codestates-seb/seb45_main_008.git",
    youtubeLink: "https://youtu.be/sVluSlYsR8g",
    galleryImages: [StockHolmIMG], // Placeholder images
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
      "실시간 주식 데이터를 활용한 모의 투자 플랫폼입니다. 사용자들이 가상의 자금으로 실제 주식 시장과 동일한 환경에서 투자 경험을 쌓을 수 있도록 설계되었습니다.",
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

    yutubeLink: "",
  },
  {
    id: 2,
    title: "PortFolio",
    image: PortfolioIMG,
    description: "개인 포트폴리오 웹사이트",
    type: "Web",
    TextComponent: PortFolioText,
    githubLink: "https://github.com/sinjw/myport.git",
    galleryImages: [PortfolioIMG, memo1, memo2], // Placeholder images
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
      "개인 포트폴리오를 효과적으로 보여주기 위한 반응형 웹사이트입니다. 밝은 디자인과 부드러운 애니메이션으로 사용자 경험을 향상시켰습니다.",
    period: "2024.04 - 2024.05",
    team: "1명 (개인 프로젝트)",
    role: "프론트엔드드 개발",
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
    githubLink: "https://github.com/sinjw/MemoApp.git",
    galleryImages: [memo1, memo2, memo3, memo4, memo5],
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
      "일상의 아이디어와 할 일을 효율적으로 관리할 수 있는 메모 애플리케이션입니다. 직관적인 UI와 빠른 검색 기능으로 생산성을 높였습니다.",
    period: "2024.06 - 2024.07",
    team: "1명 (개인 프로젝트)",
    role: "프론트엔드 개발",
    techStack: ["React-native", "expo", "Async-storage", "Figma"],
    features: ["실시간 메모 저장", "카테고리별 분류", "검색 및 필터링"],
  },
  {
    id: 4,
    title: "ninewinit",
    image: ninewinit,
    description: "광고대행사",
    type: "web",
    TextComponent: MyMemoAppText,
    githubLink: "https://github.com/sinjw/MemoApp.git",
    galleryImages: [memo1, memo2, memo3, memo4, memo5],
    teamInfo: ["Team", "web", "3인"],
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
      "데이터 분석 기반 매출 성장 최적화 전문 서비스 매체별 데이터 분석 기반 마케팅 전략 도출 전문 광고대행",
    period: "2024.06 - 2024.07",
    team: "1명 (개인 프로젝트)",
    role: "프론트엔드 개발",
    techStack: ["Nextjs", "React-query", "tailwindcss"],
    features: ["상품/키워드분석", "보고서 자동화"],
  },
];

export type Project = (typeof projects)[0];
