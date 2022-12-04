import { actionAddProductToCart } from "../../store/modules/cart/actions";
import { IDbProducts } from "../../store/modules/dbProducts/actions";
import { useTypedSelector } from "../../store/modules";
import { formatPrices } from "../../assets/methods";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
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

const ProductCard: React.FC<{ product: IDbProducts }> = ({
  product,
}): JSX.Element => {
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const dispatch = useDispatch();

  const handleRequest = (product: IDbProducts) => {
    if (!user) {
      dispatch(actionAddProductToCart(product));
    } else {
      api
        .post(
          `/cart/add/${user.id}`,
          { product_id: [product.id] },
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
        .catch((_) => {
          toast.error("Desculpe, você já adicionou este item ao carrinho");
        });
    }
  };

  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src={product.img} alt="Imagem ilustrativa de um relógio" />
      </ImageContainer>
      <DescriptionContainer>
        <h2>{product.description}</h2>
        <span className="inventory">Em estoque</span>
        <span>{formatPrices(product.price)}</span>
        <Button
          onClick={() => {
            handleRequest(product);
          }}
        >
          Adicionar ao carrinho
        </Button>
      </DescriptionContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
