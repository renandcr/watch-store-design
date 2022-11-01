import styled from "styled-components";

export const MainRegistrationForm = styled.main`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const RegistrationPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 115px;

  @media only screen and (min-width: 768px) {
    margin-top: 165px;
  }
`;
