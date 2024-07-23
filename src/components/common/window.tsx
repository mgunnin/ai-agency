import React, { Component } from "react";
import Draggable from "react-draggable";
import ReactGA from "react-ga4";
import Settings from "../apps/settings";
import WindowEditButtons from "./windoweditbuttons";
import WindowMainScreen from "./windowmainscreen";
import WindowTopBar from "./windowtopbar";
import WindowXBorder from "./windowxborder";
import WindowYBorder from "./windowyborder";

interface WindowProps {
  id: string;
  title: string;
  screen: React.FC<{ addFolder?: (name: string) => void; openApp: (id: string) => void }> | (() => React.ReactNode);
  addFolder?: (name: string) => void;
  closed: (id: string) => void;
  openApp: (id: string) => void;
  focus: (id: string) => void;
  isFocused: boolean;
  hideSideBar: (event: React.MouseEvent | null | string, hide: boolean) => void;
  hasMinimised: (id: string) => void;
  minimized: boolean;
  changeBackgroundImage: (imageName: string) => void;
  bg_image_name: string;
}

interface WindowState {
  cursorType: string;
  width: number;
  height: number;
  closed: boolean;
  maximized: boolean;
  parentSize: {
    height: number;
    width: number;
  };
}

export class Window extends Component<WindowProps, WindowState> {
  private id: string;
  private startX: number = 60;
  private startY: number = 10;
  private cursor: number | null = null;

  constructor(props: WindowProps) {
    super(props);
    this.id = props.id;
    this.state = {
      cursorType: "cursor-default",
      width: 60,
      height: 85,
      closed: false,
      maximized: false,
      parentSize: {
        height: 100,
        width: 100,
      },
    };
  }

  componentDidMount(): void {
    this.setDefaultWindowDimension();
    ReactGA.send({
      hitType: "pageview",
      page: `/${this.id}`,
    });
    window.addEventListener("resize", this.resizeBoundaries);
  }

  componentWillUnmount(): void {
    ReactGA.send({
      hitType: "pageview",
      page: "/desktop",
    });
    window.removeEventListener("resize", this.resizeBoundaries);
  }

  setDefaultWindowDimension = (): void => {
    if (window.innerWidth < 640) {
      this.setState({ height: 60, width: 85 }, this.resizeBoundaries);
    } else {
      this.setState({ height: 85, width: 60 }, this.resizeBoundaries);
    }
  };

  resizeBoundaries = (): void => {
    this.setState({
      parentSize: {
        height:
          window.innerHeight -
          window.innerHeight * (this.state.height / 100.0) -
          28,
        width:
          window.innerWidth -
          window.innerWidth * (this.state.width / 100.0),
      },
    });
  };

  changeCursorToMove = (): void => {
    this.props.focus(this.id);
    if (this.state.maximized) {
      this.restoreWindow();
    }
    this.setState({ cursorType: "cursor-move" });
  };

  changeCursorToDefault = (): void => {
    this.setState({ cursorType: "cursor-default" });
  };

  handleVerticleResize = (): void => {
    this.setState(
      (prevState) => ({ height: prevState.height + 0.1 }),
      this.resizeBoundaries
    );
  };

  handleHorizontalResize = (): void => {
    this.setState(
      (prevState) => ({ width: prevState.width + 0.1 }),
      this.resizeBoundaries
    );
  };

  setWinowsPosition = (): void => {
    const r = document.querySelector(`#${this.id}`) as HTMLElement;
    if (r) {
      const rect = r.getBoundingClientRect();
      r.style.setProperty(
        "--window-transform-x",
        rect.x.toFixed(1).toString() + "px"
      );
      r.style.setProperty(
        "--window-transform-y",
        (parseFloat(rect.y.toFixed(1)) - 32).toString() + "px"
      );
    }
  };

  checkOverlap = (): void => {
    const r = document.querySelector(`#${this.id}`) as HTMLElement;
    if (r) {
      const rect = r.getBoundingClientRect();
      if (rect.x < 50) {
        this.props.hideSideBar(this.id, true);
      } else {
        this.props.hideSideBar(this.id, false);
      }
    }
  };

  focusWindow = (): void => {
    this.props.focus(this.id);
  };

  minimizeWindow = (): void => {
    let posx = -310;
    if (this.state.maximized) {
      posx = -510;
    }
    this.setWinowsPosition();
    const r = document.querySelector(`#sidebar-${this.id}`) as HTMLElement;
    if (r) {
      const sidebBarApp = r.getBoundingClientRect();
      const windowElement = document.querySelector(`#${this.id}`) as HTMLElement;
      if (windowElement) {
        windowElement.style.transform = `translate(${posx}px,${parseFloat(sidebBarApp.y.toFixed(1)) - 240}px)`;
      }
    }
    this.props.hasMinimised(this.id);
  };

  restoreWindow = (): void => {
    const r = document.querySelector(`#${this.id}`) as HTMLElement;
    this.setDefaultWindowDimension();
    if (r) {
      const posx = r.style.getPropertyValue("--window-transform-x");
      const posy = r.style.getPropertyValue("--window-transform-y");
      r.style.transform = `translate(${posx},${posy})`;
    }
    setTimeout(() => {
      this.setState({ maximized: false });
      this.checkOverlap();
    }, 300);
  };

  maximizeWindow = (): void => {
    if (this.state.maximized) {
      this.restoreWindow();
    } else {
      this.focusWindow();
      const r = document.querySelector(`#${this.id}`) as HTMLElement;
      this.setWinowsPosition();
      if (r) {
        r.style.transform = `translate(-1pt,-2pt)`;
      }
      this.setState({ maximized: true, height: 96.3, width: 100.2 });
      this.props.hideSideBar(this.id, true);
    }
  };

  closeWindow = (): void => {
    this.setWinowsPosition();
    this.setState({ closed: true }, () => {
      this.props.hideSideBar(this.id, false);
      setTimeout(() => {
        this.props.closed(this.id);
      }, 300);
    });
  };

  render(): JSX.Element {
    return (
      <Draggable
        axis="both"
        handle=".bg-ub-window-title"
        grid={[1, 1]}
        scale={1}
        onStart={this.changeCursorToMove}
        onStop={this.changeCursorToDefault}
        onDrag={this.checkOverlap}
        allowAnyClick={false}
        defaultPosition={{ x: this.startX, y: this.startY }}
        bounds={{
          left: 0,
          top: 0,
          right: this.state.parentSize.width,
          bottom: this.state.parentSize.height,
        }}
      >
        <div
          style={{
            width: `${this.state.width}%`,
            height: `${this.state.height}%`,
          }}
          className={`${this.state.cursorType} ${this.state.closed ? "closed-window" : ""
            } ${this.state.maximized
              ? "duration-300 rounded-none"
              : "rounded-lg rounded-b-none"
            } ${this.props.minimized ? "opacity-0 invisible duration-200" : ""
            } ${this.props.isFocused ? "z-30" : "z-20 notFocused"
            } opened-window overflow-hidden min-w-1/4 min-h-1/4 main-window absolute window-shadow border-black border-opacity-40 border border-t-0 flex flex-col`}
          id={this.id}
        >
          <WindowYBorder resize={this.handleHorizontalResize} />
          <WindowXBorder resize={this.handleVerticleResize} />
          <WindowTopBar title={this.props.title} />
          <WindowEditButtons
            minimize={this.minimizeWindow}
            maximize={this.maximizeWindow}
            isMaximised={this.state.maximized}
            close={this.closeWindow}
            id={this.id}
          />
          {this.id === "settings" ? (
            <Settings
              changeBackgroundImage={this.props.changeBackgroundImage}
              currBgImgName={this.props.bg_image_name}
            />
          ) : (
            <WindowMainScreen
              screen={() => {
                if (typeof this.props.screen === 'function') {
                  if (this.props.screen.length === 0) {
                    // If it's a function with no parameters, call it directly
                    return (this.props.screen as () => React.ReactNode)();
                  } else {
                    // If it's a functional component, pass the necessary props
                    return React.createElement(this.props.screen, {
                      addFolder: this.props.addFolder,
                      openApp: this.props.openApp
                    });
                  }
                }
                // If it's not a function (shouldn't happen, but just in case)
                return null;
              }}
              title={this.props.title}
              addFolder={
                this.props.id === "terminal" ? this.props.addFolder : undefined
              }
              openApp={this.props.openApp}
            />
          )}
        </div>
      </Draggable>
    );
  }
}

export default Window;