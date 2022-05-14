import {color, display, fontSize, padding, styled} from "@mui/system";
import theme from "@/styles/theme"

export const MyProjectsContainer = styled("div")({
    margin: "6rem 0 0 0",
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    height: "40rem",

    ".container": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
    },

    ".title": {
        textTransform: "uppercase"
    },

    ".bestProjectTxt": {
        margin: "-1rem 0 0 0"
    },

    ".containerCards": {
        margin: "4rem 0 0 0"
    },

    ".containerCard": {
        background: "url('./test.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        border: "1px solid rgba(51,51,51,0.74)",
        borderRadius: "20px",
        width: "22rem",
        height: "15rem",
        transition: "all 0.5s ease-in"
    },

    ".containerCard:hover": {
        background: "rgba(0,0,0,0.72)",
        transition: "all 0.5s ease-out"
    },

    ".cardContent": {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: theme.palette.common.white,
        display: "none"
    },

    ".containerCard:hover .cardContent": {
        display: "flex",
    },

    ".shortDescription": {
        width: "90%",
        fontSize: "1.5rem",
        fontWeight: 600,
    },

    ".linkBtn": {
        padding: "0.5rem 2rem",
        background: "transparent",
        border: "2px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: "20px",
        fontSize: "1.4rem",
        color: theme.palette.common.white,
        transition: "all 0.3s ease-in"
    },

    ".linkBtn:hover": {
        background: theme.palette.primary.main,
        transition: "all 0.3s ease-out"
    },

    ".arrowIcon": {
        transform: "rotate(-90deg)",
        fontSize: "1rem"
    }

})
