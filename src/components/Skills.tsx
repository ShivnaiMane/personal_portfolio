import { IoLogoJavascript } from "react-icons/io5";
import { SiFirebase } from "react-icons/si";

import { RiReactjsLine } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { motion, Variants } from "framer-motion"


const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Skills = () => {
  return (
    <div className="pb-24 ">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <IoLogoJavascript className="text-6xl text-yellow-300" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4 ">
          <FaHtml5 className="text-6xl text-orange-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
          <IoLogoCss3 className="text-6xl text-blue-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <SiFirebase className="text-6xl text-orange-500" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills
