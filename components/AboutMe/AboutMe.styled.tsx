import {styled} from "@mui/system";
import theme from "@/styles/theme"

export const AboutMeContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5rem 0 0 0",

    ".title": {
        textTransform: "uppercase"
    },

    ".whoIam": {
        color: theme.palette.primary.main,
        margin: "-1rem 0 2rem 0"
    },

    ".container": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    ".containerImgAndTxt": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    ".personalImg": {
        width: "600px",
        height: "480px",
        clipPath: "polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%)",
    },

    ".containerTxt": {
        fontSize: "1.2rem",
        margin: "0 0 0 7rem",
        width: "35%",
    },

    ".txtParagraph": {
        fontSize: "1rem",
        color: "#333",
        lineHeight: "1.4rem"
    },

    ".titleParagraph": {
        margin: "2rem 0 -0.5rem 0",
        color: theme.palette.primary.main
    },

    ".cvBtn": {
        padding: "1rem 2rem",
        cursor: "pointer",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        border: "1px solid #ff5757",
        fontSize: "0.9rem",
        transition: "all 0.3s ease-in"
    },

    ".cvBtn:hover": {
        background: "none",
        color: theme.palette.primary.main,
        transition: "all 0.3s ease-out"
    },

    "@media (max-width: 1188px)": {
        ".containerImgAndTxt": {
            flexDirection: "column"
        },

        ".containerTxt": {
            width: "60%",
            margin: 0
        }
    },

    "@media (max-width: 670px)": {
        ".containerTxt": {
            width: "95%"
        }
    },

    "@media (max-width: 500px)": {
        ".personalImg": {
            width: "320px",
            height: "320px",
        }
    }
})
