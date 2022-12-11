import {FooterContainer} from "./Footer.styled";
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import Box from "@mui/material/Box";

export default function Footer(): JSX.Element {
    return (
        <FooterContainer>
            <Box>
                <a href="https://github.com/Mostafa-DE/" target="_blank" rel="noreferrer">
                    <BsGithub className="contactIcon"/>
                </a>
                <a href="https://www.linkedin.com/in/mostafa-de/" target="_blank" rel="noreferrer">
                    <BsLinkedin className="contactIcon"/>
                </a>
            </Box>
            <Box className="copyRight">
                <p>
                    Copyright © All rights reserved & Made By{" "}
                    <a href="https://www.linkedin.com/in/mostafa-de/" rel="noreferrer" target="_blank">
                        MOSTAFA FAYYAD
                    </a>
                </p>
            </Box>
        </FooterContainer>
    );
}
