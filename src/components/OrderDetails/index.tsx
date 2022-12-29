import { formatPrices, deliveryDate } from "../../assets/methods";
import { IDatabaseUser } from "../../store/modules/user/actions";

import {
  OrderDescriptionContainer,
  OrderDetailsContainer,
  ProductInformation,
} from "./style";

export interface IOrderDetails {
  renderisionType: string;
}

const OrderDetails: React.FC<{ user: IDatabaseUser } & IOrderDetails> = ({
  user,
  renderisionType,
}): JSX.Element => {
  const purchaseOrders = user.purchaseOrders.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <>
      {renderisionType === "all" &&
        purchaseOrders.map((current) => (
          <OrderDetailsContainer key={current.id}>
            <OrderDescriptionContainer>
              <li>
                <div>
                  <span>Compra realizada no dia</span>
                  <span>{deliveryDate(new Date(current.created_at))}</span>
                </div>
                <div>
                  <span>TOTAL</span>{" "}
                  <div>
                    <span>{formatPrices(current.total_price)}</span>
                    <span>
                      (incluso frete de {formatPrices(current.shipping)})
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <span>Número do pedido</span> <span>{current.id}</span>
              </li>
            </OrderDescriptionContainer>
            {current.products.map((current) => (
              <ProductInformation key={current.product.id}>
                <div className="image-container">
                  <img
                    src={current.product.img}
                    alt="Imagem ilustrativa de relógio"
                  />
                </div>
                <div className="description-container">
                  <h2>{current.product.description}</h2>
                  <span>{formatPrices(current.final_price)}</span>
                  <span>Quantidade: {current.units}</span>
                </div>
              </ProductInformation>
            ))}
          </OrderDetailsContainer>
        ))}

      {renderisionType === "one" && (
        <OrderDetailsContainer>
          <OrderDescriptionContainer>
            <li>
              <div>
                <span>Compra realizada no dia</span>
                <span>
                  {deliveryDate(new Date(purchaseOrders[0].created_at))}
                </span>
              </div>
              <div>
                <span>TOTAL</span>{" "}
                <div>
                  <span>{formatPrices(purchaseOrders[0].total_price)}</span>
                  <span>
                    (incluso frete de {formatPrices(purchaseOrders[0].shipping)}
                    )
                  </span>
                </div>
              </div>
            </li>
            <li>
              <span>Número do pedido</span> <span>{purchaseOrders[0].id}</span>
            </li>
          </OrderDescriptionContainer>
          {purchaseOrders[0].products.map((current) => (
            <ProductInformation key={current.product.id}>
              <div className="image-container">
                <img
                  src={current.product.img}
                  alt="Imagem ilustrativa de relógio"
                />
              </div>
              <div className="description-container">
                <h2>{current.product.description}</h2>
                <span>{formatPrices(current.final_price)}</span>
                <span>Quantidade: {current.units}</span>
              </div>
            </ProductInformation>
          ))}
        </OrderDetailsContainer>
      )}
    </>
  );
};

export default OrderDetails;
