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

import Watch from "../../assets/images/eight.jpg";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

const CartProductCard: React.FC = (): JSX.Element => {
  return (
    <CartProductCardContainer>
      <CartImageContainer>
        <img src={Watch} alt="Imagem ilustrativa de um relógio" />
      </CartImageContainer>
      <CartDescriptionContainer>
        <h2>Aqui fica a descrição do relógio </h2>
        <span>1.990</span>
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
        <TrashContainer>
          <span>
            <FaTrash />
          </span>
        </TrashContainer>
      </UnitsContainerAndDeletion>
    </CartProductCardContainer>
  );
};

export default CartProductCard;
