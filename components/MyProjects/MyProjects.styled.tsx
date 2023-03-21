import {styled} from "@mui/system";
import theme from "@/styles/theme"

export const MyProjectsContainer = styled("div")({
    margin: "6rem 0 0 0",
    padding: "2rem 0",
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,

    ".container": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
    },

    ".bestProjectTxt": {
        margin: "-1rem 0 0 0",
        textAlign: "center",
        width: "100%",
    },

    ".arrowIcon": {
        transform: "rotate(-90deg)",
        fontSize: "1rem"
    }

})
