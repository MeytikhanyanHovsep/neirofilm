import Image from "next/image";

export default function Item1() {
  return (
    <div className="pl-1 relative">
      <Image
        src="/images/services/1-1.png"
        height={250}
        width={260}
        className="object-contain max-lg:w-[187px] w-[244px] "
        alt="service-1"
      />
      <Image
        src="/images/services/1-2.png"
        height={250}
        width={260}
        className="object-contain max-lg:top-[85px] lg:group-hover:top-[116px] transition-all duration-500 absolute right-[-3px] top-[60px] max-lg:w-[187px] w-[244px] will-change-transform "
        alt="service-1"
      />
    </div>
  );
}
