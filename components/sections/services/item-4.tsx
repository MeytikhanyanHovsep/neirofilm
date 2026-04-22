import Image from "next/image";

export default function Item4() {
  return (
    <div className=" relative  mx-auto justify-center flex items-center">
      <Image
        src="/images/services/4-1.png"
        height={150}
        width={160}
        className={`object-contain absolute z-3 max-lg:w-[111px] w-[145px] lg:group-hover:w-[161px] top-[43px] max-lg:top-[60px] lg:group-hover:top-[36px] will-change-all transition-all duration-500 left-1/2 -translate-x-1/2`}
        alt="service-4 "
      />
      <Image
        src="/images/services/4-2.png"
        height={150}
        width={160}
        className={`object-contain absolute z-1 max-lg:w-[132px] max-lg:top-[18px] max-lg:left-4 w-[169px] group-hover:w-[183px] top-[2px] group-hover:top-[-37px] grayscale-100 group-hover:grayscale-0 will-change-all transition-all duration-500 group-hover:left-[-2px] left-[22px] brightness-50 lg:group-hover:brightness-100`}
        alt="service-4 "
      />
      <Image
        src="/images/services/4-3.png"
        height={150}
        width={160}
        className={`object-contain absolute z-1 max-lg:w-[110px] w-[152px] max-lg:right-[4px] max-lg:top-[34px] lg:group-hover:w-[182px] top-[6px] group-hover:top-[-32px] grayscale-100 group-hover:grayscale-0 will-change-all transition-all brightness-50 lg:group-hover:brightness-100 duration-500 group-hover:right-[-15px] right-[16px]`}
        alt="service-4 "
      />
    </div>
  );
}
