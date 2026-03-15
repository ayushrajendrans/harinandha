import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    isHoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, isHoverable = false, ...props }, ref) => {
        const baseStyles = "bg-white border border-slate-100 rounded-2xl shadow-sm p-6";
        const hoverStyles = isHoverable ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300" : "";

        if (isHoverable) {
            return (
                <motion.div
                    ref={ref as React.Ref<HTMLDivElement>}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    transition={{ duration: 0.2 }}
                    className={cn(baseStyles, className)}
                    {...(props as unknown as HTMLMotionProps<"div">)}
                >
                    {children}
                </motion.div>
            );
        }

        return (
            <div
                ref={ref}
                className={cn(baseStyles, hoverStyles, className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';
