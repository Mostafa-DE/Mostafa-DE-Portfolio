import styled from "styled-components";

export const CoverImgStyled = styled.div`
  background-image: url("./cover.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 50rem;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  .container {
    color: #fafafa;
    font-size: 2.5rem;
  }

  .myName:first-of-type {
    color: #ff5757;
    font-weight: 600;
    animation: showup 7s infinite;
  }

  .myCareer {
    text-transform: capitalize;
  }

  .containerBtn {
    margin: 1rem 0 0 0;
  }

  .aboutMeBtn {
    padding: 0.8rem 2.5rem;
    cursor: pointer;
    background: none;
    color: #fafafa;
    font-size: 1.1rem;
    border: 1px solid #fafafa;
    transition: all 0.3s ease-in;
  }

  .aboutMeBtn:hover {
    background-color: #ff5757;
    transition: all 0.3s ease-out;
    border: 1px solid #ff5757;

    .arrowIcon {
      transform: rotate(0deg);
    }
  }

  .arrowIcon {
    transform: rotate(-90deg);
    font-size: 1.2rem;
    transition: all 0.3s ease-in;
    margin: 0 -1.5rem -0.2rem 0.5rem;
  }

  @keyframes reveal {
    0% {
      opacity: 0;
      width: 0px;
    }
    20% {
      opacity: 1;
      width: 0px;
    }
    30% {
      width: 355px;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      width: 355px;
    }
  }

  @keyframes showup {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
