import React from "react";

type Props = {
  children: React.ReactNode;
  desc?: string;
  dir?: null | "c";
  width?: number;
  styles?: string;
  descStyles?: string;
};

export default function Title({
  children,
  desc,
  dir,
  width = 1000,
  styles = "",
  descStyles = "",
}: Props) {
  return (
    <div
      className={`flex flex-col  gap-11 max-lg:gap-[22px] ${dir == "c" ? "items-center text-center mx-auto" : ""} ${styles}`}
      style={{ maxWidth: width + "px" }}
    >
      <h2 className="text-balance max-lg:text-[34px] text-[57px] tracking-[-5%] leading-[97%]">
        {children}
      </h2>
      {desc && (
        <p
          className={`text-white/66 md:w-3/5 text-balance text-[15px] leading-[135%] ${descStyles}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
