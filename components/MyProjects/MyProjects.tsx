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

                <div className="containerCards">
                    <div className="containerCard">
                        <div className="cardContent">
                            <p className="shortDescription">
                                An online store that specializes in selling all local and Turkish products.
                            </p>
                            <button className="linkBtn">
                                Visit Website <AiOutlineArrowDown className="arrowIcon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MyProjectsContainer>
    );
}
