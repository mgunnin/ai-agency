import React from "react";

interface SpotifyProps {
  className?: string;
}

const Spotify: React.FC<SpotifyProps> = ({ className }) => {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/playlist/2EmphaIKNHH9wARNTGf7Ra?utm_source=generator&theme=0"
      width="100%"
      height="100%"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify"
      className={className}
    ></iframe>
  )
}

export const displaySpotify = () => {
  return <Spotify className="h-full w-full bg-ub-cool-grey" />
}

export default Spotify
