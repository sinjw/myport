import { motion } from "framer-motion";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
export default function Portfoilo() {
  const [initialPosition, setInitialPosition] = useState<number>(0);
  const [MouseMove, setMouseMove] = useState<number>(0);
  const buttonRef = useRef<HTMLDivElement>(null); // 버튼 참조 추가

  // useEffect(() => {
  //   if (buttonRef.current) {
  //     const rect = buttonRef.current.getBoundingClientRect(); // 버튼의 위치 가져오기
  //     setMouseMove(rect.x); // 버튼의 x 위치를 MouseMove에 설정
  //   }
  // }, []); // 컴포넌트가 마운트될 때만 실행

  return (
    <Container>
      <div style={{ width: "100vw", position: "relative" }}>
        <DraggableButton
          drag="x"
          dragMomentum={false}
          dragConstraints={{ left: -300, right: 300 }}
          onDragStart={(_event, info) => {
            setInitialPosition(info.point.x);
            console.log(info);
          }}
          onDrag={(_event, info) => {
            const deltaX = info.point.x;
            setMouseMove(deltaX);
          }}
        />
      </div>

      <TestD mouseMove={MouseMove}></TestD>
    </Container>
  );
}
const TestD = styled.div<{ mouseMove: number }>`
  background-color: red;
  height: 300px;
  left: 20%;
  position: absolute;
  width: ${(props) => props.mouseMove}px; // 기본 너비 설정
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  position: relative;
`;

const DraggableButton = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 50%;
  position: absolute;
  top: 60vh;
  left: 45%;
  cursor: grab;
  z-index: 99;
`;
