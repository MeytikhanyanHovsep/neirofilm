import Button from "../ui/button";
import Title from "../ui/title";
import Videos from "../videos";

export default function GetInTouch() {
  const videos = [
    {
      w: 370,
    },
    {
      w: 280,
    },
    {
      w: 435,
    },
    {
      w: 279,
    },
    {
      w: 312,
    },
    {
      w: 312,
    },
    {
      w: 387,
    },
    {
      w: 372,
    },
    {
      w: 372,
    },
    {
      w: 201,
    },
    {
      w: 387,
    },
    {
      w: 387,
    },
  ];

  return (
    <section
      id="getInTouch"
      className="relative max-w-screen overflow-x-hidden bg-[#09090F] pt-[65px]"
    >
      <div className="container flex items-center flex-col max-md:gap-[21px] max-md:pb-[62px] gap-8 pb-[110px]">
        <Title
          dir="c"
          styles="gap-6!"
          descStyles="max-md:hidden"
          desc="Напишите — буду рад общению"
        >
          Хотите пригласить меня выступить или обсудить проект напрямую?
        </Title>
        <Button styles="w-[443px] max-sm:w-full">Обсудить проект</Button>
      </div>
      <Videos data={videos} />

      <div className="w-full bg-linear-to-b h-[430px] left-0 bottom-0 absolute from-[#06070B]/0 to-[#06070B]" />
    </section>
  );
}
