import styled from "styled-components";

export const SkillsStyled = styled.div`
  margin: 6rem 0 0 0;
  width: 100%;
  .container {
    display: flex;
    justify-content: center;
    background-color: #fafafa;
    padding: 6rem 0;
  }

  .wrapperSkillsBar {
    width: 50%;
  }
  .containerSkillsBar {
    width: 100%;
    padding: 30px 30px 50px;
    background-color: #fafafa;
    border-radius: 10px;
  }

  .containerSkillsBar * {
    font-family: "Poppins", sans-serif;
    color: #333;
    font-weight: 500;
  }

  .details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .bar {
    position: relative;

    border: 2px solid #ff5757;

    border-radius: 20px;
  }
  .bar div {
    position: relative;
    width: 0;
    height: 9px;
    border-radius: 10px;
    background-color: #ff5757;
  }

  .skills:not(:last-child) {
    margin-bottom: 30px;
  }

  .skillsDescription {
    width: 35rem;
  }

  .skillsDescription h3 {
    color: #ff5757;
  }

  .skillsText {
    margin: 2rem 2rem 0 0;
    line-height: 1.8rem;
    color: #333;
  }

  @media (max-width: 1188px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .containerSkillsBar {
      padding: 0;
      margin: 3rem 0 0 0;
    }

    .wrapperSkillsBar {
      width: 60%;
    }

    .skillsDescription {
      width: 60%;
    }

    .containerTxt {
      width: 60%;
    }
  }

  @media (max-width: 670px) {
    .wrapperSkillsBar {
      width: 95%;
    }

    .skillsDescription {
      width: 95%;
    }

    .containerTxt {
      width: 95%;
    }
  }

  #Javascript-bar {
    animation: Javascript-fill 2s forwards;
  }
  #ReactJs-bar {
    animation: ReactJs-fill 2s forwards;
  }
  #NextJs-bar {
    animation: NextJs-fill 2s forwards;
  }
  #ExpressJS-bar {
    animation: ExpressJS-fill 2s forwards;
  }
  #RESTful-bar {
    animation: RESTful-fill 2s forwards;
  }
  #mongoDB-bar {
    animation: mongoDB-fill 2s forwards;
  }
  #Bootstrap-bar {
    animation: Bootstrap-fill 2s forwards;
  }
  @keyframes Javascript-fill {
    100% {
      width: 90%;
    }
  }

  @keyframes ReactJs-fill {
    100% {
      width: 90%;
    }
  }
  @keyframes NextJs-fill {
    100% {
      width: 90%;
    }
  }
  @keyframes ExpressJS-fill {
    100% {
      width: 75%;
    }
  }
  @keyframes RESTful-fill {
    100% {
      width: 75%;
    }
  }
  @keyframes mongoDB-fill {
    100% {
      width: 70%;
    }
  }
  @keyframes Bootstrap-fill {
    100% {
      width: 90%;
    }
  }
`;
