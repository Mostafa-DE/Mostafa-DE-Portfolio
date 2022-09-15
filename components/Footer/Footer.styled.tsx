import {styled} from "@mui/system";
import theme from "@/styles/theme"

export const FooterContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 0 1rem 0",
    backgroundColor: "rgba(51,51,51,0.06)",

    ".copyRight": {
        margin: "1rem 0 0 0",
        padding: "0 0 1rem 0",
        textAlign: "center"
    },
    ".copyRight p": {
        transition: "1s",
        color: theme.palette.common.black,
    },

    ".copyRight p a": {
        color: theme.palette.primary.main,
        fontWeight: 600,
        cursor: "pointer",
        fontSize: "1rem",
        textDecoration: "none",
        display: "inline-block",
        position: "relative",
        margin: "0 0 0 0.4rem"
    },

    ".copyRight p a::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "2.5px",
        bottom: 0,
        left: 0,
        backgroundColor: theme.palette.primary.main,
        transformOrigin: "bottom right",
        transition: "transform 0.25s ease-out",
    },

    ".copyRight p a:hover::after": {
        transform: "scaleX(1)",
        transformOrigin: "bottom left"
    },

    ".contactIcon": {
        fontSize: "2rem",
        color: theme.palette.common.black,
        margin: "0 0 0 1rem",
        transition: "all 0.3s ease-in",
    },

    ".contactIcon:hover": {
        color: theme.palette.primary.main,
        transition: "all 0.3s ease-out",
    }

})
