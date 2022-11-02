import styled from "styled-components";

export const MainRegistrationForm = styled.main`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const RegistrationPageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    width: 90%;
  }
`;
