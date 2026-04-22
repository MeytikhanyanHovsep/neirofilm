"use client";
import Title from "@/components/ui/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import "swiper/css";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import VideoCard from "./item";

export type Case = {
  video: string;
  title: string;
};

export default function Cases() {
  const swiperRef = useRef<any>(null);
  const [isBeg, setIsBeg] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const cases: Case[] = [
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
  ];

  return (
    <section
      id="cases"
      className=" max-w-screen overflow-hidden max-lg:pt-[89px] pt-[233px]"
    >
      <div className="container">
        <div className="w-full">
          <Title width={850}>
            ИИ-видео под ключ — <br className="min-[510px]:hidden" /> масштабный
            визуал без съёмок
          </Title>
          {/* <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`w-[67px] transition-opacity duration-300 h-[67px] bg-white/26 rounded-full grid place-items-center ${isBeg ? "opacity-45" : " cursor-pointer"}`}
          >
            <Image
              src="/images/icons/arrow-right.svg"
              height={21}
              width={21}
              className="h-[21px] rotate-180 object-contain "
              alt=">"
            />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`w-[67px] transition-opacity duration-300 h-[67px] bg-white/26 rounded-full grid place-items-center ${isEnd ? "opacity-45" : " cursor-pointer"}`}
          >
            <Image
              src="/images/icons/arrow-right.svg"
              height={21}
              width={21}
              className="h-[21px] object-contain "
              alt=">"
            />
          </button>
        </div> */}
        </div>
        <div className="pt-[67px] max-lg:pt-[39px] flex gap-[22px]">
          <Swiper
            spaceBetween={13}
            slidesPerView={1.1}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              1400: {
                slidesPerView: 3.1,
              },
              1024: {
                spaceBetween: 16,
                slidesPerView: 2.2,
              },
            }}
            onSlideChange={(swiper) => {
              setIsBeg(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="max-w-full w-full overflow-visible!"
          >
            {cases.map(({ video, title }, i) => (
              <SwiperSlide key={i} className="overflow-hidden!">
                <VideoCard video={video} title={title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="md:hidden mx-auto leading-[135%] w-max text-white/49 mt-[11px]">
          Рекламный ролик AI
        </p>
      </div>
    </section>
  );
}
