import {ContactFormContainer} from "./ContactForm.styled";
import {BsCodeSlash} from "react-icons/bs";
import React, {useState} from "react";
import theme from "../../styles/theme";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import {FaUserCircle} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {BiWorld} from "react-icons/bi";
import {ImSpinner9} from "react-icons/im"
import {IoPhonePortraitOutline} from "react-icons/io5";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function ContactForm(): JSX.Element {
    // const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
    // const [openErrorAlert, setOpenErrorAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const [values, setValues] = useState({
        email: "",
        name: "",
        message: "",
    });

    const defaultValues = {
        email: "",
        name: "",
        message: "",
    };

    const handleChangeInput = (evnt: React.SyntheticEvent) => {
        const {name, value} = evnt.target as HTMLInputElement;
        setValues({...values, [name]: value});
    };

    const handleSubmit = async (evnt: React.SyntheticEvent) => {
        evnt.preventDefault();
        setIsLoading(true)
        // const res = await fetch(`https://knaps.herokuapp.com/api/emails/`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //
        //     body: JSON.stringify({
        //         ...values,
        //         full_name: `${values.full_name}`,
        //         email: `${values.email}`,
        //         country: `${values.country}`,
        //         phone: `${values.phone}`,
        //         company_name: `${values.company_name}`,
        //         additional_info: `${values.additional_info}`,
        //     }),
        // })
        // res.ok ? setOpenSuccessAlert(true) : setOpenErrorAlert(true)
        setValues(defaultValues);
        setIsLoading(false)
    };

    return (
        <ContactFormContainer id="contact">
            <div className="container">
                <h1 className="title">
                    <BsCodeSlash className="codeIcon"/> Contact Me
                    <BsCodeSlash className="codeIcon"/>
                </h1>
                <p className="whoIam">__ Have a question or want to work together? __</p>
            </div>
            <Box>
                {/*<SuccessAlert open={openSuccessAlert}*/}
                {/*              setOpen={setOpenSuccessAlert}*/}
                {/*/>*/}
                {/*<ErrorAlert open={openErrorAlert}*/}
                {/*            setOpen={setOpenErrorAlert}*/}
                {/*/>*/}

                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <ValidatorForm onSubmit={handleSubmit}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center",
                                [theme.breakpoints.down("xs")]: {
                                    flexDirection: "column",
                                    alignItems: "center",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    margin: "0 2rem 0 0 ",
                                    [theme.breakpoints.down("xs")]: {
                                        margin: "0",
                                    },
                                }}
                            >
                                <FaUserCircle className="icon"/>
                                <TextValidator
                                    type="text"
                                    name="name"
                                    onChange={handleChangeInput}
                                    value={values.name}
                                    fullWidth
                                    sx={{
                                        [theme.breakpoints.down("xs")]: {
                                            width: "17rem",
                                        },
                                    }}
                                    variant="standard"
                                    label="Full Name"
                                    validators={["required"]}
                                    errorMessages={["Please Enter Your Full Name"]}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    [theme.breakpoints.down("xs")]: {
                                        margin: "0.5rem 0 0 0",
                                    },
                                }}
                            >
                                <MdEmail className="icon"/>
                                <TextValidator
                                    type="email"
                                    name="email"
                                    onChange={handleChangeInput}
                                    value={values.email}
                                    fullWidth
                                    sx={{
                                        [theme.breakpoints.down("xs")]: {
                                            width: "17rem",
                                        },
                                    }}
                                    variant="standard"
                                    label="Email Address"
                                    validators={["required"]}
                                    errorMessages={["Please Enter Valid Email"]}
                                />
                            </Box>
                        </Box>

                        <Box>
                            <TextareaAutosize
                                aria-label="maximum height"
                                name="message"
                                onChange={handleChangeInput}
                                value={values.message}
                                minRows={6}
                                placeholder="Please Enter Your Message Here..."
                                className="textArea"
                            />
                            <Box display="flex" justifyContent="center">
                                <Button type={isLoading ? "button" : "submit"}
                                        className="SubmitBtn"
                                >
                                    {isLoading ?
                                        <ImSpinner9 className="spinner"/> : "Submit"}
                                </Button>
                            </Box>
                        </Box>
                    </ValidatorForm>
                </Box>
            </Box>
        </ContactFormContainer>
    );
}
