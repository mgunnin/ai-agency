import React from "react"

export default function Spotify() {
  return (
    <iframe
      style="border-radius:12px"
      src="https://open.spotify.com/playlist/37i9dQZEVXcR1BCjjHfQLf?si=dc476175d8ba4fb4"
      frameBorder="0"
      title="Spotify"
      className="h-full w-full bg-ub-cool-grey"
    ></iframe>
  )
}

export const displaySpotify = () => {
  ;<Spotify> </Spotify>
}
