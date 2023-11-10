import { useState } from "react";
import { BsCodeSlash, BsTerminalFill } from "react-icons/bs";
import { FaBook, FaDatabase, FaGitAlt, FaGithub, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { DiCss3, DiHtml5, DiJavascript1 } from "react-icons/di";
import { SiCsharp, SiKotlin, SiSpring, SiTypescript,SiMysql, SiAndroid, SiPostgresql, SiVitest, SiTailwindcss, SiLinux } from "react-icons/si";

export default function LanguageChip({ language }) {
  const [colors, setColors] = useState({
    Java: "text-red-700",
    JavaScript: "text-yellow-700",
    Python: "text-blue-700",
    Kotlin: "text-purple-700",
    CSS: "text-cyan-300",
    TypeScript: "text-blue-700",
    HTML: "text-orange-700",
    React: "text-cyan-700",
    Node: "text-green-700",
    MySQL: "text-blue-700",
    PostgreSQL: "text-blue-700",
    "C#": "text-emerald-700",
    Spring: "text-green-700",
    API: "text-teal-700",
    Git: "text-orange-700",
    Github: "text-gray-200",
    Android: "text-green-700",
    Theory: "text-gray-200",
    Terminal: "text-red-500",
    Vite: "text-yellow-500",
    TailwindCSS: "text-cyan-600",
    Linux: "text-gray-200",
  });
  const [icons, setIcons] = useState({
    Java: <FaJava />,
    JavaScript: <DiJavascript1 />,
    Python: <FaPython />,
    Kotlin: <SiKotlin />,
    CSS: <DiCss3 />,
    TypeScript: <SiTypescript />,
    HTML: <DiHtml5 />,
    Node: <FaNodeJs />,
    React: <FaReact />,
    MySQL: <SiMysql />,
    PostgreSQL: <SiPostgresql />,
    "C#": <SiCsharp />,
    Spring: <SiSpring />,
    API: <FaDatabase />,
    Github: <FaGithub />,
    Git: <FaGitAlt />,
    Android: <SiAndroid />,
    Theory: <FaBook />,
    Terminal: <BsTerminalFill />,
    Vite: <SiVitest />,
    TailwindCSS: <SiTailwindcss />,
    Linux: <SiLinux />,
  })
  return (
    <>
      <div className="flex gap-1 items-center">
        <span className={`${colors[language]} text-sm`}>
          {icons[language]}
        </span>
        <span className="font-poppins font-light text-xs ">{language}</span>
      </div>
    </>
  );
}
