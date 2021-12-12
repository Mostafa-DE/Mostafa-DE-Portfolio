import styled from "styled-components";

export const ButtonScrollUpStyled = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  transition: all 0.3s ease-in-out;

  .scrollUpBtn {
    background-color: #ff5757;
    padding: 0.1rem 0.1rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin: 0 1rem 0.5rem 0;
    color: #fff;
    opacity: 0.7;
    /* border-radius: 50%; */
  }

  .scrollUpBtn:hover {
    opacity: 1;
  }

  .rowIcon {
    font-size: 1.8rem;
  }

  .rowIcon:hover {
    animation-name: rubberBand;
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  @keyframes rubberBand {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;
