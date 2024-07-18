import React, { Component } from "react"
import onClickOutside from "react-onclickoutside"
import SmallArrow from "./small_arrow"

class Slider extends Component {
  render() {
    return (
      <input
        type="range"
        onChange={this.props.onChange}
        className={this.props.className}
        name={this.props.name}
        min="0"
        max="100"
        value={this.props.value}
        step="1"
      />
    )
  }
}

export class StatusCard extends Component {
  constructor(props) {
    super(props)
    this.wrapperRef = React.createRef()
    this.state = {
      sound_level: 75, // better of setting default values from localStorage
      brightness_level: 100, // setting default value to 100 so that by default its always full.
    }
  }
  handleClickOutside = () => {
    this.props.toggleVisible()
  }
  componentDidMount() {
    this.setState(
      {
        sound_level: localStorage.getItem("sound-level") || 75,
        brightness_level: localStorage.getItem("brightness-level") || 100,
      },
      () => {
        const monitorScreen = document.getElementById("monitor-screen")
        if (monitorScreen) {
          monitorScreen.style.filter = `brightness(${
            (3 / 400) * this.state.brightness_level + 0.25
          })`
        }
      }
    )
  }

  handleBrightness = (e) => {
    this.setState({ brightness_level: e.target.value })
    localStorage.setItem("brightness-level", e.target.value)
    // the function below inside brightness() is derived from a linear equation such that at 0 value of slider brightness still remains 0.25 so that it doesn't turn black.
    document.getElementById("monitor-screen").style.filter = `brightness(${
      (3 / 400) * e.target.value + 0.25
    })` // Using css filter to adjust the brightness in the root div.
  }

  handleSound = (e) => {
    this.setState({ sound_level: e.target.value })
    localStorage.setItem("sound-level", e.target.value)
  }

  render() {
    return (
      <div
        ref={this.wrapperRef}
        className={
          "absolute bg-ub-cool-grey rounded-md py-4 top-9 right-3 shadow border-black border border-opacity-20 status-card" +
          (this.props.visible
            ? " visible animateShow"
            : " invisible animateHide")
        }
      >
        {" "}
        {/* Status Card */}
        <div className="absolute w-0 h-0 -top-1 right-6 top-arrow-up" />
        <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
          <div className="w-8">
            <img
              width="16px"
              height="16px"
              src="./icons/audio-headphones-symbolic.svg"
              alt="ubuntu headphone"
            />
          </div>
          <Slider
            onChange={this.handleSound}
            className="ubuntu-slider w-2/3"
            value={this.state.sound_level}
            name="headphone_range"
          />
        </div>
        <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
          <div className="w-8">
            <img
              width="16px"
              height="16px"
              src="./icons/display-brightness-symbolic.svg"
              alt="display brightness"
            />
          </div>
          <Slider
            onChange={this.handleBrightness}
            className="ubuntu-slider w-2/3"
            name="brightness_range"
            value={this.state.brightness_level}
          />
        </div>
        <div className="w-64 flex content-center justify-center">
          <div className="w-2/4 border-black border-opacity-50 border-b my-2 border-solid" />
        </div>
        <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
          <div className="w-8">
            <img
              width="16px"
              height="16px"
              src="./icons/network-wireless-signal-good-symbolic.svg"
              alt="network-wireless-signal-good"
            />
          </div>
          <div className="w-2/3 flex items-center justify-between text-gray-400">
            <span>OnePlus 8 Pro</span>
            <SmallArrow angle="right" />
          </div>
        </div>
        <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
          <div className="w-8">
            <img
              width="16px"
              height="16px"
              src="./icons/bluetooth-symbolic.svg"
              alt="bluetooth"
            />
          </div>
          <div className="w-2/3 flex items-center justify-between text-gray-400">
            <span>Off</span>
            <SmallArrow angle="right" />
          </div>
        </div>
        <div className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20">
          <div className="w-8">
            <img
              width="16px"
              height="16px"
              src="./icons/battery-good-symbolic.svg"
              alt="battery-good"
            />
          </div>
          <div className="w-2/3 flex items-center justify-between text-gray-400">
            <span>2:40 Remaining (75%)</span>
            <SmallArrow angle="right" />
          </div>
        </div>
        <div className="w-64 flex content-center justify-center">
          <div className="w-2/4 border-black border-opacity-50 border-b my-2 border-solid" />
        </div>
        <div
          id="open-settings"
          className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20"
        >
          <div className="w-8">
            <img
              width="16px"
              height="16px"
              src="./icons/emblem-system-symbolic.svg"
              alt="emblem-system-symbolic"
            />
          </div>
          <div className="w-2/3 flex items-center justify-between">
            <span>Settings</span>
          </div>
        </div>
        <div
          onClick={this.props.lockScreen}
          className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20"
        >
          <div className="w-8">
            <img
              width="16px"
              height="16px"
              src="./icons/changes-prevent-symbolic.svg"
              alt="changes-prevent-symbolic"
            />
          </div>
          <div className="w-2/3 flex items-center justify-between">
            <span>Lock</span>
          </div>
        </div>
        <div
          onClick={this.props.shutDown}
          className="w-64 py-1.5 flex items-center justify-center bg-ub-cool-grey hover:bg-ub-warm-grey hover:bg-opacity-20"
        >
          <div className="w-8">
            <img
              width="16px"
              height="16px"
              src="./icons/system-shutdown-symbolic.svg"
              alt="system-shutdown-symbolic"
            />
          </div>
          <div className="w-2/3 flex items-center justify-between">
            <span>Power Off / Log Out</span>
            <SmallArrow angle="right" />
          </div>
        </div>
      </div>
    )
  }
}

export default onClickOutside(StatusCard)