import {styled} from "@mui/system";
import theme from "@/styles/theme"

export const SkillsContainer = styled("div")({
    margin: "6rem 0 0 0",
    width: "100%",

    ".container": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.common.white,
        padding: "1rem 0 6rem 0"
    },

    ".skillsDescription h3": {
        color: theme.palette.primary.main
    },

    ".skillsText": {
        margin: "2rem 2rem 0 0",
        lineHeight: "1.8rem",
        color: theme.palette.common.black
    },

    ".containerTechIcons": {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        flexFlow: "wrap",
        margin: "2rem 0 0 0"
    },

    ".techIcon": {
        transition: "all 0.3s ease-in",
        margin: "1rem 1rem 0 0",
    },

    ".techIcon:hover": {
        transform: "scale(1.15)",
        transition: "all 0.3s ease-out"
    }
})
