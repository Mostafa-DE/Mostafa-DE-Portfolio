import type { NextPage } from "next";
import Header from "../components/Header";
import CoverImg from "../components/CoverImg";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import MyProjects from "../components/MyProjects";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ButtonScrollUp from "../components/ButtonScrollUp";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <ButtonScrollUp />
      <CoverImg />
      <AboutMe />
      <Skills />
      <MyProjects />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
