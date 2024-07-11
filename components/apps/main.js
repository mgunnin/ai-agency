import React, { Component } from "react"
import ReactGA from "react-ga4"
import About from "../screen/about"
import Faq from "../screen/faq"
import History from "../screen/history"
import Projects from "../screen/projects"
import Skills from "../screen/skills"

export class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.screens = {}
    this.state = {
      screen: null,
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    }
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      history: <History />,
      projects: <Projects />,
      skills: <Skills />,
      faq: <Faq />,
    }

    let lastVisitedScreen = localStorage.getItem("about-section")
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about"
    }

    // Debugging log
    console.log("Last visited screen:", lastVisitedScreen)

    // Focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen))
  }

  changeScreen = (screenId) => {
    const screen =
      typeof screenId === "string"
        ? screenId
        : screenId && screenId.target
        ? screenId.target.id
        : "about"

    // Debugging log
    console.log("Changing to screen:", screen)

    // Store this state
    localStorage.setItem("about-section", screen)

    // Google analytics
    ReactGA.send({ hitType: "pageview", page: `/${screen}` })

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    })
  }

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar })
  }

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex={0}
          onClick={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="about us"
            src="./icons/folder.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Us</span>
        </div>
        <div
          id="faq"
          tabIndex={0}
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "faq"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img className=" w-3 md:w-4" alt="tools" src="./icons/folder.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">FAQ</span>
        </div>
        <div
          id="history"
          tabIndex={0}
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "history"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="history"
            src="./icons/work-history.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">History</span>
        </div>
        <div
          id="projects"
          tabIndex={0}
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="projects"
            src="./icons/folder.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="skills"
          tabIndex={0}
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img className=" w-3 md:w-4" alt="skills" src="./icons/folder.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="resume"
          tabIndex={0}
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img className=" w-3 md:w-4" alt="resume" src="./icons/folder.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    )
  }

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    )
  }
}

export default AboutUs

export const displayAbout = () => {
  return <AboutUs />
}
