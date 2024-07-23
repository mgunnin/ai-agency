import $ from "jquery";
import React from "react";

interface SettingsProps {
  changeBackgroundImage: (imageName: string) => void;
  currBgImgName: string;
}

interface Wallpapers {
  [key: string]: string;
}

export function Settings({ changeBackgroundImage, currBgImgName }: SettingsProps): JSX.Element {
  const wallpapers: Wallpapers = {
    "wall-1": "./images/wallpapers/wall-1.webp",
    "wall-2": "./images/wallpapers/wall-2.webp",
    "wall-3": "./images/wallpapers/wall-3.webp",
    "wall-4": "./images/wallpapers/wall-4.webp",
    "wall-5": "./images/wallpapers/wall-5.webp",
    "wall-6": "./images/wallpapers/wall-6.webp",
    "wall-7": "./images/wallpapers/wall-7.webp",
    "wall-8": "./images/wallpapers/wall-8.webp",
  };

  const changeBackgroundImageHandler = (e: React.FocusEvent<HTMLDivElement>): void => {
    const target = e.target as HTMLDivElement;
    const bgImgName = $(target).data("path") as string;
    changeBackgroundImage(bgImgName);
  };

  return (
    <div className="w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey">
      <div
        className="md:w-2/5 w-2/3 h-1/3 m-auto my-4"
        style={{
          backgroundImage: `url(${wallpapers[currBgImgName]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="flex flex-wrap justify-center items-center border-t border-gray-900">
        {Object.keys(wallpapers).map((wallpaper, index) => (
          <div
            key={index}
            tabIndex={1}
            onFocus={changeBackgroundImageHandler}
            data-path={wallpaper}
            className={`${wallpaper === currBgImgName
              ? "border-yellow-700"
              : "border-transparent"
              } md:px-28 md:py-20 md:m-4 m-2 px-14 py-10 outline-none border-4 border-opacity-80`}
            style={{
              backgroundImage: `url(${wallpapers[wallpaper]})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Settings;

export const displaySettings = (): JSX.Element => {
  return <Settings changeBackgroundImage={() => { }} currBgImgName="wall-1" />;
};