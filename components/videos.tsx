import Image from "next/image";

export default function Videos({ data }: { data: any[] }) {
  return (
    <div className="max-w-screen md:mask-[linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)] flex justify-center ">
      <div className="mx-auto max-w-max gap-[14px] max-md:gap-[10px] w-screen flex flex-col items-center overflow-hidden">
        <div className="flex gap-[14px] max-md:gap-[10px] min-[2000px]:ml-auto">
          {data.slice(0, 6).map((e: any, i) => (
            <div
              key={i}
              className={`h-[218px] max-md:h-[170px] rounded-[15px] overflow-hidden ${i == 2 ? "max-md:w-[321px]!" : ""} ${i == 0 ? "max-md:w-[400px]!" : ""} `}
              style={{ width: e.w + "px" }}
            >
              <video
                src={e.video}
                poster="/images/video-prev.png"
                autoPlay
                muted
                loop
                playsInline
                className="h-[218px] max-md:h-[170px] w-full object-center object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-[14px] max-md:gap-[10px] ">
          {data.slice(6).map((e, i) => (
            <div
              key={i}
              className={`h-[218px] max-md:h-[170px] rounded-[15px] overflow-hidden ${i == 2 ? "max-md:w-[274px]!" : ""} ${i == 0 ? "max-md:w-[234px]!" : ""} ${i == 3 ? "max-md:w-[148px]!" : ""} `}
              style={{ width: e.w + "px" }}
            >
              <video
                src={e.video}
                poster="/images/video-prev.png"
                autoPlay
                muted
                loop
                playsInline
                className="h-[218px] max-md:h-[170px] w-full object-center object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
