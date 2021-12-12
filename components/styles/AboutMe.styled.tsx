import styled from "styled-components";

export const AboutMeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0 0 0;

  .title {
    text-transform: uppercase;
  }

  .whoIam {
    color: #ff5757;
    margin: -1rem 0 2rem 0;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .containerImgAndTxt {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .personalImg {
    width: 450px;
    height: 450px;
    border-radius: 20px;
  }
  .containerTxt {
    font-size: 1.2rem;
    margin: 0 0 0 7rem;
    width: 35%;
  }

  .txtParagraph {
    font-size: 1rem;
    color: #333;
    line-height: 1.4rem;
  }

  .titleParagraph {
    margin: 2rem 0 -0.5rem 0;
    color: #ff5757;
  }
  .cvBtn {
    padding: 1rem 2rem;
    cursor: pointer;
    background-color: #ff5757;
    color: #fafafa;
    border: 1px solid #ff5757;
    font-size: 0.9rem;
    transition: all 0.3s ease-in;
  }

  .cvBtn:hover {
    background: none;
    color: #ff5757;
    transition: all 0.3s ease-out;
  }

  @media (max-width: 1188px) {
    .containerImgAndTxt {
      flex-direction: column;
    }

    .containerTxt {
      width: 60%;
      margin: 0;
    }
  }

  @media (max-width: 670px) {
    .containerTxt {
      width: 95%;
    }
  }

  @media (max-width: 500px) {
    .personalImg {
      width: 320px;
      height: 320px;
    }
  }
`;
