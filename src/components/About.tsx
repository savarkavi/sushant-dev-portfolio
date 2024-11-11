"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mobile = useMediaQuery("(max-width: 1280px)");

  const xLeft = useTransform(
    scrollYProgress,
    [mobile ? 0.3 : 0.1, 0.7],
    [0, -520]
  );
  const xRight = useTransform(
    scrollYProgress,
    [mobile ? 0.3 : 0.1, 0.7],
    [0, 520]
  );

  return (
    <div
      className="w-full relative text-pretty mx-auto min-h-screen flex flex-col gap-16 justify-center items-center overflow-hidden"
      ref={ref}
    >
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-white z-[999]">
          <h2 className="text-[1rem] tracking-wide self-start">A little</h2>
          <h2 className="text-8xl xl:text-[7rem] tracking-wide xl:my-[-10]">
            About
          </h2>
          <h2 className="text-[1rem] tracking-wide self-end">me</h2>
        </div>
      </div>
      <div className="relative">
        <div className="flex">
          <motion.div
            style={{ x: xLeft, rotate: "-6deg" }}
            className="relative w-[450px] h-[600px] rounded-xl z-[99]"
          >
            <Image
              src="/matrix.jpg"
              alt="matrix"
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>
          <motion.div
            style={{ x: xRight, rotate: "6deg" }}
            className="relative w-[450px] h-[600px] rounded-xl -ml-36 z-[90]"
          >
            <Image
              src="/retro-gaming.jpg"
              alt="matrix"
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>
        </div>
        <p className="text-white xl:text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[450px] font-serif px-16 xl:p-0">
          My journey into software development did not start with a line of code
          but by playing the OG prince of persia on my old computer. As a kid
          utterly captivated by video games, I wasnt just playing them – I was
          fascinated by how they worked. My original dream might have been to do
          pure sciences and become a physicist but one thing lead to another,
          and my love of video games and how they were made, my curiosity for
          logic and science and my passion for art and how things looked, all
          combined and shaped into this future where I am working as a software
          engineer. But this is just a beginning. While I have learned
          all-things-web over the many years I&apos;ve yet to tinker with Game
          Devlopment and Hardware and eventually A.I. But in the meantime, I am
          learning everyday and enjoying this ride.
        </p>
      </div>
    </div>
  );
};

export default About;
