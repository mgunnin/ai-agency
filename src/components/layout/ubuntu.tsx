import { Component } from "react"
import ReactGA from "react-ga4"
import BootingScreen from "../screens/booting"
import Desktop from "../screens/desktop"
import LockScreen from "../screens/lockscreen"
import Navbar from "../screens/navbar"

interface UbuntuState {
  screen_locked: boolean;
  bg_image_name: string;
  booting_screen: boolean;
  shutDownScreen: boolean;
}

export default class Ubuntu extends Component<{}, UbuntuState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      screen_locked: false,
      bg_image_name: "wall-6",
      booting_screen: true,
      shutDownScreen: false,
    }
  }

  componentDidMount(): void {
    this.getLocalData()
  }

  setTimeOutBootScreen = (): void => {
    setTimeout(() => {
      this.setState({ booting_screen: false })
    }, 2000)
  }

  getLocalData = (): void => {
    // Get Previously selected Background Image
    let bg_image_name = localStorage.getItem("bg-image")
    if (bg_image_name !== null && bg_image_name !== undefined) {
      this.setState({ bg_image_name })
    }

    let booting_screen = localStorage.getItem("booting_screen")
    if (booting_screen !== null && booting_screen !== undefined) {
      // user has visited site before
      this.setState({ booting_screen: false })
    } else {
      // user is visiting site for the first time
      localStorage.setItem("booting_screen", "false")
      this.setTimeOutBootScreen()
    }

    // get shutdown state
    let shut_down = localStorage.getItem("shut-down")
    if (shut_down !== null && shut_down !== undefined && shut_down === "true")
      this.shutDown()
    else {
      // Get previous lock screen state
      let screen_locked = localStorage.getItem("screen-locked")
      if (screen_locked !== null && screen_locked !== undefined) {
        this.setState({
          screen_locked: screen_locked === "true",
        })
      }
    }
  }

  lockScreen = (): void => {
    // google analytics
    ReactGA.send({ hitType: "pageview", page: "/lock-screen" });
    ReactGA.event({
      category: `Screen Change`,
      action: `Set Screen to Locked`,
    })

    document.getElementById("status-bar")?.blur()
    setTimeout(() => {
      this.setState({ screen_locked: true })
    }, 100) // waiting for all windows to close (transition-duration)
    localStorage.setItem("screen-locked", "true")
  }

  unLockScreen = (): void => {
    ReactGA.send({ hitType: "pageview", page: "/desktop" });

    window.removeEventListener("click", this.unLockScreen)
    window.removeEventListener("keypress", this.unLockScreen)

    this.setState({ screen_locked: false })
    localStorage.setItem("screen-locked", "false")
  }

  changeBackgroundImage = (img_name: string): void => {
    this.setState({ bg_image_name: img_name })
    localStorage.setItem("bg-image", img_name)
  }

  shutDown = (): void => {
    ReactGA.send({ hitType: "pageview", page: "/switch-off" });
    ReactGA.event({
      category: `Screen Change`,
      action: `Switched off the Ubuntu`,
    })

    document.getElementById("status-bar")?.blur()
    this.setState({ shutDownScreen: true })
    localStorage.setItem("shut-down", "true")
  }

  turnOn = (): void => {
    ReactGA.send({ hitType: "pageview", page: "/desktop" });

    this.setState({ shutDownScreen: false, booting_screen: true })
    this.setTimeOutBootScreen()
    localStorage.setItem("shut-down", "false")
  }

  render() {
    return (
      <div className="w-screen h-screen overflow-hidden" id="monitor-screen">
        <LockScreen
          isLocked={this.state.screen_locked}
          bgImgName={this.state.bg_image_name}
          unLockScreen={this.unLockScreen}
        />
        <BootingScreen
          visible={this.state.booting_screen}
          isShutDown={this.state.shutDownScreen}
          turnOn={this.turnOn}
        />
        <Navbar lockScreen={this.lockScreen} shutDown={this.shutDown} />
        <Desktop
          bg_image_name={this.state.bg_image_name}
          changeBackgroundImage={this.changeBackgroundImage}
        />
      </div>
    )
  }
}