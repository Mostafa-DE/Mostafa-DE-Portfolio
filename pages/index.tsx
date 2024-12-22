import type {NextPage} from "next";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import MySkills from "@/components/MySkills";
import MyProjects from "@/components/MyProjects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer/";
import ButtonScrollUp from "@/components/ButtonScrollUp";
import dynamic from "next/dynamic";

const CoverImg = dynamic(() => import("@/components/CoverImg"), {ssr: false});

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
            <Footer/>
        </div>
    );
};

export default Home;
