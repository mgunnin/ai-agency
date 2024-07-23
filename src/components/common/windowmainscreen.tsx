import React, { Component } from "react";
import { displayTerminal } from '../apps/terminal';

interface WindowMainScreenProps {
  screen: () => React.ReactNode;
  title: string;
  addFolder?: (name: string) => void;
  openApp: (id: string) => void;
}

interface WindowMainScreenState {
  setDarkBg: boolean;
}

class WindowMainScreen extends Component<WindowMainScreenProps, WindowMainScreenState> {
  constructor(props: WindowMainScreenProps) {
    super(props);
    this.state = {
      setDarkBg: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ setDarkBg: true });
    }, 3000);
  }

  render() {
    const { screen, title, addFolder, openApp } = this.props;
    const { setDarkBg } = this.state;

    return (
      <div
        className={`w-full flex-grow z-20 max-h-full overflow-y-auto windowMainScreen ${setDarkBg ? "bg-ub-drk-abrgn" : "bg-ub-cool-grey"
          }`}
      >
        {addFolder
          ? displayTerminal(addFolder, openApp)
          : screen()}
      </div>
    );
  }
}

export default WindowMainScreen;