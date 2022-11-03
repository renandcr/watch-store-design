import styled from "styled-components";

export const MainHomeContainer = styled.main`
  display: flex;
  justify-content: center;
`;

export const HomeContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1440px;
  margin-top: 125px;

  @media only screen and (min-width: 650px) {
    margin-top: 100px;
  }
`;
