import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const InsideFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 100%;
  padding: 30px 20px 32px 20px;
  border-radius: 4px;
  h1 {
    font-size: 24px;
    color: ${VARIABLES.colorGray2};
    font-weight: 500;
    margin-bottom: 30px;
  }
  .textField {
    width: 100%;
  }
  p {
    display: flex;
    align-items: center;
    align-self: flex-start;
    column-gap: 5px;
    font-size: ${VARIABLES.fontSize3};
    color: red;
    margin: -5px 0 5px 0;
  }
  button {
    height: 48px;
    font-size: ${VARIABLES.fontSize3};
    margin-top: 10px;
  }
`;

export const LoginShortcutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  a {
    color: ${VARIABLES.colorBlue2};
    :hover {
      text-decoration: underline;
      color: ${VARIABLES.colorSecondary};
    }
    margin-bottom: 5px;
  }
  span {
    text-transform: none;
    font-size: 12px;
    font-weight: 500;
  }
`;
