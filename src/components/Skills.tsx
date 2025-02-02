import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";


const Skills = () => {
  return (
    <div className="pb-24 ">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <IoLogoJavascript className="text-6xl text-yellow-300" />
        </div>
        <div className="p-4 ">
          <FaHtml5 className="text-6xl text-orange-400" />
        </div>
        <div className="p-4">
          <IoLogoCss3 className="text-6xl text-blue-500" />
        </div>
      </div>
    </div>
  )
}

export default Skills
