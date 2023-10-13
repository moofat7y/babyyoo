import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import footImg from "../assets/hero.png";
import heroImg from "../assets/Yooshicoin_02.png";
import scrollImg from "../assets/022.png";
import marioImg from "../assets/mario.png";
export default function Hero() {
  return (
    <section id="home" className="h-auto main-bg lg:h-screen overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="flex-1 pt-28 text-center lg:text-left self-center">
            <h1
              style={{ fontFamily: "Raleway" }}
              className="text-[33px] lg:text-[48px] font-bold leading-[44px] lg:leading-[56px] mb-[10px] uppercase"
            >
              Welcome to <br />
              Baby YooShi V2
            </h1>
            <p className=" font-medium text-[16px] lg:text-[22px] leading-[1.4] lowercase text-[#858ea1]">
              it is an upgraded version the friendly tiny dinosaur baby yooshi.
              will finish the mission and reunite baby mario with his brother
              luigi.and then he will sit on the throne of memcoin.
            </p>

            <div className="btns flex flex-col gap-3 mt-5">
              <div className="flex gap-3">
                <a
                  href="#_"
                  className="relative text-[12px] md:text-[14px] font-medium rounded px-[10px] lg:px-[30px] py-[10px] overflow-hidden group bg-primary-500 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary-400 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">BUY BABY YOOSHI 2.0</span>
                </a>

                <a
                  className="flex items-center gap-2 py-[10x] px-[10px] text-[#fdcb1b] hover:text-primary-500 duration-200 "
                  href="#"
                >
                  <MdOutlineSlowMotionVideo className="text-2xl md:text-3xl" />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    watch how to buy
                  </span>
                </a>
              </div>

              <div className="flex gap-3">
                <a
                  href="#_"
                  className="relative text-[12px] md:text-[14px] font-medium rounded px-[10px] lg:px-[30px] py-[10px] overflow-hidden group bg-primary-500 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary-400 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">PRESALE</span>
                </a>

                <a
                  href="#_"
                  className="relative text-[12px] md:text-[14px] font-medium rounded px-[10px] lg:px-[30px] py-[10px] overflow-hidden group bg-primary-500 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary-400 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">BSCSCAN</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 2xl:px-28 relative">
            <img
              style={{ verticalAlign: "middle" }}
              id="heroimg"
              className=" w-full h-auto object-cover"
              src={heroImg}
              alt="hero image"
            />

            <a
              style={{ animationDuration: "2000ms" }}
              className="w-[45px] h-auto animate-bounce absolute left-0 bottom-[35px] lg:hidden"
              href="#"
            >
              <img
                alt="scroll image"
                className="w-full h-auto object-contain"
                src={scrollImg}
              />
            </a>
            <img
              style={{ animationDuration: "2000ms" }}
              className="w-[45px] h-auto absolute top-0 right-0 animate-bounce object-contain"
              src={marioImg}
              alt="mario image"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute hidden lg:block bottom-[-2px] left-0 w-full"
        src={footImg}
        alt="footer hero image"
      />
    </section>
  );
}
