import { JQuery } from "jquery"

declare global {
  interface Window {
    $: JQuery
  }
}
