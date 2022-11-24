import { VARIABLES } from "../../assets/globalStyle/style";
import { IAddressInformation } from "./index";
import styled from "styled-components";

export const AddressInformationContainer = styled.div<IAddressInformation>`
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  color: ${VARIABLES.colorGray3};
  padding: ${(props) => (props.showDisplay ? "15px" : "15px 15px 10px 15px")};
  box-shadow: ${(props) =>
    props.showDisplay ? "none" : VARIABLES.colorShadow1};
  border: ${(props) =>
    props.border ? `1px solid ${VARIABLES.lightBorderColor}` : "none"};
  .link-change {
    color: ${VARIABLES.colorBlue2};
    margin-left: 5px;
    font-size: ${VARIABLES.fontSize3};
    font-weight: 500;
    text-transform: none;
    :hover {
      color: ${VARIABLES.colorSecondary};
      transition: 0.3s;
    }
  }
  .weight {
    font-weight: 600;
    display: ${(props) => (props.showDisplay ? "none" : "flex")};
    align-items: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    li {
      font-size: 15px;
      line-height: 16px;
      max-width: 40ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .upper {
      text-transform: uppercase;
    }
    .name {
      font-weight: 500;
    }
    .flag-card {
      margin: -5px 0 0 -5px;
      img {
        width: 43px;
        height: 38px;
      }
      span {
        font-size: 13px;
        margin-right: 3px;
        font-weight: 500;
      }
    }
  }
`;
