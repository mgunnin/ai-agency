declare module "react-ga4" {
  export function initialize(
    measurementId: string,
    options?: {
      gaOptions?: any
      gtagOptions?: any
      testMode?: boolean
    }
  ): void

  export function send(params: { hitType: string; page: string }): void

  export function event(params: {
    category: string
    action: string
    label?: string
    value?: number
    nonInteraction?: boolean
    transport?: "beacon" | "xhr" | "image"
  }): void
}
