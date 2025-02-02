import profile from "../assets/profile_black.jpg"
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-between lg:p-8">
            <img className="border-stone-900 rounded-3xl" src={profile} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl ">Shivani Mane</h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Frontend Developer</span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed">Skilled in self-learning and efficiently exploring and grasping new technologies like React,JavaScript, HTML, CSS
              and through dedicated research, online resources, and practical application, demonstrating
              adaptability and a successful transition from a non-technical background to the tech industry.
            </p>
            <a href="/resume.pdf" target="blank" rel="noopener noreferrer" download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
