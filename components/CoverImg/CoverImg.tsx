import { CoverImgContainer } from "./CoverImg.styled";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function CoverImage(): JSX.Element {
  const myCareerArr = [
    "Software Engineer",
    "Web Developer",
    "Rock & Metal enthusiast",
  ];
  const [myCareer, setMyCareer] = useState<string>(myCareerArr[0]);

  const toggleMyCareer = () => {
    let i = 1;
    setInterval(() => {
      if (i === myCareerArr.length) i = 0;
      setMyCareer(myCareerArr[i]);
      i++;
    }, 3000);
  };

  useEffect(() => {
    toggleMyCareer();
  }, []);

  return (
    <CoverImgContainer data-aos="fade-in" id="home">
      <div className="container">
        <div className="hiText">
          Hi There 👋, {"I'm"} <span className="myName">Mostafa-DE</span>
        </div>
        <div className="containerMyCareer">
          {"I'm"} a <span className="myCareer">{myCareer}</span>
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
