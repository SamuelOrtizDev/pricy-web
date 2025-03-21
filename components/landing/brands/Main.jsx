"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import amazon from './assets/amazon.svg'
import ebay from './assets/ebay.svg'
import mercadoLibre from './assets/mercadoLibre.svg'
import rakuten from './assets/rakuten.svg'
import target from './assets/target.svg'
import walmart from './assets/walmart.svg'

const images = [
    amazon,
    ebay,
    mercadoLibre,
    rakuten,
    target,
    walmart
];

export default function InfiniteSlider() {
    const [width, setWidth] = useState(0);
    const sliderRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    // Initialize animation controls
    const controls = useAnimationControls();

    // Get the total width of the slider once mounted
    useEffect(() => {
        setIsMounted(true);
        if (sliderRef.current) {
            // Get the width of a single set of images
            setWidth(sliderRef.current.scrollWidth / 2);
        }
    }, []);

    // Start the animation
    useEffect(() => {
        if (width > 0) {
            const animate = async () => {
                // Animate from 0 to -width (one full set of images)
                await controls.start({
                    x: -width,
                    transition: {
                        duration: 15,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }
                });
            };
            animate();
        }
    }, [width, controls]);

    return (
        <div
            className="relative w-full overflow-hidden py-2 bg-gradient-to-r from-[#09D1C7] via-blue-100 to-blue-200"
        >
            <motion.div
                ref={sliderRef}
                className="flex flex-nowrap gap-6 md:gap-16 min-w-max"
                animate={controls}
            >
                {/* First set of images */}
                {images.map((src, index) => (
                    <div key={`first-${index}`} className="flex items-center justify-center">
                        <Image
                            src={src}
                            alt={`Icon ${index}`}
                            className="w-40 h-40 object-contain"
                        />
                    </div>
                ))}

                {/* Duplicate set for seamless looping */}
                {images.map((src, index) => (
                    <div key={`second-${index}`} className="flex items-center justify-center">
                        <Image
                            src={src}
                            alt={`Icon ${index}`}
                            className="w-20 md:w-40 h-20 md:h-40 object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}