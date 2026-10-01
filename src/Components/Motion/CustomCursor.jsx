import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Direct mouse positions (zero latency for central dot)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth fluid spring for the trailing aura halo ring
  const ringSpringConfig = { damping: 26, stiffness: 280, mass: 0.5 };
  const ringSmoothX = useSpring(cursorX, ringSpringConfig);
  const ringSmoothY = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    // Check touch / coarse pointer
    const checkTouch = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(hover: none)").matches
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) {
        setIsVisible(true);
        document.body.classList.add("custom-cursor-active");
      }

      const target = e.target;
      if (!target) return;

      // Check if user is over a text input or textarea
      const inText = !!target.closest("input:not([type='submit']):not([type='button']), textarea, [contenteditable='true']");
      setIsTextInput(inText);

      // Check if user is over an interactive element
      const interactive = !!(
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest(".MuiChip-root") ||
        target.closest(".MuiIconButton-root") ||
        target.closest(".MuiButton-root") ||
        target.closest(".clickable") ||
        target.closest(".interactive-hover")
      );
      setIsHovered(interactive && !inText);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.classList.remove("custom-cursor-active");
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      document.body.classList.add("custom-cursor-active");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible || isTextInput) {
    return null;
  }

  return (
    <>
      {/* Zero-latency high-precision central dot */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 99999,
        }}
      >
        <motion.div
          animate={{
            scale: isClicked ? 0.7 : isHovered ? 1.5 : 1,
            backgroundColor: isHovered
              ? "var(--accent-cyan)"
              : "rgba(0, 240, 255, 0.95)",
            boxShadow: isHovered
              ? "0 0 16px rgba(0, 240, 255, 0.9)"
              : "0 0 8px rgba(0, 240, 255, 0.6)",
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* Trailing ambient aura ring with spring physics */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: ringSmoothX,
          y: ringSmoothY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 99998,
        }}
      >
        <motion.div
          animate={{
            width: isHovered ? 52 : isClicked ? 28 : 36,
            height: isHovered ? 52 : isClicked ? 28 : 36,
            borderColor: isHovered
              ? "rgba(0, 240, 255, 0.8)"
              : "rgba(0, 240, 255, 0.3)",
            backgroundColor: isHovered
              ? "rgba(0, 240, 255, 0.08)"
              : "rgba(0, 240, 255, 0.02)",
            borderWidth: isHovered ? "1.5px" : "1px",
            boxShadow: isHovered
              ? "0 0 20px rgba(0, 240, 255, 0.3)"
              : "0 0 8px rgba(0, 240, 255, 0.05)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{
            borderRadius: "50%",
            borderStyle: "solid",
            backdropFilter: isHovered ? "blur(1px)" : "none",
          }}
        />
      </motion.div>
    </>
  );
}
