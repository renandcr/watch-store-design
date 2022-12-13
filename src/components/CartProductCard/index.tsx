import { actionRemoveProductFromCart } from "../../store/modules/cart/actions";
import { formatPrices, handleErrorMessages } from "../../assets/methods";
import { IDbProducts } from "../../store/modules/dbProducts/actions";
import { RiSubtractLine, RiAddLine } from "react-icons/ri";
import { useTypedSelector } from "../../store/modules";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import api from "../../assets/axios";
import { useState } from "react";

import {
  actionUpdateUserState,
  IDatabaseUser,
} from "../../store/modules/user/actions";

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

// import {
//   actionRemoveProductFromCart,
//   actionSubtractUnits,
//   actionAddUnits,
// } from "../../store/modules/cart/actions";

export interface ICartProductCard {
  showDisplay?: boolean;
}

const CartProductCard: React.FC<
  { current: IDbProducts } & ICartProductCard
> = ({ current, showDisplay }): JSX.Element => {
  // const [units, setUnits] = useState<string>(product.purchase_units.toString());
  const [showInput, setShowInput] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();

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
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];

  const handleRequest = (currentProduct: IDbProducts) => {
    if (!user) {
      dispatch(actionRemoveProductFromCart("one", currentProduct));
    } else {
      api
        .delete(`/cart/remove/${user.id}/${currentProduct.product.id}`, {
          headers: { Authorization: `bearer ${user.token}` },
        })
        .then((_) => {
          api
            .get(`/${user.id}`, {
              headers: { Authorization: `bearer ${user.token}` },
            })
            .then((response) => {
              dispatch(actionUpdateUserState(response.data, user.token));
            })
            .catch((err) => console.log(err));
        })
        .catch((err) =>
          handleErrorMessages(err.response.data.message, history)
        );
    }
  };

  return (
    <CartProductCardContainer showDisplay={showDisplay}>
      <CartImageContainer showDisplay={showDisplay}>
        <img src={current.product.img} alt="Imagem ilustrativa de um relógio" />
      </CartImageContainer>
      <CartDescriptionContainer showDisplay={showDisplay}>
        <h2>{current.product.description}</h2>
        <span>{formatPrices(current.product.price)}</span>
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
              {/* <span className="link-change" onClick={handleUnitUpdateEvent}>
                Atualizar
              </span> */}
              <span className="link-change">Atualizar</span>
              <span className="bar">|</span>
              <span
                className="link-change"
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
              <span className="quantity"> {current.units}</span>
              <span className="link-change" onClick={() => setShowInput(true)}>
                Alterar
              </span>
            </div>
          )}
          <span className="link-change" onClick={() => handleRequest(current)}>
            Excluir
          </span>
        </BottomContainer>
      </CartDescriptionContainer>
      <UnitsContainerAndDeletion showDisplay={showDisplay}>
        <AddAndSubtractComponent>
          {/* <AddContainer onClick={() => dispatch(actionAddUnits(product))}> */}
          <AddContainer>
            <RiAddLine />
          </AddContainer>
          <QuantityContainer>{current.units}</QuantityContainer>
          <SubtractContainer
          // onClick={() => dispatch(actionSubtractUnits(product))}
          >
            <RiSubtractLine />
          </SubtractContainer>
        </AddAndSubtractComponent>
        <TrashContainer onClick={() => handleRequest(current)}>
          <span>
            <FaTrash />
          </span>
        </TrashContainer>
      </UnitsContainerAndDeletion>
    </CartProductCardContainer>
  );
};

export default CartProductCard;
