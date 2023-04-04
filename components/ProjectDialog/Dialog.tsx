import {useState} from "react";
import {DialogContainer, DialogContentStyled} from "@/components/ProjectDialog/Dialog.styled";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import CarouselProject from "@/components/Carousel";
import {DialogContent, DialogTitle, Divider} from "@mui/material";
import {RiShareBoxFill} from "react-icons/ri";
import {BsGithub} from "react-icons/bs";
import Box from "@mui/material/Box";
import {GrClose} from "react-icons/gr";
import type {IProjectCardData} from "@/components/ProjectCards/";

interface IDialogProps {
    open: boolean;
    onClose: () => void;
    projectDetails: IProjectCardData;
}

function ProjectDialog({onClose, open, projectDetails}: IDialogProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth={true}
        >
            <DialogContentStyled>
                <DialogTitle sx={{margin: "0 0 1rem 0"}}>
                    <p onClick={onClose}
                       style={{
                           position: 'absolute',
                           right: 10,
                           top: 5,
                           margin: 0,
                           fontSize: "1.4rem",
                       }}
                    >
                        <GrClose/>
                    </p>
                </DialogTitle>
                <DialogContent>
                    {/* Carousel */}
                    <CarouselProject {...projectDetails}/>
                    <Box>
                        <h2 style={{margin: "1rem 0 0 0"}}>{projectDetails.title}</h2>
                        <span style={{
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                            color: "rgba(255, 87, 87, 0.51)",
                        }}>
                            {projectDetails.subtitle}
                        </span>
                        <Box sx={{margin: "0.5rem 0 0 0"}}>
                            <span style={{
                                fontSize: "0.8rem",
                                fontWeight: "bold",
                                color: "rgba(51,51,51,0.67)",
                            }}>
                                {projectDetails.techs}
                            </span>
                        </Box>
                        <Divider sx={{margin: "1rem 0", background: `rgba(51, 51, 51, 0.06)`}}/>
                        <p style={{color: "rgba(51,51,51,0.75)"}}>{projectDetails.description}</p>
                    </Box>

                    <Box>
                        {projectDetails.isDemoBtnShow && (
                            <Button className="btn">
                                <a href={projectDetails.demoLink} target="_blank" rel="noreferrer">
                                    <RiShareBoxFill style={{margin: "0 0.2rem 0 0"}}/>View Site
                                </a>
                            </Button>
                        )}
                        {projectDetails.isGithubBtnShow && (
                            <Button className="btn">
                                <a href={projectDetails.githubLink} target="_blank" rel="noreferrer">
                                    <BsGithub style={{margin: "0 0.4rem 0 0", fontSize: "1rem"}}/>View Code
                                </a>
                            </Button>
                        )}
                    </Box>
                </DialogContent>
            </DialogContentStyled>
        </Dialog>
    );
}

interface IDialogProject {
    projectDetails: IProjectCardData
}

export default function DialogProject({projectDetails}: IDialogProject): JSX.Element {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <DialogContainer>
            <Button className="dialogBtn" onClick={handleClickOpen}>Learn More</Button>
            <ProjectDialog
                open={open}
                onClose={handleClose}
                projectDetails={projectDetails}
            />
        </DialogContainer>
    );
};
