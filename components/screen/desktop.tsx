import $ from "jquery";
import React, { Component } from "react";
import ReactGA from "react-ga4";
import apps from "../../apps.config";
import UbuntuApp from "../base/ubuntu";
import Window from "../base/window";
import DefaultMenu from "../context menus/default";
import DesktopMenu from "../context menus/desktop";
import BackgroundImage from "../util/background";
import AllApplications from "./applications";
import SideBar from "./sidebar";

interface DesktopProps {
  bg_image_name: string;
  changeBackgroundImage: (imageName: string) => void;
}

interface DesktopState {
  focused_windows: { [key: string]: boolean };
  closed_windows: { [key: string]: boolean };
  allAppsView: boolean;
  overlapped_windows: { [key: string]: boolean };
  disabled_apps: { [key: string]: boolean };
  favorite_apps: { [key: string]: boolean };
  hideSideBar: boolean;
  minimized_windows: { [key: string]: boolean };
  desktop_apps: string[];
  context_menus: {
    desktop: boolean;
    default: boolean;
  };
  showNameBar: boolean;
}

interface AppConfig {
  id: string;
  title: string;
  icon: string;
  disabled: boolean;
  favorite: boolean;
  desktop_shortcut: boolean;
  screen: React.FC | ((addFolder: (name: string) => void, openApp: (id: string) => void) => JSX.Element);
}

export class Desktop extends Component<DesktopProps, DesktopState> {
  private app_stack: string[];
  private initFavorite: { [key: string]: boolean };
  private allWindowClosed: boolean;

  constructor(props: DesktopProps) {
    super(props);
    this.app_stack = [];
    this.initFavorite = {};
    this.allWindowClosed = false;
    this.state = {
      focused_windows: {},
      closed_windows: {},
      allAppsView: false,
      overlapped_windows: {},
      disabled_apps: {},
      favorite_apps: {},
      hideSideBar: false,
      minimized_windows: {},
      desktop_apps: [],
      context_menus: {
        desktop: false,
        default: false,
      },
      showNameBar: false,
    };
  }

  componentDidMount(): void {
    ReactGA.send({ hitType: "pageview", page: "/desktop" });
    this.fetchAppsData();
    this.setContextListeners();
    this.setEventListeners();
    this.checkForNewFolders();
    this.openApp("about-aiden");
  }

  componentWillUnmount(): void {
    this.removeContextListeners();
  }

  checkForNewFolders = (): void => {
    const new_folders = localStorage.getItem("new_folders");
    if (new_folders === null) {
      localStorage.setItem("new_folders", JSON.stringify([]));
    } else {
      const parsedFolders = JSON.parse(new_folders);
      parsedFolders.forEach((folder: { id: string; name: string }) => {
        apps.push({
          id: `new-folder-${folder.id}`,
          title: folder.name,
          icon: "./icons/folder.svg",
          disabled: true,
          favorite: false,
          desktop_shortcut: true,
          screen: () => <></>,
        });
      });
      this.updateAppsData();
    }
  };

  setEventListeners = (): void => {
    document.getElementById("open-settings")?.addEventListener("click", () => {
      this.openApp("settings");
    });
  };

  setContextListeners = (): void => {
    document.addEventListener("contextmenu", this.checkContextMenu);
    document.addEventListener("click", this.hideAllContextMenu);
  };

  removeContextListeners = (): void => {
    document.removeEventListener("contextmenu", this.checkContextMenu);
    document.removeEventListener("click", this.hideAllContextMenu);
  };

  checkContextMenu = (e: MouseEvent): void => {
    e.preventDefault();
    this.hideAllContextMenu();
    const target = e.target as HTMLElement;
    switch (target.dataset.context) {
      case "desktop-area":
        ReactGA.event({
          category: `Context Menu`,
          action: `Opened Desktop Context Menu`,
        });
        this.showContextMenu(e, "desktop");
        break;
      default:
        ReactGA.event({
          category: `Context Menu`,
          action: `Opened Default Context Menu`,
        });
        this.showContextMenu(e, "default");
    }
  };

  showContextMenu = (e: MouseEvent, menuName: "desktop" | "default"): void => {
    const { clientX, clientY } = e;
    const contextMenu = document.getElementById(`${menuName}-menu`);

    if (contextMenu) {
      let posx = clientX;
      let posy = clientY;
      if (posx + $(contextMenu).width()! > window.innerWidth)
        posx -= $(contextMenu).width()!;
      if (posy + $(contextMenu).height()! > window.innerHeight)
        posy -= $(contextMenu).height()!;

      contextMenu.style.left = `${posx}px`;
      contextMenu.style.top = `${posy}px`;

      this.setState((prevState) => ({
        context_menus: { ...prevState.context_menus, [menuName]: true },
      }));
    }
  };
  hideAllContextMenu = (): void => {
    this.setState({
      context_menus: {
        desktop: false,
        default: false,
      },
    });
  };

  fetchAppsData = (): void => {
    let focused_windows: { [key: string]: boolean } = {};
    let closed_windows: { [key: string]: boolean } = {};
    let disabled_apps: { [key: string]: boolean } = {};
    let favorite_apps: { [key: string]: boolean } = {};
    let overlapped_windows: { [key: string]: boolean } = {};
    let minimized_windows: { [key: string]: boolean } = {};
    let desktop_apps: string[] = [];

    apps.forEach((app) => {
      focused_windows[app.id] = false;
      closed_windows[app.id] = true;
      disabled_apps[app.id] = app.disabled;
      favorite_apps[app.id] = app.favorite;
      overlapped_windows[app.id] = false;
      minimized_windows[app.id] = false;
      if (app.desktop_shortcut) desktop_apps.push(app.id);
    });

    this.setState({
      focused_windows,
      closed_windows,
      disabled_apps,
      favorite_apps,
      overlapped_windows,
      minimized_windows,
      desktop_apps,
    });
    this.initFavorite = { ...favorite_apps };
  };

  updateAppsData = (): void => {
    let focused_windows: { [key: string]: boolean } = {};
    let closed_windows: { [key: string]: boolean } = {};
    let favorite_apps: { [key: string]: boolean } = {};
    let minimized_windows: { [key: string]: boolean } = {};
    let disabled_apps: { [key: string]: boolean } = {};
    let desktop_apps: string[] = [];

    apps.forEach((app: AppConfig) => {
      focused_windows[app.id] = this.state.focused_windows[app.id] ?? false;
      minimized_windows[app.id] = this.state.minimized_windows[app.id] ?? false;
      disabled_apps[app.id] = app.disabled;
      closed_windows[app.id] = this.state.closed_windows[app.id] ?? true;
      favorite_apps[app.id] = app.favorite;
      if (app.desktop_shortcut) desktop_apps.push(app.id);
    });

    this.setState({
      focused_windows,
      closed_windows,
      disabled_apps,
      minimized_windows,
      favorite_apps,
      desktop_apps,
    });
    this.initFavorite = { ...favorite_apps };
  };

  renderDesktopApps = (): JSX.Element[] => {
    if (Object.keys(this.state.closed_windows).length === 0) return [];
    let appsJsx: JSX.Element[] = [];
    apps.forEach((app: { id: string; title: string; icon: string; disabled: boolean; favorite: boolean; desktop_shortcut: boolean; screen: React.FC | ((addFolder: (name: string) => void, openApp: (id: string) => void) => JSX.Element) }, index: number) => {
      if (this.state.desktop_apps.includes(app.id)) {
        const props = {
          key: index,
          id: app.id,
          title: app.title,
          icon: app.icon,
          name: app.title,
          openApp: this.openApp,
        };

        appsJsx.push(<UbuntuApp {...props} />);
      }
    });
    return appsJsx;
  };

  renderWindows = (): JSX.Element[] => {
    let windowsJsx: JSX.Element[] = [];
    apps.forEach((app: { id: string; title: string; icon: string; disabled: boolean; favorite: boolean; desktop_shortcut: boolean; screen: React.FC | ((addFolder: (name: string) => void, openApp: (id: string) => void) => JSX.Element) }, index: number) => {
      if (this.state.closed_windows[app.id] === false) {
        const props = {
          key: index,
          id: app.id,
          title: app.title,
          screen: typeof app.screen === 'function' ? () => app.screen(this.addToDesktop, this.openApp) : app.screen,
          addFolder: this.addToDesktop,
          closed: this.closeApp,
          openApp: this.openApp,
          focus: this.focus,
          isFocused: this.state.focused_windows[app.id],
          hideSideBar: (eventOrId: React.MouseEvent | null | string, hide: boolean) => {
            if (typeof eventOrId === 'string' || eventOrId === null) {
              this.hideSideBar(null, hide);
            } else {
              this.hideSideBar(eventOrId, hide);
            }
          },
          hasMinimised: this.hasMinimised,
          minimized: this.state.minimized_windows[app.id],
          changeBackgroundImage: this.props.changeBackgroundImage,
          bg_image_name: this.props.bg_image_name,
        };

        windowsJsx.push(<Window {...props} />);
      }
    });
    return windowsJsx;
  };

  hideSideBar = (event: React.MouseEvent | null, hide: boolean): void => {
    if (hide === this.state.hideSideBar) return;

    if (event === null) {
      if (hide === false) {
        this.setState({ hideSideBar: false });
      } else {
        for (const key in this.state.overlapped_windows) {
          if (this.state.overlapped_windows[key]) {
            this.setState({ hideSideBar: true });
            return;
          }
        }
      }
      return;
    }

    const objId = (event.target as HTMLElement).id;

    if (hide === false) {
      for (const key in this.state.overlapped_windows) {
        if (this.state.overlapped_windows[key] && key !== objId) return;
      }
    }

    let overlapped_windows = { ...this.state.overlapped_windows };
    overlapped_windows[objId] = hide;
    this.setState({ hideSideBar: hide, overlapped_windows });
  };

  hasMinimised = (objId: string): void => {
    let minimized_windows = { ...this.state.minimized_windows };
    let focused_windows = { ...this.state.focused_windows };

    minimized_windows[objId] = true;
    focused_windows[objId] = false;
    this.setState({ minimized_windows, focused_windows });

    this.hideSideBar(null, false);

    this.giveFocusToLastApp();
  };

  giveFocusToLastApp = (): void => {
    if (!this.checkAllMinimised()) {
      for (const index in this.app_stack) {
        if (!this.state.minimized_windows[this.app_stack[index]]) {
          this.focus(this.app_stack[index]);
          break;
        }
      }
    }
  };

  checkAllMinimised = (): boolean => {
    let result = true;
    for (const key in this.state.minimized_windows) {
      if (!this.state.closed_windows[key]) {
        result = result && this.state.minimized_windows[key];
      }
    }
    return result;
  };

  openApp = (objId: string): void => {
    // google analytics
    ReactGA.event({
      category: `Open App`,
      action: `Opened ${objId} window`,
    });

    if (this.state.disabled_apps[objId]) return;

    if (this.state.minimized_windows[objId]) {
      this.focus(objId);

      let r = document.querySelector(`#${objId}`) as HTMLElement;
      r.style.transform = `translate(${r.style.getPropertyValue(
        "--window-transform-x"
      )},${r.style.getPropertyValue("--window-transform-y")}) scale(1)`;

      this.setState((prevState) => ({
        minimized_windows: {
          ...prevState.minimized_windows,
          [objId]: false,
        },
      }));
      return;
    }

    //if app is already opened
    if (this.app_stack.includes(objId)) this.focus(objId);
    else {
      let closed_windows = { ...this.state.closed_windows };
      let favorite_apps = { ...this.state.favorite_apps };
      let frequentApps: { id: string; frequency: number }[] = localStorage.getItem("frequentApps")
        ? JSON.parse(localStorage.getItem("frequentApps")!)
        : [];
      let currentApp = frequentApps.find((app) => app.id === objId);
      if (currentApp) {
        frequentApps.forEach((app) => {
          if (app.id === currentApp!.id) {
            app.frequency += 1;
          }
        });
      } else {
        frequentApps.push({ id: objId, frequency: 1 });
      }

      frequentApps.sort((a, b) => b.frequency - a.frequency);

      localStorage.setItem("frequentApps", JSON.stringify(frequentApps));

      setTimeout(() => {
        favorite_apps[objId] = true;
        closed_windows[objId] = false;
        this.setState(
          { closed_windows, favorite_apps, allAppsView: false },
          () => this.focus(objId)
        );
        this.app_stack.push(objId);
      }, 200);
    }
  };

  closeApp = (objId: string): void => {
    this.app_stack.splice(this.app_stack.indexOf(objId), 1);

    this.giveFocusToLastApp();

    this.hideSideBar(null, false);

    this.setState((prevState) => ({
      closed_windows: { ...prevState.closed_windows, [objId]: true },
      favorite_apps: {
        ...prevState.favorite_apps,
        [objId]: this.initFavorite[objId] === true,
      },
    }));
  };

  focus = (objId: string): void => {
    const focused_windows = { ...this.state.focused_windows };
    for (let key in focused_windows) {
      focused_windows[key] = key === objId;
    }
    this.setState({ focused_windows });
  };

  addNewFolder = (): void => {
    this.setState({ showNameBar: true });
  };

  addToDesktop = (folder_name: string): void => {
    folder_name = folder_name.trim();
    let folder_id = folder_name.replace(/\s+/g, "-").toLowerCase();
    apps.push({
      id: `new-folder-${folder_id}`,
      title: folder_name,
      icon: "./icons/folder.svg",
      disabled: true,
      favorite: false,
      desktop_shortcut: true,
      screen: () => <></>,
    });
    // store in local storage
    let new_folders: { id: string; name: string }[] = JSON.parse(localStorage.getItem("new_folders") || "[]");
    new_folders.push({ id: `new-folder-${folder_id}`, name: folder_name });
    localStorage.setItem("new_folders", JSON.stringify(new_folders));

    this.setState({ showNameBar: false }, this.updateAppsData);
  };

  showAllApps = (): void => {
    this.setState((prevState) => ({ allAppsView: !prevState.allAppsView }));
  };

  openFromMinimised = (id: string): void => {
    const minimized_windows = { ...this.state.minimized_windows };
    minimized_windows[id] = false;
    this.setState({ minimized_windows }, () => {
      this.focus(id);
    });
  };

  renderNameBar = (): JSX.Element | null => {
    if (!this.state.showNameBar) return null;

    const addFolder = () => {
      const folder_name = (document.getElementById("folder-name-input") as HTMLInputElement).value;
      this.addToDesktop(folder_name);
    };

    const removeCard = () => {
      this.setState({ showNameBar: false });
    };

    return (
      <div className="absolute rounded-md top-1/2 left-1/2 text-center text-white font-light text-sm bg-ub-cool-grey transform -translate-y-1/2 -translate-x-1/2 sm:w-96 w-3/4 z-50">
        <div className="w-full flex flex-col justify-around items-start pl-6 pb-8 pt-6">
          <span>New folder name</span>
          <input
            className="outline-none mt-5 px-1 w-10/12 context-menu-bg border-2 border-yellow-700 rounded py-0.5"
            id="folder-name-input"
            type="text"
            autoComplete="off"
            spellCheck={false}
            autoFocus={true}
          />
        </div>
        <div className="flex">
          <div
            onClick={addFolder}
            className="w-1/2 px-4 py-2 border border-gray-900 border-opacity-50 border-r-0 hover:bg-ub-warm-grey hover:bg-opacity-10 hover:border-opacity-50"
          >
            Create
          </div>
          <div
            onClick={removeCard}
            className="w-1/2 px-4 py-2 border border-gray-900 border-opacity-50 hover:bg-ub-warm-grey hover:bg-opacity-10 hover:border-opacity-50"
          >
            Cancel
          </div>
        </div>
      </div>
    );
  };

  render(): JSX.Element {
    return (
      <div className="h-full w-full flex flex-col items-end justify-start content-end flex-wrap-reverse pt-8 bg-transparent relative overflow-hidden overscroll-none window-parent">
        <div
          className="absolute h-full w-full bg-transparent"
          data-context="desktop-area"
        >
          {this.renderWindows()}
        </div>

        <BackgroundImage img={this.props.bg_image_name} />

        <SideBar
          apps={apps}
          hide={this.state.hideSideBar}
          hideSideBar={this.hideSideBar}
          favorite_apps={this.state.favorite_apps}
          showAllApps={this.showAllApps}
          allAppsView={this.state.allAppsView}
          closed_windows={this.state.closed_windows}
          focused_windows={this.state.focused_windows}
          isMinimized={this.state.minimized_windows}
          openAppByAppId={this.openApp}
          openFromMinimised={this.openFromMinimised}
        />

        {this.renderDesktopApps()}

        <DesktopMenu
          active={this.state.context_menus.desktop}
          openApp={this.openApp}
          addNewFolder={this.addNewFolder}
        />
        <DefaultMenu active={this.state.context_menus.default} />

        {this.state.showNameBar ? this.renderNameBar() : null}

        {this.state.allAppsView ? (
          <AllApplications
            apps={apps}
            recentApps={this.app_stack}
            openApp={this.openApp}
          />
        ) : null}
      </div>
    );
  }
}

export default Desktop;