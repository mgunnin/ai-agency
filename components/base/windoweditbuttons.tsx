import React from "react";

interface WindowEditButtonsProps {
  minimize: () => void;
  maximize: () => void;
  isMaximised: boolean;
  close: () => void;
  id: string;
}

const WindowEditButtons: React.FC<WindowEditButtonsProps> = ({
  minimize,
  maximize,
  isMaximised,
  close,
  id,
}) => {
  return (
    <div className="absolute select-none right-0 top-0 mt-1 mr-1 flex justify-center items-center">
      <span
        className="mx-1.5 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-full flex justify-center mt-1 h-5 w-5 items-center"
        onClick={minimize}
      >
        <img
          src="./icons/window/window-minimize-symbolic.svg"
          alt="ubuntu window minimize"
          className="h-5 w-5 inline"
        />
      </span>
      <span
        className="mx-2 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-full flex justify-center mt-1 h-5 w-5 items-center"
        onClick={maximize}
      >
        <img
          src={`./icons/window/window-${isMaximised ? "restore" : "maximize"
            }-symbolic.svg`}
          alt={`ubuntu window ${isMaximised ? "restore" : "maximize"}`}
          className="h-5 w-5 inline"
        />
      </span>
      <button
        tabIndex={-1}
        id={`close-${id}`}
        className="mx-1.5 focus:outline-none cursor-default bg-ub-orange bg-opacity-90 hover:bg-opacity-100 rounded-full flex justify-center mt-1 h-5 w-5 items-center"
        onClick={close}
      >
        <img
          src="./icons/window/window-close-symbolic.svg"
          alt="ubuntu window close"
          className="h-5 w-5 inline"
        />
      </button>
    </div>
  );
};

export default WindowEditButtons;