import profile from "../assets/profile_black.jpg"
import { motion } from "framer-motion"


const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.5 } }
}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.5 } }
}




const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-between lg:p-8">
            <motion.img className="border-stone-900 rounded-3xl" src={profile} alt="Profile" width={650} height={650} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2 variants={containerVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl ">Shivani Mane</motion.h2>
            <motion.span variants={containerVariants} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Frontend Developer</motion.span>
            <motion.p variants={containerVariants} className="my-2 max-w-lg py-6 text-xl leading-relaxed">Skilled in self-learning and efficiently exploring and grasping new technologies like React,JavaScript, HTML, CSS
              and through dedicated research, online resources, and practical application, demonstrating
              adaptability and a successful transition from a non-technical background to the tech industry.
            </motion.p>
            <motion.a href="/resume.pdf" target="blank" rel="noopener noreferrer" download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">Download Resume</motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
