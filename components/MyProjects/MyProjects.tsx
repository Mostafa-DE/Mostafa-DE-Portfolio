import {MyProjectsContainer} from "./MyProjects.styled";
import {BsCodeSlash} from "react-icons/bs";

export default function MyProjects(): JSX.Element {
    return (
        <MyProjectsContainer>
            <div className="container">
                <h1 className="title">
                    <BsCodeSlash className="codeIcon"/> My Projects{" "}
                    <BsCodeSlash className="codeIcon"/>
                </h1>
                <p className="bestProjectTxt">__ Some of my projects__</p>
            </div>
        </MyProjectsContainer>
    );
}
