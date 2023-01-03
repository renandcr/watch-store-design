import { actionAddProductToCart } from "../../store/modules/cart/actions";
import { formatPrices, handleErrorMessages } from "../../assets/methods";
import { IDbProducts } from "../../store/modules/dbProducts/actions";
import { useTypedSelector } from "../../store/modules";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "../../assets/axios";
import Button from "../Button";

import {
  actionUpdateUserState,
  IDatabaseUser,
} from "../../store/modules/user/actions";

import {
  ProductCardContainer,
  DescriptionContainer,
  ImageContainer,
} from "./style";

export interface IProductCard {
  unavailable: boolean;
}

const ProductCard: React.FC<{ current: IDbProducts }> = ({
  current,
}): JSX.Element => {
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRequest = (currentProduct: IDbProducts) => {
    if (!user) {
      dispatch(actionAddProductToCart(currentProduct));
    } else {
      api
        .post(
          `/cart/add/${user.id}`,
          {
            add_products: {
              request_type: "",
              products: [currentProduct],
            },
          },
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
    <ProductCardContainer
      unavailable={current.product.stock_quantity < 1 ? true : false}
    >
      <ImageContainer
        unavailable={current.product.stock_quantity < 1 ? true : false}
      >
        <img src={current.product.img} alt="Imagem ilustrativa de um relógio" />
      </ImageContainer>
      <DescriptionContainer
        unavailable={current.product.stock_quantity < 1 ? true : false}
      >
        <h2>{current.product.description}</h2>
        <span className="inventory">
          {current.product.stock_quantity < 1 ? "Esgotado" : "Em estoque"}
        </span>
        <span className="price">{formatPrices(current.product.price)}</span>
        <Button
          onClick={() => {
            handleRequest(current);
          }}
        >
          {current.product.stock_quantity > 0
            ? "Adicionar ao carrinho"
            : "Produto indisponível"}
        </Button>
      </DescriptionContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
