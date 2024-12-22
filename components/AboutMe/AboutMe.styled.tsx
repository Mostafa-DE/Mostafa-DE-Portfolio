import {styled} from "@mui/system";
import theme from "@/styles/theme"

export const AboutMeContainer = styled("div")({
    margin: "5rem 0 0 0",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.dark,

    ".title": {
        color: theme.palette.common.white,
    },

    ".whoIam": {
        color: theme.palette.common.white,
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
        justifyContent: "space-between",
        alignItems: "center",
    },

    ".personalImg": {
        width: "350px",
        height: "300px",
    },

    ".container-Btn": {
        margin: "3rem 0",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0 0 0",
        }
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
        width: "90%",
        margin: "1rem 0",
        padding: "1.5rem 1rem",
        borderLeft: "3px solid",
        borderRight: "3px solid",
        borderRadius: "0.5rem",
        paddingLeft: "0.5rem",
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.common.white,
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        [theme.breakpoints.down("xs")]: {
            margin: "0.8rem 0.5rem",
        }
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
