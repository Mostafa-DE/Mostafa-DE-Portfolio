import {styled} from "@mui/system";
import theme from "@/styles/theme"

export const SkillsContainer = styled("div")({
    margin: "6rem 0 0 0",
    width: "100%",

    ".container": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.common.white,
        padding: "6rem 0"
    },

    ".skillsDescription": {
        width: "35rem"
    },

    ".skillsDescription h3": {
        color: theme.palette.primary.main
    },

    ".skillsText": {
        margin: "2rem 2rem 0 0",
        lineHeight: "1.8rem",
        color: theme.palette.common.black
    },
})