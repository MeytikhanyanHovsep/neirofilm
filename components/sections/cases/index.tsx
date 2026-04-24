"use client";
import Title from "@/components/ui/title";
import { useRef, useEffect, useCallback, useState } from "react";
import { useMotionValue, animate } from "framer-motion";
import VideoCard from "./item";

export type Case = {
  video: string;
  title: string;
};

export default function Cases() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const currentIndexRef = useRef(0);

  const [containerHeight, setContainerHeight] = useState<
    number | "auto" | undefined
  >(undefined);

  const x = useMotionValue(0);

  const cases: Case[] = [
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
  ];

  const getSlideWidth = useCallback(() => {
    if (!scrollRef.current) return 0;
    const first = scrollRef.current.children[0] as HTMLElement | null;
    if (!first) return 0;
    const gap = parseFloat(getComputedStyle(scrollRef.current).gap) || 16;
    return first.offsetWidth + gap;
  }, []);

  const goToSlide = useCallback(
    (index: number, animated = true) => {
      const target = -index * getSlideWidth();
      if (animated) {
        animate(x, target, {
          type: "spring",
          stiffness: 300,
          damping: 35,
          mass: 0.8,
        });
      } else {
        x.set(target);
      }
    },
    [x, getSlideWidth],
  );

  useEffect(() => {
    return x.on("change", (val) => {
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateX(${val}px)`;
      }
    });
  }, [x]);

  useEffect(() => {
    const recalculate = () => {
      if (!scrollRef.current || !wrapperRef.current || !targetRef.current)
        return;

      if (window.innerWidth <= 1024) {
        setContainerHeight("auto");
        return;
      }

      const maxTranslate = Math.max(
        0,
        scrollRef.current.scrollWidth - wrapperRef.current.clientWidth,
      );

      const height =
        window.innerHeight + maxTranslate + window.innerHeight * 0.3;

      setContainerHeight(height);
    };

    let raf1: number;
    let raf2: number;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(recalculate);
    });

    window.addEventListener("resize", recalculate);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.removeEventListener("resize", recalculate);
    };
  }, [cases.length]);

  useEffect(() => {
    const applyMobileStyles = () => {
      const isMobile = window.innerWidth <= 1024;

      if (sectionRef.current) {
        sectionRef.current.style.overflowX = isMobile ? "visible" : "";
        sectionRef.current.style.overflowY = isMobile ? "hidden" : "";
      }
      if (wrapperRef.current) {
        wrapperRef.current.style.overflowX = isMobile ? "auto" : "";
      }
      if (isMobile) {
        x.set(0);
        currentIndexRef.current = 0;
        if (scrollRef.current) {
          scrollRef.current.style.transform = "translateX(0px)";
        }
      }
    };

    applyMobileStyles();
    window.addEventListener("resize", applyMobileStyles);
    return () => window.removeEventListener("resize", applyMobileStyles);
  }, [x]);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerWidth <= 1024 ||
        !targetRef.current ||
        !scrollRef.current ||
        !wrapperRef.current
      ) {
        return;
      }

      const { top } = targetRef.current.getBoundingClientRect();
      const totalSlides = cases.length;

      if (top <= 0) {
        const maxTranslate = Math.max(
          0,
          scrollRef.current.scrollWidth - wrapperRef.current.clientWidth,
        );
        const scrollDistance = Math.abs(top);
        const segmentLength =
          maxTranslate > 0 ? maxTranslate / Math.max(1, totalSlides - 1) : 1;

        let newIndex = Math.round(scrollDistance / segmentLength);
        newIndex = Math.max(0, Math.min(newIndex, totalSlides - 1));

        if (currentIndexRef.current !== newIndex) {
          currentIndexRef.current = newIndex;
          goToSlide(newIndex);
        }
      } else if (top > 0 && currentIndexRef.current !== 0) {
        currentIndexRef.current = 0;
        goToSlide(0);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [goToSlide, cases.length]);

  return (
    <div
      id="cases"
      ref={targetRef}
      className="h-[300vh] relative w-full"
      style={
        containerHeight !== undefined ? { height: containerHeight } : undefined
      }
    >
      <section
        ref={sectionRef}
        className="sticky top-0 h-screen max-w-screen overflow-hidden max-lg:pt-[89px] pt-[103px] flex flex-col"
      >
        <div className="container">
          <div className="w-full">
            <Title width={850}>
              ИИ-видео под ключ — <br className="min-[510px]:hidden" />{" "}
              масштабный визуал без съёмок
            </Title>
          </div>
        </div>

        <div
          ref={wrapperRef}
          className="pt-[67px] pl-[50px] max-lg:pl-5 max-lg:pt-[39px] flex scrollbar-hide gap-[22px] w-full"
        >
          <div
            ref={scrollRef}
            className="flex gap-[13px] scrollbar-hide max-lg:pb-5 min-[1024px]:gap-[16px] w-max will-change-transform scrollbar-hide!"
          >
            {cases.map(({ video, title }, i) => (
              <div
                key={i}
                className=" w-[472px] scrollbar-hide max-[1400px]:w-[350px] shrink-0 overflow-hidden max-sm:max-w-[309px]"
              >
                <VideoCard video={video} title={title} />
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <p className="md:hidden mx-auto leading-[135%] w-max text-white/49 mt-[11px]">
            Рекламный ролик AI
          </p>
        </div>
      </section>
    </div>
  );
}
