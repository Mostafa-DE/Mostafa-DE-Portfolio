import {display, styled} from "@mui/system";

export const CursorContainer = styled("div")({
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    pointerEvents: "none",

    ".svg": {
        position: "absolute",
        transform: "translate(-50%, -50%)",
    },

    "@media (max-width: 1188px)": {
        display: "none"
    }
})