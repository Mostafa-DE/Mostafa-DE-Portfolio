import {styled} from "@mui/system";
import theme from "@/styles/theme"

export const HeaderContainer = styled("div")({
    ".mainHeader, .mainHeaderScroll": {
        position: "fixed",
        padding: "0.5rem 0",
        zIndex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        transition: "all 0.3s ease-in-out",
        backgroundColor: "transparent",
    },

    ".mainHeaderScroll": {
        backgroundColor: "rgba(51,51,51,0.58)",
    },

    ".headerScrollDown": {
        backgroundColor: theme.palette.primary.main,
    },

    ".containerLogo": {
        fontSize: "1.8rem",
        fontWeight: 600,
        margin: 0,
        color: theme.palette.common.white,
        cursor: "pointer"
    },

    ".textLogo": {
        color: theme.palette.primary.main,
    },

    ".textLogoScroll": {
        color: theme.palette.primary.main,
    },

    ".containerLink": {
        display: "flex",
        listStyle: "none"
    },

    ".containerLink li": {
        cursor: "pointer",
        margin: "0 0 0 2.8rem",
        fontWeight: 600,
        color: theme.palette.common.white,
        transition: "all 0.3s ease-in"
    },

    ".containerLink li:hover": {
        color: theme.palette.primary.main,
        transition: "all 0.3s ease-out"
    },

    ".containerLink li::after": {
        content: "''",
        display: "block",
        width: 0,
        height: "2px",
        background: theme.palette.primary.main,
        transition: "width 0.3s"
    },

    ".containerLink li:hover::after": {
        width: "100%",
    },

    ".menuIcon": {
        color: theme.palette.common.white,
        fontSize: "1.8rem",
        display: "none",
        margin: 0,
    },

    "@media (max-width: 748px)": {
        ".containerLink li": {
            display: "none"
        },

        ".containerLogo": {
            margin: "0 0 0 -1rem"
        },

        ".menuIcon": {
            display: "block",
            margin: "0 0 0 -1rem"
        }
    }

})
