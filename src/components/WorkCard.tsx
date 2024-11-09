"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type WorkCardProps = {
  num: string;
  type: string;
  image: string;
  alt: string;
  title: string;
  color: string;
  link: string;
  desc: string;
};

const WorkCard = ({ num, type, title, desc, color, link }: WorkCardProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col gap-8 border-b border-gray-600 p-4 xl:px-8 xl:pt-16 xl:pb-36"
    >
      <div className="flex justify-between gap-10">
        <div
          className={`w-[80px] h-[80px] rounded-xl ${color} shrink-0 flex justify-center items-center`}
        >
          {num}
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <Link
              href={link}
              target="_blank"
              className="text-white text-2xl xl:text-4xl"
            >
              {title}
            </Link>
            <h2 className="text-gray-500">{type}</h2>
          </div>
          <p className="text-gray-500 font-serif xl:text-xl">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
