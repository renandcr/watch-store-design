import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const MainMyAddressesPageContainer = styled.main`
  background-color: #ffffff;
  padding-bottom: 80px;
  .motion-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  h1 {
    font-size: 21px;
    font-weight: 600;
    font-family: ${VARIABLES.fontSecondary};
    color: ${VARIABLES.colorGray3};
    line-height: 23px;
  }
  .alert-title {
    color: ${VARIABLES.colorOrange1};
  }
  .optional-title {
    margin-bottom: 30px;
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 130px;
  }
`;

export const MyAddressesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 90%;
  margin-top: 30px;
  > div {
    align-items: flex-start;
    width: 100%;
  }
`;

export const SavedAddressesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  border-top: solid 1px ${VARIABLES.lightBorderColor};
  border-bottom: solid 1px ${VARIABLES.lightBorderColor};
  padding: 15px 0 30px 0;
  .button-container {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 0 15px 0 15px;
    width: 100%;
    max-width: 260px;
    div {
      display: flex;
      column-gap: 10px;
      button {
        color: ${VARIABLES.colorBlue6};
        font-weight: 600;
        border: 1px solid ${VARIABLES.colorBlue6};
        :hover {
          filter: none;
          background-color: ${VARIABLES.colorOrange2};
          border: 1px solid ${VARIABLES.colorOrange2};
          color: #ffffff;
        }
        :active {
          filter: brightness(1.6);
          transition: 0.3s;
        }
      }
    }
  }
`;

export const SavedAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 230px;
  row-gap: 10px;
`;

export const NewAddressContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
  .add-address-top-container {
    display: flex;
    flex-direction: column;
    button {
      margin-top: 10px;
    }

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      button {
        font-weight: 600;
        margin-left: 20px;
        margin-top: 0;
      }
    }
  }
`;
