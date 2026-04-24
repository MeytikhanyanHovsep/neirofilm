"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import Item from "./item";
import Title from "@/components/ui/title";
import MobileItem from "./mobileItem";

export type TItem = {
  title: string;
  desc: string;
  img: string;
};

const items: TItem[] = [
  {
    title: "Без съёмочной команды",
    desc: "Видео создаётся без студии, актёров и сложной организации съёмок.",
    img: "1.jpg",
  },
  {
    title: "Без съёмочной команды",
    desc: "Видео создаётся без студии, актёров и сложной организации съёмок.",
    img: "2.jpg",
  },
  {
    title: "Без съёмочной команды",
    desc: "Видео создаётся без студии, актёров и сложной организации съёмок.",
    img: "1.jpg",
  },
  {
    title: "Без съёмочной команды",
    desc: "Видео создаётся без студии, актёров и сложной организации съёмок.",
    img: "2.jpg",
  },
  {
    title: "Без съёмочной команды",
    desc: "Видео создаётся без студии, актёров и сложной организации съёмок.",
    img: "1.jpg",
  },
];

export default function Advantages() {
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const element = document.querySelector(".advantage-item") as HTMLElement;
    if (element) {
      setHeight(element.offsetHeight);
    }
  }, []);

  return (
    <section
      id="advantages"
      className=" max-lg:pt-[98px] pt-[204px] max-w-screen overflow-x-clip  "
    >
      <div className="container relative min-[1110px]:flex items-start justify-between">
        <div className="sticky max-w-[520px] top-[204px] h-fit">
          <Title desc="Видео создаётся без студии, актёров и сложной организации съёмок.">
            Преимущества ИИ видеопроизводства
          </Title>
        </div>
        <div className="flex max-[1110px]:hidden flex-col gap-5">
          {items.map((e, i) => (
            <Item key={i} {...e} />
          ))}
        </div>
      </div>
      <div className="overflow-x-auto pt-8 pl-[50px] max-lg:pl-[20px] w-full min-[1110px]:hidden flex gap-[11px] scrollbar-hide">
        {items.map((e, i) => (
          <MobileItem
            key={i}
            ind={"0" + (i + 1)}
            title={e.title}
            desc={e.desc}
          />
        ))}
      </div>
    </section>
  );
}
