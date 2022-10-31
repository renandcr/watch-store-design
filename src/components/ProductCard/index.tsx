import { addProductToCartAction } from "../../store/modules/cart/actions";
import { IDbProducts } from "../../store/modules/dbProducts";
import { useDispatch } from "react-redux";
import Button from "../Button";

import {
  ProductCardContainer,
  DescriptionContainer,
  ImageContainer,
} from "./style";

const ProductCard: React.FC<{ product: IDbProducts }> = ({
  product,
}): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src={product.img} alt="Imagem ilustrativa de um relógio" />
      </ImageContainer>
      <DescriptionContainer>
        <h2>{product.description}</h2>
        <span>{product.price}</span>
        <Button onClick={() => dispatch(addProductToCartAction(product))}>
          Adicionar ao carrinho
        </Button>
      </DescriptionContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
