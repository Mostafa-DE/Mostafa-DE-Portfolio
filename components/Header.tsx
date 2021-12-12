import { HeaderStyled } from "./styles/Header.styled";
import { Link } from "react-scroll";
import useScrollNavbar from "../Hooks/useScrollState";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header(props: any): JSX.Element {
  const [scrollState] = useScrollNavbar();

  return (
    <HeaderStyled
      colorLogo={`${scrollState === "top" ? "#ff5757" : "#fafafa"}`}
      bg={`${scrollState === "top" ? "transparent" : "#f85f5fd4"}`}
      colorLinkHover={`${scrollState === "top" ? "#ff5757" : "#fafafa"}`}
    >
      <p className="containerLogo">
        <Link to="home" spy={true} duration={500} smooth={true}>
          Portfo<span>lio.</span>
        </Link>
      </p>

      <ul className="containerLink">
        <li>
          <Link to="aboutMe" duration={1000} spy={true} smooth={true}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="mySkills" duration={1000} spy={true} smooth={true}>
            Technologies / Skills
          </Link>
        </li>
        <li>
          <Link to="myProjects" duration={1000} spy={true} smooth={true}>
            My Projects
          </Link>
        </li>
        <li>
          <Link to="contact" duration={1500} spy={true} smooth={true}>
            Contact Me
          </Link>
        </li>
      </ul>
      <AiOutlineMenu className="menuIcon" />
    </HeaderStyled>
  );
}
