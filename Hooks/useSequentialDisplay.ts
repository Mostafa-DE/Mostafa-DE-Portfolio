import { useState, useEffect } from "react";

function useSequentialDisplay(
  textArray: string[],
  displayInterval = 100,
  pauseInterval = 3000
) {
  const [currentDisplay, setCurrentDisplay] = useState("");

  useEffect(() => {
    let currentTextIndex = 0;
    let charIndex = 0;
    let displayText = "";

    const displayNextChar = () => {
      if (currentTextIndex < textArray.length) {
        const currentText = textArray[currentTextIndex];

        if (charIndex < currentText.length) {
          displayText += currentText[charIndex];
          setCurrentDisplay(displayText);
          charIndex++;
          setTimeout(displayNextChar, displayInterval);
        } else {
          setTimeout(() => {
            displayText = "";
            charIndex = 0;
            currentTextIndex++;
            setCurrentDisplay("");
            displayNextChar();
          }, pauseInterval);
        }
      }
    };

    displayNextChar();

    return () => {
      setCurrentDisplay("");
    };
  }, [textArray, displayInterval, pauseInterval]);

  return currentDisplay;
}

export default useSequentialDisplay;
