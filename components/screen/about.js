import React from "react"

function about() {
  return (
    <>
      <div className="mt-4 text-lg md:text-2xl text-center px-1">
        <div>
          Welcome to{" "}
          <span className="font-bold text-purple-600">Vertical Labs</span>
        </div>
      </div>
      <div className="w-20 md:w-32 mt-4 rounded-full">
        <img
          className="w-full rounded-full"
          src="./icons/logos/vertical_labs.png"
          alt="Vertical Labs Logo"
        />
      </div>
      <div className="mt-4 text-lg md:text-lg text-center px-1">
        <div className="font-bold ml-1">
          Vertical Thinking, Exponential Growth
        </div>
      </div>
      <div className="mt-4 relative md:my-4 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className="list-pc my-2 md:text-base">
          Specializing in cutting-edge AI solutions for businesses of all sizes
        </li>
        <li className="list-pc my-2 md:text-base">
          Expertise in machine learning, natural language processing, and
          computer vision
        </li>
        <li className="list-pc my-2 md:text-base">
          Custom AI development tailored to your specific needs and challenges
        </li>
        <li className="list-pc my-2 md:text-base">
          AI consulting to help you leverage the power of artificial
          intelligence
        </li>
        <li className="list-pc my-2 md:text-base">
          Committed to ethical AI practices and responsible innovation
        </li>
      </ul>
    </>
  )
}

export default about
