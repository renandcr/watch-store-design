import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";
import { IAddressModal } from ".";

export const ModalAddressContainer = styled.div<IAddressModal>`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: ${(props) =>
    props.showDisplay ? "#ffffff" : VARIABLES.colorDarkBackground};
  position: ${(props) => (props.showDisplay ? "none" : "fixed")};
  justify-content: ${(props) => (props.showDisplay ? "flex-start" : "center")};
  h1 {
    display: ${(props) => (props.showDisplay ? "none" : "flex")};
  }
  .menu {
    width: 100%;
    max-width: 450px;
    border-radius: 4px;
    margin: 12px 0 12px 0;
    ::-webkit-scrollbar {
      display: none;
    }
    overflow-y: ${(props) => (props.showDisplay ? "unset" : "auto")};
    .form-container {
      border-radius: 4px;
      background-color: #ffffff;
      min-width: 100%;
      form {
        padding: ${(props) =>
          props.showDisplay ? "0 0 0 15px" : "23px 20px 24px 20px"};
        h1 {
          font-size: 24px;
          margin-bottom: 8px;
        }
        .textField {
          height: 50px;
          label {
            font-size: 14px;
          }
          div {
            height: 100%;
            input {
              height: 100%;
              ::placeholder {
                font-size: 14px;
              }
            }
          }
        }
        p {
          column-gap: 3px;
          font-size: 11px;
          margin: -8px 0 0 0;
        }
      }
      .button-container {
        width: 100%;
        column-gap: 10px;
        display: flex;
      }
    }
  }
`;
