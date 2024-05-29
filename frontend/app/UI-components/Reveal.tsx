"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Reveal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: false });
  const maincontrol = useAnimation();
  useEffect(() => {
    if (IsInView) {
      maincontrol.start("visible");
    }
  }, [IsInView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={maincontrol}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
