'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
    {
        institution: 'Sarabhai Institute of Science and Technology',
        degree: 'BTech in Computer Science and Engineering',
        duration: '2022 – 2026',
        icon: GraduationCap,
        color: 'bg-purple-500',
        lightBg: 'bg-purple-100',
        textColor: 'text-purple-600'
    },
    {
        institution: 'CKNS GHSS Pilicode',
        degree: 'Higher Secondary',
        duration: 'Completed',
        score: 'Score: 89%',
        icon: Award,
        color: 'bg-blue-500',
        lightBg: 'bg-blue-100',
        textColor: 'text-blue-600'
    }
];

export const Education = () => {
    return (
        <section id="education" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
                            Education
                        </h2>
                        <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                    <div className="space-y-12">
                        {education.map((item, index) => {
                            const Icon = item.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >

                                    {/* Timeline Dot & Icon */}
                                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-white shadow-sm flex items-center justify-center z-10">
                                        <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                                    </div>

                                    {/* Content Box */}
                                    <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.lightBg} ${item.textColor} mb-4 ${!isEven && 'md:ml-auto'}`}>
                                                <Icon size={24} />
                                            </div>

                                            <span className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                                                {item.duration}
                                            </span>
                                            <h3 className="text-xl font-bold font-poppins text-slate-900 mb-2">
                                                {item.degree}
                                            </h3>
                                            <p className="text-slate-600 text-base font-medium">
                                                {item.institution}
                                            </p>
                                            {item.score && (
                                                <p className="text-emerald-600 font-semibold mt-2 text-sm bg-emerald-50 inline-block px-3 py-1 rounded-full">
                                                    {item.score}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
