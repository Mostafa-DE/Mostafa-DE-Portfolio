import { styled } from "@mui/system";
import theme from "@/styles/theme";
import { text } from "stream/consumers";

export const CardContainer = styled("div")(
  ({ imgSrc }: { imgSrc: string }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexFlow: "wrap",

    ".cardBody": {
      width: "28rem",
      height: "16rem",
      background: `url('${imgSrc}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius: "5px",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      margin: "2rem 0 0 0",
      [theme.breakpoints.down("sm")]: {
        width: "95%",
      },
    },

    ".cardOverlay": {
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

    ".cardBody:hover .cardOverlay": {
      opacity: 1,
    },

    ".overlayText": {
      color: "white",
      fontSize: "20px",
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },

    ".description": {
      fontSize: "16px",
      width: "99%",
    },
  })
);
