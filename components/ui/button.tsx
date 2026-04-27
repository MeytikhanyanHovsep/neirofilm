"use client";
import React from "react";
import { useModal } from "../modals";

type Props = {
  isSmall?: boolean;
  children: React.ReactNode;
  styles?: string;
  modalVariant?: "contact" | "discuss" | "tariff" | "speaker" | "callback";
  tariffName?: string;
};

export default function Button({
  children,
  isSmall = false,
  styles = "",
  modalVariant = "discuss",
  tariffName = "",
}: Props) {
  const { openModal } = useModal();

  return (
    <button
      onClick={() =>
        openModal({
          variant: modalVariant,
          tariffName: tariffName || undefined,
        })
      }
      className={`bg-primary hover:bg-[#265D8B] whitespace-nowrap   leading-[129%] flex items-center gap-[18px] cursor-pointer tracking-0 justify-center font-medium rounded-[6px] ${isSmall ? "h-[43px] text-[13px] px-[18px]" : "h-[53px] text-[15px] pl-[40px] pr-[25px] "} ${styles}`}
    >
      {children}
    </button>
  );
}
