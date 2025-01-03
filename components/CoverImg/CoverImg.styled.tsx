import { styled } from "@mui/system";
import theme from "@/styles/theme";

export const CoverImgContainer = styled("div")({
  backgroundImage: "url('./cover-2.jpg')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",

  ".container": {
    color: theme.palette.common.white,
  },

  ".hiText": {
    fontSize: "3.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },

  ".myName:first-of-type": {
    color: theme.palette.primary.main,
    fontWeight: "600",
  },

  ".containerMyCareer": {
    fontSize: "3rem",
    margin: "1.5rem 0 0 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },

  ".myCareer": {
    textTransform: "capitalize",
    color: theme.palette.primary.main,
  },

  ".containerBtn": {
    margin: "1rem 0 0 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  ".aboutMeBtn": {
    padding: "2rem 1rem",
    cursor: "pointer",
    background: "none",
    color: theme.palette.common.white,
    fontSize: "1.5rem",
    transition: "all 0.3s ease-in",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textTransform: "uppercase",
  },

  ".aboutMeBtn:hover": {
    transition: "all 0.3s ease-out",
  },

  ".arrowIcon": {
    fontSize: "1.5rem",
    transition: "all 0.3s ease-in",
    margin: "1rem 0 0 0",
    animation: " bounce 4s infinite",
  },


  ".container-Btn": {
    margin: "4rem 0",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      margin: "1rem 0 0 0",
    }
  },


  ".btn": {
    padding: "1rem 2rem",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    border: "1px solid #ff5757",
    borderRadius: "1.2rem",
    fontSize: "0.9rem",
    transition: "all 0.3s ease-in",
  },

  ".btn:hover": {
    background: "none",
    borderRadius: "0",
    color: theme.palette.primary.main,
    transition: "all 0.3s ease-out"
  },

  "@keyframes bounce": {
    "0%, 20%, 53%, 80%, 100%": {
      transitionTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
      transform: "translate3d(0,0,0)",
    },

    "40%, 43%": {
      transitionTimingFunction: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
      transform: "translate3d(0, -20px, 0)",
    },

    "70%": {
      transitionTimingFunction: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
      transform: "translate3d(0, -15px, 0)",
    },

    "90%": {
      transform: "translate3d(0,-4px,0)",
    },
  },
});
