import React, {useState} from "react";
import {MyProjectsContainer} from "./MyProjects.styled";
import {BsCodeSlash} from "react-icons/bs";
import theme from "@/styles/theme";
import Card from "@/components/Card";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function MyProjects(): JSX.Element {
    const [value, setValue] = useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <MyProjectsContainer id="myProjects">
            <div className="container">
                <h1 className="title">
                    <BsCodeSlash className="codeIcon"/> My Projects{" "}
                    <BsCodeSlash className="codeIcon"/>
                </h1>
                <br/>
                <p className="bestProjectTxt">
                    __ Here are a few design projects {"I've"} worked on. Want to see more?{" "}
                    {/* @TODO make (Contact me) text scroll to contact form */}
                    <span style={{color: theme.palette.primary.main}}>Contact me.</span> __
                </p>
            </div>
            <div className="containerCards">
                <Card />
            </div>


        </MyProjectsContainer>
    );
}
