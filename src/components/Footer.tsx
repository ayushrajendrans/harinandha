export const Footer = () => {
    return (
        <footer className="w-full py-8 border-t border-slate-100 mt-24">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm text-slate-500 mb-4 md:mb-0">
                    © {new Date().getFullYear()} Harinanda A K. All rights reserved.
                </p>
                <div className="flex items-center space-x-6">
                    <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-500 transition-colors">
                        Dribbble
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-500 transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:harinandaak99@gmail.com" className="text-slate-400 hover:text-purple-500 transition-colors">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};
