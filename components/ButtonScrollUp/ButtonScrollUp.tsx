import {ButtonScrollUpContainer} from "./ButtonScrollUp.styled";
import {Link} from "react-scroll";
import {useState, useEffect} from "react";
import {MdArrowUpward} from "react-icons/md";

export default function ButtonScrollUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleVisibility = () => {
            if (window.pageYOffset > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleVisibility);
        return () => window.removeEventListener("scroll", handleVisibility);
    });

    return (
        <ButtonScrollUpContainer>
            {isVisible && (
                // @ts-ignore
                <Link to="home"
                      spy={true}
                      duration={500}
                      smooth={true}
                >
                    <div className="scrollUpBtn">
                        <MdArrowUpward className="rowIcon"/>
                    </div>
                </Link>
            )}
        </ButtonScrollUpContainer>
    );
}
