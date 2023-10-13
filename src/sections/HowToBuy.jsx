import React from "react";
import Section from "../components/Section";
import MainHeader from "../components/ui/MainHeader";
import { cards } from "../utils/helpers";

export default function HowToBuy() {
  const cardList = cards.map((item, index) => {
    return (
      <div
        key={index}
        className="flex flex-col lg:flex-row items-center flex-wrap"
      >
        {Object.values(item).map((card, cardIndex) => {
          return (
            <div
              key={card.title}
              className={`pb-[45px] px-[14px] basis-1/2 flex-shrink-0 flex-grow-0 ${
                cardIndex === 0 ? "" : "mt-[40px]"
              }`}
            >
              <div
                className={`content ${
                  index === 0 && cardIndex === 0
                    ? "primary-card"
                    : "secondary-card"
                } ${cardIndex % 2 === 0 ? "left" : "right"}`}
              >
                <div className="date">
                  <p>{card.step}</p>
                  <small>Step</small>
                </div>

                <div>
                  <h2
                    style={{ fontFamily: "Raleway" }}
                    className="mb-1 font-medium text text-[20px]"
                  >
                    {card.title}
                  </h2>
                  <p className="text-[16px] leading-[24px] font-light mb-[10px]">
                    {card.desc}
                  </p>

                  <div
                    style={{
                      boxShadow: "4px 4px 0 #bbb, 8px 8px 0 #ddd",
                    }}
                    className="absolute w-[80px] bottom-[-45px] right-[40px] rounded-[8px]"
                  >
                    <span className="block no-underline bg-[#fff] rounded-[8px] overflow-hidden">
                      <img
                        className="rounded-[8px] duration-200 hover:scale-105 max-w-full h-auto"
                        src={card.image}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <Section id={"howtobuy"} className={"main-bg"}>
      <div className="container">
        <MainHeader
          title={"BUY BYOOSHI 2.0"}
          header={"How To Buy $BabyYooshi 2.0 ?"}
        />

        <div className="timeline relative z-10 before:content-[''] before:absolute before:w-1/2 before:left-0 before:top-0 before:h-full before:-z-[1] before:border-r-[1px] before:border-r-[#08da4e] before:block">
          <div className="mt-[70px] mb-[50px] text-center">
            <span className="inline-block py-[15px] px-[30px] main-btn font-medium leading-[1.3] text-[21px] rounded-[5px] text-white">
              Easy Steps
            </span>
          </div>
          {cardList}
          <div className="mt-[70px] mb-[50px] text-center">
            <span className="inline-block py-[15px] px-[30px] main-btn font-medium leading-[1.]3 text-[21px] rounded-[5px] text-white">
              End Steps
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
