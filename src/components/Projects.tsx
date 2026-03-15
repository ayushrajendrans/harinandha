'use client';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'Fitness App Design',
        description: 'A comprehensive mobile application focusing on workout tracking, health monitoring, and social fitness features.',
        gradient: 'from-[#8B2E2E] to-[#5D1F1F]',
        tags: ['UI/UX', 'Mobile App', 'Figma'],
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins text-slate-900 mb-6">
                            Selected Projects
                        </h2>
                        <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            A showcase of my recent work, highlighting end-to-end design solutions.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-40">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
                            >
                                {/* Browser Mockup Area */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full lg:w-[60%]"
                                >
                                    <div className="relative w-full aspect-[1.4/1] rounded-[2.5rem] bg-[#F3E8E8] shadow-2xl p-6 md:p-10 flex flex-col">
                                        {/* Browser Controls */}
                                        <div className="flex gap-2 mb-8 px-2">
                                            <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-inner"></div>
                                            <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-inner"></div>
                                            <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-inner"></div>
                                        </div>

                                        {/* Mockup Content Container */}
                                        <div className="flex-1 bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col relative group/content">
                                            {project.title === 'Fitness App Design' ? (
                                                <div className="flex flex-col h-full bg-[#fcfafa]">
                                                    {/* Internal Mockup Header */}
                                                    <div className="px-8 pt-6 pb-2 flex justify-between items-center">
                                                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Fitness App Design</h3>
                                                        <div className="flex gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                                            <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                                        </div>
                                                    </div>

                                                    {/* Detailed Fitness App Screens - Full Row View */}
                                                    <div className="flex-1 flex overflow-x-auto no-scrollbar p-6 gap-4">
                                                        {/* Screen 1: Home Details */}
                                                        <div className="min-w-[280px] h-full bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex flex-col">
                                                            <div className="flex items-center gap-3 mb-6">
                                                                <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100">
                                                                    <img src="/images/fitness/profile.png" alt="Profile" className="w-full h-full object-cover" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-[10px] text-slate-400 font-medium">Ann Maria</p>
                                                                    <p className="text-xs font-bold text-slate-900 leading-tight">Keep it up! Smash your goals</p>
                                                                </div>
                                                            </div>

                                                            <div className="space-y-4">
                                                                <div className="flex justify-between items-center">
                                                                    <p className="text-[10px] font-bold text-slate-800">Activity Overview</p>
                                                                    <p className="text-[8px] text-slate-400">› ›</p>
                                                                </div>
                                                                <div className="grid grid-cols-3 gap-2">
                                                                    {[
                                                                        { l: 'Calo', v: '720', c: 'text-orange-500', i: '🔥' },
                                                                        { l: 'Steps', v: '500', c: 'text-blue-500', i: '👣' },
                                                                        { l: 'BPM', v: '20', c: 'text-red-500', i: '❤' }
                                                                    ].map(stat => (
                                                                        <div key={stat.l} className="p-2 rounded-2xl bg-slate-50 border border-slate-100/50 flex flex-col items-center">
                                                                            <span className="text-[10px] mb-1">{stat.i}</span>
                                                                            <p className={`text-[10px] font-black ${stat.c}`}>{stat.v}</p>
                                                                            <p className="text-[7px] text-slate-400 uppercase font-bold">{stat.l}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>

                                                                <div>
                                                                    <div className="flex justify-between items-center mb-2">
                                                                        <p className="text-[10px] font-bold text-slate-800">Today's Workout</p>
                                                                        <p className="text-[8px] text-[#8B2E2E] font-bold">See All ›</p>
                                                                    </div>
                                                                    <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-md group/workout">
                                                                        <img src="/images/fitness/workout_today.png" alt="Workout" className="w-full h-full object-cover" />
                                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                                        <div className="absolute bottom-2 left-3">
                                                                            <p className="text-[10px] font-black text-white italic">15 MIN</p>
                                                                            <p className="text-[8px] text-white/80 font-bold">Workout</p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="h-10 w-full rounded-2xl bg-[#8B2E2E] flex items-center justify-center cursor-pointer hover:bg-[#6B2D2D] transition-all shadow-lg shadow-[#8B2E2E]/20">
                                                                    <p className="text-[10px] text-white font-black uppercase tracking-widest">Start Workout</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Screen 2: Progress Stats */}
                                                        <div className="min-w-[240px] h-full bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center">
                                                            <p className="text-[10px] font-bold text-slate-400 italic mb-6">Small Progress is Still Progress</p>
                                                            <div className="w-full h-32 flex items-end justify-between px-2 mb-8">
                                                                {[30, 60, 45, 55, 75, 50, 85].map((h, i) => (
                                                                    <div key={i} className="w-2.5 bg-slate-100 rounded-t-sm relative group/bar">
                                                                        <div className={`absolute bottom-0 left-0 w-full rounded-t-sm transition-all duration-700 ${i === 6 ? 'bg-[#8B2E2E]' : 'bg-slate-300'}`} style={{ height: `${h}%` }}></div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="relative w-32 h-32 flex items-center justify-center mb-8">
                                                                <svg className="w-full h-full -rotate-90">
                                                                    <circle cx="64" cy="64" r="56" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                                                                    <circle cx="64" cy="64" r="56" fill="none" stroke="#8B2E2E" strokeWidth="8" strokeDasharray="351.8" strokeDashoffset="175.9" strokeLinecap="round" />
                                                                </svg>
                                                                <p className="absolute text-lg font-black text-slate-900">50%</p>
                                                            </div>
                                                            <div className="w-full bg-[#8B2E2E] rounded-xl py-2 px-4 flex justify-between items-center mb-4">
                                                                <p className="text-[10px] font-black text-white italic">WEIGHT</p>
                                                                <span className="text-[10px] text-white/50">✏️</span>
                                                            </div>
                                                            <div className="grid grid-cols-3 w-full gap-2">
                                                                {[
                                                                    { l: 'Start', v: '68' },
                                                                    { l: 'Current', v: '65' },
                                                                    { l: 'Change', v: '3' }
                                                                ].map(item => (
                                                                    <div key={item.l}>
                                                                        <p className="text-xs font-black text-slate-900">{item.v}</p>
                                                                        <p className="text-[8px] text-slate-400 font-bold">{item.l}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Screen 3: Music Player */}
                                                        <div className="min-w-[280px] h-full bg-[#8B2E2E] rounded-3xl shadow-sm overflow-hidden flex flex-col">
                                                            <div className="p-4 flex justify-between items-center">
                                                                <span className="text-white">←</span>
                                                                <p className="text-[10px] font-black text-white italic">Top Mixes</p>
                                                                <span className="text-white">≡</span>
                                                            </div>
                                                            <div className="flex-1 p-6 flex flex-col items-center">
                                                                <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl mb-6 border border-white/10">
                                                                    <img src="/images/fitness/album_art.png" alt="Album" className="w-full h-full object-cover" />
                                                                </div>
                                                                <div className="w-full text-left mb-6">
                                                                    <p className="text-sm font-black text-white tracking-tight">Paris</p>
                                                                    <p className="text-[10px] text-white/70 font-bold italic">Baco Exu do Blues</p>
                                                                </div>
                                                                <div className="w-full h-0.5 bg-white/20 rounded-full mb-8 relative">
                                                                    <div className="absolute top-0 left-0 h-full w-1/2 bg-white rounded-full"></div>
                                                                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                                                                </div>
                                                                <div className="flex items-center justify-between w-full">
                                                                    <span className="text-white/40 text-xs">↹</span>
                                                                    <span className="text-white text-lg">⏮</span>
                                                                    <div className="w-12 h-12 rounded-full bg-blue-500 shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                                                        <span className="text-white ml-0.5">▶</span>
                                                                    </div>
                                                                    <span className="text-white text-lg">⏭</span>
                                                                    <span className="text-white/40 text-xs">↻</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Screen 4: Categorized Workouts */}
                                                        <div className="min-w-[260px] h-full bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex flex-col">
                                                            <div className="flex items-center gap-2 mb-6">
                                                                <span className="text-slate-400">←</span>
                                                                <p className="text-xs font-black text-slate-800 italic uppercase tracking-wider">At Home Workout</p>
                                                            </div>
                                                            <div className="space-y-4">
                                                                {[
                                                                    { l: 'Full Body', t: '15 min', img: '/images/fitness/full_body.png' },
                                                                    { l: 'Leg', t: '20 min', img: '/images/fitness/leg_workout.png' },
                                                                    { l: 'Strength', t: '15 min', img: '/images/fitness/strength.png' }
                                                                ].map(workout => (
                                                                    <div key={workout.l} className="relative h-24 rounded-2xl overflow-hidden group/item cursor-pointer">
                                                                        <img src={workout.img} alt={workout.l} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500" />
                                                                        <div className="absolute inset-0 bg-black/40 group-hover/item:bg-black/20 transition-colors"></div>
                                                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                                                            <p className="text-xs font-black text-white italic uppercase tracking-widest">{workout.l}</p>
                                                                            <p className="text-[8px] text-white/80 font-bold">{workout.t}</p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Screen 5: Profile & Settings */}
                                                        <div className="min-w-[260px] h-full bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                                                            <div className="h-12 bg-[#8B2E2E] flex items-center justify-center shadow-md">
                                                                <p className="text-[10px] font-black text-white italic tracking-widest">FITNESS CENTRE</p>
                                                            </div>
                                                            <div className="flex-1 p-6 space-y-5">
                                                                <div className="flex items-center justify-between mb-4">
                                                                    <p className="text-xs font-black text-slate-800">Hi, User</p>
                                                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs">⚙️</div>
                                                                </div>
                                                                {['NAME', 'Phone Number', 'Email Id'].map(label => (
                                                                    <div key={label} className="space-y-1.5">
                                                                        <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">{label}</p>
                                                                        <div className="h-9 w-full bg-slate-50 border border-slate-100 rounded-xl"></div>
                                                                    </div>
                                                                ))}
                                                                <div className="pt-2">
                                                                    <div className="h-12 w-full bg-[#8B2E2E] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8B2E2E]/20 cursor-pointer hover:bg-[#6B2D2D] transition-colors">
                                                                        <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">LogOut</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex justify-center gap-4 pt-4 opacity-70">
                                                                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">📸</div>
                                                                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">📘</div>
                                                                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">🎥</div>
                                                                </div>
                                                                <div className="flex justify-between px-2 pt-4 opacity-30">
                                                                    <p className="text-[6px] font-bold uppercase">Privacy Policy</p>
                                                                    <p className="text-[6px] font-bold uppercase">Disclaimer</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                /* Generic Premium Mockup for other projects */
                                                <div className="p-8 md:p-12 flex flex-col h-full bg-slate-50">
                                                    <h4 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                                                        {project.title}
                                                    </h4>
                                                    <div className="grid grid-cols-2 gap-4 mb-8 flex-1">
                                                        {[1, 2, 3, 4].map((item) => (
                                                            <div key={item} className="rounded-3xl bg-white border border-slate-100 flex items-center justify-center p-6 shadow-sm">
                                                                <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${project.gradient} opacity-10 animate-pulse`}></div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <div className="h-4 bg-slate-200 w-1/4 rounded-full"></div>
                                                        <div className="h-4 bg-slate-200 w-1/3 rounded-full"></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Project Info Pill in Mockup */}
                                        <div className="absolute -bottom-6 -right-6 md:-right-8 hidden md:flex items-center gap-4 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 z-20">
                                            <div className="w-12 h-12 rounded-xl bg-[#6B2D2D] flex items-center justify-center shadow-lg">
                                                <ArrowRight className="text-white w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 leading-tight">Case Study</p>
                                                <p className="text-xs text-slate-400 font-medium tracking-tight">View detailed design</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Project Details */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="w-full lg:w-[40%] flex flex-col"
                                >
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-5 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-shadow">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-5xl md:text-7xl font-bold font-poppins text-slate-900 mb-8 leading-tight tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium opacity-80">
                                        {project.description}
                                    </p>

                                    <div>
                                        <Button variant="primary" size="lg" className="group h-16 px-10 rounded-2xl bg-[#0F172A] hover:bg-black transition-all shadow-xl hover:shadow-2xl">
                                            View Case Study
                                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
