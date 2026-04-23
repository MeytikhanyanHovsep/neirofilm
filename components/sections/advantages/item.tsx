"use client";
import Image from "next/image";
import { TItem } from ".";
import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion";
import { useRef, useState } from "react";

export default function Item({ title, img, desc }: TItem) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.8 });

  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (Math.abs(latest - previous) > 5) {
      setScrollDirection(latest > previous ? "down" : "up");
    }
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: scrollDirection === "down" ? 100 : -100,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <div ref={containerRef}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pt-7 advantage-item border-t border-white/25 bg-[#06070B] gap-[100px] flex justify-between pb-[37px] max-[1200px]:max-w-[450px] max-[1320px]:w-[550px] max-[1450px]:w-[650px] max-[1550px]:w-[750px] w-[861px]"
      >
        <h3 className="text-[23px] leading-[106%] flex gap-5 items-start font-medium">
          <div className="block min-w-[9px] min-h-[9px] rounded-full bg-primary mt-[3px]"></div>
          {title}
        </h3>
        <div className="pt-0.5 w-min flex flex-col gap-[18px]">
          <Image
            src={`/images/advantages/${img}`}
            width={500}
            height={250}
            className="object-cover object-center max-[1550px]:max-w-[350px] max-[1550px]:max-h-[150px] max-[1200px]:max-w-[200px] max-[1200px]:max-h-[130px] max-[1320px]:max-w-[250px] h-[224px] max-w-[446px] rounded-[15px]"
            alt="advantages"
          />
          <p className="max-w-4/5 text-balance leading-[135%] text-[15px] text-white/66">
            {desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
