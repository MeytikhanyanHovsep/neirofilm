import Title from "@/components/ui/title";
import React, { ReactNode } from "react";
import { Case } from "./casesSlider";
import VideoCard from "./item";

type Props = {};

export default function CasesGrid({
  cases,
  title,
  desc,
}: {
  cases: Case[];
  title: ReactNode;
  desc: string;
}) {
  return (
    <section
      id="cases"
      className=" container  overflow-hidden max-lg:pt-[89px] pt-[103px] flex flex-col"
    >
      <div className="w-full">
        <Title desc={desc} width={850}>
          {title}
        </Title>
      </div>

      <div className="pt-[67px] max-lg:grid-cols-2 max-sm:grid-cols-1  max-lg:pt-[39px] scrollbar-hide grid grid-cols-3 gap-y-[35px] gap-x-[22px] w-full">
        {cases.map(({ video, title }, i) => (
          <div key={i} className="  scrollbar-hide shrink-0 overflow-hidden ">
            <VideoCard video={video} title={title} />
          </div>
        ))}
      </div>
      <p className="md:hidden  mx-auto leading-[135%] w-max text-white/49 mt-[11px]">
        Рекламный ролик AI
      </p>
    </section>
  );
}
