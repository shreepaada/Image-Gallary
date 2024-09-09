// src/app/gallery.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import TextSplitHover from "@/components/textsplit/textsplithover";

// Define an interface for the image object
interface ImageData {
  src: string;
  title: string;
  details: string;
  date: string;
}

const images: ImageData[] = [
  {
    src: "/photos/6.webp",
    title: "Let's Goo",
    details: "ANIMATION SHOWCASE",
    date: "09.09.2024",
  },
  {
    src: "/photos/1.webp",
    title: "First Picture",
    details: "Made a page to showcase some animations.",
    date: "09.09.2024",
  },
  {
    src: "/photos/2.webp",
    title: "Second Picture",
    details: "Added more pictures to show some scroll animations :)",
    date: "09.09.2024",
  },
  {
    src: "/photos/3.webp",
    title: "Third Picture",
    details: "More pictures for your visual pleasure.",
    date: "09.09.2024",
  },
  {
    src: "/photos/4.webp",
    title: "Fourth Picture",
    details: "How cool is this, right?",
    date: "09.09.2024",
  },
  {
    src: "/photos/5.webp",
    title: "Fifth Picture",
    details: "Thank you for scrolling!",
    date: "09.09.2024",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="gallery-scroll-container">
      {images.map((image, index) => (
        <ScrollGalleryItem key={index} image={image} index={index} />
      ))}
    </div>
  );
};

// Define the props for the ScrollGalleryItem component
interface ScrollGalleryItemProps {
  image: ImageData;
  index: number;
}

const ScrollGalleryItem: React.FC<ScrollGalleryItemProps> = ({
  image,
  index,
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              y: 0,
              scale: 1,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Regular shape
              transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: index * 0.1,
              },
            });
          } else {
            controls.start({
              opacity: 0,
              y: 100,
              scale: 0.7,
              clipPath: "polygon(10% 0%, 90% 0%, 70% 100%, 30% 100%)", // Deformed shape
              transition: { duration: 0.8, ease: "easeInOut" },
            });
          }
        });
      },
      { threshold: 0.7 } // Adjusted threshold
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls, index]);

  return (
    <motion.div
      className="gallery-item"
      ref={ref}
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.7,
        clipPath: "polygon(10% 0%, 90% 0%, 70% 100%, 30% 100%)", // Start deformed
      }}
      animate={controls}
      style={{ willChange: "opacity, transform, clip-path" }} // Hint to browser
    >
      {/* Left side project number */}
      <div className="gallery-left">
        <motion.div
          className="project-number"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          00.{(index + 1).toString().padStart(2, "0")}
        </motion.div>
      </div>

      {/* Center image and overlay text */}
      <div className="gallery-center">
        <motion.div className="image-container">
          <Image
            src={image.src}
            alt={image.title}
            layout="responsive"
            width={1600}
            height={900}
            className="main-image"
            priority // Preload images
          />
        </motion.div>

        {/* Overlay text */}
        <motion.div
          className="overlay-text"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        >
          <TextSplitHover text={image.title} />
          <div className="project-details">
            <p>{image.details}</p>
            <p>{image.date}</p>
          </div>
        </motion.div>
      </div>

      {/* Right side scrollbar */}
      <div className="gallery-right">
        <motion.div
          className="scroll-bar"
          initial={{ height: 0 }}
          animate={{ height: "200px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Gallery;
