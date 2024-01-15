import { useState } from "react";
import { BsCodeSlash, BsTerminalFill } from "react-icons/bs";
import { FaBook, FaDatabase, FaGitAlt, FaGithub, FaJava, FaLock, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { DiCss3, DiHtml5, DiJavascript1 } from "react-icons/di";
import { SiCsharp, SiKotlin, SiSpring, SiTypescript,SiMysql, SiAndroid, SiPostgresql, SiVitest, SiTailwindcss, SiLinux, SiWindows11, SiDocker, SiVirtualbox, SiMongodb } from "react-icons/si";

export default function LanguageChip({ language, noText }) {
  const lang = language.toUpperCase()
  const [colors, setColors] = useState({
    JAVA: "text-red-700",
    JAVASCRIPT: "text-yellow-700",
    PYTHON: "text-blue-700",
    KOTLIN: "text-purple-700",
    CSS: "text-cyan-300",
    CSS3: "text-cyan-300",
    TYPESCRIPT: "text-blue-700",
    HTML: "text-orange-700",
    HTML5: "text-orange-700",
    REACT: "text-cyan-700",
    NODE: "text-green-700",
    MYSQL: "text-blue-700",
    POSTGRESQL: "text-blue-700",
    "C#": "text-emerald-700",
    SPRING: "text-green-700",
    API: "text-teal-700",
    'API-REST': "text-teal-700",
    GIT: "text-orange-700",
    GITHUB: "text-gray-200",
    ANDROID: "text-green-700",
    THEORY: "text-gray-200",
    TERMINAL: "text-red-500",
    VITE: "text-yellow-500",
    TAILWINDCSS: "text-cyan-600",
    LINUX: "text-gray-200",
    OTHERS: 'text-red-500',
    WINDOWS: 'text-cyan-500',
    DOCKER: 'text-blue-400',
    CYBERSECURITY: 'text-yellow-500',
    VIRTUALIZATION: 'text-blue-500',
    MONGODB: 'text-green-500',
    MONGOOSE: 'text-green-500'
  });
  const [icons, setIcons] = useState({
    JAVA: <FaJava />,
    JAVASCRIPT: <DiJavascript1 />,
    PYTHON: <FaPython />,
    KOTLIN: <SiKotlin />,
    CSS: <DiCss3 />,
    CSS3: <DiCss3 />,
    TYPESCRIPT: <SiTypescript />,
    HTML: <DiHtml5 />,
    HTML5: <DiHtml5 />,
    NODE: <FaNodeJs />,
    REACT: <FaReact />,
    MYSQL: <SiMysql />,
    POSTGRESQL: <SiPostgresql />,
    "C#": <SiCsharp />,
    SPRING: <SiSpring />,
    API: <FaDatabase />,
    'API-REST': <FaDatabase />,
    GITHUB: <FaGithub />,
    GIT: <FaGitAlt />,
    ANDROID: <SiAndroid />,
    THEORY: <FaBook />,
    TERMINAL: <BsTerminalFill />,
    VITE: <SiVitest />,
    TAILWINDCSS: <SiTailwindcss />,
    LINUX: <SiLinux />,
    WINDOWS: <SiWindows11 />,
    DOCKER: <SiDocker />,
    CYBERSECURITY: <FaLock />,
    VIRTUALIZATION: <SiVirtualbox />,
    MONGODB: <SiMongodb />,
    MONGOOSE: <SiMongodb />
  })
  return (
    <>
      <div className="flex gap-1 items-center">
        <span className={`${colors[lang]} ${noText?'text-xl':'text-sm'}`}>
          {icons[lang]}
        </span>
        <span className="font-poppins font-light text-xs ">{noText?'':language}</span>
      </div>
    </>
  );
}
