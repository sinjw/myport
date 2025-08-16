import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

interface NavArray {
  id: number;
  path: string;
  iconClass: string;
  pageName: string;
}

export const Navigate = () => {
  const location = useLocation();

  const NavArry: NavArray[] = [
    {
      id: 1,
      path: "/",
      iconClass: "bx bxs-home",
      pageName: "HOME",
    },
    {
      id: 2,
      path: "/aboutme",
      iconClass: "bx bxs-user-pin",
      pageName: "ABOUT",
    },
    {
      id: 3,
      path: "/portfolio",
      iconClass: "bx bxs-book-content",
      pageName: "PORTFOLIO",
    },
  ];

  return (
    <Navigation>
      {NavArry.map((el) => (
        <NavButton
          key={el.id}
          to={el.path}
          className={location.pathname === el.path ? "on" : "off"}
          active={location.pathname === el.path}
        >
          <p>{el.pageName}</p>
          <i className={el.iconClass}></i>
        </NavButton>
      ))}
    </Navigation>
  );
};

const mainColor = "#195190";

const Navigation = styled.nav`
  position: fixed;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 20;
`;

const NavButton = styled(Link)<{ active?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.active ? mainColor : "rgba(255, 255, 255, 0.9)"};
  color: ${(props) => (props.active ? "white" : "#64748b")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;

  p {
    position: absolute;
    right: 60px;
    color: #195190;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none; // To prevent hover issues on the text itself
  }

  i {
    font-size: 24px;
  }

  &:hover {
    background: ${mainColor};
    color: white;
    transform: scale(1.1);

    p {
      opacity: 1;
    }
  }

  &.on {
    background: ${mainColor};
    color: white;
  }
`;
