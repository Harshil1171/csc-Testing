"use client";

import { motion } from "framer-motion";

const defaultFade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4 },
};

export default function AnimatedSection({
  children,
  className = "",
  ...motionProps
}) {
  return (
    <motion.section
      {...defaultFade}
      {...motionProps}
      className={className}
    >
      {children}
    </motion.section>
  );
}
