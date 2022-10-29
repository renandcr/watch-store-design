import { IDbProducts } from "../../store/modules/dbProducts";
import {
  ProductCardContainer,
  DescriptionContainer,
  ImageContainer,
} from "./style";
import Button from "../Button";

const ProductCard: React.FC<{ product: IDbProducts }> = ({
  product,
}): JSX.Element => {
  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src={product.img} alt="Imagem ilustrativa de um relógio" />
      </ImageContainer>
      <DescriptionContainer>
        <h2>{product.description}</h2>
        <span>{product.price}</span>
        <Button>Adicionar ao carrinho</Button>
      </DescriptionContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
