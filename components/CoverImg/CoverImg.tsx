import { CoverImgContainer } from "./CoverImg.styled";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-scroll";
import { myCareerArr } from "./constants";
import useSequentialDisplay from "@/hooks/useSequentialDisplay";

export default function CoverImage(): JSX.Element {
  const career = useSequentialDisplay(myCareerArr, 100, 2000);
  return (
    <CoverImgContainer data-aos="fade-in" id="home">
      <div className="container">
        <div className="hiText">
          Hi There 👋, {"I'm"} <span className="myName">Mostafa-DE</span>
        </div>
        <div className="containerMyCareer">
          {"I'm"} a <span className="myCareer">{career}</span>
        </div>
        <Link to="aboutMe" spy={true} duration={1000} smooth={true}>
          <div className="containerBtn">
            <a className="aboutMeBtn">
              About Me <MdOutlineKeyboardArrowDown className="arrowIcon" />
            </a>
          </div>
        </Link>
      </div>
    </CoverImgContainer>
  );
}
