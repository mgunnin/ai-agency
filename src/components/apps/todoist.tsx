import React from "react"

const Todoist: React.FC = () => {
  return (
    <iframe
      src="https://todoist.com/showProject?id=220474322"
      frameBorder="0"
      title="Todoist"
      className="h-full w-full"
    ></iframe>
  )
}

export default Todoist

export const displayTodoist = (): JSX.Element => {
  return <Todoist />
}