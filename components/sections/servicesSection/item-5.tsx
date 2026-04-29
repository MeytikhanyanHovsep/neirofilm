import Image from "next/image";

export default function Item5() {
  return (
    <div className=" relative mt-[-2px] max-lg:mt-[32px]! transition-all duration-500 lg:group-hover:mt-[-42px] mx-auto justify-center flex flex-col items-center">
      {Array.from({ length: 3 }).map((_, i) => (
        <Image
          key={i}
          src={`/images/services/5-${i + 1}.png`}
          height={150}
          width={160}
          className={`object-contain max-lg:w-[215px] w-[264px] max-lg:mb-[-77px] mb-[-91px] lg:group-hover:mb-[-51px] group-hover:grayscale-0  will-change-transform transition-all duration-500  mx-auto ${i == 0 ? "" : "grayscale-100 brightness-50 lg:group-hover:brightness-100"}`}
          style={{ zIndex: 3 - i }}
          alt="service-5"
        />
      ))}
    </div>
  );
}
