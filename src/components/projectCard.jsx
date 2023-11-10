import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import LanguageChip from "./languageChip";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProjectCard({
  createdDate,
  updatedDate,
  name,
  description,
  link,
  avatar,
  userUrl,
  homePage,
  languagesUrl,
}) {
  const [languages, setLanguages] = useState([""]);
  const router = useRouter()
  useEffect(() => {
    async function getLanguages() {
      const langs = (await axios.get(languagesUrl)).data;
      setLanguages(langs);
    }
    if (!languagesUrl) {
      return;
    }
    getLanguages();
  }, []);
  function externalHandle(){
    router.push(homePage || link)
  }
  return (
    <>
        <div onClick={externalHandle} className="max-w-2xl min-h-full justify-between bg-gray-800 hover:bg-gray-700 p-5 rounded-xl flex flex-col gap-5 cursor-pointer duration-300">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between gap-3">
              <span className="font-poppins font-semibold text-sm text-gray-400">
                {createdDate}
              </span>
              <span className="font-poppins font-light text-sm border-b-[1px] border-gray-200 text-gray-400">
                {updatedDate}
              </span>
            </div>
            <div className="flex gap-3">
              <a href={userUrl}>
                <img
                  className="rounded-full"
                  src={avatar}
                  alt=""
                  width={34}
                  height={22}
                />
              </a>
              <h1 className="font-poppins font-bold text-3xl">
                <Link href={`${homePage === null ? link : homePage}`}>
                  {name}
                </Link>
              </h1>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-poppins font-light text-sm text-gray-400">
                {description}
              </p>
              <div className="flex flex-wrap gap-3">
                {Object.keys(languages)?.map((lang, index) => (
                  <LanguageChip key={index} language={lang} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-3 text-2xl">
            <Link href={`${link}`}>
              <span className="text-sm flex items-center justify-center gap-2">
                Go project <AiOutlineArrowRight />
              </span>
            </Link>
          </div>
        </div>
    </>
  );
}
