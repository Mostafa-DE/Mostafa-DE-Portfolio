import {SkillsContainer} from "./MySkills.styled";
import Box from "@mui/material/Box";
import Image from "next/image";
import {techIcons} from "@/components/MySkills";
import {Typography} from "@mui/material";
import {BsCodeSlash} from "react-icons/bs";
import theme from "@/styles/theme";

export default function MySkills(): JSX.Element {
    return (
        <SkillsContainer id="mySkills">
            <Box className="container">
                <h1 className="title">
                    <BsCodeSlash className="codeIcon"/> Technologies {" "}
                    <BsCodeSlash className="codeIcon"/>
                </h1>
                <Typography sx={{textAlign: "center", width: "100%", color: theme.palette.common.white}}>
                    __Here are the technologies I am comfortable and experience with__
                </Typography>
                <Box className="containerTechIcons">
                    {techIcons.map((icon: string, idx: number) => {
                        return (
                            <a href={icon.link} target="_blank">
                                <Box key={idx} className="techIcon">
                                    <Image key={idx}
                                           src={`/techs/${icon.name}.png`}
                                           alt="skills-img"
                                           width={70}
                                           height={70}
                                    />
                                </Box>
                            </a>
                        );
                    })
                    }
                </Box>
            </Box>
        </SkillsContainer>
    );
}
