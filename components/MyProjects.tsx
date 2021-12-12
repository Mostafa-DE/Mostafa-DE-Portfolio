import { MyProjectsStyled } from "../components/styles/MyProjects.styled";
import { BsCodeSlash } from "react-icons/bs";

export default function MyProjects() {
  return (
    <MyProjectsStyled id="myProjects">
      <div className="container">
        <h1 className="title">
          <BsCodeSlash className="codeIcon" /> My Projects{" "}
          <BsCodeSlash className="codeIcon" />
        </h1>
        <p className="bestProjectTxt">__ Some of my projects__</p>
      </div>
    </MyProjectsStyled>
  );
}
