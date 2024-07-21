import React from "react";

interface SpotifyProps {
  className?: string;
}

const Spotify: React.FC<SpotifyProps> = ({ className }) => {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/playlist/2EmphaIKNHH9wARNTGf7Ra"
      frameBorder="0"
      title="Spotify"
      className={className}
    ></iframe>
  )
}

export const displaySpotify = () => {
  return <Spotify className="h-full w-full bg-ub-cool-grey" />
}

export default Spotify
