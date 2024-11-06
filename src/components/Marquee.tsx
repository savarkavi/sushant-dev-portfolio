import Image from "next/image";

import { motion } from "framer-motion";

const stackImages = [
  { id: 1, src: "/next.png", alt: "next" },
  { id: 2, src: "/react.png", alt: "react" },
  { id: 3, src: "/nodejs.png", alt: "node" },
  { id: 4, src: "/sql.png", alt: "sql" },
  { id: 5, src: "/react-native.png", alt: "react-native" },
  { id: 6, src: "/tailwind.png", alt: "tailwind" },
  { id: 7, src: "/mongodb.png", alt: "mongodb" },
  { id: 8, src: "/framer-motion.png", alt: "framer-motion" },
  { id: 9, src: "/prisma.png", alt: "prisma" },
];

const Marquee = () => {
  return (
    <div className="flex items-center gap-6 mt-12 max-w-[1200px]">
      <p className="text-xl font-serif shrink-0">My Tech Stack</p>
      <div className="flex gap-[26rem] flex-1 overflow-x-hidden shrink-0">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-300%" }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-10"
        >
          {stackImages.map((item) => (
            <Image
              key={item.id}
              src={item.src}
              alt={item.alt}
              width={42}
              height={42}
              className=""
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-300%" }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-10"
        >
          {stackImages.map((item) => (
            <Image
              key={item.id}
              src={item.src}
              alt={item.alt}
              width={42}
              height={42}
              className=""
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
