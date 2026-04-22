import Image from "next/image";
import { TPricing } from ".";
import Button from "@/components/ui/button";

export default function Item({
  type,
  minPrice,
  desc,
  list,
  isRecomened,
}: TPricing) {
  return (
    <div
      className={`p-[7px] max-md:p-[5px] pb-0 max-md:rounded-[15px] rounded-[17px] flex flex-col max-md:backdrop-blur-[30px] md:gap-5 max-md:bg-white/5 ${isRecomened ? "bg-[#121215]/64" : "bg-[#0D0E12]"}`}
    >
      <div
        className={`rounded-[10px] max-md:rounded-[9px] relative max-md:bg-white/4 max-md:backdrop-blur-[30px] max-md:pb-[27px] max-md:pt-[10px] max-md:px-[15px] flex flex-col items-start px-4 pt-[15px] pb-[21px] ${isRecomened ? "bg-[#414141]/37" : "bg-[#1E1E22]/48"}`}
      >
        {isRecomened && (
          <div className="absolute max-md:text-[11px] max-md:py-[5.5px] max-md:px-[18px] top-0 right-[11px] text-[13px] grid place-items-center tracking-[6%] leading-[135%] bg-primary uppercase h-8 px-6 rounded-b-[10px]">
            Рекомендуем
          </div>
        )}
        <div
          className={`px-[17px] h-[38px] grid place-items-center text-[13px] tracking-[-3%] leading-[135%]   rounded-[47px] max-md:text-[13px] max-md:px-[15px] max-md:py-[6px] max-md:text-white/63 border border-white/12 ${isRecomened ? "bg-white/12" : "bg-white/10"}`}
        >
          {type}
        </div>
        <div className=" flex mb-[13px] mt-[44px] items-end gap-1 ">
          <div
            className={`text-[23px]  pb-[3px] font-normal -tracking-[5%] leading-[97%] ${isRecomened ? "" : "text-white/37"}`}
          >
            от
          </div>
          <span className="text-[47px] -tracking-[5%] font-normal leading-[97%]">
            {minPrice}
          </span>
        </div>
        <p
          className={`text-[15px] max-md:text-white/40! max-md:text-[14px] font-normal  leading-[135%] ${isRecomened ? "" : "text-white/66 "}`}
        >
          {desc}
        </p>
      </div>
      <Button isSmall={true} styles="w-full mt-[-7px] md:hidden">
        Обсудить проект
      </Button>
      <div className="md:pb-[50px] pb-[29px] max-md:px-[10px] max-md:gap-[10px] flex flex-col gap-[13px] px-4">
        <Button isSmall={true} styles="w-full max-md:hidden">
          Обсудить проект
        </Button>
        <div className="w-full mt-[7px] max-md:hidden  flex gap-[11px] items-center">
          <div className="h-px bg-white/18 w-full" />
          <p className="whitespace-nowrap  font-normal text-white/36 leading-[135%] text-[15px]">
            Что входит
          </p>
          <div className="h-px bg-white/18 w-full" />
        </div>
        <ul className="flex flex-col max-md:pt-5 gap-3">
          {list.map((e, i) => (
            <li
              key={i}
              className="flex leading-[135%] text-[15px] gap-2 items-center"
            >
              <Image
                src="/images/icons/check-2.svg"
                height={14}
                width={14}
                className="w-[14px] object-contain "
                alt="✓"
              />
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
