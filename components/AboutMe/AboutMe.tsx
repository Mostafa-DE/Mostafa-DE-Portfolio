import {AboutMeContainer} from "./AboutMe.styled";
import {BsCodeSlash} from "react-icons/bs";
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

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    [theme.breakpoints.down("md")]: {
                        flexDirection: "column",
                    }
                }}
            >
                <Box display="flex" flexDirection="column" alignItems="center" width="100%">
                    <Image
                        src="/mostafa/mostafa-avatar.png"
                        className="personalImg"
                        alt="mostafa-img"
                        width={350}
                        height={300}
                    />
                    <Typography variant="body1" sx={{margin: "0.5rem 0", color: theme.palette.common.white}}>
                        {"I'm"} Mostafa Fayyad {" "}
                        <span style={{color: theme.palette.primary.main}}>aka</span> Mostafa-DE
                    </Typography>
                </Box>

                <Box width="100%">
                    <Typography className="descriptionAboutMe" variant="body1">
                        I’m a Software Engineer who loves solving problems and creating smooth, reliable systems. I
                        enjoy tackling new challenges and finding smart, simple solutions that make a difference. I have
                        a special fascination with how compilers and interpreters turn code into
                        functionality.<br/><br/>

                        Outside of work, I’m passionate about exploring new technologies, improving my skills, and
                        diving into books. I also enjoy learning languages, staying active, and taking on new adventures
                        whenever I can. For me, it’s all about growing, learning, and having fun along the way.
                    </Typography>
                    <Box className="container-Btn">
                        <Link className="cvBtn"
                              to="contact"
                              spy={true}
                              duration={1000}
                              smooth={true}
                        >
                            Let's Talk!
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
