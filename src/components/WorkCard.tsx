"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type WorkCardProps = {
  num: string;
  type: string;
  image: string;
  alt: string;
  title: string;
  desc: string;
};

const WorkCard = ({ num, type, image, alt, title, desc }: WorkCardProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col gap-8 border-b border-gray-600 p-4 xl:px-8 xl:pt-16 xl:pb-36"
    >
      <div className="flex justify-between items-center text-gray-500">
        <span>{num}</span>
        <p>{type}</p>
      </div>

      <div className="flex justify-between gap-10">
        <div className="relative w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] rounded-lg shrink-0">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-white text-2xl xl:text-4xl">{title}</h2>
          <p className="text-gray-500 font-serif xl:text-xl">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
