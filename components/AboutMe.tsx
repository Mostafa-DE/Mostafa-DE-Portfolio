import { AboutMeStyled } from "./styles/AboutMe.styled";
import { BsCodeSlash } from "react-icons/bs";

export default function AboutMe(props: any): JSX.Element {
  return (
    <AboutMeStyled id="aboutMe">
      <div className="container">
        <h1 className="title">
          <BsCodeSlash className="codeIcon" /> About Me{" "}
          <BsCodeSlash className="codeIcon" />
        </h1>
        <p className="whoIam">__ Who i am__</p>
        <div className="containerImgAndTxt">
          <img
            src="./mostafa1.png"
            className="personalImg"
            alt="mostafa fayyad"
          />
          <div className="containerTxt">
            <p>
              I'm Mostafa-DE Fayyad And I'm <span>Software Engineer</span>
            </p>

            <p className="titleParagraph">PERSONAL STATEMENT</p>
            <p className="txtParagraph">
              Creative things are challenging, and this applies to Software
              Engineering. So this is what made me change my major from
              Electrical Engineering to Computer Engineering. Knowing that I can
              take an idea and turn it into a product that people can use and
              enjoy, gives me a lot of joy.
            </p>

            <p className="titleParagraph">CAREER GOALS</p>
            <p className="txtParagraph">
              I am fascinated about building Web Applications. I like to see the
              application taking its shape gradually in the development process
              to the moment that it's ready for a good user experience and to
              also win the admiration of other Software Engineers.
            </p>

            <p className="titleParagraph">INTERESTS</p>

            <p className="txtParagraph">
              I love playing football, entering tournaments and winning them. I
              also like listening to Pop-Rock music while enjoying a novel.
            </p>
            <button className="cvBtn">Download My CV</button>
          </div>
        </div>
      </div>
    </AboutMeStyled>
  );
}
