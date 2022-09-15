import {FooterContainer} from "./Footer.styled";
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import Box from "@mui/material/Box";

export default function Footer(): JSX.Element {
    return (
        <FooterContainer>
            <Box>
                <BsGithub className="contactIcon" />
                <BsLinkedin className="contactIcon" />
                <BsTwitter className="contactIcon" />
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
