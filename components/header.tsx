"use client";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import Button from "./ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 1024;
      const scrollTarget = window.scrollY > 20;

      if (isMobile && scrollTarget) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const menu = [
    ["services", "Услуги"],
    ["cases", "Кейсы"],
    ["advantages", "Преимущества"],
    ["pricing", "Стоимость"],
    ["about", "О нас"],
    ["faq", "FAQ"],
    ["contacts", "Контакты"],
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
    <>
      <header
        className={`
        fixed top-0 left-0 w-screen z-500
        transition-all duration-300 ${isBlurred ? "backdrop-blur-[89px] bg-[#00000021]" : "backdrop-blur-[0px] bg-transparent"}
        lg:backdrop-blur-[89px] lg:bg-[#00000021]
      `}
      >
        <div className="py-[7px] max-lg:py-3 lg:relative justify-between item-center flex container">
          <Link href="/" className="flex items-end h-full lg:pt-[6px]">
            <Image
              src="/images/logo.png"
              height={40}
              width={200}
              className="h-[35px] object-contain w-max"
              alt="Logo"
            />
          </Link>
          <nav
            className={`absolute max-lg:hidden! max-lg:h-screen max-lg:left-0 max-lg:top-0 max-lg:w-screen transition-all duration-500 max-lg:bg-black/70 max-lg:backdrop-blur-[89px]!  lg:-translate-1/2 left-1/2 top-1/2 `}
          >
            <ul className="flex h-full max-lg:flex-col max-lg:pt-[103px] max-lg:gap-[17px] items-center max-[1150px]:gap-[20px] gap-[46px]">
              {menu.map((e, i) => (
                <li
                  key={i}
                  onClick={() => scrollToElement(e[0])}
                  className="text-[15px] hover:text-primary whitespace-nowrap text-white tracking-[-3%] leading-[129%] transition-colors duration-300 cursor-pointer max-lg:text-[25px]"
                >
                  {e[1]}
                </li>
              ))}
            </ul>
            <div className="lg:hidden ">
              <Image
                src="/images/icons/plus.svg"
                height={23}
                width={23}
                onClick={() => {
                  setMenuToggle(false);
                }}
                className="h-[24px] fixed top-5 right-[26px]  rotate-45 object-contain w-max"
                alt="+"
              />
              <a
                href="tel:+79005006434"
                className="text-[17px] leading-[-6%] text-white/41"
              >
                +7 (900) 500 64 34
              </a>
              <a
                href="mailto:neirofilm@gmail.com"
                className="text-[17px] leading-[-6%] text-white/41"
              >
                neirofilm@gmail.com
              </a>
            </div>
          </nav>
          <Image
            src="/images/icons/menu.svg"
            height={35}
            width={35}
            onClick={() => {
              setMenuToggle(true);
            }}
            className="h-[35px] lg:hidden object-contain w-max cursor-pointer"
            alt="="
          />
          <Button isSmall={true} styles="max-lg:hidden my-auto">
            Связаться с нами
          </Button>
        </div>
      </header>
      <nav
        className={`absolute max-lg:fixed! max-h-screen z-600 max-lg:h-screen max-lg:left-0 max-lg:top-0 max-lg:w-screen transition-all duration-500  max-lg:bg-black/70 backdrop-blur-[89px]  lg:-translate-1/2 left-1/2 top-1/2 ${menuToggle ? "max-lg:translate-x-0 opacity-100" : "max-lg:translate-x-full opacity-0 "}`}
      >
        <ul className="flex max-lg:flex-col max-lg:pt-[103px] max-lg:gap-[17px] items-center max-[1150px]:gap-[20px] gap-[46px] h-min">
          {menu.map((e, i) => (
            <li
              key={i}
              onClick={() => {
                scrollToElement(e[0]);
                setMenuToggle(false);
              }}
              className="text-[15px] hover:text-primary whitespace-nowrap text-white tracking-[-3%] cursor-pointer leading-[129%] max-lg:text-[25px]"
            >
              {e[1]}
            </li>
          ))}
        </ul>
        <div className="lg:hidden h-min fixed bottom-0 left-0 pb-6 gap-2 items-center flex flex-col justify-center w-full text-center">
          <Image
            src="/images/icons/plus.svg"
            height={23}
            width={23}
            onClick={() => {
              setMenuToggle(false);
            }}
            className="h-[24px] cursor-pointer fixed top-5 right-[26px]  rotate-45 object-contain w-max"
            alt="+"
          />
          <a
            href="tel:+79005006434"
            className="text-[17px] mt-auto leading-[-6%] text-white/41"
          >
            +7 (900) 500 64 34
          </a>
          <a
            href="mailto:neirofilm@gmail.com"
            className="text-[17px] leading-[-6%] text-white/41"
          >
            neirofilm@gmail.com
          </a>
        </div>
      </nav>
    </>
  );
}
