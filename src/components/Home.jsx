import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-50 text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
          Muhammad Ibrahim
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <span className='mr-2'>I am</span>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Software engineer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Mern Stack Developer")
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-gray-300 py-4 leading-8">
        I am a dedicated software engineer proficient in MERN stack development, specializing in crafting robust and scalable web applications.

        With expertise in MongoDB, Express.js, React.js, and Node.js, I excel in building dynamic and responsive user interfaces integrated with powerful backend solutions.

        Driven by a passion for innovation and excellence, I leverage my MERN stack proficiency to deliver high-quality software solutions tailored to meet modern digital challenges.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold">
            View Work{" "}
            <span className="group-hover:translate-x-1 duration-300">
              {" "}
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;