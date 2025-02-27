import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

interface NavArray {
  id: number;
  path: string;
  iconClass: string;
  classOn: string;
  classOff: string;
  pageName: string;
}

export const Navigate = () => {
  const NavArry: NavArray[] = [
    {
      id: 1,
      path: "/",
      iconClass: "bx bxs-home",
      classOn: "on ",
      classOff: "off",
      pageName: "HOME",
    },
    {
      id: 2,
      path: "/aboutme",
      iconClass: "bx bxs-user-pin",
      classOn: "on ",
      classOff: "off",
      pageName: "ABOUT",
    },
    {
      id: 3,
      path: "/portfolio",
      iconClass: "bx bxs-book-content",
      classOn: "on",
      classOff: "off",
      pageName: "PORTFOLIO",
    },
  ];

  const [focused, setFocused] = useState<number>(1);
  const handeClick = (num: number) => {
    if (num) {
      setFocused(num);
    }
  };

  return (
    <NavContainer>
      {NavArry.map((el) => (
        <LinkStyle
          key={el.iconClass}
          to={el.path}
          className={focused === el.id ? el.classOn : el.classOff}
          onClick={() => handeClick(el.id)}
        >
          <p
            className={focused === el.id ? el.classOn : el.classOff}
            style={{ position: "absolute", right: "0", color: "white" }}
          >
            {el.pageName}
          </p>
          <BxIcons
            key={el.id}
            className={el.iconClass}
            focus={focused}
          ></BxIcons>
        </LinkStyle>
      ))}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  z-index: 13;
  flex-direction: column;
  position: fixed;
  background: transperent;
  border-radius: 10px;
  right: 20px;
  top: 35vh;
  padding-bottom: 7px;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #7b9acc;

    opacity: 0.8;
  }
  &::after {
    border-radius: 20px;
    content: "";
    position: absolute;
    z-index: -3;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 500px) {
    position: fixed;
    bottom: 0px;
    top: 93%;
    height: 40px;
    width: 90vw;
    justify-content: space-evenly;
    flex-direction: row;
    margin: 0 auto;
    opacity: 1;
    background-color: #7b9acc;
  }
`;
const LinkStyle = styled(Link)`
  padding: 10px;

  p {
    font-size: 12px;
    margin-top: 6px;
    width: 50px;
    transform: translateX();
    opacity: 0;
    transition: all 0.4s;
  }
  &.on {
    color: #195190;
  }
  &.off {
    color: white;
  }

  &::before {
    transition: all 0.4s;
    z-index: -1;
    content: "";
    width: 0px;
    padding-top: 10px;
    pdding-bottom: 10px;
    height: 20px;
    border-radius: 10px 10px;
    position: absolute;
    right: 0;
  }
  &:hover {
    color: #195190;
    p {
      transform: translateX(-80px);
      opacity: 1;
    }
    &::before {
      content: "";

      width: 100px;
      padding-top: 10px;
      pdding-bottom: 10px;
      background-color: #7b9acc;
      opacity: 1;
      height: 20px;
      position: absolute;
      right: 45px;
    }
  }

  @media (max-width: 550px) {
    color: white;
    &:hover {
      &::after {
        content: none;
      }
      &::before {
        content: none;
      }
      p {
        display: none;
      }
    }
  }
`;
const BxIcons = styled.i<{ focus: number; key: number }>`
  vertical-align: bottom;

  @media (max-width: 550px) {
  }
`;
