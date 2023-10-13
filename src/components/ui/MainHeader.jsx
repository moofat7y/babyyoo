import React from "react";

export default function MainHeader({ title, header }) {
  return (
    <div className="main-header text-center pb-[40px]">
      <span className="py-[6px] px-[20px]">{title}</span>
      <h2
        style={{ fontFamily: "Raleway" }}
        className="uppercase leading-[1.2] text-[45px] font-bold mt-[15px] mb-0.5 text-[#444]"
      >
        {header}
      </h2>
    </div>
  );
}
