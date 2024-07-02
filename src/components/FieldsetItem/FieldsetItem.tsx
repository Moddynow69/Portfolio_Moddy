import React from "react";

type FieldsetItemProps = {
  legend: string;
  list: {
    title: string;
    role: string;
    description: string[];
  }[];
};

export default function FieldsetItem({ legend, list }: FieldsetItemProps) {
  return (
    <fieldset className="border w-full h-auto border-white pt-[0.35em] pb-[0.75em] px-[0.625em] m-[5px] rounded-lg flex flex-col gap-2">
      <legend className=" bg-white px-[6px] py-[3px] rounded-[5px] text-black">
        {legend}
      </legend>
      {list.map((item) => (
        <>
          <h2 className="text-xl font-semibold uppercase">{item.title}</h2>
          <h3>{item.role}</h3>
          <p>
            {item.description.map((desc) => (
              <>
                • {desc} <br />
              </>
            ))}
          </p>
        </>
      ))}
    </fieldset>
  );
}
