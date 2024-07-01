//import { displayTerminalCalc } from "./components/apps/calc"
import { displayChrome } from "./components/apps/chrome"
import { displayContactUs } from "./components/apps/gedit"
import { displayAboutVerticalLabs } from "./components/apps/main"
import { displaySettings } from "./components/apps/settings"
import { displayTerminal } from "./components/apps/terminal"
import { displayTrash } from "./components/apps/trash"
import displayVsCode from "./components/apps/vscode"

const apps = [
  {
    id: "about-vertical-labs",
    title: "About Vertical Labs",
    icon: "./images/logos/vertical_labs.png",
    disabled: false,
    favorite: true,
    desktop_shortcut: true,
    screen: displayAboutVerticalLabs,
  },
  {
    id: "chrome",
    title: "Web Browser",
    icon: "./themes/Yaru/apps/chrome.png",
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
    icon: "./themes/Yaru/system/folder.png",
    disabled: false,
    favorite: true,
    desktop_shortcut: true,
    screen: displayVsCode,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "./themes/Yaru/apps/bash.png",
    disabled: false,
    favorite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },
  {
    id: "settings",
    title: "Settings",
    icon: "./themes/Yaru/apps/gnome-control-center.png",
    disabled: false,
    favorite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: "contact-us",
    title: "Contact Us",
    icon: "./themes/Yaru/apps/gedit.png",
    disabled: false,
    favorite: false,
    desktop_shortcut: true,
    screen: displayContactUs,
  },
  {
    id: "trash",
    title: "Trash",
    icon: "./themes/Yaru/system/user-trash-full.png",
    disabled: false,
    favorite: false,
    desktop_shortcut: false,
    screen: displayTrash,
  },
]

export default apps
