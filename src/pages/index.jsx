import Menu from "@common/menu";
import Image from "next/image";

import CodeStar1 from "../assets/codeStar.png";
import CodeStarMobile from "../assets/codeStar-mobile.png";
import CodeStar2 from "../assets/codeStar2.png";
import CodeStarMobile2 from "../assets/codeStar2-mobile.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaJava } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";

export default function Home() {
  const background = "-z-10 fixed";
  const [background1, setBackground1] = useState("");
  const [background2, setBackground2] = useState("");
  const SENSITIVITY = 25;
  const SENSITIVITY2 = 45;
  useEffect(() => {
    const width = screen.width;
    const backgroundImage = document.getElementById("background-1");
    const backgroundImage2 = document.getElementById("background-2");
    window.addEventListener("mousemove", (event) => {
      const x = event.clientX;
      const y = event.clientY;

      backgroundImage.style.top = `${y / SENSITIVITY}px`;
      backgroundImage.style.left = `${x / SENSITIVITY}px`;
      backgroundImage2.style.top = `${y / SENSITIVITY2}px`;
      backgroundImage2.style.left = `${x / SENSITIVITY2}px`;
    });
    setBackground1(width > 900 ? CodeStar1 : CodeStarMobile);
    setBackground2(width > 900 ? CodeStar2 : CodeStarMobile2);

    const giovanny = document.getElementById('giovanny')
    const bernal = document.getElementById('bernal')
    giovanny.onmouseover = () => {
      giovanny.style = 'color: #FFFF'
      bernal.style = 'color: #40aae7'
    }
    giovanny.onmouseout = () => {
      giovanny.style = 'color: #40aae7'
      bernal.style = 'color: #FFFF'
    }
    bernal.onmouseover = () => {
      bernal.style = 'color: #40aae7'
      giovanny.style = 'color: #FFFF'
    }
    bernal.onmouseout = () => {
      bernal.style = 'color: #FFFF'
      giovanny.style = 'color: #40aae7'
    }
  }, []);
  return (
    <>
      <Image
        src={background2}
        className={background + " top-2 left-2 opacity-50 duration-200"}
        alt=""
        id="background-2"
      />
      <Image
        src={background1}
        className={background}
        alt=""
        id="background-1"
      />
      <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
        <Menu />
        <div className="flex flex-col gap-0 lg:flex-row lg:gap-10">
          <h1 id="giovanny" className="font-poppins w-full font-bold text-6xl lg:text-9xl text-center cursor-default text-beru-300 hover:text-white duration-300">
            Giovanny
          </h1>
          <h1 id="bernal" className="font-poppins w-full font-bold text-6xl lg:text-9xl text-center cursor-default hover:text-beru-300 duration-300">
            Bernal
          </h1>
        </div>
        <div className="flex items-center justify-center gap-3 text-3xl">
          <a href="https://oracle.com/java">
            <FaJava className="hover:text-red-500 duration-300" /></a>
          <h2 className="font-poppins font-semibold text-2xl lg:text-3xl cursor-default">
            BrandBeru
          </h2>
          <a href="https://nodejs.org">
            <SiNodedotjs className="hover:text-green-500 duration-300" /></a>
        </div>
        <p className="font-poppins font-thin mt-5 text-center cursor-default">
          I am <b className=" hover:text-beru-300 duration-500">Full-stack</b> developer in
          <b className=" hover:text-red-500 duration-500">{" Java "}</b>
          and
          <b className=" hover:text-orange-500 duration-500">{" JavaScript "}</b>
        </p>
        <Link
          href={"https://drive.google.com/file/d/15lZWnwFuHnFvcG_x7C3dudKZ-aycfVTm/view?usp=sharing"}
          className="flex gap-2 justify-center items-center underline underline-offset-4 font-poppins  text-sm hover:text-beru-300 duration-300">
          Download my CV
        </Link>
      </div>
    </>
  );
}
