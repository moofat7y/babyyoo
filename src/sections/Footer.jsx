import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

const socialLinks = [
  {
    href: "/",
    icon: <BiLogoTelegram />,
  },
  {
    href: "/",
    icon: <BsTwitter />,
  },
  {
    href: "/",
    icon: <SiDiscord />,
  },
];
export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <div
          style={{ boxShadow: "0 0 30px #13cf2615" }}
          className="social inline-block mt-5 bg-[#fff] pt-[10px] pb-[20px] px-[20px] border-t-[#444] border-t-[4px] rounded-[3px]"
        >
          <p className="text-[#444] text-[20px] font-semibold mb-1">
            Follow us on social media
          </p>

          <div className="flex justify-center gap-3 items-center">
            {socialLinks.map((item, index) => {
              return (
                <a
                  href={item.href}
                  key={index}
                  className="p-2 block main-btn text-[18px] text-[#fff] rounded-full duration-200 hover:bg-primary-500"
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>

        <div className="text-center pt-[30px]">
          &copy; Copyright <strong>BABY YOOSHI 2.0.</strong> All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
