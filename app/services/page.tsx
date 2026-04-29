import GetInTouch from "@/components/sections/getInTouch";
import SecondHero from "@/components/sections/secondHero";
import ServicesSection from "@/components/sections/servicesSection";

type Props = {};

export default function Services({}: Props) {
  return (
    <>
      <SecondHero />
      <ServicesSection styles="lg:pt-[120px] lg:mb-20  pt-[80px]" />
      <GetInTouch />
    </>
  );
}
