import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import LanguageChip from "./languageChip";
import { useRouter } from "next/router";

export default function Certification({name, academy, expedition, learning, id, url, certificates}) {
  const languages = [...learning];
  const router = useRouter()
  function externalHandle(event){
    router.push(certificates ? "/certificate/"+id : url)
  }
  return (
    <>
      <div onClick={externalHandle} className="flex flex-col lg:flex-row lg:justify-between gap-3 w-full bg-gray-800 p-5 rounded-xl hover:bg-gray-700 duration-300 cursor-pointer">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between gap-5 items-center">
            <div className="flex gap-3 items-center">
              <img
                src={
                  "https://d1qb2nb5cznatu.cloudfront.net/startups/i/228069-3505671d2fa91218bd7676733164afe9-medium_jpg.jpg?buster=1426816465"
                }
                className="rounded-lg max-w-24 w-24 max-h-24"
                alt=""
              />
              <div className="flex flex-col">
                <h1 className="font-poppins font-semibold text-lg">
                  <span className="flex gap-2 items-center">
                    {name}
                    {certificates &&
                      <Link href={`/certificate/${id}/`} className="text-cyan-600 hover:text-cyan-400 duration-300">
                      <FiExternalLink />
                    </Link>
                    }
                  </span>
                </h1>
                <h2 className="font-poppins font-semibold">{academy}</h2>
                <p className="font-poppins font-normal text-sm">
                  Expedicion:{" "}
                  <span className="font-extralight text-gray-400">
                    {expedition}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-wrap gap-3">
              {languages?.map((lear, index) => (
                <LanguageChip key={index} language={lear} />
              ))}
            </div>
            <span className="font-poppins font-semibold text-xs">
              ID:{" "}
              <span className="font-poppins font-extralight text-xs">
                {id}
              </span>
            </span>
          </div>
        </div>
        <Link
          href={`${url}`}
          className="flex gap-2 items-center text-2xl text-gray-500 hover:text-gray-400 duration-300"
        >
          <span className="font-poppins text-sm">Show Credential</span>
          <AiOutlineArrowRight />
        </Link>
      </div>
    </>
  );
}
