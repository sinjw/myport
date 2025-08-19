import styled from "styled-components";
import { motion } from "framer-motion";
export const FloatingCircle = () => {
  const circles = [
    { size: 100, top: "20%", left: "15%", opacity: 0.3 },
    { size: 60, top: "70%", left: "80%", opacity: 0.4 },
    { size: 80, top: "40%", left: "90%", opacity: 0.3 },
    { size: 120, top: "80%", left: "10%", opacity: 0.2 },
  ];
  return (
    <FloatingCircles>
      {circles.map((circle, index) => (
        <Circle
          key={index}
          size={circle.size}
          top={circle.top}
          left={circle.left}
          opacity={circle.opacity}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7 + index,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </FloatingCircles>
  );
};

const mainColor = "rgb(123, 154, 204)";
const FloatingCircles = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

const Circle = styled(motion.div)<{
  size: number;
  top: string;
  left: string;
  opacity: number;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${mainColor};
  border-radius: 50%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  opacity: ${(props) => props.opacity};
`;
