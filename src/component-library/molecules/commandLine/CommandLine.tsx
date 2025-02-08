"use client";
import { FC, useEffect, useState } from "react";
import "./command-line.css";

interface CommandLineProps {
  readonly text: string;
}

const CommandLine: FC<CommandLineProps> = ({ text }: CommandLineProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const speed = 10;

  useEffect(() => {
    let index = 0;

    const typeWriter = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter();
  }, [text]);

  return (
    <div className="command-line">
      <div className="color-buttons">
        <div className="red-ellipse"></div>
        <div className="yellow-ellipse"></div>
        <div className="green-ellipse"></div>
      </div>

      <div className="text-area">
        <p>Unai</p>
        <p> ==&gt; </p>
        <p>.../portafolio/home</p>
        <p className="paragraph">{displayedText}</p>
      </div>
    </div>
  );
};

export default CommandLine;
