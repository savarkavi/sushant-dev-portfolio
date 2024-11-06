"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

const LandingContent = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mobile = useMediaQuery("(max-width: 1280px)");

  const y1 = useTransform(
    scrollYProgress,
    [0, 0.05],
    [0, mobile ? -550 : -850]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.12],
    [0, 0, mobile ? -450 : -500]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]);
  const offset1 = useTransform(scrollYProgress, [0, 0.05], [0, 12]);
  const offset2 = useTransform(scrollYProgress, [0, 0.2], [0, 24]);
  const offset3 = useTransform(scrollYProgress, [0, 0.4], [0, 36]);

  return (
    <div className="w-full h-[120vh] xl:h-[160vh] flex flex-col" ref={ref}>
      <div
        className={`sticky top-0 flex flex-col h-screen items-center justify-between`}
      >
        <div className="flex flex-col items-center gap-4 h-screen text-white text-lg xl:text-2xl font-serif mt-10">
          <motion.div
            className="flex flex-col h-full items-center justify-center gap-8"
            style={{ opacity }}
          >
            <div className="relative flex">
              <div className="relative w-[130px] h-[180px] xl:w-[250px] xl:h-[300px] -mr-10 xl:-mr-14 z-[99] -rotate-12">
                <Image
                  src="/landing-img2.jpg"
                  alt="image"
                  fill
                  className="rounded-lg"
                />
              </div>
              <div className="relative w-[130px] h-[180px] xl:w-[250px] xl:h-[300px]">
                <Image
                  src="/landing-img1.jpg"
                  alt="image"
                  fill
                  className="rounded-lg "
                />
              </div>
              <div className="relative w-[130px] h-[180px] xl:w-[250px] xl:h-[300px] -ml-10 xl:-ml-14 z-[99] rotate-12">
                <Image
                  src="/landing-img3.jpg"
                  alt="image"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>
            <p className="text-xl xl:text-2xl font-serif text-white max-w-[750px] mt-10 text-center leading-snug px-3">
              Hi, I am a{" "}
              <span className="bg-brushPink p-1">full-stack developer</span>{" "}
              based in India. I primarily work with{" "}
              <span className="bg-brushBlue p-1">Web technolgies</span>; mainly
              building out complicated backend and frontend logic/architecture
              of Apps but my passion for learning new things have also made way
              for <span className="bg-brushGreen p-1">Mobile Development</span>
              (react native) and frontend 2d $ 3d animations. Go ahead, and
              scroll for more.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="relative w-full flex justify-center items-center"
          style={{ y: y1 }}
        >
          <motion.h2 className="text-6xl xl:text-[19rem] tracking-wide text-center text-white absolute top-0">
            Welcome to
          </motion.h2>
          <motion.h2
            className="hidden xl:block text-6xl xl:text-[19rem] tracking-wide text-center text-stroke text-transparent absolute"
            style={{ top: offset1 }}
          >
            Welcome to
          </motion.h2>
          <motion.h2
            className="hidden xl:block text-6xl xl:text-[19rem] tracking-wide text-center text-stroke text-transparent absolute"
            style={{ top: offset2 }}
          >
            Welcome to
          </motion.h2>
          <motion.h2
            className="hidden xl:block text-6xl xl:text-[19rem] tracking-wide text-center text-stroke text-transparent absolute"
            style={{ top: offset3 }}
          >
            Welcome to
          </motion.h2>
        </motion.div>
        <motion.div
          className="relative w-full flex justify-center items-center"
          style={{ y: y2 }}
        >
          <motion.h2 className="text-6xl xl:text-[19rem] tracking-wide text-center text-white absolute top-0">
            Sushant dev
          </motion.h2>
          <motion.h2
            className="hidden xl:block text-6xl xl:text-[19rem] tracking-wide text-center text-stroke text-transparent absolute"
            style={{ top: offset1 }}
          >
            Sushant dev
          </motion.h2>
          <motion.h2
            className="hidden xl:block text-6xl xl:text-[19rem] tracking-wide text-center text-stroke text-transparent absolute"
            style={{ top: offset2 }}
          >
            Sushant dev
          </motion.h2>
          <motion.h2
            className="hidden xl:block text-6xl xl:text-[19rem] tracking-wide text-center text-stroke text-transparent absolute"
            style={{ top: offset3 }}
          >
            Sushant dev
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingContent;
