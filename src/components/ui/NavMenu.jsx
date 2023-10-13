import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import Wallet from "./Wallet";
import { AiOutlineClose } from "react-icons/ai";
import { navList } from "../../utils/helpers";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <HiMenu
        onClick={() => setIsOpen(true)}
        className="text-[25px] cursor-pointer  block lg:hidden"
      />

      <Wallet open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="min-w-[280px] mx-2 md:w-1/2 md:min-w-[420px] h-420px bg-white p-4 rounded-[4px]">
          <header className="flex">
            <AiOutlineClose
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-xl absolute -top-10 right-2 ms-auto cursor-pointer text-white"
            />
          </header>

          <ul className="list-none">
            {navList.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    onClick={() => setActiveSection(item.href)}
                    className={`block relative py-[10px] px-[20px] font-medium ${
                      activeSection === item.href ? "text-primary-500" : ""
                    }`}
                    href={`#${item.href}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Wallet>
    </>
  );
}
