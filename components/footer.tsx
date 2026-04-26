"use client";
import Image from "next/image";
import Button from "./ui/button";
import Link from "next/link";
import { useLenis } from "lenis/react";

export default function Footer() {
  const lenis = useLenis();

  const menu = [
    ["services", "Услуги"],
    ["cases", "Кейсы"],
    ["advantages", "Преимущества"],
    ["pricing", "Стоимость"],
    ["about", "О нас"],
    ["faq", "FAQ"],
    ["contacts", "Контакты"],
  ];

  const socials = [
    { icon: "tg.svg", link: "#" },
    { icon: "max.svg", link: "#" },
    { icon: "mail.svg", link: "#" },
  ];

  const scrollToElement = (target: string) => {
    const targ = target.includes("#") ? target : "#" + target;
    lenis?.scrollTo(targ, {
      offset: targ === "#hero" ? -100 : 150,
      duration: 3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <footer
      id="contacts"
      className="border-t border-white/18 w-full max-lg:mt-20 max-lg:border-white/11 mt-[170px]"
    >
      <div className="container flex flex-col gap-[109px] max-md:pt-6 pt-[38px]">
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-lg:grid-cols-2 max-[1200px]:grid-cols-3 ">
          <div className="flex   flex-col gap-[23px]">
            <Image
              alt="logo"
              width={130}
              height={40}
              className="object-contain h-[40px]"
              src="/images/logo.png"
            />
            <h3 className="mb-[3px] max-md:text-[20px] w-[330px] text-balance text-[22px] leading-[117%]">
              ИИ видео под ключ — полный цикл продакшна: идея, генерация,
              монтаж, озвучка
            </h3>
            <Button isSmall={true} styles="w-[252px] max-sm:w-full">
              Обсудить проект
            </Button>
          </div>
          <div className="ml-10 max-[800px]:ml-0 max-md:mt-[31px] max-lg:flex-col min-[1200px]:-ml-10 max-lg:col-span-1 max-sm:gap-[35px] max-[1200px]:col-span-2 gap-[50px] max flex justify-between">
            <div className="flex max-lg:order-3 pt-4 max-md:gap-[42px] gap-[87px]">
              <ul className="flex flex-col text-white/77 max-md:text-white/47 tracking-[-3%] leading-[129%] text-[13px] uppercase font-normal gap-[13px]">
                {menu.slice(0, Math.ceil(menu.length / 2)).map((e, i) => (
                  <li
                    onClick={() => scrollToElement(e[0])}
                    key={i}
                    className="max-md:text-[15px]"
                  >
                    {e[1]}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col text-white/77 max-md:text-white/47 tracking-[-3%] leading-[129%] text-[13px] uppercase font-normal gap-[13px]">
                {menu.slice(Math.ceil(menu.length / 2)).map((e, i) => (
                  <li
                    key={i}
                    onClick={() => scrollToElement(e[0])}
                    className="max-md:text-[15px]"
                  >
                    {e[1]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start flex-col">
              <a
                className="text-[37px] max-sm:hidden whitespace-nowrap tracking-[-6%]"
                href="tel:+79005006434"
              >
                +7 (900) 500 64 34
              </a>
              <button className="underline max-sm:hidden mb-[44px] text-primary text-[13px] leading-[135%]">
                заказать обратный звонок
              </button>
              <div className="gap-1 flex">
                {socials.map((e, i) => (
                  <a
                    href={e.link}
                    key={i}
                    className="grid place-items-center w-[50px] h-[50px] rounded-full border border-white/32 hover:bg-primary hover:border-primary"
                  >
                    <Image
                      src={`/images/icons/social/${e.icon}`}
                      alt={e.icon.split(".")[0]}
                      className={`${i == 1 ? "w-[19px]" : "w-[21px]"} object-contain`}
                      width={21}
                      height={21}
                    />
                  </a>
                ))}
                <a
                  href="tel:+79005006434"
                  className="grid place-items-center w-[50px] h-[50px] rounded-full border border-white/32 hover:bg-primary hover:border-primary"
                >
                  <Image
                    src={`/images/icons/social/call.svg`}
                    alt={"call"}
                    className={`w-[24px] object-contain`}
                    width={21}
                    height={21}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:border-t max-sm:flex  max-sm:flex-col max-sm:items-start h-[68px] grid grid-cols-2 max-sm:gap-[14px] max-[1200px]:grid-cols-3 items-center w-full border-white/22">
          <p className="text-[15px] tracking-[-2%] text-[#838383]">
            © 2026. Все права защищены
          </p>
          <div className=" w-full max-[800px]:flex-col gap-[14px] max-[1200px]:col-span-2  justify-between flex max-md:pb-[28px] items-center max-[800px]:items-start">
            <Link
              href="privacy-policy"
              className="text-[15px] underline min-[800px]:ml-10 min-[1200px]:-ml-10 tracking-[-2%] text-[#838383]"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="consent"
              className="text-[15px]  underline  tracking-[-2%] text-[#838383]"
            >
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
