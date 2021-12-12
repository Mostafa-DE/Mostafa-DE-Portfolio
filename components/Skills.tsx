import { SkillsStyled } from "./styles/Skills.styled";

export default function Skills() {
  return (
    <SkillsStyled id="mySkills">
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

        <div className="wrapperSkillsBar">
          <div className="containerSkillsBar">
            <div className="skills">
              <div className="details">
                <span>Javascript</span>
                <span> 90%</span>
              </div>
              <div className="bar">
                <div id="Javascript-bar"></div>
              </div>
            </div>
            {/* ----- */}
            <div className="skills">
              <div className="details">
                <span>ReactJs</span>
                <span>90%</span>
              </div>
              <div className="bar">
                <div id="ReactJs-bar"></div>
              </div>
            </div>
            {/* ----- */}
            <div className="skills">
              <div className="details">
                <span>NextJs</span>
                <span>90%</span>
              </div>
              <div className="bar">
                <div id="NextJs-bar"></div>
              </div>
            </div>
            {/* ----- */}
            <div className="skills">
              <div className="details">
                <span>ExpressJS</span>
                <span>75%</span>
              </div>
              <div className="bar">
                <div id="ExpressJS-bar"></div>
              </div>
            </div>
            {/* ----- */}
            <div className="skills">
              <div className="details">
                <span>RESTful API</span>
                <span>75%</span>
              </div>
              <div className="bar">
                <div id="RESTful-bar"></div>
              </div>
            </div>
            {/* ----- */}
            <div className="skills">
              <div className="details">
                <span>NoSQL (mongoDB)</span>
                <span>70%</span>
              </div>
              <div className="bar">
                <div id="mongoDB-bar"></div>
              </div>
            </div>
            {/* ----- */}
            <div className="skills">
              <div className="details">
                <span>CSS, MaterialUI & Bootstrap</span>
                <span>90%</span>
              </div>
              <div className="bar">
                <div id="Bootstrap-bar"></div>
              </div>
            </div>
            {/* ----- */}
          </div>
        </div>
      </div>
    </SkillsStyled>
  );
}
