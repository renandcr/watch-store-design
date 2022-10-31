import { removeProductFromCartAction } from "../../store/modules/cart/actions";
import { IDbProducts } from "../../store/modules/dbProducts";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";

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
          <AddContainer>
            <IoIosAdd />
          </AddContainer>
          <QuantityContainer>1</QuantityContainer>
          <SubtractContainer>
            <RiSubtractLine />
          </SubtractContainer>
        </AddAndSubtractComponent>
        <TrashContainer
          onClick={() => dispatch(removeProductFromCartAction(product))}
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
