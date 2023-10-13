import React from "react";
import Section from "../components/Section";
import MainHeader from "../components/ui/MainHeader";
import { tokenomics } from "../utils/helpers";

export default function Tokenomics() {
  const tokenomicsList = tokenomics.map((item, index) => {
    return (
      <div
        key={index}
        style={{
          boxShadow: "0 0 30px rgba(1,41,112,.08)",
          "--primary-color": `${item.color}`,
          borderBottomColor: `${item.color}`,
        }}
        id="tok"
        className={`border-b-${item.color} flex flex-col items-center border-b-[3px] py-[60px] px-[30px] text-center rounded-[5px] group hover:bg-${item.color} hover:text-white duration-300`}
      >
        <div
          style={{ color: `${item.color}`, backgroundColor: `${item.bgColor}` }}
          className={`text-[36px] w-fit py-[20px] px-[20px] leading-none mb-[24px] rounded-[4px] `}
        >
          {item.icon}
        </div>
        <h3
          style={{ fontFamily: "Raleway" }}
          className="font-bold text-[#444] group-hover:text-white text-[1.75rem] mb-[0.5rem]"
        >
          {item.title}
        </h3>
        <p>{item.desc}</p>
      </div>
    );
  });
  return (
    <Section id={"tokenomics"}>
      <div className="container">
        <MainHeader title={"TOKENOMICS"} header={"BABY YOOSHI V2 TOKEN"} />
        <div className="grid gap-5 xl:gap-12 xl:px-16 md:grid-cols-2 xl:grid-cols-3">
          {tokenomicsList}
        </div>
      </div>
    </Section>
  );
}
