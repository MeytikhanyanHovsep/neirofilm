"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "Без съёмочной команды",
    description:
      "Видео создаётся без студии, актёров и сложной организации съёмок.",
    imageUrl:
      "https://images.unsplash.com/photo-1618422176465-4f8158ab70ce?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Быстрее производство",
    description: "Создание ролика занимает от нескольких дней, а не недель.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Любые сцены и локации",
    description:
      "Можно создать визуал, который сложно или дорого снять в реальности.",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Экономия бюджета",
    description: "Стоимость ниже классического видеопроизводства.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Решаем сложные задачи",
    description: "Реклама, мероприятия, сцена, клипы и презентации.",
    imageUrl:
      "https://images.unsplash.com/photo-1535016120720-40c746a51d47?q=80&w=800&auto=format&fit=crop",
  },
];

const AIProductionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: leftColumnRef.current,
        start: "top top",
        endTrigger: rightColumnRef.current,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });

      const cards = gsap.utils.toArray<HTMLElement>(".feature-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            },
          },
        );

        const img = card.querySelector(".parallax-img");
        if (img) {
          gsap.fromTo(
            img,
            { y: -40, scale: 1.15 },
            {
              y: 40,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <div className="h-screen flex items-center justify-center bg-zinc-900">
        <h1 className="text-3xl text-zinc-500">Scroll Down</h1>
      </div>

      <div
        ref={containerRef}
        className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start justify-between"
      >
        <div
          ref={leftColumnRef}
          className="w-full lg:w-5/12 h-screen flex flex-col justify-center pt-20 pb-20 z-10"
        >
          <h2 className="text-4xl lg:text-5xl font-medium leading-tight mb-6 tracking-wide">
            Преимущества ИИ <br />
            видеопроизводства
          </h2>
          <p className="text-zinc-400 text-sm lg:text-base max-w-xs leading-relaxed">
            Видео создаётся без студии, актёров и сложной организации съёмок.
          </p>
        </div>

        <div
          ref={rightColumnRef}
          className="w-full lg:w-6/12 flex flex-col gap-32 pt-[40vh] pb-[40vh]"
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card flex flex-col gap-6 w-full max-w-lg ml-auto"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                <h3 className="text-2xl font-medium">{feature.title}</h3>
              </div>

              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-800 relative">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="parallax-img absolute top-0 left-0 w-full h-[130%] object-cover"
                />
              </div>

              <p className="text-zinc-400 text-sm lg:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-screen flex items-center justify-center bg-zinc-900">
        <h1 className="text-3xl text-zinc-500">End of Section</h1>
      </div>
    </div>
  );
};

export default AIProductionSection;
