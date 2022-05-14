import {CoverImgContainer} from "./CoverImg.styled";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

import {Link} from "react-scroll";

export default function CoverImage(): JSX.Element {
    return (
        <CoverImgContainer
            data-aos="fade-in"
            id="home"
        >
            <div className="container">
                <div>
                    Hi There 👋, {"I'm"} <span className="myName">Mostafa-de Fayyad</span>
                </div>
                <div className="containerMyCareer">
                    {"I'm"} a <span className="myCareer">Software Engineer</span>
                </div>
                <Link to="aboutMe"
                      spy={true}
                      duration={1000}
                      smooth={true}
                >
                    <div className="containerBtn">
                        <a className="aboutMeBtn">About Me <MdOutlineKeyboardArrowDown className="arrowIcon"/></a>
                    </div>
                </Link>
            </div>
        </CoverImgContainer>
    );
}
