import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const ProductCardContainer = styled.li`
  width: 240px;
  border-radius: 4px;
  margin: 0 20px 30px 20px;
  font-weight: 500;
  background-color: ${VARIABLES.colorBlue1};
  box-shadow: ${VARIABLES.colorShadow1};
  text-align: left;

  @media only screen and (min-width: 720px) {
    width: 200px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 42px 42px 42px;
  }
`;

export const ImageContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  margin: 3px 3px 10px 3px;
  img {
    max-width: 100%;
    border-radius: 4px 4px 0 0;
    transition: all 0.3s;
    :hover {
      transform: scale(1.5);
    }
  }

  @media only screen and (min-width: 720px) {
    height: 190px;
  }
`;

export const DescriptionContainer = styled.div`
  max-width: 100%;
  padding: 0 10px 13px 10px;
  h2 {
    height: 40px;
    margin-bottom: 10px;
    line-height: 20px;
    font-size: ${VARIABLES.fontSize2};
    color: #ffffff;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  span {
    display: block;
    margin-bottom: 10px;
    color: ${VARIABLES.colorSecondary};
    font-size: ${VARIABLES.fontSize3};
  }
  .inventory {
    color: ${VARIABLES.colorGreen2};
    font-size: 11px;
  }
`;
