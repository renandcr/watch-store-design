import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 90%;
  max-width: 400px;
  padding: 30px 20px 32px 20px;
  border-radius: 4px;
  box-shadow: ${VARIABLES.colorShadow2};
  background-color: rgb(255, 255, 255);
  h1 {
    font-size: 24px;
    color: ${VARIABLES.colorGray2};
    font-weight: 500;
    margin-bottom: 10px;
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
    text-decoration: underline;
    margin-bottom: 5px;
  }
  span {
    font-size: 11px;
    font-weight: 500;
  }
`;
