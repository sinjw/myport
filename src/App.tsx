import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { MainPage } from "./pages/MainPage.tsx";
import { AboutMe } from "./pages/AboutMe.tsx";
import PortFolio from "./pages/Portfolio.tsx";
import { Navigate } from "./components/navigate.tsx";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion"; // AnimatePresence를 import 해야 합니다.
import "./index.css";

function App() {
  const location = useLocation(); // useLocation 훅은 함수 컴포넌트 내부에 위치시켜야 합니다.

  const transitionVariants = {
    initail: {
      x: "0",
      width: "0",
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };
  const element: any = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },

    { path: "/aboutme", element: <AboutMe /> },
    { path: "/portfolio", element: <PortFolio /> },
  ]);
  return (
    <React.Fragment>
      <Navigate />
      <p
        style={{
          zIndex: 10,
          position: "absolute",
          top: 30,
          left: 30,
          fontSize: 14,
          fontWeight: "bold",
        }}
      >
        SHINJOONGWON
      </p>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
          className="privacy-screen"
        />
        <motion.div
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
          className="privacy-screen2"
        />
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </React.Fragment>
  );
}

export default App;
