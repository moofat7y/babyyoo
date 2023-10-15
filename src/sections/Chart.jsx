import React from "react";
import Section from "../components/Section";
import MainHeader from "../components/ui/MainHeader";
import chart from "../assets/03.png";
import logo from "../assets/Yooshicoin_02.png";

export default function Chart() {
  return (
    <Section id={"charts"}>
      <div className="container">
        <MainHeader title={"CHART"} header={"Tokenomics"} />
        <div className="flex flex-col justify-center items-center">
          <img
            src={chart}
            className="object-contain w-[90%] md:w-[30%] min-w-[310px]"
          />

          <div className="flex items-center mt-8 justify-center gap-3">
            <img src={logo} className="w-[60px] h-[60px] object-contain" />
            <h4
              style={{ fontFamily: "sans-serif" }}
              className="text-center font-black text-3xl"
            >
              Total : 1.000.000.000
            </h4>
          </div>
        </div>
      </div>
    </Section>
  );
}
