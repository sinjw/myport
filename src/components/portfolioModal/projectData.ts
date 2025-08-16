
import StockHolmIMG from "../../assets/StockHolmIMG.png";
import PortfolioIMG from "../../assets/PortIMG.png";
import MemoIMG from "../../assets/MemoIMG.png";
import { MyMemoAppText } from "./modalText/MyMemoText";
import { PortFolioText } from "./modalText/MyPortFolioText";
import { StockHolmText } from "./modalText/StockHolmText";

export const projects = [
  {
    id: 1,
    title: "StockHolm",
    image: StockHolmIMG,
    TextComponent: StockHolmText,
    githubLink: "https://github.com/codestates-seb/seb45_main_008.git",
    youtubeLink: "https://youtu.be/sVluSlYsR8g",
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
      height: 400px;
    `,
  },
  {
    id: 2,
    title: "PortFolio",
    image: PortfolioIMG,
    TextComponent: PortFolioText,
    githubLink: "https://github.com/sinjw/myport.git",
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
      height: 400px;
    `,
  },
  {
    id: 3,
    title: "MyMemo",
    image: MemoIMG,
    TextComponent: MyMemoAppText,
    githubLink: "https://github.com/sinjw/MemoApp.git",
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
      height:400px;
    `,
  },
];
