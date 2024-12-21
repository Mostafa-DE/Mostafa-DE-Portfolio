import {HeaderContainer} from "./Header.styled";
import {Link} from "react-scroll";
import useScrollNavbar from "@/hooks/useScrollState";
import {AiOutlineMenu} from "react-icons/ai";
import SideNav from "@/components/SideNav";
import {useState} from "react";

export default function Header(): JSX.Element {
    const [scrollState] = useScrollNavbar();
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);


    return (
        <HeaderContainer>
            <div className={scrollState === "top" ? "mainHeader" : "mainHeaderScroll"}>
                <p className="containerLogo">
                    <a href="/">
                        Mostafa-<span className={scrollState === "top" ? "textLogo" : "textLogoScroll"}>DE</span>
                    </a>
                </p>

                <ul className="containerLink">
                    <li>
                        {/*@ts-ignore*/}
                        <Link to="aboutMe"
                              duration={1000}
                              spy={true}
                              smooth={true}
                              offset={-70}
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        {/*@ts-ignore*/}
                        <Link to="mySkills"
                              duration={1000}
                              spy={true}
                              smooth={true}
                              offset={-70}
                        >
                            Technologies
                        </Link>
                    </li>
                    <li>
                        {/*@ts-ignore*/}
                        <Link to="myProjects"
                              duration={1000}
                              spy={true}
                              smooth={true}
                              offset={-35}
                        >
                            My Projects
                        </Link>
                    </li>
                    <li>
                        {/*@ts-ignore*/}
                        <Link to="contact"
                              duration={1500}
                              spy={true}
                              smooth={true}
                              offset={-35}
                        >
                            Contact Me
                        </Link>
                    </li>
                    <li>
                        <a href="/blog" target="_blank">My Blog</a>
                    </li>
                </ul>
                <AiOutlineMenu className="menuIcon" onClick={() => setOpenDrawer(true)}/>
            </div>
            <SideNav open={openDrawer} setOpen={setOpenDrawer}/>
        </HeaderContainer>
    );
}
