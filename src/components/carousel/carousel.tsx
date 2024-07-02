import React, { useEffect } from "react";
import carouselImages from "@/constant/Carousel/Carousel";
import Image from "next/image";
type carouselProps = {
  legend: string;
};

export default function Carousel({ legend }: carouselProps) {
  const [currImage, setCurrImage] = React.useState(0);
  const curstyle = " duration-[900ms] z-50 left-1/2 h-[100px] md:h-[200px] w-[100px] md:w-[200px]";
  const prevstyle = " duration-[900ms] z-40 left-1/4 h-[50px] md:h-[100px] w-[50px] md:w-[100px]";
  const nextstyle = " duration-[900ms] z-40 left-3/4 h-[50px] md:h-[100px] w-[50px] md:w-[100px]";
  const restsyle = " duration-[900ms] z-30 left-1/2 h-0 w-0";
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImage((currImage) => (currImage + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <fieldset className="border w-full h-[200px] md:h-[300px] border-white pt-[0.35em] pb-[0.75em] px-[0.625em] m-[5px] rounded-lg relative">
      <legend className=" bg-white px-[6px] py-[3px] rounded-[5px] text-black">
        {legend}
      </legend>
      {carouselImages.map((item) => (
        <Image
          unoptimized
          src={item.src}
          alt={item.alt}
          key={item.id}
          height={100}
          width={100}
          className={`
            ${
              item.id === currImage
                ? curstyle
                : item.id ===
                  (currImage === 0 ? carouselImages.length - 1 : currImage - 1)
                ? prevstyle
                : item.id ===
                  (currImage === carouselImages.length - 1 ? 0 : currImage + 1)
                ? nextstyle
                : restsyle
            } absolute top-[100px] md:top-[150px] transform -translate-x-1/2 -translate-y-1/2
          `}
        />
      ))}
    </fieldset>
  );
}
