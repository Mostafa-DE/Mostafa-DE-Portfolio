import {styled} from "@mui/system";
import theme from "@/styles/theme"

export const CoverImgContainer = styled("div")({
    backgroundImage: "url('./cover.png')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "60rem",
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

    ".myName": {

    },

    ".myCareer": {
        textTransform: "capitalize"
    },

    ".containerBtn": {
        margin: "1rem 0 0 0"
    },

    ".aboutMeBtn": {
        padding: "0.8rem 2.5rem",
        cursor: "pointer",
        background: "none",
        color: theme.palette.common.white,
        fontSize: "1.1rem",
        border: "1px solid #fafafa",
        transition: "all 0.3s ease-in",
    },

    ".aboutMeBtn:hover": {
        backgroundColor: theme.palette.primary.main,
        transition: "all 0.3s ease-out",
        border: "1px solid #ff5757",
    },

    ".arrowIcon": {
        transform: "rotate(-90deg)",
        fontSize: "1.2rem",
        transition: "all 0.3s ease-in",
        margin: "0 -1.5rem -0.2rem 0.5rem",
    },

    ".aboutMeBtn:hover .arrowIcon": {
        transform: "rotate(0deg)"
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

    "@keyframes fadeIn": {
        "0%": {opacity: 0},
        "100%": {opacity: 1}
    }
})