import { IDbProducts } from "../../store/modules/dbProducts";
import { RiSubtractLine } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";

import {
  actionRemoveProductFromCart,
  actionSubtractUnits,
  actionAddUnits,
} from "../../store/modules/cart/actions";

import {
  UnitsContainerAndDeletion,
  CartProductCardContainer,
  CartDescriptionContainer,
  AddAndSubtractComponent,
  CartImageContainer,
  SubtractContainer,
  QuantityContainer,
  TrashContainer,
  AddContainer,
} from "./style";

const CartProductCard: React.FC<{ product: IDbProducts }> = ({
  product,
}): JSX.Element => {
  const dispatch = useDispatch();

  const productPrice = product.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CartProductCardContainer>
      <CartImageContainer>
        <img src={product.img} alt="Imagem ilustrativa de um relógio" />
      </CartImageContainer>
      <CartDescriptionContainer>
        <h2>{product.description}</h2>
        <span>{productPrice}</span>
      </CartDescriptionContainer>

      <UnitsContainerAndDeletion>
        <AddAndSubtractComponent>
          <AddContainer onClick={() => dispatch(actionAddUnits(product))}>
            <RiAddLine />
          </AddContainer>
          <QuantityContainer>{product.units}</QuantityContainer>
          <SubtractContainer
            onClick={() => dispatch(actionSubtractUnits(product))}
          >
            <RiSubtractLine />
          </SubtractContainer>
        </AddAndSubtractComponent>
        <TrashContainer
          onClick={() => dispatch(actionRemoveProductFromCart(product))}
        >
          <span>
            <FaTrash />
          </span>
        </TrashContainer>
      </UnitsContainerAndDeletion>
    </CartProductCardContainer>
  );
};

export default CartProductCard;
