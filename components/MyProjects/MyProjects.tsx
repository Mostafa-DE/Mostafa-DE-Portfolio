import React from "react";
import {MyProjectsContainer} from "./MyProjects.styled";
import {BsCodeSlash} from "react-icons/bs";
import ProjectCards from "components/ProjectCards";
import {Typography} from "@mui/material";
import theme from "@/styles/theme";


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
                    __ Check out some of my completed projects below __
                </Typography>
                <Typography margin="1rem 0 0 0">
                    Curious to see more experimental, fun, or in-progress projects? Check out my {" "}
                    <span style={{color: theme.palette.primary.main}}>
                        <a href="https://github.com/Mostafa-DE?tab=repositories" target="_blank">
                            GitHub Repositories!
                        </a>
                    </span>
                </Typography>
            </div>
            <div className="containerCards">
                <ProjectCards/>
            </div>
        </MyProjectsContainer>
    );
}
