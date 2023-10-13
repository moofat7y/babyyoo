import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Wallet from "./Wallet";
// import Wallet from "./Wallet";

import logo1 from "../../assets/wallet/1.png";
import logo2 from "../../assets/wallet/2.png";
import logo3 from "../../assets/wallet/3.png";
import logo4 from "../../assets/wallet/4.png";

const wallets = [
  {
    image: logo1,
    title: "ETH",
  },
  {
    image: logo2,
    title: "Heco",
  },
  {
    image: logo3,
    title: "BSC",
  },
  {
    image: logo4,
    title: "Polygon",
  },
];

export default function WalletBtn() {
  const [open, setOpen] = useState(false);
  const [activeWallet, setActiveWallet] = useState(null);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative py-[5px] px-[8px] lg:px-5 lg:py-2 text-[14px] lg:text-base lg:font-medium text-white group"
      >
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-primary-500 group-hover:bg-primary-700 group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-primary-700 group-hover:bg-primary-500 group-hover:-skew-x-12"></span>
        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-primary-600 -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-primary-400 -rotate-12"></span>
        <span className="relative">Connect Wallet</span>
      </button>
      <Wallet open={open} onClose={() => setOpen(false)}>
        <div className="min-w-[280px] md:w-1/2 md:min-w-[420px] h-420px bg-[#001900] p-4 rounded-[4px]">
          <header className="flex">
            <AiOutlineClose
              onClick={() => setOpen((prev) => !prev)}
              className="text-xl ms-auto cursor-pointer text-white"
            />
          </header>
          <div>
            <p className="mt-[16px] text-white text-[14px] font-medium leading-[40px]">
              Choose a wallet
            </p>
            <div className="flex items-center justify-between">
              {wallets.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setActiveWallet(index)}
                    className={`flex items-center rounded-[4px] px-3 py-2 gap-3 ${
                      activeWallet === index
                        ? "border-[2px] border-[#d2555b]"
                        : ""
                    }`}
                  >
                    <img
                      src={item.image}
                      className="w-[24px] h-[24px] border-[1px]"
                    />
                    <span className="text-[14px] font-medium leading-[18px] text-white">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Wallet>
    </>
  );
}
