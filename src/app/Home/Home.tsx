import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden px-4 pt-20 flex flex-col 2xl:flex-row justify-center items-start 2xl:gap-40 gap-10">
      <div className="flex flex-col gap-10 py-4 2xl:max-w-[30%] max-w-full">
        <h1 className="text-[36px] leading-10 pl-2">Who am I?</h1>
        <p className="text-xl">
          Hi, This is <span className="text-2xl font-bold">Tushar</span> , I am
          currently pursuing my B.Tech in Computer Science and Engineering from {" "}
          <span className="font-bold">
            National Institute of Technology, Kurukshetra
          </span>
        </p>
        <div className="w-full flex gap-2">
          <Button link="https://www.instagram.com/tushar._.2908/" img="/icons/insta.png"/>
          <Button link="https://www.linkedin.com/in/tushar2908/" img="/icons/linkedin.png"/>
          <Button link="https://github.com/Moddynow69" img="/icons/github.png"/>
          <Button link="https://github.com/Moddynow69" img="/icons/resume.png"/>
        </div>
      </div>
      <Image
        className=" aspect-auto 2xl:w-full sm:block hidden h-full self-end  duration-300 cursor-pointer hover:translate-x-0 hover:translate-y-0 -translate-x-2 -translate-y-2  drop-shadow-[3px_3px_35px_rgba(255,255,255)]"
        src={"/images/masked.png"}
        alt=""
        width={600}
        height={500}
      />
    </div>
  );
}
