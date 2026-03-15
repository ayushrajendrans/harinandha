'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from './Button';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold font-poppins text-slate-900 mb-6"
                        >
                            Get In Touch
                        </motion.h2>
                        <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="flex items-start space-x-6">
                                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold font-poppins text-slate-900 mb-1">Email Me</h4>
                                    <a href="mailto:harinandaak99@gmail.com" className="text-slate-600 hover:text-purple-600 transition-colors">
                                        harinandaak99@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold font-poppins text-slate-900 mb-1">Location</h4>
                                    <p className="text-slate-600">
                                        Kerala, India
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50"></div>
                                <h4 className="text-xl font-bold font-poppins text-slate-900 mb-4">Let&apos;s collaborate</h4>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    I&apos;m currently available for freelance work and full-time opportunities.
                                </p>
                                <div className="flex space-x-4">
                                    {/* Social icons could go here */}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-slate-100"
                        >
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none"
                                        placeholder="Tell me more about your project..."
                                    ></textarea>
                                </div>
                                <Button className="w-full justify-center group" size="lg">
                                    Send Message
                                    <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
