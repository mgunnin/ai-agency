import { Component } from "react";

interface UbuntuAppProps {
  id: string;
  name: string;
  icon: string;
  openApp: (id: string) => void;
}

export class UbuntuApp extends Component<UbuntuAppProps> {
  openApp = (): void => {
    this.props.openApp(this.props.id);
  };

  render(): JSX.Element {
    const { id, name, icon } = this.props;

    return (
      <div
        className="p-1 m-px z-10 bg-transparent hover:bg-white hover:bg-opacity-10 focus:bg-ub-orange focus:bg-opacity-50 focus:border-yellow-700 focus:border-opacity-100 border border-transparent outline-none rounded select-none w-24 h-20 flex flex-col justify-start items-center text-center text-xs font-normal text-white"
        id={`app-${id}`}
        onDoubleClick={this.openApp}
        tabIndex={0}
      >
        <img
          width="40px"
          height="40px"
          className="mb-1 w-10"
          src={icon}
          alt={`Ubuntu ${name}`}
        />
        <span className="text-white">{name}</span>
      </div>
    );
  }
}

export default UbuntuApp;