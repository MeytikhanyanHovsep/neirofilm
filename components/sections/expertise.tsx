import Image from "next/image";
import Title from "../ui/title";

type Item = {
  icon: string;
  number: string;
  desc: string;
};

export default function Expertise() {
  const sizes = [20, 24, 23, 25];

  const items: Item[] = [
    {
      icon: "squares.svg",
      number: "130+",
      desc: "видеопроектов \nразных форматов",
    },
    {
      icon: "shield.svg",
      number: "15+",
      desc: "лет опыта \nв видеопроизводстве",
    },
    {
      icon: "screen.svg",
      number: "30+",
      desc: "мероприятий с \nвидеоконтентом для экранов",
    },
    {
      icon: "camera.svg",
      number: "25+",
      desc: "клиентов из бизнеса \nи шоу-индустрии",
    },
  ];

  return (
    <section
      id="expertise"
      className="container max-lg:pt-[78px] pt-[186px] flex flex-col items-center"
    >
      <Title width={570} dir="c">
        Опыт в производстве ИИ-видео
      </Title>
      <div className="pt-[93px] max-lg:pt-[47px] max-[550px]:grid-cols-1 max-[1220px]:grid-cols-2 grid grid-cols-4 gap-[13px] w-full">
        {items.map((e, i) => (
          <div
            key={i}
            className={` flex flex-col relative justify-between px-[25px] pt-[30px] pb-[40px] rounded-[20px] max-md:p-[20px] max-md:pb-[34px] max-[550px]:h-[266px] min-[550px]:aspect-square! ${i % 2 ? "min-[1220px]:mt-[111px]" : ""} ${i == 2 ? "bg-primary" : ""} transition-colors duration-300  lg:hover:bg-primary group bg-[#686868]/20 `}
          >
            <div
              style={{
                maskImage: `url(/images/icons/expertise/${e.icon})`,
                WebkitMaskImage: `url(/images/icons/expertise/${e.icon})`,
                maskRepeat: "no-repeat",
                maskSize: "contain",
                width: sizes[i] + "px",
              }}
              className={`bg-contain aspect-square transition-colors duration-300  lg:group-hover:bg-[white] bg-primary ${i == 2 ? "bg-white" : ""}`}
            />
            <p className="tracking-[-5%] absolute top-[42%]  -translate-y-1/2 max-md:text-[70px]  text-[80px] leading-[97%]">
              {e.number}
            </p>
            <p className="leading-[135%] whitespace-pre-line text-white/66 text-[15px]">
              {e.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
