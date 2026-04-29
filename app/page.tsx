import About from "@/components/sections/about";
import Advantages from "@/components/sections/advantages";
import Cases from "@/components/sections/cases";
import { Case } from "@/components/sections/cases/casesSlider";
import Expertise from "@/components/sections/expertise";
import Faq from "@/components/sections/faq";
import GetInTouch from "@/components/sections/getInTouch";
import Hero from "@/components/sections/hero";
import Pricing from "@/components/sections/pricing";
import ServicesSection from "@/components/sections/servicesSection";

export default function Home() {
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
      <Hero />
      <ServicesSection />
      <Expertise />
      <Cases
        title={
          <>
            ИИ-видео под ключ — <br className="min-[510px]:hidden" /> масштабный
            визуал без съёмок
          </>
        }
        type="slider"
        cases={cases}
      />
      <Advantages />
      <Pricing />
      <About />
      <GetInTouch />
      <Faq />
    </>
  );
}
