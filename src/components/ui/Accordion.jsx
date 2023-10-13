import React, { useEffect, useRef, useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
export default function Accordion({ index, item, active, setActive }) {
  const [height, setHeight] = useState(0);
  const ref = useRef();
  useEffect(() => {
    if (index === active) {
      setHeight(ref.current.clientHeight);
    }
  }, [active]);

  return (
    <li
      onClick={() => (index === active ? setActive(null) : setActive(index))}
      className="p-[30px] group bg-[#fff] rounded-[5px] relative "
    >
      <div className="flex items-center">
        <BsQuestionCircle className="text-primary-500 text-[24px]" />
        <p className="text-[16px] flex-1 leading-[24px] relative font-medium px-[30px] text-[#2c4964] duration-200 group-hover:text-primary-500">
          {item.title}
        </p>
        <IoIosArrowDown
          className={`text-[24px] group-hover:text-primary-500 duration-200 ${
            active === index ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        style={{
          height: index === active ? height : 0,
        }}
        className="overflow-hidden duration-200"
      >
        <p ref={ref} className="pt-[10px] duration-200">
          {item.desc}
        </p>
      </div>
    </li>
  );
}
