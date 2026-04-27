import Image from "next/image";

export default function About() {
  const lineText = "нейрофильмы";

  return (
    <section id="about" className=" relative max-w-screen overflow-hidden  ">
      <div className="h-full w-1/2 max-lg:hidden right-0 bottom-0 absolute  z-20 flex items-center  flex-col justify-end">
        <div className="text-right ">
          <h3 className="tracking-[-5%] text-[38px] leading-[97%] font-medium mb-[6px]">
            Александр Багно
          </h3>
          <p className="text-white/51 text-[17px] leading-[135%]">
            основатель компании
          </p>
        </div>
      </div>
      <div className="relative mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] pt-[140px] max-lg:pt-[45px]">
        <div className="absolute z-20 mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] bg-[#09090F]/60 backdrop-blur-[41px] w-[51%] -translate-y-1/2 left-0 top-1/2 h-[130%]"></div>
        <div className="absolute z-1  bg-primary/48 backdrop-blur-[41px] w-[60%] right-0 -translate-y-1/2 top-[55%] h-[160px] blur-[150px] max-md:blur-[100px] max-md:h-[50px]"></div>

        <div className="relative max-lg:min-h-[1000px] max-sm:min-h-[475px] ">
          <div className="">
            <Image
              src="/images/lights/about.png"
              width={1500}
              height={1500}
              className="object-contain  w-[60%] z-2 absolute top-auto left-[25%] -translate-x-1/2"
              alt=""
            />
            <Image
              src="/images/man.png"
              width={500}
              height={926}
              className="object-contain about-man max-sm:max-h-125  max-md:scale-140 max-md:pt-20 max-w-full max-h-231.5 w-full z-10 absolute top-0 left-[52%] -translate-x-1/2"
              alt={`""`}
            />
          </div>

          <div className="container max-lg:min-h-250 max-sm:min-h-93.75 grid grid-cols-2 max-md:grid-cols-1 relative z-30">
            <div className="h-full absolute container top-1/2 max-sm:top-[60%] left-1/2 -translate-1/2 w-full grid place-items-center">
              <div className=" w-full opacity-36 uppercase text-white/86 max-md:text-white/35 font-light flex justify-between text-shadow-black text-shadow-md text-[22px] max-md:text-[13px] leading-[16px] ">
                {lineText.split("").map((e, i) => (
                  <span key={i}>{e}</span>
                ))}
              </div>
            </div>
            <div className=" flex flex-col">
              <AboutText styles="max-md:hidden!" />
              <AboutText styles="max-md:hidden!" isHidden={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="container relative flex items-start flex-col gap-8 z-50 md:hidden! mt-[-180px]">
        <AboutText styles="" />
        <div className="">
          <h3 className="tracking-[-5%] text-[21] leading-[97%] font-medium mb-[6px]">
            Александр Багно
          </h3>
          <p className="text-white/51 text-[14px] leading-[135%]">
            основатель компании
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutText({
  isHidden,
  styles = "",
}: {
  isHidden?: boolean;
  styles?: string;
}) {
  return (
    <div
      className={`flex text-[17px] max-md:pb-0 pb-[120px] w-full leading-[135%]   font-normal text-balance flex-col pt-[56px] max-sm:pt-[130px]  gap-5 ${isHidden ? "pointer-events-none opacity-0 max-lg:hidden!" : ""} ${styles}`}
    >
      <Image
        src="/images/icons/about-detail.svg"
        width={50}
        height={40}
        className="object-contain max-md:min-h-[27px] w-min max-md:max-h-[27px] min-h-[37px] pb-0.5"
        alt={`""`}
      />
      <p className="opacity-90">
        Я режиссёр мультимедиа и работаю в видеопроизводстве более 20 лет.
        Окончил Санкт-Петербургский Гуманитарный университет профсоюзов{" "}
        <span className="text-white/59">
          {" "}
          по специальности «Режиссура мультимедиа программ».{" "}
        </span>
      </p>
      <p className="opacity-90">
        Сегодня моя основная специализация — использование нейросетей и {" "}
        <span className="text-white/59"> искусственного интеллекта </span>в
        создании видеоконтента.{" "}
      </p>
      <p className="opacity-90">
        Выступаю как спикер и эксперт по нейросетям, делюсь практическим опытом
        применения AI в создании видео и{" "}
        <span className="text-white/59">
          {" "}
          обучаю интеграции новых технологий{" "}
        </span>{" "}
        в рабочие процессы команд и продакшн-студий.{" "}
      </p>
    </div>
  );
}
