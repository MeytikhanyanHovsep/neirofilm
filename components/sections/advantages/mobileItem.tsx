import Image from "next/image";
// import { TAdvantage } from ".";

export default function MobileItem({ title, ind, desc }: any) {
  return (
    <div className="p-[37px] rounded-[15px] h-[323px] relative justify-between flex flex-col items-start min-w-[298px] bg-[#1B1B1E]/76 pt-[21px] pl-[15px]">
      <span className="text-primary text-[15px] leading-[135%] font-semibold">
        {ind}
      </span>
      <h3 className="text-[20px] leading-[106%] text-balance max-w-3/5 absolute top-[112px] left-[15px]">
        {title}
      </h3>
      <p className="text-white/66 text-[15px] text-balance leading-[135%]">
        {desc}
      </p>
    </div>
  );
}
