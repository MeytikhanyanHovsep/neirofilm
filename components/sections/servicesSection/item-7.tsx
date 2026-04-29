import Image from "next/image";

export default function Item7() {
  return (
    <div className="pt-7 max-lg:pt-[34px] ml-[20px] max-md:gap-2 gap-[10px] grid grid-cols-2 ">
      <div className="relative">
        <Image
          src="/images/services/7-1.png"
          height={250}
          width={260}
          className="object-contain ml-auto absolute group-hover:grayscale-100 right-0 transition-all duration-500 max-lg:min-w-[168px] min-w-[204px] "
          alt="service-7"
        />
      </div>
      <div className="pt-[50px] max-lg:pt-[37px]">
        <Image
          src="/images/services/7-2.png"
          height={250}
          width={260}
          className="object-contain grayscale-100 max-lg:min-w-[168px] group-hover:grayscale-0 transition-all duration-500 min-w-[204px] "
          alt="service-7"
        />
      </div>
    </div>
  );
}
