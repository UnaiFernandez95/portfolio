import type { ReactNode } from "react";
import "./commandLine.css";

interface CommandLineProps {
  children?: ReactNode;
}

const CommandLine= ({ children }: CommandLineProps) => {
  return (
    <>
      <div className="command-line">
        <div className="color-buttons">
          {/* <!-- circle: Red--> */}
          <div className="red-ellipse" />
          {/* <!-- circle: Yellow --> */}
          <div className="yellow-ellipse" />
          {/* <!-- circle: Green --> */}
          <div className="green-ellipse" />
        </div>
        <div
          className="text-area"
        >
          {children ? children : <h2>Sorry, something is wrong.</h2>}
        </div>
      </div>
    </>
  );
};

export default CommandLine;
