import React from "react";
import CasesSlider, { Case } from "./casesSlider";
import CasesGrid from "./casesGrid";

type Props = {
  type: "grid" | "slider";
  cases: Case[];
  title: React.ReactNode;
  desc?: string;
};

export default function Cases({ type, cases, title, desc = "" }: Props) {
  return (
    <>
      {type === "grid" ? (
        <CasesGrid title={title} desc={desc} cases={cases} />
      ) : (
        <CasesSlider title={title} desc={desc} cases={cases} />
      )}
    </>
  );
}
