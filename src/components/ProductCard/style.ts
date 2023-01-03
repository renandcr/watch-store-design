import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";
import { IProductCard } from ".";

export const ProductCardContainer = styled.li<IProductCard>`
  width: 240px;
  border-radius: 4px;
  margin: 0 5px 30px 5px;
  font-weight: 500;
  background-color: ${VARIABLES.colorBlue1};
  box-shadow: ${VARIABLES.colorShadow1};
  text-align: left;
  opacity: ${(props) => props.unavailable && "35%"};

  @media only screen and (min-width: 420px) {
    width: 200px;
    margin: 0 5px 10px 5px;
  }
  @media only screen and (min-width: 720px) {
    margin: 0 20px 40px 20px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 42px 42px 42px;
  }
`;

export const ImageContainer = styled.div<IProductCard>`
  max-width: 100%;
  overflow: hidden;
  margin: 3px 3px 10px 3px;
  border-radius: 4px 4px 0 0;
  height: 234px;
  img {
    max-width: 100%;
    transition: all 0.5s;
    :hover {
      transform: ${(props) => !props.unavailable && "scale(1.5)"};
    }
  }

  @media only screen and (min-width: 420px) {
    height: 190px;
  }
`;

export const DescriptionContainer = styled.div<IProductCard>`
  max-width: 100%;
  padding: 0 10px 10px 10px;
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
    color: ${VARIABLES.colorRed3};
    font-size: ${VARIABLES.fontSize3};
    font-weight: 500;
  }
  .inventory {
    color: ${(props) =>
      props.unavailable ? VARIABLES.colorRed2 : VARIABLES.colorGreen2};
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .price {
    opacity: ${(props) => props.unavailable && "0%"};
  }
  button {
    pointer-events: ${(props) => props.unavailable && "none"};
  }
`;
