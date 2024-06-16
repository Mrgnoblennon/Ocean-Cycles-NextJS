"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Button } from "@/components/ui/button";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    position: "absolute" as const
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: "absolute" as const
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    position: "absolute" as const
  })
};

const sliderData = [
  {
    image: "https://images.pexels.com/photos/3507802/pexels-photo-3507802.jpeg",
    tagline: "Need a Ride?",
    button: "Book now",
  },
  {
    image: "https://images.pexels.com/photos/5864786/pexels-photo-5864786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tagline: "Have an enquiry?",
    button: "Contact Us",
  },
  {
    image: "https://images.pexels.com/photos/210117/pexels-photo-210117.jpeg",
    tagline: "Get to know us",
    button: "About us",
  },
];

export const Slider: React.FC = () => {
  const [[page, direction], setPage] = React.useState<[number, number]>([0, 0]);
  const [textVisible, setTextVisible] = React.useState<boolean>(true);
  const imageIndex = wrap(0, sliderData.length, page);

  React.useEffect(() => {
    const imageInterval = setInterval(() => {
      setPage([page + 1, 1]);
    }, 12000); // Image transition interval

    const textTimeout = setTimeout(() => {
      setTextVisible(false);
    }, 10000); // Text fade-out before image transition

    return () => {
      clearInterval(imageInterval);
      clearTimeout(textTimeout);
    };
  }, [page]);

  React.useEffect(() => {
    const textAppearTimeout = setTimeout(() => {
      setTextVisible(true);
    }, 500);

    return () => clearTimeout(textAppearTimeout);
  }, [page]);

  const containerVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          style={{
            backgroundImage: `url(${sliderData[imageIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute w-full h-full z-0 brightness-75"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        />
      </AnimatePresence>
      <AnimatePresence>
        {textVisible && (
          <motion.div
            key={imageIndex}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full rounded-md text-white z-10"
          >
            <motion.div variants={childVariants}>
              <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 font-bold">
                Ocean Cycles
              </p>
            </motion.div>
            <motion.div variants={childVariants}>
              <p className="text-lg md:text-lg lg:text-2xl mb-8 sm:mb-4 md:mb-8 lg:mb-12">
                {sliderData[imageIndex].tagline}
              </p>
            </motion.div>
            <motion.div variants={childVariants}>
              <Button size="lg" className="py-2 px-4 rounded-md hover:bg-teal-600 transition">
                {sliderData[imageIndex].button}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
