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
  border-radius: 4px;
  h1 {
    width: 100%;
    font-size: 26px;
    font-weight: 500;
    color: ${VARIABLES.colorGray2};
    text-align: left;
    margin-bottom: 20px;
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
  .button-container {
    display: flex;
    column-gap: 10px;
    width: 100%;
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
