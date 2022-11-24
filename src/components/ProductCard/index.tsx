import { actionAddProductToCart } from "../../store/modules/cart/actions";
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

  const productPrice = product.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src={product.img} alt="Imagem ilustrativa de um relógio" />
      </ImageContainer>
      <DescriptionContainer>
        <h2>{product.description}</h2>
        <span className="inventory">Em estoque</span>
        <span>{productPrice}</span>
        <Button onClick={() => dispatch(actionAddProductToCart(product))}>
          Adicionar ao carrinho
        </Button>
      </DescriptionContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
