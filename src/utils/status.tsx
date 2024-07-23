import React from "react"
import SmallArrow from "./small_arrow"

export default function Status(): React.ReactNode {
  return (
    <div className="flex justify-center items-center">
      <span className="mx-1.5">
        <img
          width="16px"
          height="16px"
          src="./icons/network-wireless-signal-good-symbolic.svg"
          alt="wifi"
          className="inline status-symbol w-4 h-4"
        />
      </span>
      <span className="mx-1.5">
        <img
          width="16px"
          height="16px"
          src="./icons/audio-volume-medium-symbolic.svg"
          alt="sound"
          className="inline status-symbol w-4 h-4"
        />
      </span>
      <span className="mx-1.5">
        <img
          width="16px"
          height="16px"
          src="./icons/battery-good-symbolic.svg"
          alt="battery"
          className="inline status-symbol w-4 h-4"
        />
      </span>
      <span className="mx-1">
        <SmallArrow angle="down" className="status-symbol" />
      </span>
    </div>
  )
}
