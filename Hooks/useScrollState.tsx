import { useState, useEffect } from "react";

export default function useScrollNavbar(): string[] {
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    let listener: any = null;
    listener = document.addEventListener("scroll", () => {
      var scrolled = document.scrollingElement?.scrollTop;
      if (scrolled) {
        if (scrolled >= 100) {
          if (scrollState !== "amir") {
            setScrollState("amir");
          }
        } else {
          if (scrollState !== "top") {
            setScrollState("top");
          }
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return [scrollState];
}
