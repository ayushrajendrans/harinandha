'use client';
import { motion } from 'framer-motion';

export const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Soft Gradient Blobs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/30 blur-[100px] rounded-full hidden md:block"
            />
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-blue-200/30 blur-[100px] rounded-full hidden md:block"
            />
            <motion.div
                animate={{
                    x: [0, 60, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-5%] left-[20%] w-[450px] h-[450px] bg-emerald-100/30 blur-[100px] rounded-full hidden md:block"
            />

            {/* 3D-style Floating Geometric Elements - Enhanced visibility and quantity */}
            <motion.div
                animate={{
                    y: [0, -40, 0],
                    rotateX: [0, 360],
                    rotateY: [0, 180],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[10%] left-[5%] w-32 h-32 glass rounded-3xl border border-white/40 shadow-2xl opacity-50 blur-[0.5px] hidden md:block"
                style={{ perspective: 1200 }}
            />

            <motion.div
                animate={{
                    y: [0, 60, 0],
                    rotate: [0, -360],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[45%] right-[5%] w-40 h-40 glass rounded-full border border-white/30 shadow-2xl opacity-30 blur-[1px] hidden md:block"
            />

            <motion.div
                animate={{
                    x: [0, 70, 0],
                    y: [0, 50, 0],
                    rotateZ: [0, 360],
                    rotateX: [0, 360],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[20%] left-[10%] w-28 h-28 glass rounded-2xl border border-white/40 shadow-2xl opacity-40 blur-[0.5px] hidden md:block"
                style={{ perspective: 1200 }}
            />

            <motion.div
                animate={{
                    x: [0, -60, 0],
                    scale: [1, 1.2, 1],
                    rotate: [45, 405],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[35%] left-[40%] w-20 h-20 glass rounded-xl border border-white/30 shadow-2xl opacity-25 blur-[2px] hidden md:block"
            />

            {/* Additional Floating Rings for extra flair */}
            <motion.div
                animate={{
                    rotateY: [0, 360],
                    rotateZ: [0, 180],
                    y: [-20, 20, -20]
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[70%] left-[80%] w-36 h-36 rounded-full border-[8px] border-purple-200/20 blur-[1px] hidden md:block"
                style={{ perspective: 1000 }}
            />

            <motion.div
                animate={{
                    rotateX: [0, 360],
                    x: [-30, 30, -30]
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[25%] left-[60%] w-24 h-24 rounded-full border-[6px] border-blue-200/20 blur-[1px] hidden md:block"
                style={{ perspective: 1000 }}
            />
        </div>
    );
};
