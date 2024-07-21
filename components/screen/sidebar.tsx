import React, { useState } from "react";
import SideBarApp from "../base/sidebar";

interface AppInfo {
  id: string;
  title: string;
  icon: string;
}

interface SideBarProps {
  apps: AppInfo[];
  hide: boolean;
  hideSideBar: (event: React.MouseEvent | null, hide: boolean) => void;
  showAllApps: () => void;
  allAppsView: boolean;
  favorite_apps: Record<string, boolean>;
  closed_windows: Record<string, boolean>;
  focused_windows: Record<string, boolean>;
  openAppByAppId: (id: string) => void;
  isMinimized: Record<string, boolean>;
  openFromMinimised: (id: string) => void;
}

interface AllAppsProps {
  showApps: () => void;
}

let renderApps = (props: SideBarProps) => {
  let sideBarAppsJsx: JSX.Element[] = []
  props.apps.forEach((app, index) => {
    if (props.favorite_apps[app.id] === false) return
    sideBarAppsJsx.push(
      <SideBarApp
        key={index}
        id={app.id}
        title={app.title}
        icon={app.icon}
        isClose={props.closed_windows}
        isFocus={props.focused_windows}
        openApp={props.openAppByAppId}
        isMinimized={props.isMinimized}
        openFromMinimised={props.openFromMinimised}
      />
    )
  })
  return sideBarAppsJsx
}

export function AllApps(props: AllAppsProps) {
  const [title, setTitle] = useState(false)
  return (
    <div
      className={`w-10 h-10 rounded m-1 hover:bg-white hover:bg-opacity-10 flex items-center justify-center`}
      onMouseEnter={() => {
        setTitle(true)
      }}
      onMouseLeave={() => {
        setTitle(false)
      }}
      onClick={props.showApps}
    >
      <div className="relative">
        <img
          width="28px"
          height="28px"
          className="w-7"
          src="./icons/app_grid.svg"
          alt="View App"
        />
        <div
          className={
            (title ? " visible " : " invisible ") +
            " w-max py-0.5 px-1.5 absolute top-1 left-full ml-5 text-ubt-grey text-opacity-90 text-sm bg-ub-grey bg-opacity-70 border-gray-400 border border-opacity-40 rounded-md"
          }
        >
          Show Applications
        </div>
      </div>
    </div>
  )
}

export default function SideBar(props: SideBarProps) {
  function showSideBar() {
    props.hideSideBar(null, false)
  }

  function hideSideBar() {
    setTimeout(() => {
      props.hideSideBar(null, true)
    }, 2000)
  }

  return (
    <>
      <div
        className={
          (props.hide ? " translate-x-full " : "") +
          " absolute transform duration-300 select-none z-40 right-0 top-0 h-full pt-7 w-auto flex flex-col justify-start items-center border-black border-opacity-60 bg-black bg-opacity-90"
        }
      >
        <AllApps showApps={props.showAllApps} />
        {Object.keys(props.closed_windows).length !== 0
          ? renderApps(props)
          : null}
      </div>
      <div
        onMouseEnter={showSideBar}
        onMouseLeave={hideSideBar}
        className={"w-1 h-full absolute top-0 right-0 bg-transparent z-50"}
      ></div>
    </>
  )
}