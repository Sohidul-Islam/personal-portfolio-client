import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
  children,
  className = "",
  style = {},
  maxTilt = 7,
  scaleOnHover = 1.015,
  glare = true,
  ...props
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Glare position
  const glareX = useTransform(smoothX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normalizedX = clientX / rect.width - 0.5;
    const normalizedY = clientY / rect.height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: isHovered ? scaleOnHover : 1,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        position: "relative",
        height: "100%",
        ...style,
      }}
      className={`interactive-hover ${className}`}
      {...props}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        {children}

        {/* Subtle Specular Glare Reflection */}
        {glare && isHovered && (
          <motion.div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              background: `radial-gradient(circle 280px at ${glareX} ${glareY}, rgba(0, 240, 255, 0.08), transparent 70%)`,
              zIndex: 3,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
