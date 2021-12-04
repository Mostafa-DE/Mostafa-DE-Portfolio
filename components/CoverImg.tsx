import { CoverImgStyled } from "../components/styles/CoverImg.styled";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-scroll";

export default function CoverImage(props: any): JSX.Element {
  return (
    <CoverImgStyled id="home">
      <div className="container">
        <div className="containerWelcomeTxt">
          Hi There, I'm <span className="myName">Mostafa-DE Fayyad</span>
          <br />
          I'm A <span className="myCareer">software engineer</span>
        </div>
        <Link to="aboutMe" spy={true} duration={1000} smooth={true}>
          <div className="containerBtn">
            <a className="aboutMeBtn">
              About Me <AiOutlineArrowDown className="arrowIcon" />
            </a>
          </div>
        </Link>
      </div>
    </CoverImgStyled>
  );
}
