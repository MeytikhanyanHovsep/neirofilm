import Image from "next/image";
import Button from "../ui/button";
import Videos from "../videos";

export default function Hero() {
  const videos = [
    {
      w: 370,
    },
    {
      w: 280,
    },
    {
      w: 435,
    },
    {
      w: 279,
    },
    {
      w: 312,
    },
    {
      w: 312,
    },
    {
      w: 387,
    },
    {
      w: 372,
    },
    {
      video: "/images/video-prev-2.png",

      w: 372,
    },
    {
      w: 201,
    },
    {
      w: 387,
    },
    {
      w: 387,
    },
  ];
  return (
    <main
      id="hero"
      className="relative max-w-screen overflow-x-hidden bg-[#09090F]"
    >
      <Image
        src="/images/lights/hero-light.png"
        width={850}
        height={570}
        loading="eager"
        alt=""
        className="max-w-[856px] max-md:max-w-[1400px] max-md:w-[1400px] max-md:top-[-240px] max-md:left-[130%]   z-1 pointer-events-none w-[800px] max-h-[564px] mix-blend-lighten   origin-center max-md:rotate-[-25deg] rotate-[-7.12deg] top-[-65px] left-[60%] absolute -translate-x-1/2"
      />
      <div className="container max-md:pb-[62px] pb-[77px] relative z-10 gap-5 max-md:gap-[10px] flex flex-col md:items-center max-md:pt-[89px] pt-[112px]">
        <div className="md:h-[42px]  md:mb-[-7px] md:backdrop-blur-[100px] md:bg-white/10 rounded-[61px] md:pl-[24px] md:pr-[34px] md:py-[10px] flex items-start md:items-center gap-[7px] md:gap-[10px] max-md:order-2">
          <Image
            src="/images/icons/check.svg"
            height={18}
            width={18}
            className="w-[18px] object-contain "
            alt="✓"
          />
          <p className="text-[15px] max-md:text-white/69 leading-[135%]">
            Видео от 15 000 ₽ — без съёмок и сложного продакшна
          </p>
        </div>
        <h1 className="text-[57px] font-medium tracking-[-5%] leading-[97%] md:text-center max-w-[1000px] max-md:order-1 max-md:mb-[10px] max-md:max-w-[400px] max-md:mr-auto text-balance max-md:text-[34px]">
          ИИ-видео под ключ - масштабный визуал без съёмок
        </h1>
        <p className="pb-[3px] max-md:mb-[28px] max-md:flex items-start gap-[7px] md:gap-[10px] leading-[135%] text-[15px] text-white/69 max-w-[500px] text-balance md:text-center tracking-0 max-md:order-3 ">
          <Image
            src="/images/icons/check.svg"
            height={18}
            width={18}
            className="w-[18px] object-contain "
            alt="✓"
          />
          Создаём AI-видео для компаний, брендов и шоу-проектов — от
          корпоративных историй до концертного визуала
        </p>
        <Button styles="max-md:order-4 ">
          Обсудить проект
          <Image
            src="/images/icons/arrow-right.svg"
            height={21}
            width={21}
            className="h-[21px] object-contain "
            alt=">"
          />
        </Button>
      </div>
      <Videos data={videos} />
    </main>
  );
}
