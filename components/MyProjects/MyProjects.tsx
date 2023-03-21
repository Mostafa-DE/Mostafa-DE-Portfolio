import React from "react";
import {Link} from "react-scroll";
import {MyProjectsContainer} from "./MyProjects.styled";
import {BsCodeSlash} from "react-icons/bs";
import theme from "@/styles/theme";
import Card from "@/components/Card";
import {Typography} from "@mui/material";


export default function MyProjects(): JSX.Element {
    return (
        <MyProjectsContainer id="myProjects">
            <div className="container">
                <h1 className="title">
                    <BsCodeSlash className="codeIcon"/> My Projects{" "}
                    <BsCodeSlash className="codeIcon"/>
                </h1>
                <br/>
                <Typography className="bestProjectTxt">
                    __ Here are a few design projects {"I've"} worked on. Want to see more?{" "}
                    <span style={{color: theme.palette.primary.main}}>
                        <Link to="contact"
                              spy={true}
                              duration={2000}
                              smooth={true}
                        >
                            Contact me
                        </Link>
                    </span> __
                </Typography>
            </div>
            <div className="containerCards">
                <Card/>
            </div>
        </MyProjectsContainer>
    );
}
