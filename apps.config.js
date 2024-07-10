//import { displayTerminalCalc } from "./components/apps/calc"
import { displayChrome } from "./components/apps/chrome"
import { displayContactUs } from "./components/apps/gedit"
import { displayAbout } from "./components/apps/main"
import { displaySettings } from "./components/apps/settings"
import displaySpotify from "./components/apps/spotify"
import { displayTerminal } from "./components/apps/terminal"
import { displayTrash } from "./components/apps/trash"
import displayVsCode from "./components/apps/vscode"

const apps = [
  {
    id: "about",
    title: "About",
    icon: "./images/logos/vertical_labs.png",
    disabled: false,
    favorite: true,
    desktop_shortcut: true,
    screen: displayAbout,
  },
  {
    id: "chrome",
    title: "Browser",
    icon: "./icons/browser.svg",
    disabled: false,
    favorite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  /*   {
    id: "calc",
    title: "Calc",
    icon: "./themes/Yaru/apps/calc.png",
    disabled: false,
    favorite: true,
    desktop_shortcut: false,
    screen: displayTerminalCalc,
  }, */
  {
    id: "vscode",
    title: "Projects",
    icon: "./icons/folder.svg",
    disabled: false,
    favorite: true,
    desktop_shortcut: true,
    screen: displayVsCode,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "./icons/terminal.svg",
    disabled: false,
    favorite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },
  {
    id: "spotify",
    title: "Spotify",
    icon: "./images/logos/spotify.png",
    disabled: false,
    favorite: true,
    desktop_shortcut: false,
    screen: displaySpotify,
  },
  {
    id: "settings",
    title: "Settings",
    icon: "./icons/settings.svg",
    disabled: false,
    favorite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: "contact-us",
    title: "Contact Us",
    icon: "./icons/edit-05.svg",
    disabled: false,
    favorite: false,
    desktop_shortcut: true,
    screen: displayContactUs,
  },
  {
    id: "trash",
    title: "Trash",
    icon: "./icons/recycle.svg",
    disabled: false,
    favorite: false,
    desktop_shortcut: false,
    screen: displayTrash,
  },
]

export default apps
