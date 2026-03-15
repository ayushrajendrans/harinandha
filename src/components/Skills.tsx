'use client';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { PenTool, Layout, Layers, MousePointer2, Users, Bot, FileText, Database } from 'lucide-react';

const skills = [
    { name: 'UI/UX Design', icon: PenTool, color: 'text-purple-500', bg: 'bg-purple-100' },
    { name: 'Figma', icon: Layout, color: 'text-pink-500', bg: 'bg-pink-100' },
    { name: 'Wireframing', icon: Layers, color: 'text-blue-500', bg: 'bg-blue-100' },
    { name: 'Prototyping', icon: MousePointer2, color: 'text-indigo-500', bg: 'bg-indigo-100' },
    { name: 'User Research', icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-100' },
    { name: 'Generative AI', icon: Bot, color: 'text-cyan-500', bg: 'bg-cyan-100' },
    { name: 'Microsoft Office', icon: FileText, color: 'text-orange-500', bg: 'bg-orange-100' },
    { name: 'Excel', icon: Database, color: 'text-green-500', bg: 'bg-green-100' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring' as const, stiffness: 100 }
    }
};

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
                            My Arsenal
                        </h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            The tools and methodologies I use to bring ideas to life.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div key={index} variants={itemVariants}>
                                <Card
                                    isHoverable
                                    className="flex flex-col items-center justify-center p-8 text-center h-full group cursor-default"
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${skill.bg} ${skill.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                        <Icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-semibold text-slate-800 font-poppins text-lg">
                                        {skill.name}
                                    </h3>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};
