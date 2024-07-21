import React, { Component, FocusEvent } from "react";
import ReactGA from "react-ga4";
import About from "../screen/about";
import Faq from "../screen/faq";
import History from "../screen/history";
import Projects from "../screen/projects";
import Skills from "../screen/skills";
import Team from "../screen/team";

interface AboutUsProps { }

interface AboutUsState {
  screen: React.ReactNode | null;
  active_screen: string;
  navbar: boolean;
}

interface Screen {
  [key: string]: React.ReactNode;
}

export class AboutUs extends Component<AboutUsProps, AboutUsState> {
  private screens: Screen;

  constructor(props: AboutUsProps) {
    super(props);
    this.screens = {};
    this.state = {
      screen: null,
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.initializeScreens();
    this.setLastVisitedScreen();
  }

  initializeScreens = () => {
    this.screens = {
      about: <About />,
      history: <History />,
      projects: <Projects />,
      skills: <Skills />,
      faq: <Faq />,
      team: <Team />,
    };
  };

  setLastVisitedScreen = () => {
    const lastVisitedScreen = localStorage.getItem("about-section") || "about";
    console.log("Last visited screen:", lastVisitedScreen);
    this.changeScreen(lastVisitedScreen);
  };

  changeScreen = (event: FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement> | string) => {
    let screenId: string;
    if (typeof event === 'string') {
      screenId = event;
    } else {
      screenId = (event.currentTarget as HTMLDivElement).id;
    }
    console.log("Changing to screen:", screenId);
    localStorage.setItem("about-section", screenId);
    ReactGA.send({ hitType: "pageview", page: `/${screenId}` });
    this.setState({
      screen: this.screens[screenId],
      active_screen: screenId,
    });
  };

  showNavBar = () => {
    this.setState((prevState) => ({ navbar: !prevState.navbar }));
  };

  renderNavLinks = () => {
    const navItems = [
      { id: "about", label: "About", icon: "./icons/folder.svg" },
      { id: "history", label: "History", icon: "./icons/folder.svg" },
      { id: "projects", label: "Projects", icon: "./icons/folder.svg" },
      { id: "skills", label: "Skills", icon: "./icons/folder.svg" },
      { id: "faq", label: "FAQ", icon: "./icons/folder.svg" },
      { id: "team", label: "Team", icon: "./icons/folder.svg" },
    ];

    return navItems.map((item) => (
      <div
        key={item.id}
        id={item.id}
        tabIndex={0}
        onFocus={this.changeScreen}
        className={`${this.state.active_screen === item.id
          ? "bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
          : "hover:bg-gray-50 hover:bg-opacity-5"
          } w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer`}
      >
        <img className="w-3 md:w-4" alt={item.label} src={item.icon} />
        <span className="ml-1 md:ml-2 text-gray-50">{item.label}</span>
      </div>
    ));
  };

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
          <div className="w-3.5 border-t border-white"></div>
          <div
            className="w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className="w-3.5 border-t border-white"></div>
          <div
            className={`${this.state.navbar
              ? "visible animateShow z-30"
              : "invisible"
              } md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20`}
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutUs;

export const displayAbout = (): JSX.Element => {
  return <AboutUs />;
};