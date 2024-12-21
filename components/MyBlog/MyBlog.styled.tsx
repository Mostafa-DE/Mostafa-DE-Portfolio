import {styled} from "@mui/system";
import theme from "@/styles/theme"

export const MyBlogContainer = styled("div")({
    margin: "6rem 0 0 0",
    padding: "2rem 0",
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,

    ".containerCards": {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        flexFlow: "wrap",
        padding: "2rem 0",

    },

    ".container": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
    },

    ".arrowIcon": {
        transform: "rotate(-90deg)",
        fontSize: "1rem"
    },
})
