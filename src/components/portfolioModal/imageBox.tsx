import styled from "styled-components";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type ImageBoxProps = {
  id: number;
  images: string[];
  isOpen: boolean;
  onClose: () => void;
};

export const ImageBox = ({ images, isOpen, onClose }: ImageBoxProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  };

  return (
    <LightboxOverlay onClick={onClose}>
      {/* 닫기 버튼 */}
      <CloseBtn
        whileHover={{ scale: 1.1, background: "rgba(255, 255, 255, 0.2)" }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <X />
      </CloseBtn>

      <SliderWrapper>
        <Slider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, idx) => (
            <Slide key={idx}>
              <img src={src} alt={`slide-${idx}`} />
            </Slide>
          ))}
        </Slider>
      </SliderWrapper>

      <IndexIndicator>
        {currentIndex + 1} / {images.length}
      </IndexIndicator>

      {currentIndex > 0 && (
        <NavButtonLeft whileHover={{ scale: 1.2 }} onClick={handlePrev}>
          <ChevronLeft />
        </NavButtonLeft>
      )}
      {currentIndex < images.length - 1 && (
        <NavButtonRight whileHover={{ scale: 1.2 }} onClick={handleNext}>
          <ChevronRight />
        </NavButtonRight>
      )}
    </LightboxOverlay>
  );
};

const LightboxOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  overflow: hidden;
`;

const CloseBtn = styled(motion.button)`
  position: absolute;
  top: 32px;
  right: 32px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SliderWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.4s ease;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 90%;
    object-fit: cover;
  }
`;

const IndexIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  color: white;
`;

const NavButtonLeft = styled(motion.button)`
  position: absolute;
  left: 20px;
  top: 50%;

  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavButtonRight = styled(NavButtonLeft)`
  left: auto;
  right: 20px;
`;
