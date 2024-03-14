"use client";

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function AnimatedButton() {
    return (
        <motion.div
            drag
            dragConstraints={{
                left: -100,
                right: 100,
                top: 0,
                bottom: 200
            }}
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
    );
}