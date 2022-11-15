import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const ModalAddressContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${VARIABLES.colorDarkBackground};
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: center;
  .menu {
    width: 100%;
    max-width: 450px;
    border-radius: 4px;
    overflow-y: auto;
    margin: 12px 0 12px 0;
    ::-webkit-scrollbar {
      display: none;
    }
    .form-container {
      border-radius: 4px;
      background-color: rgb(244, 244, 244);
      max-width: 100%;
      form {
        padding: 23px 20px 24px 20px;
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
