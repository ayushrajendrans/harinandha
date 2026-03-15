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
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-blue-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30"
                />

                {/* Concentrated 3D Elements in Hero */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotateX: [0, 360],
                        rotateY: [0, 180],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[15%] w-24 h-24 glass rounded-2xl border border-white/40 shadow-xl opacity-40 blur-[0.5px] hidden md:block"
                    style={{ perspective: 1000 }}
                />

                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -360],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[25%] left-[10%] w-20 h-20 glass rounded-full border border-white/30 shadow-xl opacity-30 blur-[1px] hidden md:block"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [45, 405],
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[20%] w-16 h-16 glass rounded-xl border border-white/30 shadow-xl opacity-25 blur-[1.5px] hidden md:block"
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
