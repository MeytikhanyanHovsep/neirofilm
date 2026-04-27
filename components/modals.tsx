"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type ModalVariant = "contact" | "discuss" | "tariff" | "speaker" | "callback";

type ModalConfig = {
  variant: ModalVariant;
  tariffName?: string;
};

const MODAL_CONTENT: Record<
  ModalVariant,
  {
    title: string;
    submitLabel: string;
    successMessage: string;
    emphasize?: boolean;
  }
> = {
  contact: {
    title: "Связаться с нами",
    submitLabel: "Отправить",
    successMessage: "Ваше сообщение отправлено. Мы ответим в ближайшее время!",
    emphasize: true,
  },
  discuss: {
    title: "Обсудить проект",
    submitLabel: "Начать обсуждение",
    successMessage:
      "Заявка принята! Мы скоро свяжемся с вами для уточнения деталей.",
  },
  tariff: {
    title: "Выбранный тариф",
    submitLabel: "Забронировать",
    successMessage:
      "Вы успешно забронировали тариф. Ожидайте звонка менеджера.",
  },
  speaker: {
    title: "Стать спикером",
    submitLabel: "Оставить заявку",
    successMessage: "Спасибо за интерес! Мы рассмотрим вашу кандидатуру.",
    emphasize: true,
  },
  callback: {
    title: "Заказать звонок",
    submitLabel: "Перезвоните мне",
    successMessage: "Заявка принята. Перезвоним в течение 15 минут!",
    emphasize: true,
  },
};

type ModalContextType = {
  openModal: (config: ModalConfig) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

function FormModal({
  config,
  onClose,
}: {
  config: ModalConfig;
  onClose: () => void;
}) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    comment: "",
    agree: true,
    fileName: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {},
  );

  const content = MODAL_CONTENT[config.variant];
  const flags = {
    hasPhone: ["contact", "discuss", "speaker", "callback"].includes(
      config.variant,
    ),
    hasEmail: ["discuss", "tariff"].includes(config.variant),
    hasComment: ["contact", "discuss", "tariff"].includes(config.variant),
    hasFile: ["discuss", "tariff"].includes(config.variant),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.fullName.trim() ||
      (flags.hasEmail && !form.email.includes("@")) ||
      (flags.hasPhone && !form.phone)
    ) {
      setErrors({ fullName: !form.fullName ? "Введите имя" : undefined });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...config }),
      });
      if (res.ok) setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 py-2 backdrop-blur-[10px]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[560px] rounded-[18px] border border-white/12 bg-[#121215]/92 p-4 shadow-[0_20px_100px_rgba(0,0,0,0.45)] sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="ml-auto cursor-pointer mb-2 block text-white/55 hover:text-white text-[26px]"
        >
          ×
        </button>

        {!isSuccess ? (
          <>
            <h3
              className={`text-[24px] leading-[102%] ${content.emphasize ? "text-primary font-semibold" : ""}`}
            >
              {content.title}{" "}
              {config.tariffName && (
                <span className="text-primary font-semibold">
                  : {config.tariffName}
                </span>
              )}
            </h3>
            <p className="mt-2 text-[14px] text-white/60">
              Заполните форму, и мы свяжемся с вами.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col gap-2.5"
            >
              <input
                placeholder="ФИО"
                className="h-11 w-full rounded-[10px] border border-white/14 bg-white/6 px-4 text-[15px] outline-none focus:border-primary"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              />

              {flags.hasPhone && (
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="h-11 w-full rounded-[10px] border border-white/14 bg-white/6 px-4 text-[15px] outline-none focus:border-primary"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              )}

              {flags.hasEmail && (
                <input
                  type="email"
                  placeholder="Email"
                  className="h-11 w-full rounded-[10px] border border-white/14 bg-white/6 px-4 text-[15px] outline-none focus:border-primary"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              )}

              {flags.hasComment && (
                <textarea
                  placeholder="Комментарий"
                  className="w-full rounded-[10px] border border-white/14 bg-white/6 px-4 py-3 text-[15px] outline-none focus:border-primary"
                  value={form.comment}
                  onChange={(e) =>
                    setForm({ ...form, comment: e.target.value })
                  }
                />
              )}

              <label className="flex items-start gap-2 text-[12px] text-white/63">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) =>
                    setForm({ ...form, agree: e.target.checked })
                  }
                  className="mt-1"
                />
                <span>Я согласен с политикой конфиденциальности.</span>
              </label>

              <Button
                type="submit"
                disabled={isSubmitting}
                styles="mt-1 h-11 w-full justify-center"
              >
                {isSubmitting ? "Отправка..." : content.submitLabel}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <h3 className="text-[30px]">Спасибо!</h3>
            <p className="mt-4 text-white/68">{content.successMessage}</p>
            <Button onClick={onClose} styles="mx-auto mt-7">
              Закрыть
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<ModalConfig | null>(null);
  const pathname = usePathname();

  useEffect(() => setConfig(null), [pathname]);

  return (
    <ModalContext.Provider
      value={{ openModal: setConfig, closeModal: () => setConfig(null) }}
    >
      {children}
      {config && <FormModal config={config} onClose={() => setConfig(null)} />}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
};

type Props = {
  isSmall?: boolean;
  children: React.ReactNode;
  styles?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: any;
};

function Button({
  children,
  isSmall = false,
  styles = "",
  onClick,
  type = "button",
  disabled,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary hover:bg-[#265D8B] whitespace-nowrap   leading-[129%] flex items-center gap-[18px] cursor-pointer tracking-0 justify-center font-medium rounded-[6px] ${isSmall ? "h-[43px] text-[13px] px-[18px]" : "h-[53px] text-[15px] pl-[40px] pr-[25px] "} ${styles}`}
    >
      {children}
    </button>
  );
}
