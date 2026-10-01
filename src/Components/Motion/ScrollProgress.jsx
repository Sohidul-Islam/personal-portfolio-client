import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #00f0ff, #8b5cf6, #ff014f)",
        transformOrigin: "0%",
        scaleX,
        zIndex: 9999,
        boxShadow: "0 0 10px rgba(0, 240, 255, 0.5)",
      }}
    />
  );
}
