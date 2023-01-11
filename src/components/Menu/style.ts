import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const MenuContainer = styled.div`
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 370px;
    background-color: ${VARIABLES.colorBackgroundGray};
    padding-bottom: 1px;
    border-radius: 0 0 4px 0;
    position: fixed;
    z-index: 3;
    .first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 65px;
      color: #ffffff;
      pointer-events: none;
      background-color: ${VARIABLES.colorGreen1};
      margin-bottom: 5px;
      filter: none;
      border: none;
      span {
        line-height: 17px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 20ch;
      }
      .name {
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 600;
      }
      .close-icon {
        pointer-events: visible;
        cursor: pointer;
        :hover {
          filter: brightness(75%);
          transition: 0.5s;
        }
      }
    }
  }
  li {
    width: 100%;
    padding: 18px;
    font-size: 14px;
    color: ${VARIABLES.colorGray1};
    border-bottom: solid 1px rgb(237, 237, 237);
    background-color: #ffffff;
    cursor: pointer;
    text-transform: none;
    :hover {
      border-bottom: 1px solid transparent;
      filter: brightness(95%);
    }
  }
  a {
    width: 97%;
  }
  .up {
    border-radius: 4px 4px 0 0;
  }
  .under {
    border-radius: 0 0 4px 4px;
    margin-bottom: 5px;
  }
`;
