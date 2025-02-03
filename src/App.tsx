import Home from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="overflow-x-hidden text-stone-200 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <p className="my-5 pt-2 border-t-2 border-gray-300 text-center text-sm">Credits: Special thanks to <a href="https://www.linkedin.com/company/madrocket/about/">Madrocket Technologies & Media</a> and compiletab <a href="https://www.youtube.com/watch?v=wtGCTFXWV3Y&ab_channel=compiletab">www.youtube.com/@compiletab</a> for their invaluable guidance in helping me create this portfolio site.</p>
      </div>
    </div>
  )
}

export default App
