import React, { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import logo from "../assets/logo.png";
import { navList } from "../utils/helpers";
import WalletBtn from "./ui/WalletBtn";
import NavBarEnd from "./NavBarEnd";

export default function NavBar() {
  const navRef = useRef();
  const [activeSection, setActiveSection] = useState("home");
  const nav_list = navList.map((item, index) => {
    return (
      <li
        key={index}
        className="whitespace-nowrap py-[10px] px-[12px] relative group"
      >
        <a
          className={`block uppercase text-[14px] px-[3px] font-semibold relative before:content-[''] before:absolute before:left-0 before:bottom-[-6px] before:h-[2px] before:bg-primary-500 before:w-0 before:duration-200 before:ease-in-out group-hover:before:w-full ${
            activeSection === item.href ? "before:w-full" : ""
          }`}
          href={`#${item.href}`}
        >
          {item.label}
        </a>
      </li>
    );
  });

  const handleScrollNav = (e) => {
    if (window.scrollY > 30) {
      navRef.current.classList.add("scrolled");
    } else {
      navRef.current.classList.remove("scrolled");
    }

    const sections = document.querySelectorAll("section");
    for (const section of sections) {
      const element = document.getElementById(section.id);

      if (element) {
        const rect = element.getBoundingClientRect();
        const { top, bottom } = rect;

        if (top <= 0 && bottom > 0) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNav);

    return () => window.removeEventListener("scroll", handleScrollNav);
  }, []);

  return (
    <header
      ref={navRef}
      className="py-[20px] duration-200 fixed top-0 w-full z-50"
    >
      <div className="container flex items-center justify-between">
        <a
          style={{ fontFamily: "Luckiest Guy" }}
          href="#home"
          className="flex items-center text-[24px]"
        >
          <img alt="website logo" src={logo} className="max-h-[55px] h-auto" />
          <span className="hidden xl:block">BabyYooShi 2.0</span>
        </a>

        <nav className="hidden lg:block ">
          <ul className="flex items-center">{nav_list}</ul>
        </nav>

        <NavBarEnd />
      </div>
    </header>
  );
}
