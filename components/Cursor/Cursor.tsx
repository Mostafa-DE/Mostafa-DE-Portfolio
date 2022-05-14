import {CursorContainer} from "./Cursor.styled"
import React, {useEffect, useState} from "react";
import useMousePosition from "@/hooks/useMousePosition";

export default function Header(): JSX.Element {
    const {clientX, clientY} = useMousePosition();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <CursorContainer>
            <svg
                width={35}
                height={35}
                viewBox="0 0 50 50"
                className="svg"
                style={{
                    opacity: isVisible && clientX > 1 ? 1 : 0,
                    left: clientX,
                    top: clientY,
                }}
            >
                <circle
                    cx="25"
                    cy="25"
                    r="12"
                    stroke="#ff5757"
                    opacity="0.6"
                    fill="#ff5757"
                />
            </svg>
        </CursorContainer>
    );
};