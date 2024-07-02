import Image from "next/image";
import React from "react";

type ButtonProps = {
  link: string;
  img: string;
};

export default function Button({ link, img }: ButtonProps) {
  return (
    <a href={link} target="_blank" className="border-white border bg-[#d8cdcd] hover:bg-[#00ffff9e] rounded-full p-2 text-white w-10  h-10 flex items-center">
      <Image src={img} alt={"icon"} width={30} height={30} />
    </a>
  );
}
