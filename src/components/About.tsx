'use client';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-purple-500 mb-8 rounded-full"></div>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                            Highly motivated and adaptable individual with strong commitment to continuous learning and creating meaningful digital experiences.
                        </p>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            My approach combines aesthetic minimalism with functional excellence, ensuring that every interface is not just beautiful, but highly intuitive to use. I believe in design that speaks to the user while achieving business goals seamlessly.
                        </p>
                    </motion.div>

                    {/* Right Column: Visual Elements */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-[3rem] transform rotate-3 scale-105 opacity-50 blur-lg"></div>

                        {/* Abstract UI Composition */}
                        <div className="relative w-full max-w-sm aspect-square bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 flex flex-col justify-between overflow-hidden">
                            <div className="flex justify-between items-center mb-8">
                                <div className="w-12 h-12 rounded-full bg-purple-100"></div>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-4 bg-slate-100 rounded-full"
                                ></motion.div>
                                <motion.div
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "80%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                    className="h-4 bg-slate-100 rounded-full"
                                ></motion.div>
                                <motion.div
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "60%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.9 }}
                                    className="h-4 bg-slate-100 rounded-full"
                                ></motion.div>
                            </div>

                            {/* Floating Element */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-8 top-1/2 glass px-6 py-4 rounded-xl border border-white/40 shadow-xl"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">✨</div>
                                    <div>
                                        <div className="h-2 w-16 bg-slate-200 rounded mb-2"></div>
                                        <div className="h-2 w-10 bg-slate-100 rounded"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
