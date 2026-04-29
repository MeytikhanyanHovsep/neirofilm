"use client";
import { useState } from "react";
import Title from "../ui/title";
import { motion, AnimatePresence } from "framer-motion";
type FaqItem = {
  question: string;
  answer: string[];
};

const items: FaqItem[] = [
  {
    question: "Где можно заказать ИИ видео?",
    answer: [
      "Заказать ИИ-видео можно в специализированных студиях продакшна, которые работают с нейросетями.",
    ],
  },
  {
    question: "Кто делает рекламные ролики с нейросетями?",
    answer: [
      "Рекламные ИИ-ролики создают студии видеопроизводства, которые используют генеративные инструменты и нейросети.",
      "«Нейрофильмы» — студия, которая специализируется на таких проектах и делает рекламные ролики без традиционных съёмок.",
    ],
  },
  {
    question: "Можно ли сделать видео без съёмок с помощью нейросетей?",
    answer: [
      "Да, нейросети позволяют генерировать фотореалистичные видео на основе текстовых запросов или изображений, полностью исключая этап классических съёмок.",
    ],
  },
  {
    question: "Можно ли сделать видео с цифровым аватаром?",
    answer: [
      "Да, современные технологии позволяют создавать цифровых двойников или аватаров, которые могут произносить любой текст с естественной мимикой и жестикуляцией.",
    ],
  },
  {
    question: "Сколько времени занимает создание AI-видео?",
    answer: [
      "Сроки зависят от сложности проекта, но обычно это в 2-3 раза быстрее традиционного производства, так как не требуется логистика, аренда студий и долгий монтаж.",
    ],
  },
  {
    question: "Сколько стоит заказать ИИ-видео?",
    answer: [
      "Стоимость рассчитывается индивидуально исходя из длительности, сложности генерации и необходимости доработки графики.",
    ],
  },
];

export default function Faq() {
  const [activeIdx, setActiveIdx] = useState<null | number>(null);

  return (
    <section id="faq" className="container pt-[212px] max-lg:pt-[97px]">
      <Title dir="c">Часто задаваемые вопросы</Title>
      <div className="pt-[65px] max-lg:pt-[27px] mx-auto max-w-[960px] max-md:gap-[7px] w-full flex flex-col gap-3">
        {items.map((e, i) => {
          const isOpen: boolean = activeIdx === i;

          return (
            <motion.div
              key={i}
              layout
              onClick={() => setActiveIdx(isOpen ? null : i)}
              className={`cursor-pointer px-5 max-md:pl-5 max-md:pr-[14px] border overflow-hidden rounded-[15px] transition-colors max-md:rounded-[8px] duration-300 ${
                isOpen
                  ? "bg-[#3b9df8]  border-white/11"
                  : "bg-white/8 border-white/3 "
              }`}
            >
              <div className="flex items-center max-md:py-[14px]  font-medium text-[19px] leading-[106%] gap-4  py-[20px] ">
                <span className="max-md:hidden">{i + 1}.</span>
                <h3 className="max-md:text-[15px] text-balance leading-[106%]">
                  {e.question}
                </h3>

                <div
                  className={`ml-auto mask-[url('/images/icons/plus.svg')] mask-size-contain mask-repeat-no-repeat max-md:min-w-3 max-md:h-3 transition-all duration-300 mask-center bg-primary min-w-7 h-7 ${isOpen ? "rotate-45 bg-white" : ""}`}
                />
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="pb-12 max-md:pb-[39px] max-md:pl-0 px-[7px] flex max-md:pt-[11px] pt-[19px] font-medium flex-col gap-4  max-md:text-[15px] text-[17px]">
                      {e.answer.map((text, idx) => (
                        <p key={idx} className="leading-[135%]">
                          {text}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
