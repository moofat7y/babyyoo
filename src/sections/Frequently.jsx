import React, { useState } from "react";
import Section from "../components/Section";
import MainHeader from "../components/ui/MainHeader";
import { freqs } from "../utils/helpers";
import Accordion from "../components/ui/Accordion";

export default function Frequently() {
  const [active, setActive] = useState(null);
  const freqList = freqs.map((item, index) => {
    return (
      <Accordion
        key={index}
        index={index}
        item={item}
        active={active}
        setActive={setActive}
      />
    );
  });
  return (
    <Section id={"frequently"} className="main-bg">
      <div className="container">
        <MainHeader
          title={"Frequently"}
          header={"Frequently Asked Questions"}
        />
        <div className="faq-list">
          <ul className="list-none flex flex-col gap-4">{freqList}</ul>
        </div>
      </div>
    </Section>
  );
}
