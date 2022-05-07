import type {NextPage} from "next";
import Header from "@/components/Header";
import CoverImg from "@/components/CoverImg";
import AboutMe from "@/components/AboutMe";
import MySkills from "@/components/MySkills";
import MyProjects from "@/components/MyProjects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer/";
import ButtonScrollUp from "@/components/ButtonScrollUp";
import Cursor from "@/components/Cursor"

const Home: NextPage = () => {
    return (
        <div>
            <Header/>
            <ButtonScrollUp/>
            <CoverImg/>
            <AboutMe/>
            <MySkills/>
            <MyProjects/>
            <ContactForm/>
            <Cursor/>
            <Footer/>
        </div>
    );
};

export default Home;
