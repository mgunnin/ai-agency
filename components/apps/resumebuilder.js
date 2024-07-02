import React from "react"
import { CopilotProvider } from "@copilotkit/react-core"
import { CopilotSidebarUIProvider } from "@copilotkit/react-ui"
import "@copilotkit/react-textarea/styles.css"
import "@copilotkit/react-ui/styles.css"
import { CoverLetterAndResume } from "./resume"

export function ResumeBuilder() {
  return (
    <CopilotProvider chatApiEndpoint="/api/copilotkit/chat">
      <CopilotSidebarUIProvider>
        <CoverLetterAndResume />
      </CopilotSidebarUIProvider>
    </CopilotProvider>
  )
}

export const displayResumeBuilder = () => {
  return <ResumeBuilder />
}
