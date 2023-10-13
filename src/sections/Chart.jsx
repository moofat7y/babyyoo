import React from "react";
import Section from "../components/Section";
import MainHeader from "../components/ui/MainHeader";
import chart from "../assets/03.png";

export default function Chart() {
  return (
    <Section id={"charts"}>
      <div className="container">
        <MainHeader title={"CHART"} header={"Tokenomics"} />
        <div className="flex justify-center">
          <img
            src={chart}
            className="object-contain w-[90%] md:w-[30%] min-w-[310px]"
          />
        </div>
      </div>
    </Section>
  );
}
