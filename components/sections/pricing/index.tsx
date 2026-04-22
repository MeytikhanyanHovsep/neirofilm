import Title from "@/components/ui/title";
import Item from "./item";
import Image from "next/image";

export type TPricing = {
  type: string;
  minPrice: string;
  desc: string;
  list: string[];
  isRecomened: boolean;
};

export default function Pricing() {
  const pricingData: TPricing[] = [
    {
      type: "Базовый",
      minPrice: "15 000 ₽",
      desc: "Для простых проектов.",
      list: ["Генерация видеосцен", "Монтаж", "Длительность от 10 секунд"],
      isRecomened: false,
    },
    {
      type: "Стандартный ролик",
      minPrice: "25 000 ₽",
      desc: "Для рекламных и презентационных видео",
      list: [
        "Разработка сценария",
        "Генерация нескольких сцен",
        "Монтаж и графика",
        "Длительность от 10 секунд",
      ],
      isRecomened: true,
    },
    {
      type: "Продакшн-проект",
      minPrice: "150 000 ₽",
      desc: "Для сложных проектов и клипов.",
      list: [
        "Разработка концепции",
        "Сценарий",
        "Генерация визуала",
        "Монтаж и постпродакшн",
        "Длительность до 90 секунд",
      ],
      isRecomened: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative max-w-screen overflow-hidden max-lg:pt-[107px] pt-[195px]"
    >
      <div className="container relative z-10">
        <Title dir="c">Стоимость ИИ-видео</Title>
        <div className="pt-[77px] max-lg:pt-[31px]   pb-[33px] max-md:grid-cols-1 max-md:gap-5 max-[1220px]:grid-cols-2 grid grid-cols-3 gap-[17px]">
          {pricingData.map((e, i) => (
            <Item key={i} {...e} />
          ))}
        </div>
        <p
          className={`text-[17px] max-md:hidden mx-auto w-max font-normal text-white/66  leading-[135%]`}
        >
          Стоимость зависит от сложности проекта и длительности видео
        </p>
      </div>
      <Image
        src="/images/lights/pricing-1.png"
        width={850}
        height={1250}
        alt=""
        className="max-w-[821px] z-1 max-md:top-[-500px] pointer-events-none w-[821px] max-h-[1250px] mix-blend-lighten mask-[radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)]  origin-center bottom-[180px] left-[-328px] absolute "
      />
      <Image
        src="/images/lights/pricing-1.png"
        width={850}
        height={1250}
        alt=""
        className="max-w-[821px] md:hidden z-1 bottom-[-200px] pointer-events-none w-[821px] max-h-[1250px] mix-blend-lighten mask-[radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)]  origin-center  left-[-388px] absolute "
      />
      <Image
        src="/images/lights/pricing-2.png"
        width={1200}
        height={870}
        alt=""
        className="max-w-[1150px] max-md:right-[-650px] max-md:top-[200px] z-1 rotate-[-10deg] pointer-events-none w-[1150px] max-h-[867px] mix-blend-lighten mask-[radial-gradient(ellipse_70%_120%_at_50%_0%,black_30%,transparent_90%)]  origin-center -bottom-[10px] right-[-785px] absolute "
      />
    </section>
  );
}
