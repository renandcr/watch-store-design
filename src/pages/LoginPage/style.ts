import styled from "styled-components";

export const MainLoginPage = styled.main`
  display: flex;
  justify-content: center;
`;

export const LoginPageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    width: 90%;
  }
`;
