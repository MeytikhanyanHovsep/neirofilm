import React from "react";
import Button from "../ui/button";
import Title from "../ui/title";

type Props = {};

export default function SecondAbout({}: Props) {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-[100px] max-lg:pt-[60px]">
      {/* Левая часть: Текст */}
      <div className="flex flex-col items-start gap-6">
        <Title>О нас</Title>
        <p className="leading-[135%] text-[15px] text-white/69 max-w-[600px] text-balance">
          Мы используем передовые нейросети для создания масштабных визуальных
          эффектов. Ваш бренд заслуживает контента нового поколения без затрат
          на классические съемки.
        </p>
        <p className="leading-[135%] text-[15px] text-white/69 max-w-[600px] text-balance">
          Мы используем передовые нейросети для создания масштабных визуальных
          эффектов. Ваш бренд заслуживает контента нового поколения без затрат
          на классические съемки.
        </p>
        <Button modalVariant="discuss">Узнать больше</Button>
      </div>

      {/* Правая часть: Видео */}
      <div className="relative h-full w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
        <video
          className="w-full h-full object-cover"
          src="/videos/case-1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}
