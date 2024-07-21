import $ from "jquery";
import React, { Component } from "react";

interface TrashItem {
  name: string;
  icon: string;
}

interface TrashState {
  empty: boolean;
}

export class Trash extends Component<{}, TrashState> {
  private trashItems: TrashItem[];

  constructor(props: {}) {
    super(props)
    this.trashItems = [
      {
        name: "Our Competition",
        icon: "./icons/filetypes/php.png",
      },
      {
        name: "Fired Clients",
        icon: "./icons/filetypes/js.png",
      },
      {
        name: "node_modules",
        icon: "./icons/filetypes/zip.png",
      },
      {
        name: "Abandoned Projects",
        icon: "./icons/folder.svg",
      },
    ]
    this.state = {
      empty: false,
    }
  }

  componentDidMount() {
    let wasEmpty = localStorage.getItem("trash-empty")
    if (wasEmpty !== null && wasEmpty !== undefined) {
      if (wasEmpty === "true") this.setState({ empty: true })
    }
  }

  focusFile = (e: React.FocusEvent<HTMLDivElement>) => {
    const target = $(e.target).children().get(0) as HTMLElement
    if (target) {
      target.classList.toggle("opacity-60")
    }
    const fileName = $(e.target).children().get(1) as HTMLElement
    if (fileName) {
      fileName.classList.toggle("bg-ub-orange")
    }
  }

  emptyTrash = () => {
    this.setState({ empty: true })
    localStorage.setItem("trash-empty", "true")
  }

  emptyScreen = (): JSX.Element => {
    return (
      <div className="flex-grow flex flex-col justify-center items-center">
        <img
          className=" w-24"
          src="./icons/user-trash-symbolic.svg"
          alt="Trash"
        />
        <span className="font-bold mt-4 text-xl px-1 text-gray-400">
          Trash is Empty
        </span>
      </div>
    )
  }

  showTrashItems = (): JSX.Element => {
    return (
      <div className="flex-grow ml-4 flex flex-wrap items-start content-start justify-start overflow-y-auto windowMainScreen">
        {this.trashItems.map((item, index) => {
          return (
            <div
              key={index}
              tabIndex={1}
              onFocus={this.focusFile}
              onBlur={this.focusFile}
              className="flex flex-col items-center text-sm outline-none w-16 my-2 mx-4"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img src={item.icon} alt="File Icons" />
              </div>
              <span className="text-center rounded px-0.5">{item.name}</span>
            </div>
          )
        })}
      </div>
    )
  }

  render(): JSX.Element {
    return (
      <div className="w-full h-full flex flex-col bg-ub-cool-grey text-white select-none">
        <div className="flex items-center justify-between w-full bg-ub-warm-grey bg-opacity-40 text-sm">
          <span className="font-bold ml-2">Trash</span>
          <div className="flex">
            <div className="border border-black bg-black bg-opacity-50 px-3 py-1 my-1 mx-1 rounded text-gray-300">
              Restore
            </div>
            <div
              onClick={this.emptyTrash}
              className="border border-black bg-black bg-opacity-50 px-3 py-1 my-1 mx-1 rounded hover:bg-opacity-80"
            >
              Empty
            </div>
          </div>
        </div>
        {this.state.empty ? this.emptyScreen() : this.showTrashItems()}
      </div>
    )
  }
}

export default Trash

export const displayTrash = (): JSX.Element => {
  return <Trash />
}