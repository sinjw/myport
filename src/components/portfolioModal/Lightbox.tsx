import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxProps = {
  images: string[];
  startIndex?: number;
  isOpen: boolean; // New prop to control visibility
};

const LightboxOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
`;

const LightboxContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const NavButton = styled(motion.button)`
  position: absolute;
  top: 50%;
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
  z-index: 10;

  &.prev {
    left: 32px;
  }

  &.next {
    right: 32px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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
  z-index: 10;
`;

const MainImage = styled(motion.img)`
  max-width: 85vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 32px;
  color: white;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  border-radius: 8px;
  z-index: 10;
`;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export const Lightbox = ({
  images,
  startIndex = 0,
  isOpen, // Receive isOpen prop
}: LightboxProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(isOpen);

  // If no images, and it's supposed to be open, close it internally
  useEffect(() => {
    if (!images || images.length === 0) {
      setInternalIsOpen(false);
    }
  }, [images]);

  if (!internalIsOpen) {
    return null;
  }

  const [imageIndex, setImageIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0); // To maintain animation direction

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setImageIndex((prevIndex) => prevIndex + newDirection);
  };

  return (
    <LightboxOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setInternalIsOpen(false)}
    >
      <CloseBtn
        whileHover={{ scale: 1.1, background: "rgba(255, 255, 255, 0.2)" }}
        onClick={() => setInternalIsOpen(false)}
      >
        <X />
      </CloseBtn>

      <NavButton
        className="prev"
        initial={{ y: "-50%" }}
        animate={{ y: "-50%" }}
        whileHover={{
          scale: 1.1,
          background: "rgba(255, 255, 255, 0.2)",
          y: "-50%",
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (imageIndex > 0) paginate(-1);
        }}
        disabled={imageIndex === 0}
      >
        <ChevronLeft />
      </NavButton>

      <LightboxContent onClick={(e) => e.stopPropagation()}>
        <AnimatePresence initial={false} custom={direction}>
          <MainImage
            key={images[imageIndex]} // Changed key to image URL for better uniqueness
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          />
        </AnimatePresence>
      </LightboxContent>

      <NavButton
        className="next"
        initial={{ y: "-50%" }}
        animate={{ y: "-50%" }}
        whileHover={{
          scale: 1.1,
          background: "rgba(255, 255, 255, 0.2)",
          y: "-50%",
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (imageIndex < images.length - 1) paginate(1);
        }}
        disabled={imageIndex === images.length - 1}
      >
        <ChevronRight />
      </NavButton>

      <ImageCounter>
        {imageIndex + 1} / {images.length}
      </ImageCounter>
    </LightboxOverlay>
  );
};
