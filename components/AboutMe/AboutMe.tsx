import {AboutMeContainer} from "./AboutMe.styled";
import {BsCodeSlash} from "react-icons/bs";
import {data, cvLink} from "./data"

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
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img
                            src="./mostafa1.png"
                            className="personalImg"
                            alt="mostafa-img"
                        />
                        <p>Description about my self goes here...</p>
                    </div>

                    <div className="containerTxt">
                        {data.map((text: { title: string, content: string }, idx: number) => (
                            <div key={idx}>
                                <p className="titleParagraph">{text.title}</p>
                                <p className="txtParagraph">{text.content}</p>
                            </div>
                        ))}
                        <div className="container-Btn">
                            <a className="cvBtn" href={cvLink} target="_blank" rel="noreferrer">
                                View My CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AboutMeContainer>
    );
}
