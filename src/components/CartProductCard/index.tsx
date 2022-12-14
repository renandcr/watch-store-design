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
  actionRemoveProductFromCart,
  actionChangeUnits,
} from "../../store/modules/cart/actions";

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

export interface ICartProductCard {
  showDisplay?: boolean;
}

const CartProductCard: React.FC<
  { current: IDbProducts } & ICartProductCard
> = ({ current, showDisplay }): JSX.Element => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const [units, setUnits] = useState<string>(current.units.toString());
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRequest = (
    currentProduct: IDbProducts,
    requestType: string,
    unit_value?: number
  ) => {
    if (!user && requestType === "remove") {
      dispatch(actionRemoveProductFromCart("one", currentProduct));
    } else if (user && requestType === "remove") {
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
    } else if (!user && requestType === "cart_change") {
      dispatch(actionChangeUnits(currentProduct, unit_value));
    } else if ((user && requestType === "cart_change") || requestType === "") {
      api
        .patch(
          `/cart/change_units/${user.id}/${currentProduct.id}`,
          { change_units: { change_type: requestType, units: unit_value } },
          {
            headers: { Authorization: `bearer ${user.token}` },
          }
        )
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
                  value={units}
                  onChange={(e) => {
                    e.preventDefault();
                    setUnits(e.target.value);
                  }}
                />
              </div>
              <span
                className="link-change"
                onClick={() => {
                  handleRequest(current, "", Number(units));
                  setShowInput(false);
                }}
              >
                Atualizar
              </span>
              <span className="bar">|</span>
              <span
                className="link-change"
                onClick={() => {
                  setShowInput(false);
                  setUnits(current.units.toString());
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
          <span
            className="link-change"
            onClick={() => handleRequest(current, "remove")}
          >
            Excluir
          </span>
        </BottomContainer>
      </CartDescriptionContainer>
      <UnitsContainerAndDeletion showDisplay={showDisplay}>
        <AddAndSubtractComponent>
          <AddContainer
            onClick={() => handleRequest(current, "cart_change", 1)}
          >
            <RiAddLine />
          </AddContainer>
          <QuantityContainer>{current.units}</QuantityContainer>
          <SubtractContainer
            onClick={() => handleRequest(current, "cart_change", -1)}
          >
            <RiSubtractLine />
          </SubtractContainer>
        </AddAndSubtractComponent>
        <TrashContainer onClick={() => handleRequest(current, "remove")}>
          <span>
            <FaTrash />
          </span>
        </TrashContainer>
      </UnitsContainerAndDeletion>
    </CartProductCardContainer>
  );
};

export default CartProductCard;
