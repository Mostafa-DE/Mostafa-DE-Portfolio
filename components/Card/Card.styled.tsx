import {styled} from "@mui/system";
import theme from "@/styles/theme";

export const CursorContainer = styled("div")({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexFlow: "wrap",

    ".cardBody": {
        width: "18rem",
        height: "16rem",
        background: "url('/sons.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        margin: "2rem 0 0 0",
    },

    ".card__overlay": {
        height: "100%",
        width: "100%",
        opacity: 0,
        position: "relative",
        top: "-9%",
        left: 0,
        borderRadius: "5px",
        visibility: "none",
        transition: "0.5s ease",
        backgroundColor: "rgba(51,51,51,0.78)",
    },

    ".cardBody:hover .card__overlay": {
        opacity: 1,
    },

    ".overlay__text": {
        color: "white",
        fontSize: "20px",
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
    },

    ".description": {
      fontSize: "14px",
    },

    ".btn": {
        backgroundColor: "transparent",
        padding: "0.8rem 2rem",
        marginTop: "2rem",
        border: `1px solid ${theme.palette.primary.main}`,
        fontSize: "1rem",
        color: theme.palette.common.white,
        borderRadius: "20px",
        transition: "all 0.3s ease-in",
    },

    ".btn:hover": {
        backgroundColor: theme.palette.primary.main,
        transition: "all 0.3s ease-out",
    }

})
