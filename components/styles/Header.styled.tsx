import styled from "styled-components";

interface Props {
  bg: string;
  colorLogo: string;
  colorLinkHover: string;
}

export const HeaderStyled = styled.header<Props>`
  background-color: ${(props) => props.bg};
  position: fixed;
  padding: 0.4rem 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.3s ease-in-out;

  .containerLogo {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    color: #fafafa;
    cursor: pointer;
  }

  .containerLogo span {
    color: ${(props) => props.colorLogo};
  }
  .containerLink {
    display: flex;
    list-style: none;
  }
  .containerLink li {
    cursor: pointer;
    margin: 0 0 0 2.8rem;
    font-weight: 600;
    color: #fafafa;
    transition: all 0.3s ease-in;
  }

  .containerLink li:hover {
    color: ${(props) => props.colorLinkHover};
    transition: all 0.3s ease-out;
  }
  .containerLink li::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${(props) => props.colorLinkHover};
    transition: width 0.3s;
  }

  .containerLink li:hover::after {
    width: 100%;
  }

  @media (max-width: 748px) {
    .containerLink li {
      margin: 0 0 0 1.5rem;
      align-items: center;
    }
  }

  @media (max-width: 660px) {
    .containerLink li {
      display: none;
    }

    & {
      justify-content: flex-start;
      margin: 1rem 0 0 1rem;
    }
  }
`;
