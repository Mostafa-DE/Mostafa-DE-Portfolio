import {AboutMeContainer} from "./AboutMe.styled";
import {BsCodeSlash} from "react-icons/bs";
import {cvLink, descriptionAboutMe} from "./data"
import Image from "next/image";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import theme from "@/styles/theme";
import {Link} from "react-scroll";

export default function AboutMe(): JSX.Element {
    return (
        <AboutMeContainer id="aboutMe">
            <Box display="flex" flexDirection="column" alignItems="center">
                <h1 className="title">
                    <BsCodeSlash className="codeIcon"/> About Me {" "}
                    <BsCodeSlash className="codeIcon"/>
                </h1>
                <Typography className="whoIam">__ Who i am__</Typography>
            </Box>

            <Box display="flex"
                 alignItems="center"
                 justifyContent="space-evenly"
                 sx={{
                     [theme.breakpoints.down("md")]: {
                         flexDirection: "column",
                     }
                 }}
            >
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Image
                        src="/mostafa/mostafa-avatar.png"
                        className="personalImg"
                        alt="mostafa-img"
                        width={350}
                        height={300}
                    />
                    <Typography variant="body1" sx={{margin: "0.5rem 0", color: theme.palette.common.black}}>
                        {"I'm"} Mostafa Fayyad aka Mostafa-DE
                    </Typography>
                </Box>

                <Box display="flex" flexDirection="column">
                    {descriptionAboutMe.map((text: string, idx: number) => {
                        return (
                            <Typography className="descriptionAboutMe" key={idx} variant="body1">
                                {text}
                            </Typography>
                        );
                    })}
                    <Box className="container-Btn">
                        <Link className="cvBtn"
                              to="contact"
                              spy={true}
                              duration={1000}
                              smooth={true}
                        >
                            Request My CV
                        </Link>
                    </Box>
                    {/*<Box className="container-Btn">*/}
                    {/*    <a className="cvBtn" href={cvLink} target="_blank" rel="noreferrer">*/}
                    {/*        View My CV*/}
                    {/*    </a>*/}
                    {/*</Box>*/}
                </Box>
            </Box>
        </AboutMeContainer>
    );
}
