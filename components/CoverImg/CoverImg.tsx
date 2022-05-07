import {CoverImgContainer} from "./CoverImg.styled";
import {AiOutlineArrowDown} from "react-icons/ai";
import {Link} from "react-scroll";
import {useState} from "react";

export default function CoverImage(): JSX.Element {
    const [idx, setIdx] = useState<number>(1)
    const [text, setText] = useState<string>("Mostafa-DE Fayyad")

    const handleChange = (): void => {
        idx % 2 === 0 ? setText("Mostafa-DE Fayyad") : setText("A Software Engineer")
        setIdx(idx + 1)
    }

    const callFunction = () => {
        setTimeout(handleChange, 4000)
    }
    callFunction()


    return (
        <CoverImgContainer
            data-aos="fade-in"
            id="home"
        >
            <div className="container">
                <div className="containerWelcomeTxt">
                    Hi There 👋, {"I'm"} <span className="myName">{text}</span>
                </div>
                <Link to="aboutMe"
                      spy={true}
                      duration={1000}
                      smooth={true}
                >
                    <div className="containerBtn">
                        <a className="aboutMeBtn">
                            About Me <AiOutlineArrowDown className="arrowIcon"/>
                        </a>
                    </div>
                </Link>
            </div>
        </CoverImgContainer>
    );
}
