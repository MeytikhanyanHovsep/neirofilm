import Image from "next/image";

export default function Item6() {
  return (
    <div className="mt-[-2px] max-lg:mt-[27px] group-hover:mt-[-20px] transition-all duration-500 mr-[-10px] max-lg:mr-[10px] relative">
      <Image
        src="/images/services/6-1.png"
        height={250}
        width={260}
        className="object-contain ml-auto w-[244px] max-lg:w-[185px] max-lg:to "
        alt="service-6"
      />
      <Image
        src="/images/services/6-2.png"
        height={250}
        width={260}
        className="object-contain group-hover:top-[107px] transition-all duration-500 absolute left-[6px] top-[50px] w-[244px] max-lg:w-[185px] max-lg:left-[10px] max-lg:top-[38px] will-change-transform "
        alt="service-6"
      />
    </div>
  );
}
