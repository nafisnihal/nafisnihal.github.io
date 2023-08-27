import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const HeroButton = styled.a`
  display: inline-block;
  text-align: center;
  font-size: 1.6rem;
  padding: 1rem 1rem;
  background-image: linear-gradient(
    270deg,
    ${(props) => props.theme.colors.background2} 0%,
    ${(props) => props.theme.colors.accent1} 100%
  );
  color: #fefefe;
  transition-duration: 0.3s;
  transition-property: background-image;

  &:hover {
    background-image: linear-gradient(
      270deg,
      ${(props) => props.theme.colors.accent1} 0%,
      ${(props) => props.theme.colors.background2} 100%
    );
  }

  &.link-to {
    min-height: 40px;
    max-width: 100px;
  }
`;
