import {styled} from "@mui/system";
import theme from "@/styles/theme"

export const AboutMeContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5rem 0 0 0",

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
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    ".personalImg": {
        width: "350px",
        height: "300px",
    },

    ".containerTxt": {
        fontSize: "1.2rem",
        margin: "0 0 0 7rem",
        width: "35%",
    },

    ".txtParagraph": {
        fontSize: "1rem",
        color: "#333",
        lineHeight: "1.4rem",
    },

    ".titleParagraph": {
        margin: "2rem 0 0 0",
        color: theme.palette.primary.main,
    },

    ".container-Btn": {
        margin: "3rem 0 0 0",
    },

    ".cvBtn": {
        padding: "1rem 2rem",
        cursor: "pointer",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        border: "1px solid #ff5757",
        borderRadius: "1.2rem",
        fontSize: "0.9rem",
        transition: "all 0.3s ease-in",
    },

    ".cvBtn:hover": {
        background: "none",
        borderRadius: "0",
        color: theme.palette.primary.main,
        transition: "all 0.3s ease-out"
    },

    ".descriptionAboutMe": {
        margin: "0.2rem 0",
        padding: "0.5rem",
        borderLeft: "3px solid",
        borderRight: "3px solid",
        borderRadius: "0.5rem",
        paddingLeft: "0.5rem",
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.common.white,
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
            width: "100%",
        }
    }
})
