import FieldsetItem from "@/components/FieldsetItem/FieldsetItem";
import React from "react";
import AboutConstants from "@/constant/About/AboutConstant";
import Carousel from "@/components/carousel/carousel";

export default function About() {
  return (
    <div className="w-full h-full overflow-x-hidden px-4 pt-20 flex flex-col items-start gap-10">
      <FieldsetItem legend="Education" list={AboutConstants.education} />
      <FieldsetItem legend="Experience" list={AboutConstants.experience} />
      <div className="flex flex-col lg:flex-row w-full">
        <FieldsetItem legend="Volunteer" list={AboutConstants.volunteer} />
        <Carousel legend="Myself" />
      </div>
    </div>
  );
}
