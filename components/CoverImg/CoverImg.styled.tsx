import {color, display, styled} from "@mui/system";
import theme from "@/styles/theme"
import {main} from "@popperjs/core";

export const CoverImgContainer = styled("div")({
    backgroundImage: "url('./cover.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",

    ".container": {
        color: theme.palette.common.white,
        fontSize: "3.5rem"
    },

    ".myName:first-of-type": {
        color: theme.palette.primary.main,
        fontWeight: "600",
    },

    ".containerMyCareer": {
        margin: "1.5rem 0 0 0"
    },

    ".myCareer": {
        textTransform: "capitalize",
        color: theme.palette.primary.main,
        animation: " reveal 4s infinite",
    },

    ".containerBtn": {
        margin: "1rem 0 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    ".aboutMeBtn": {
        padding: "2rem 1rem",
        cursor: "pointer",
        background: "none",
        color: theme.palette.common.white,
        fontSize: "1.5rem",
        transition: "all 0.3s ease-in",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textTransform: "uppercase",
    },

    ".aboutMeBtn:hover": {
        transition: "all 0.3s ease-out",
    },

    ".arrowIcon": {
        fontSize: "1.5rem",
        transition: "all 0.3s ease-in",
        margin: "1rem 0 0 0",
        animation: " bounce 4s infinite",
    },

    "@keyframes reveal": {
        "0%": {
            opacity: 0,
            width: "0px"
        },
        "20%": {
            opacity: 1,
            width: "0px"
        },
        "30%": {
            width: "355px"
        },
        "80%": {
            opacity: 1
        },
        "100%": {
            opacity: 0,
            width: "355px"
        }
    },

    "@keyframes bounce": {
        "0%, 20%, 53%, 80%, 100%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
            transform: "translate3d(0,0,0)",
        },

        "40%, 43%": {
            transitionTimingFunction: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            transform: "translate3d(0, -20px, 0)"
        },

        "70%": {
            transitionTimingFunction: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            transform: "translate3d(0, -15px, 0)"
        },

        "90%": {
            transform: "translate3d(0,-4px,0)"
        }
    }
})