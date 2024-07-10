import React from "react"

export default function Spotify() {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/playlist/2EmphaIKNHH9wARNTGf7Ra"
      frameBorder="0"
      title="Spotify"
      className="h-full w-full bg-ub-cool-grey"
    ></iframe>
  )
}

export const displaySpotify = () => {
  return <Spotify />
}
