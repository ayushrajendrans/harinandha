'use client';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradients and 3D Elements */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.4, 0.3],
                        x: [0, 50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 hidden md:block"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-blue-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 hidden md:block"
                />

                {/* Pronounced 3D Elements in Hero */}
                {/* 3D Orb 1 - Purple/Pink */}
                <motion.div
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full z-0 hidden md:block"
                    style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 1) 0%, rgba(236, 72, 153, 0.9) 20%, rgba(168, 85, 247, 0.8) 60%, rgba(88, 28, 135, 1) 100%)',
                        boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.3), 0 20px 40px rgba(0,0,0,0.2), 0 0 40px rgba(236, 72, 153, 0.3)',
                    }}
                />

                {/* 3D Orb 2 - Blue */}
                <motion.div
                    animate={{
                        y: [20, -20, 20],
                        x: [10, -10, 10],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] left-[8%] w-24 h-24 md:w-32 md:h-32 rounded-full z-0 hidden md:block"
                    style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 1) 0%, rgba(96, 165, 250, 0.9) 20%, rgba(59, 130, 246, 0.8) 60%, rgba(30, 58, 138, 1) 100%)',
                        boxShadow: 'inset -8px -8px 16px rgba(0,0,0,0.3), 0 15px 30px rgba(0,0,0,0.2), 0 0 30px rgba(59, 130, 246, 0.3)',
                    }}
                />

                {/* Floating Glass Cube */}
                <motion.div
                    animate={{
                        rotateX: [0, 360],
                        rotateY: [0, 360],
                        y: [-15, 15, -15],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[60%] right-[30%] w-20 h-20 md:w-24 md:h-24 rounded-2xl hidden md:block z-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.1))',
                        backdropFilter: 'blur(10px)',
                        boxShadow: 'inset 2px 2px 5px rgba(255,255,255,0.8), inset -2px -2px 5px rgba(0,0,0,0.1), 0 15px 25px rgba(0,0,0,0.15)',
                        border: '1px solid rgba(255,255,255,0.5)',
                        transformStyle: 'preserve-3d',
                    }}
                />

                {/* Metallic Ring */}
                <motion.div
                    animate={{
                        rotateX: [0, 180, 360],
                        rotateY: [0, 180, 360],
                        y: [-30, 30, -30],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute top-[25%] left-[20%] w-20 h-20 md:w-28 md:h-28 hidden md:block z-0"
                    style={{
                        borderRadius: "50%",
                        border: "16px solid transparent",
                        background: "linear-gradient(#f8fafc, #f8fafc) padding-box, linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(59, 130, 246, 0.8)) border-box",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 10px 20px rgba(0,0,0,0.2)",
                        transformStyle: "preserve-3d",
                    }}
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-6 border border-slate-200">
                            Welcome to my portfolio
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-poppins tracking-tight mb-4 text-slate-900"
                    >
                        Harinanda A K
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold font-poppins text-slate-900 mb-8"
                    >
                        Ui/Ux Design Portfolio
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Designing intuitive digital experiences that connect users with technology.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" href="#projects">
                            View Projects
                        </Button>
                        <Button size="lg" variant="outline" href="#contact">
                            Contact Me
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
