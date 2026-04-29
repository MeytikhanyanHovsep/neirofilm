import Cases from "@/components/sections/cases";
import { Case } from "@/components/sections/cases/casesSlider";
import GetInTouch from "@/components/sections/getInTouch";
import SecondHero from "@/components/sections/secondHero";
import ServicesSection from "@/components/sections/servicesSection";

type Props = {};

export default function Services({}: Props) {
  const cases: Case[] = [
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
    { video: "/videos/case-1.mp4", title: "AI-реклама бренда" },
  ];
  return (
    <>
      <SecondHero />
      <Cases
        title={
          <>
            ИИ-видео под ключ — <br className="min-[510px]:hidden" /> масштабный
            визуал без съёмок
          </>
        }
        type="grid"
        cases={cases}
      />
      <GetInTouch />
    </>
  );
}
