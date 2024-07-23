import React from "react";

interface VSCodeProps {
  className?: string;
}

const VSCode: React.FC<VSCodeProps> = () => {
  return (
    <iframe
      src="https://github1s.com/mgunnin/ai-agency"
      frameBorder="0"
      title="Projects"
      className="h-full w-full bg-ub-cool-grey"
    ></iframe>
  );
};
// Here is the link to the original repo: https://github.com/conwnet/github1s

export default VSCode;

export const displayVsCode = (): JSX.Element => {
  return <VSCode />;
};
