import React from "react";

type Props = {
  isSmall?: boolean;
  children: React.ReactNode;
  styles?: string;
};

export default function Button({
  children,
  isSmall = false,
  styles = "",
}: Props) {
  return (
    <button
      className={`bg-primary hover:bg-[#265D8B] whitespace-nowrap   leading-[129%] flex items-center gap-[18px] cursor-pointer tracking-0 justify-center font-medium rounded-[6px] ${isSmall ? "h-[43px] text-[13px] px-[18px]" : "h-[53px] text-[15px] pl-[40px] pr-[25px] "} ${styles}`}
    >
      {children}
    </button>
  );
}
