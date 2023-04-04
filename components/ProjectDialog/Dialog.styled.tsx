import {styled} from "@mui/system";
import theme from "@/styles/theme";

export const DialogContainer = styled("div")({

    ".dialogBtn": {
        backgroundColor: "transparent",
        padding: "0.5rem 1.4rem",
        marginTop: "2rem",
        border: `1px solid ${theme.palette.primary.main}`,
        fontSize: "0.9rem",
        textTransform: "Capitalize",
        color: theme.palette.common.white,
        borderRadius: "20px",
        transition: "all 0.3s ease-in",
    },

    ".dialogBtn:hover": {
        backgroundColor: theme.palette.primary.main,
        transition: "all 0.3s ease-out",
    },
})

export const DialogContentStyled = styled("div")({
    ".btn": {
        padding: "0.4rem 1rem",
        margin: "1rem 1rem 0 0",
        cursor: "pointer",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        border: "1px solid #ff5757",
        fontSize: "0.8rem",
        transition: "all 0.3s ease-in"
    },

    ".btn:hover": {
        background: "none",
        color: theme.palette.primary.main,
        transition: "all 0.3s ease-out"
    },
})
