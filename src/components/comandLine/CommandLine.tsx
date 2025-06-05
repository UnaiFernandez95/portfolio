import type { ReactNode } from "react";
import "./commandLine.css";

interface CommandLineProps {
  children?: ReactNode;
  className?: string;
}

const CommandLine= ({ children, className }: CommandLineProps) => {
  return (
    <>
      <div className="command-line">
        <div className="color-buttons">
          {/* <!-- circle: Ellipse rojo --> */}
          <div className="red-ellipse" />
          {/* <!-- circle: Ellipse Amarillo --> */}
          <div className="yellow-ellipse" />
          {/* <!-- circle: Ellipse Verde --> */}
          <div className="green-ellipse" />
        </div>
        <div
          className={`${className} text-area`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default CommandLine;
