import Cases from "@/components/sections/cases";
import { Case } from "@/components/sections/cases/casesSlider";
import SecondAbout from "@/components/sections/secondAbout";
import SecondHero from "@/components/sections/secondHero";

type Props = {};

export default function About({}: Props) {
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
      <SecondAbout />
      <Cases
        type="grid"
        cases={cases}
        title={
          <>
            ИИ-видео под ключ — <br className="min-[510px]:hidden" /> масштабный
            визуал без съёмок
          </>
        }
      />
    </>
  );
}
