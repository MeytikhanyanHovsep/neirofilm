import Image from "next/image";

export default function Item2() {
  return (
    <div className=" relative">
      <Image
        src="/images/services/2-1.png"
        height={250}
        width={260}
        className="object-contain absolute z-6 w-[230px] max-lg:h-[130px] max-lg:top-3 lg:h-[138px] will-change-transform lg:group-hover:top-[-14px] left-1/2 -translate-x-1/2 top-[27px] transition-all duration-500  mx-auto "
        alt="service-2"
      />
      <Image
        src="/images/services/2-2.png"
        height={250}
        width={260}
        className="object-contain lg:group-hover:top-[68px] max-lg:w-[195px] max-lg:h-[117px] h-[124px]! transition-all duration-500 absolute left-1/2 -translate-x-1/2 z-3 top-[42px] lg:top-[56px] w-[207px] will-change-transform "
        alt="service-2"
      />
      <Image
        src="/images/services/2-3.png"
        height={250}
        width={260}
        className="object-contain max-lg:w-[164px] max-lg:top-[83px] lg:group-hover:top-[137px] will-change-transform transition-all duration-500 absolute left-1/2 -translate-x-1/2 z-1 top-[85px] w-[174px] "
        alt="service-2"
      />
    </div>
  );
}
