import {SkillsContainer} from "./MySkills.styled";

export default function MySkills(): JSX.Element {
    return (
        <SkillsContainer id="mySkills">
            <div className="container">
                <div className="skillsDescription">
                    <h3>My skills & experiences.</h3>
                    <p className="skillsText">
                        I have a good knowledge of javascript, ReactJs & NextJs while also
                        having a very good knowledge of CSS and the modern features of it
                        like Flex. I know CSS Frameworks like bootstrap & MaterializeCSS. I
                        also have experience in building APIs and dealing with frameworks
                        like express. I also have good experience working in strapi.
                    </p>
                </div>
            </div>
        </SkillsContainer>
    );
}
