import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    wrapperClassName?: string;
    loading?: "lazy" | "eager";
}

export function LazyImage({ src, alt, className, wrapperClassName, onLoad, loading = "lazy", ...props }: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsLoaded(true);
        if (onLoad) {
            onLoad(e);
        }
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsLoaded(true); // Stop loading skeleton on error
        if (props.onError) {
            props.onError(e);
        }
    };

    return (
        <div className={cn("relative overflow-hidden bg-gray-100", wrapperClassName)}>
            {/* Loading Skeleton */}
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-gray-200 animate-pulse z-10 flex items-center justify-center"
                    >
                        <div className="w-8 h-8 border-4 border-[#D4AF37]/30 border-t-[#800020] rounded-full animate-spin" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Actual Image */}
            <motion.img
                src={src}
                alt={alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onLoad={handleImageLoad}
                onError={handleImageError}
                className={cn("w-full h-full object-cover", className)}
                loading={loading}
                decoding="async"
                {...props}
            />
        </div>
    );
}
