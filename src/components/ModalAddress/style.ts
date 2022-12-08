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
    ::-webkit-scrollbar {
      display: none;
    }
    overflow-y: ${(props) => (props.showDisplay ? "unset" : "auto")};
    .form-container {
      background-color: #ffffff;
      min-width: 100%;
      form {
        padding: ${(props) =>
          props.showDisplay ? "0 0 0 15px" : "23px 20px 24px 20px"};
        h1 {
          font-size: 24px;
          margin-bottom: 8px;
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
