"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0.1, 0.7], [0, -520]);
  const xRight = useTransform(scrollYProgress, [0.1, 0.7], [0, 520]);

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
        <p className="text-white xl:text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[450px] font-serif px-16 xl:p-0">
          As a full-stack developer , I thrive on crafting digital experiences
          that seamlessly bridge the web and mobile worlds. My expertise in
          Next.js and React Native allows me to build solutions that feel
          natural on any device, whether its a responsive web application or a
          native mobile experience. I approach each project with a commitment to
          clean code and thoughtful architecture, ensuring that every line
          serves a purpose and every feature enhances the user experience.
          Beyond the code, Im passionate about creating applications that make a
          real difference in peoples lives. My full-stack background gives me a
          comprehensive understanding of how all the pieces fit together, from
          database design to pixel-perfect interfaces.
        </p>
      </div>
    </div>
  );
};

export default About;
