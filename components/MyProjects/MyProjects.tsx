import {MyProjectsContainer} from "./MyProjects.styled";
import {BsCodeSlash} from "react-icons/bs";
import {AiOutlineArrowDown} from "react-icons/ai";
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
                <p className="bestProjectTxt">
                    __ Here are a few design projects {"I've"} worked on recently. Want to see more?{" "}
                    {/*
                     @TODO
                     make (Contact me) text scroll to contact form
                     */}
                    <span style={{color: theme.palette.primary.main}}>Contact me.</span> __
                </p>
            </div>
        </MyProjectsContainer>
    );
}
