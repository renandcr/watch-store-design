import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const MainMyAccountPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding-bottom: 80px;
  .motion-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 450px;
    margin-top: 50px;
    .title-container {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 50px;
      width: 100%;
      h1 {
        font-size: 24px;
        font-weight: 500;
        line-height: 26px;
        font-family: ${VARIABLES.fontSecondary};
        color: ${VARIABLES.colorGray1};
      }
      span {
        display: flex;
        align-items: center;
        column-gap: 1px;
        color: ${VARIABLES.colorBlue2};
        font-size: 13px;
        font-weight: 500;
        margin: 5px 0 0 5px;
        cursor: pointer;
        :hover {
          color: ${VARIABLES.colorSecondary};
          transition: 0.5s;
        }
        .pen-icon {
          font-size: 16px;
        }
      }
    }
    .motion-container-form {
      width: 100%;
      div {
        max-width: 100%;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 130px;
  }
`;

export const MyAccountPageContainer = styled.section`
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 100%;
    li {
      display: flex;
      flex-direction: column;
      row-gap: 12px;
      span {
        font-size: 15px;
        color: ${VARIABLES.colorGray3};
      }
      .background {
        color: ${VARIABLES.colorGray2};
        background-color: ${VARIABLES.colorGray4};
        padding: 18px 18px 18px 15px;
        border-radius: 4px;
      }
    }
  }
`;
