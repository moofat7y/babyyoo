import React from "react";
import Section from "../components/Section";
import MainHeader from "../components/ui/MainHeader";
import { taxs } from "../utils/helpers";
import { RiDiscussLine } from "react-icons/ri";
export default function TaxFee() {
  const taxList = taxs.map((item, index) => {
    return (
      <div
        style={{ boxShadow: "0 0 30px #13cf2615" }}
        key={index}
        className="tax-card h-full py-[50px] px-[30px] text-center rounded-[5px] bg-[#fff] text-[#444] duration-200 hover:-translate-y-1"
      >
        <div className="icon">
          <RiDiscussLine className="text-primary-500" />
        </div>
        <h3
          style={{ fontFamily: "Raleway" }}
          className="mb-1 font-bold text-[1.75rem] "
        >
          {item.title}
        </h3>
        <p className="text-base">{item.desc}</p>
      </div>
    );
  });
  return (
    <Section id={"taxfee"} className={"main-bg"}>
      <div className="container">
        <MainHeader title={"TAX"} header={"TAX DISTRIBUTION"} />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {taxList}
        </div>
      </div>
    </Section>
  );
}
