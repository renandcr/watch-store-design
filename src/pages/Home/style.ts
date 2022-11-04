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
  margin-top: 215px;

  @media only screen and (min-width: 500px) {
    margin-top: 160px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 170px;
  }
`;
