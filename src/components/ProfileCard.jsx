import { endPoints } from "@services/api"
import axios from "axios"
import {IoIosPeople} from 'react-icons/io'
import { useEffect, useState } from "react"
import { FiExternalLink } from "react-icons/fi"
import Link from "next/link"

export default function Profile() {
  const [profile, setProfile] = useState({})
  useEffect(() => {
    async function getProfile(){
      const prof = await (await axios.get(endPoints.github.getUser)).data
      setProfile(prof)
    }
    getProfile()
  }, [])
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="relative">
          <img src={profile?.avatar_url} alt="" className="max-w-48 w-48 max-h-48 rounded-bl-[50%] rounded-br-[50%]" />
          <div className="w-48 h-48 blur-3xl flex flex-col gap-1 cursor-pointer justify-center items-center hover:blur-0 hover:bg-black/70 duration-300 absolute top-0">
            <h3 className="font-normal text-lg ">{profile.login}</h3>
            <span className="flex gap-1 items-center font-poppins"><IoIosPeople /> {profile.followers}</span>
            <Link href={`${profile.html_url}`} className="text-gray-200 hover:text-beru-300 duration-300 text-xl"><FiExternalLink /></Link>
          </div>
        </div>
        <div className="font-poppins flex flex-col gap-1 items-center">
          <h1 className="font-bold text-3xl">{profile.name}</h1>
        </div>
        <p className="text-gray-400 font-poppins text-center">{profile.bio}</p>

        <span className="font-poppins text-lg border-b border-gray-700">{profile.public_repos} Projects</span>
      </div>
    </>
  )
}
