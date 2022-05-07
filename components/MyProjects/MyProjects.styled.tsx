import {styled} from "@mui/system";
import theme from "@/styles/theme"

export const MyProjectsContainer = styled("div")({
    margin: "6rem 0 0 0",
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    height: "30rem",

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
    }
})