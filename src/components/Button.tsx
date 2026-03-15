import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isExternal?: boolean;
    href?: string;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isExternal, href, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none rounded-full";

        const variants = {
            primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-md",
            secondary: "bg-purple-100 text-purple-900 hover:bg-purple-200",
            outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900",
            ghost: "bg-transparent hover:bg-slate-100 text-slate-700",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const classes = cn(baseStyles, variants[variant], sizes[size], className);

        if (href) {
            if (isExternal) {
                return (
                    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                        {props.children}
                    </a>
                );
            }
            return (
                <a href={href} className={classes}>
                    {props.children}
                </a>
            );
        }

        return (
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                ref={ref}
                className={classes}
                {...(props as unknown as HTMLMotionProps<"button">)}
            />
        );
    }
);

Button.displayName = 'Button';
