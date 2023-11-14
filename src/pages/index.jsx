import Menu from "@common/menu";
import Image from "next/image";

import CodeStar1 from "../assets/codeStar.png";
import CodeStarMobile from "../assets/codeStar-mobile.png";
import CodeStar2 from "../assets/codeStar2.png";
import CodeStarMobile2 from "../assets/codeStar2-mobile.png";
import { useEffect, useState } from "react";
import Container from "@common/container";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";

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
        <h1 className="font-poppins font-bold text-6xl lg:text-9xl cursor-default">
          BrandBeru
        </h1>
        <h2 className="font-poppins font-semibold text-2xl lg:text-3xl cursor-default">
          Giovanny Bernal
        </h2>
        <p className="font-poppins font-thin mt-5 cursor-default">
          I am <b>Full-stack</b> developer in <b>Java</b> and <b>JavaScript</b>
        </p>
        <Link
          href={"https://drive.google.com/file/d/17jp_8P0beSxEAU7oFWf4WQi7GvG2CkIN/view?usp=drive_link"}
          className="flex gap-2 justify-center items-center underline underline-offset-4 font-poppins  text-sm">
          Download my CV
        </Link>
      </div>
    </>
  );
}
