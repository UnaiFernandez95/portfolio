import { useEffect, useState} from "react";
import "./typingText.css";

interface TypingTextProps {
  lines: string[];
  onTypingFinished?: () => void;
  time?: number;
}

const TypingText = ({
  lines,
  onTypingFinished,
  time = 10,
}: TypingTextProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping || currentLine >= lines.length) return;

    const line = lines[currentLine];
    const interval = setInterval(() => {
      if (charIndex < line.length) {
        setTypedText((prev) => prev + line[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(() => {
          setDisplayedLines((prev) => [...prev, line]);
          setTypedText("");
          setCharIndex(0);
          setCurrentLine((prev) => prev + 1);
          setIsTyping(true);
        }, 100);
      }
    }, time);

    return () =>{ clearInterval(interval)}
  }, [charIndex, currentLine, isTyping, lines]);

  useEffect(() => {
    if (currentLine >= lines.length && onTypingFinished) {
      onTypingFinished();
    }
  }, [currentLine, lines.length, onTypingFinished]);

  return (
    <div className={"typing-text"}>
      {displayedLines.map((line, idx) => (
        <p key={idx} className="type-line">
          {line}
        </p>
      ))}
      {currentLine < lines.length && (
        <p className="type-line">
          {typedText}
          <span className="cursor">█</span>
        </p>
      )}
    </div>
  );
};

export default TypingText;
