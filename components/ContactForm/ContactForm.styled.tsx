import {styled} from "@mui/system";
import theme from "@/styles/theme"

export const ContactFormContainer = styled("div")({
    margin: "4rem 0 0 0",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    boxShadow: "2px 2px 10px 1px rgba(0, 0, 0, 0.2)",
    padding: "6rem 0",

    ".container": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    ".whoIam": {
        color: theme.palette.common.white,
        margin: "0 0 2rem 0"
    },

    ".icon": {
        fontSize: "1.5rem",
        margin: "1.5rem 0.5rem 0 0",
    },

    ".SubmitBtn": {
        margin: "1rem 0 0 0",
        padding: "0.8rem 2.5rem",
        cursor: "pointer",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        border: "1px solid #ff5757",
        fontSize: "0.9rem",
        transition: "all 0.3s ease-in"
    },

    ".SubmitBtn:hover": {
        background: "none",
        color: theme.palette.primary.main,
        transition: "all 0.3s ease-out"
    },

    ".textArea": {
        width: "100%",
        margin: "2rem 0 0 0",
        backgroundColor: "#fafafa",
        resize: "none",
        padding: "1rem 0 0 1rem",
        fontFamily: "'Tajawal', sans-serif",
        border: "1px solid #b8b8b8",
        fontSize: "1rem",
        letterSpacing: "0.5px",
        borderRadius: "5px",
    },

    ".textArea:focus": {
        outline: "1px solid #333",
    },

    ".textArea:hover": {
        border: "1px solid #333",
    },

    "@keyframes rotating": {
        "from": {
            transform: "rotate(0deg)",
        },
        "to": {
            transform: "rotate(360deg)",
        }
    },

    ".spinner": {
        fontSize: "1.5rem",
        animation: "rotating 2s linear infinite"
    }
})
