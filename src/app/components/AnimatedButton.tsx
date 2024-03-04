"use client";

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function AnimatedButton() {
  return (
    <AnimatePresence>
      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          cursor: 'pointer',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      />
    </AnimatePresence>
  );
}