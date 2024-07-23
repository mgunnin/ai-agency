import { Component } from "react";

interface SideBarAppProps {
  id: string;
  title: string;
  icon: string;
  isClose: { [key: string]: boolean };
  isFocus: { [key: string]: boolean };
  isMinimized: { [key: string]: boolean };
  openApp: (id: string) => void;
  openFromMinimised: (id: string) => void;
}

interface SideBarAppState {
  showTitle: boolean;
  scaleImage: boolean;
}

export class SideBarApp extends Component<SideBarAppProps, SideBarAppState> {
  private id: string;

  constructor(props: SideBarAppProps) {
    super(props);
    this.id = props.id;
    this.state = {
      showTitle: false,
      scaleImage: false,
    };
  }

  scaleImage = (): void => {
    this.setState({ scaleImage: true });
    setTimeout(() => {
      this.setState({ scaleImage: false });
    }, 1000);
  };

  openApp = (): void => {
    if (this.props.isMinimized[this.id]) {
      this.props.openFromMinimised(this.id);
    } else if (this.props.isClose[this.id]) {
      this.scaleImage();
      this.props.openApp(this.id);
    } else {
      this.props.openApp(this.id);
    }
    this.setState({ showTitle: false });
  };

  render(): JSX.Element {
    const { title, icon, isClose, isFocus } = this.props;
    const { showTitle, scaleImage } = this.state;
    return (
      <div
        tabIndex={0}
        onClick={this.openApp}
        onMouseEnter={() => this.setState({ showTitle: true })}
        onMouseLeave={() => this.setState({ showTitle: false })}
        className={`w-auto p-2 outline-none relative transition hover:bg-white hover:bg-opacity-50 rounded m-1 ${isClose[this.id] === false && isFocus[this.id]
          ? "bg-grey bg-opacity-50"
          : ""
          }`}
        id={`sidebar-${this.id}`}
      >
        <img width="28px" height="28px" className="w-7" src={icon} alt="App Icon" />
        <img
          className={`scalable-app-icon w-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${scaleImage ? "scale" : ""
            }`}
          src={icon}
          alt=""
        />
        {isClose[this.id] === false && (
          <div className="w-1 h-1 absolute left-0 top-1/2 bg-ub-orange rounded-sm"></div>
        )}
        <div
          className={`w-max py-0.5 px-1.5 absolute top-1.5 right-full ml-3 m-1 text-ubt-grey text-opacity-90 text-sm bg-ub-grey bg-opacity-70 border-gray-400 border border-opacity-40 rounded-md ${showTitle ? "visible" : "invisible"
            }`}
        >
          {title}
        </div>
      </div>
    );
  }
}

export default SideBarApp;