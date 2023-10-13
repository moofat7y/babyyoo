import React from "react";
import Section from "../components/Section";
import MainHeader from "../components/ui/MainHeader";
import { HiCheck } from "react-icons/hi";
import { roadMaps } from "../utils/helpers";
export default function RoadMap() {
  const roadmapList = roadMaps.map((item, index) => {
    return (
      <div
        key={index}
        className={`roadmap-box duration-200 hover:-translate-y-1 ${
          index <= 1 ? "active" : ""
        }`}
      >
        <div className="icon">
          <HiCheck
            className={`rounded-full bg-white ${
              index <= 1 ? "text-primary-500" : "text-[#dfdfdf]"
            }`}
          />
        </div>
        <p className="text-[18px] font-medium">{item}</p>
      </div>
    );
  });
  return (
    <Section id={"roadmap"} className={""}>
      <div className="container">
        <MainHeader title={"RoadMap"} header={"RoadMap"} />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {roadmapList}
        </div>
      </div>
    </Section>
  );
}
