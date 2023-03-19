import {AboutMeContainer} from "./AboutMe.styled";
import {BsCodeSlash} from "react-icons/bs";
import {data, cvLink, descriptionAboutMe} from "./data"
import Image from "next/image";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import theme from "@/styles/theme";

export default function AboutMe(): JSX.Element {
    return (
        <AboutMeContainer id="aboutMe">
            <Box className="container">
                <h1 className="title">
                    <BsCodeSlash className="codeIcon"/> About Me {" "}
                    <BsCodeSlash className="codeIcon"/>
                </h1>
                <Typography className="whoIam">__ Who i am__</Typography>
                <Box className="containerImgAndTxt">
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Image
                            src="/mostafa-avatar.png"
                            className="personalImg"
                            alt="mostafa-img"
                            width={350}
                            height={300}
                        />
                        <Typography variant="body1" sx={{margin: "0.5rem 0", color: theme.palette.common.black}}>
                            {"I'm"} Mostafa Fayyad aka Mostafa-DE
                        </Typography>
                        <Box sx={{width: "80%"}} display="flex" flexDirection="column">
                            {descriptionAboutMe.map((text: string, idx: number) => {
                                return (
                                    <Typography className="descriptionAboutMe" key={idx} variant="body1">
                                        {text}
                                    </Typography>
                                );
                            })
                            }
                        </Box>
                    </Box>

                    <Box className="containerTxt">
                        {data.map((text: { title: string, content: string }, idx: number) => (
                            <Box key={idx}>
                                <Typography variant="body1" className="titleParagraph">{text.title}</Typography>
                                <Typography variant="body2" className="txtParagraph">{text.content}</Typography>
                            </Box>
                        ))}
                        <Box className="container-Btn">
                            <a className="cvBtn" href={cvLink} target="_blank" rel="noreferrer">
                                View My CV
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </AboutMeContainer>
    );
}
