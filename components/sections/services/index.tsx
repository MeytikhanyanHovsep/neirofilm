"use client";
import Title from "@/components/ui/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Item1 from "./item-1";
import Item2 from "./item-2";
import { useRef, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Item3 from "./item-3";
import Item4 from "./item-4";
import Item5 from "./item-5";
import Item6 from "./item-6";
import Item7 from "./item-7";

type Service = {
  title: React.ReactNode;
  desc: string;
  Item: any;
};

export default function Services() {
  const swiperRef = useRef<any>(null);
  const [isBeg, setIsBeg] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const services = [
    {
      title: "ИИ-видео \n для бизнеса",
      desc: "Рекламные и презентационные ролики для компаний, брендов и продуктов",
      Item: Item1,
    },
    {
      title: "Видеоконтент для мероприятий",
      desc: "Видео для экранов конференций, форумов и корпоративных событий.",
      Item: Item2,
    },
    {
      title: "Мультфильмы и анимационные ролики",
      desc: "Анимационные истории и персонажи для брендов и медиа, и блогеров.",
      Item: Item3,
    },

    {
      title: "Рекламные \n ролики",
      desc: "Видео для маркетинговых кампаний и продвижения брендов.",
      Item: Item4,
    },
    {
      title: "Музыкальные \n клипы",
      desc: "Клипы и визуальные проекты для артистов и музыкальных проектов, ТикТок проектов, Ютуб каналов.",
      Item: Item5,
    },
    {
      title: "ИИ-аватары",
      desc: "Цифровые ведущие и персонажи для обучающих видео, презентаций и контента.",
      Item: Item6,
    },

    {
      title: "Сценический \n визуал",
      desc: "Генеративный видеоконтент для LED-экранов, концертов и шоу",
      Item: Item7,
    },
  ];

  return (
    <section
      id="services"
      className=" max-w-screen overflow-hidden max-lg:pt-[97px] pt-[233px]"
    >
      <div className="container">
        <div className="w-full flex items-end justify-between">
          <Title width={500}>Услуги ИИ-видеопродакшна</Title>
          <div className="flex gap-2 max-md:hidden">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className={`w-[67px] transition-opacity duration-300 h-[67px] bg-white/26 rounded-full grid place-items-center cursor-pointer opacity-45 hover:opacity-100`}
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
              className={`w-[67px] transition-opacity duration-300 h-[67px] bg-white/26 rounded-full grid place-items-center cursor-pointer opacity-45 hover:opacity-100`}
            >
              <Image
                src="/images/icons/arrow-right.svg"
                height={21}
                width={21}
                className="h-[21px] object-contain "
                alt=">"
              />
            </button>
          </div>
        </div>
        <div className="pt-[67px] max-lg:pt-[58px] flex gap-[22px]">
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setIsBeg(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              1500: {
                slidesPerView: 4.1,
              },
              1100: {
                slidesPerView: 3.2,
                spaceBetween: 22,
              },
              600: {
                slidesPerView: 2.3,
              },
            }}
            slidesPerView={1.1}
            spaceBetween={13}
            className="max-w-full overflow-visible!"
          >
            {services.map(({ Item, title, desc }, i) => (
              <SwiperSlide key={i} className="overflow-hidden!">
                <div className=" group gap-6 max-lg:gap-[22px] flex flex-col px-6 pt-10 pb-5 h-[476px] bg-[#343434]/42 rounded-[20px] overflow-hidden! max-lg:pt-5 max-lg:pb-[33px] max-lg:h-[416px]">
                  <div className="h-full">
                    <Item />
                  </div>
                  <h3 className="text-[23px] max-md:text-[21px] whitespace-pre-line flex items-start h-max min-h-[48px] font-medium leading-[106%] text-balance">
                    {title}
                  </h3>
                  <p className="text-[15px] min-h-[60px] flex items-start leading-[135%] text-white/66 text-balance">
                    {desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-2 md:hidden w-min pt-[47px] mx-auto">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`w-[67px] transition-opacity duration-300 h-[67px]  rounded-full grid place-items-center ${isBeg ? "opacity-45 bg-white/23" : " bg-primary cursor-pointer"}`}
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
            className={`w-[67px] transition-opacity duration-300 h-[67px]  rounded-full grid place-items-center ${isEnd ? "opacity-45 bg-white/23" : " bg-primary cursor-pointer"}`}
          >
            <Image
              src="/images/icons/arrow-right.svg"
              height={21}
              width={21}
              className="h-[21px] object-contain "
              alt=">"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
