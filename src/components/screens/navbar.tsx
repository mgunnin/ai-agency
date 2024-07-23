import { Component } from "react";
import Clock from "../../utils/clock";
import Status from "../../utils/status";
import StatusCard from "../../utils/status_card";

interface NavbarProps {
  shutDown: () => void;
  lockScreen: () => void;
}

interface NavbarState {
  status_card: boolean;
}

export default class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props)
    this.state = {
      status_card: false,
    }
  }

  render() {
    return (
      <div className="main-navbar-vp absolute top-0 right-0 w-screen shadow-md flex flex-nowrap justify-between items-center bg-ub-grey text-ubt-grey text-sm select-none z-50">
        <div
          tabIndex={0}
          className={
            "pl-3 pr-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 "
          }
        >
          Activities
        </div>
        <div
          tabIndex={0}
          className={
            "pl-2 pr-2 text-xs md:text-sm outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1"
          }
        >
          <Clock />
        </div>
        <div
          id="status-bar"
          tabIndex={0}
          onFocus={() => {
            this.setState({ status_card: true })
          }}
          // removed onBlur from here
          className={
            "relative pr-3 pl-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 "
          }
        >
          <Status />
          <StatusCard
            shutDown={this.props.shutDown}
            lockScreen={this.props.lockScreen}
            visible={this.state.status_card}
            toggleVisible={() => {
              // this prop is used in statusCard component in handleClickOutside callback using react-onclickoutside
              this.setState({ status_card: false })
            }}
          />
        </div>
      </div>
    )
  }
}