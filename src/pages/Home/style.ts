import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const MainHomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  .alice-carousel {
    margin-top: 160px;
    .alice-carousel__stage {
      li {
        width: 50%;
        height: 310px;
        .slide-image-container {
          display: flex;
          height: 100%;
          padding: 3px 0;
          background-color: ${VARIABLES.lightBorderColor};
          border-bottom: solid 2px ${VARIABLES.colorBlue3};
          border-top: solid 2px ${VARIABLES.colorBlue3};
          img {
            height: 100%;
            width: 50%;
            object-fit: cover;
          }
          img + img {
            margin-left: 4px;
            border-left: solid 2px ${VARIABLES.colorBlue3};
            padding-left: 4px;
          }
          .whole-image {
            width: 100%;
          }
        }
      }
    }
    .alice-carousel__dots {
      margin: 20px 3px 5px;
      .__active {
        background-color: ${VARIABLES.colorBlue3};
      }
    }
    .alice-carousel__prev-btn {
      display: none;
    }
    .alice-carousel__next-btn {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
  h1 {
    font-size: 23px;
    line-height: 30px;
    color: ${VARIABLES.colorGray1};
    font-family: ${VARIABLES.fontSecondary};
    font-family: ${VARIABLES.fontThirdy};
    border-bottom: solid 1px ${VARIABLES.lightBorderColor};
    padding-bottom: 13px;
    margin: 40px 0 40px 0;
    width: 50%;
    text-align: center;
  }
  .first-title {
    margin: 215px 0 40px 0;

    @media only screen and (min-width: 500px) {
      margin: 159px 0 40px 0;
    }
    @media only screen and (min-width: 768px) {
      margin: 40px 0 40px 0;
    }
  }
`;

export const HomeContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
`;
