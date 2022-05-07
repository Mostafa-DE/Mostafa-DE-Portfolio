import {AboutMeContainer} from "./AboutMe.styled";
import {BsCodeSlash} from "react-icons/bs";
import {data} from "./data"

export default function AboutMe(): JSX.Element {
    return (
        <AboutMeContainer id="aboutMe">
            <div className="container">
                <h1 className="title">
                    <BsCodeSlash className="codeIcon"/> About Me
                    <BsCodeSlash className="codeIcon"/>
                </h1>
                <p className="whoIam">__ Who i am__</p>
                <div className="containerImgAndTxt">
                    <img
                        src="./mostafa1.png"
                        className="personalImg"
                        alt="mostafa-img"
                    />
                    <div className="containerTxt">
                        {data.map((text: { title: string, content: string }, idx: number) => (
                            <div key={idx}>
                                <p className="titleParagraph">{text.title}</p>
                                <p className="txtParagraph">{text.content}</p>
                            </div>
                        ))}
                        <button className="cvBtn">Download My CV</button>
                    </div>
                </div>
            </div>
        </AboutMeContainer>
    );
}
