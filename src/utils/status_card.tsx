import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import SmallArrow from "./small_arrow";

interface SliderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  name: string;
  value: number;
}

class Slider extends Component<SliderProps> {
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
    );
  }
}

interface StatusCardProps {
  visible: boolean;
  toggleVisible: () => void;
  lockScreen: () => void;
  shutDown: () => void;
}

interface StatusCardState {
  sound_level: number;
  brightness_level: number;
}

export class StatusCard extends Component<StatusCardProps, StatusCardState> {
  private wrapperRef: React.RefObject<HTMLDivElement>;

  constructor(props: StatusCardProps) {
    super(props);
    this.wrapperRef = React.createRef();
    this.state = {
      sound_level: 75,
      brightness_level: 100,
    };
  }

  handleClickOutside = () => {
    this.props.toggleVisible();
  };

  componentDidMount() {
    this.setState(
      {
        sound_level: Number(localStorage.getItem("sound-level")) || 75,
        brightness_level: Number(localStorage.getItem("brightness-level")) || 100,
      },
      () => {
        const monitorScreen = document.getElementById("monitor-screen");
        if (monitorScreen) {
          monitorScreen.style.filter = `brightness(${(3 / 400) * this.state.brightness_level + 0.25
            })`;
        }
      }
    );
  }

  handleBrightness = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    this.setState({ brightness_level: value });
    localStorage.setItem("brightness-level", value.toString());
    const monitorScreen = document.getElementById("monitor-screen");
    if (monitorScreen) {
      monitorScreen.style.filter = `brightness(${(3 / 400) * value + 0.25})`;
    }
  };

  handleSound = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    this.setState({ sound_level: value });
    localStorage.setItem("sound-level", value.toString());
  };

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
    );
  }
}

export default onClickOutside(StatusCard);