'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Languages } from 'lucide-react';
import { Card } from './Card';

const strengths = [
    'Quick Learner',
    'Adaptability',
    'Strong Communication',
    'Hard Working & Punctual',
    'Active Listener',
    'Problem Solver'
];

const languages = [
    { name: 'Malayalam', level: 'Native' },
    { name: 'English', level: 'Professional' },
    { name: 'Hindi', level: 'Conversational' }
];

export const Info = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Strengths */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold font-poppins text-slate-900 mb-4">Strengths</h2>
                            <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {strengths.map((strength, index) => (
                                <Card key={index} className="flex items-center p-5 border-none shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4 shrink-0">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="font-medium text-slate-700">{strength}</span>
                                </Card>
                            ))}
                        </div>
                    </motion.div>

                    {/* Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold font-poppins text-slate-900 mb-4">Languages</h2>
                            <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
                        </div>

                        <div className="space-y-4">
                            {languages.map((lang, index) => (
                                <Card key={index} className="flex items-center justify-between p-6 border-none shadow-sm group">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mr-5 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                            <Languages size={24} />
                                        </div>
                                        <span className="text-xl font-bold font-poppins text-slate-800">{lang.name}</span>
                                    </div>
                                    <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold">
                                        {lang.level}
                                    </span>
                                </Card>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
