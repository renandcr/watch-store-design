import { actionUpdateUnits } from "../../store/modules/cart/actions";
import { IDbProducts } from "../../store/modules/dbProducts/actions";
import { formatPrices } from "../../assets/methods";
import { RiSubtractLine } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

import {
  UnitsContainerAndDeletion,
  CartProductCardContainer,
  CartDescriptionContainer,
  AddAndSubtractComponent,
  QuantityInputContainer,
  CartImageContainer,
  QuantityContainer,
  SubtractContainer,
  BottomContainer,
  TrashContainer,
  AddContainer,
} from "./style";

import {
  actionRemoveProductFromCart,
  actionSubtractUnits,
  actionAddUnits,
} from "../../store/modules/cart/actions";

export interface ICartProductCard {
  showDisplay?: boolean;
}

const CartProductCard: React.FC<
  { product: IDbProducts } & ICartProductCard
> = ({ product, showDisplay }): JSX.Element => {
  // const [units, setUnits] = useState<string>(product.units.toString());
  const [showInput, setShowInput] = useState<boolean>(false);
  const dispatch = useDispatch();

  // const handleUnitUpdateEvent = () => {
  //   if (units.length) {
  //     if (units === "0") return dispatch(actionRemoveProductFromCart(product));
  //     else {
  //       for (let i = 0; i < units.length; i++) {
  //         if (Number.isNaN(parseInt(units[i]))) {
  //           setUnits(product.units.toString());
  //           return alert("Digite apenas números");
  //         }
  //       }
  //     }
  //   } else return setUnits(product.units.toString());
  //   setShowInput(false);
  //   return dispatch(actionUpdateUnits(product, Number(units)));
  // };

  return (
    <CartProductCardContainer showDisplay={showDisplay}>
      <CartImageContainer showDisplay={showDisplay}>
        <img src={product.img} alt="Imagem ilustrativa de um relógio" />
      </CartImageContainer>
      <CartDescriptionContainer showDisplay={showDisplay}>
        <h2>{product.description}</h2>
        <span>{formatPrices(product.price)}</span>
        <span className="inventory">Em estoque</span>
        <BottomContainer showDisplay={showDisplay}>
          {showInput ? (
            <QuantityInputContainer>
              <div>
                <input
                  type="text"
                  // value={units}
                  onChange={(e) => {
                    e.preventDefault();
                    // setUnits(e.target.value);
                  }}
                />
              </div>
              {/* <span className="units-change" onClick={handleUnitUpdateEvent}>
                Atualizar
              </span> */}
              <span className="bar">|</span>
              <span
                className="units-change"
                onClick={() => {
                  setShowInput(false);
                  // setUnits(product.units.toString());
                }}
              >
                Cancelar
              </span>
            </QuantityInputContainer>
          ) : (
            <div className="units">
              <span className="quantity">Quantidade:</span>
              {/* <span className="quantity"> {product.units}</span> */}
              <span
                className="change units-change"
                onClick={() => setShowInput(true)}
              >
                Alterar
              </span>
            </div>
          )}

          <span
            className="units-change"
            onClick={() => dispatch(actionRemoveProductFromCart(product))}
          >
            Excluir
          </span>
        </BottomContainer>
      </CartDescriptionContainer>
      <UnitsContainerAndDeletion showDisplay={showDisplay}>
        <AddAndSubtractComponent>
          <AddContainer onClick={() => dispatch(actionAddUnits(product))}>
            <RiAddLine />
          </AddContainer>
          {/* <QuantityContainer>{product.units}</QuantityContainer> */}
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
