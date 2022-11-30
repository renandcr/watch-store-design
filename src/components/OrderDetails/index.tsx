import { IDbProducts } from "../../store/modules/dbProducts/actions";
import { formatPrices } from "../../assets/methods";
import { OrderDetailsContainer } from "./style";

const OrderDetails: React.FC<{ product: IDbProducts }> = ({
  product,
}): JSX.Element => {
  return (
    <OrderDetailsContainer>
      <div className="image-container">
        <img src={product.img} alt="Imagem ilustrativa de relógio" />
      </div>
      <div className="description-container">
        <h2>{product.description}</h2>
        <span>{formatPrices(product.price)}</span>
        {/* <span>Quantidade: {product.units}</span> */}
      </div>
    </OrderDetailsContainer>
  );
};

export default OrderDetails;
