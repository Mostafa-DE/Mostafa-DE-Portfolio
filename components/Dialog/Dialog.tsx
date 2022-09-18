import {useState} from "react";
import {DialogContainer, DialogContentStyled} from "@/components/Dialog/Dialog.styled";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import CarouselProject from "@/components/Carousel";
import {DialogContent, DialogTitle, Divider} from "@mui/material";
import {RiShareBoxFill} from "react-icons/ri";
import {BsGithub} from "react-icons/bs";
import Box from "@mui/material/Box";
import {GrClose} from "react-icons/gr";

interface IDialogProps {
    open: boolean;
    onClose: () => void;
}

function SimpleDialog(props: IDialogProps) {
    const {onClose, open} = props;

    const data =
        {
            title: "ChowNow Discover",
            subtitle: "FOOD ORDERING PLATFORM.",
            description: `ChowNow Discover is a food ordering platform that allows users to order food from their
                          favorite restaurants. The platform is built with React, Next.js, and Material UI.
                          The platform is built with React, Next.js, and Material UI
            `,
            techs: `React, Next.js, Material UI, Firebase, Stripe`,
            isDemoBtnShow: true,
        }

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
                    <CarouselProject/>
                    <Box>
                        <h2 style={{margin: "1rem 0 0 0"}}>{data.title}</h2>
                        <span style={{
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                            color: "rgba(255, 87, 87, 0.51)",
                        }}>
                            {data.subtitle}
                        </span>
                        <Box sx={{margin: "0.5rem 0 0 0"}}>
                            <span style={{
                                fontSize: "0.8rem",
                                fontWeight: "bold",
                                color: "rgba(51,51,51,0.67)",
                            }}>
                                {data.techs}
                            </span>
                        </Box>
                        <Divider sx={{margin: "1rem 0", background: `rgba(51, 51, 51, 0.06)`}}/>
                        <p style={{color: "rgba(51,51,51,0.75)"}}>{data.description}</p>
                    </Box>

                    <Box>
                        <Button className="btn">
                            <RiShareBoxFill style={{margin: "0 0.2rem 0 0", fontSize: "1rem"}}/>View Site
                        </Button>
                        <Button className="btn">
                            <BsGithub style={{margin: "0 0.4rem 0 0", fontSize: "1rem"}}/>View Code
                        </Button>
                    </Box>
                </DialogContent>
            </DialogContentStyled>
        </Dialog>
    );
}

export default function DialogProject(): JSX.Element {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <DialogContainer>
            <Button className="dialogBtn" onClick={handleClickOpen}>Learn More</Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </DialogContainer>
    );
};
