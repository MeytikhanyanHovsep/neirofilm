import Image from "next/image";

export default function Item3() {
  return (
    <div className=" relative pt-[26px] max-lg:pt-[43px] pl-[72px] max-lg:pl-[60px] mx-auto justify-center flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Image
          key={i}
          src={`/images/services/3-${i + 1}.png`}
          height={150}
          width={160}
          className={`object-contain w-[142px] max-lg:w-[120px] max-lg:ml-[-60px] ml-[-72px] group-hover:ml-[-50px] group-hover:grayscale-0  will-change-transform transition-all duration-500  mx-auto brightness-50 group-hover:brightness-100 ${i == 2 ? "brightness-100" : "grayscale-100 "}`}
          alt="service-3"
        />
      ))}
    </div>
  );
}
