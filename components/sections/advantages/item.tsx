"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

export default function Item({ title, img, desc, top, count }: any) {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [itemsLength, ind] = count;
  const [topDir, setTopDir] = useState(0);
  const [bottomDir, setBottomDir] = useState(0);
  const isLast = ind + 1 === itemsLength;
  useLayoutEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };

    updateHeight();
    const gap = 20;

    const entryStart = (ind - 2) * (height + gap);

    const scrollStart = ind * (height + gap);
    const hiddenPixels = Math.max(0, Math.min(height, top - 104 - scrollStart));
    const visibleBottom = Math.max(0, Math.min(height, top - entryStart));
    setBottomDir(Math.round(visibleBottom));
    setTopDir(Math.round(hiddenPixels));

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [top, height]);

  const opacity =
    ind === 0 || ind === 1
      ? topDir > 0
        ? 1 - topDir / height
        : 1
      : topDir > 0
        ? 1 - topDir / height
        : bottomDir / height;
  const scale = 1 - (topDir / height) * 0.2;

  return (
    <motion.div
      style={{
        opacity: isLast ? 1 : isNaN(opacity) ? 0 : opacity,
        scale: isNaN(scale) ? 1 : scale,
        transformOrigin: "top center",
        top: isLast ? 300 : 104,
        position: isLast ? "sticky" : "sticky",
      }}
      className="pt-7  border-t  max-[1110px]:hidden border-white/25 bg-[#06070B] gap-[100px] flex justify-between pb-[37px] max-[1200px]:max-w-[450px] max-[1320px]:w-[550px] max-[1450px]:w-[650px] max-[1550px]:w-[750px] w-[861px]"
      ref={ref}
    >
      <h3 className="text-[23px] leading-[106%] flex gap-5 items-start font-medium">
        <div className="block min-w-[9px] min-h-[9px] rounded-full bg-primary mt-[3px]"></div>
        {/* {title} */}
        {topDir} ---- {bottomDir} ---- {ind + 1}---{itemsLength}
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
  );
}
