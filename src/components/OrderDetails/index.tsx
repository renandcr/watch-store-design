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
  return (
    <>
      {renderisionType === "all" &&
        user.purchaseOrders.map((current) => (
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
            {current.products.map((product) => (
              <ProductInformation key={product.id}>
                <div className="image-container">
                  <img src={product.img} alt="Imagem ilustrativa de relógio" />
                </div>
                <div className="description-container">
                  <h2>{product.description}</h2>
                  <span>{formatPrices(product.price)}</span>
                  <span>Quantidade: {product.purchase_units}</span>
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
                  {deliveryDate(
                    new Date(
                      user.purchaseOrders[
                        user.purchaseOrders.length - 1
                      ].created_at
                    )
                  )}
                </span>
              </div>
              <div>
                <span>TOTAL</span>{" "}
                <div>
                  <span>
                    {formatPrices(
                      user.purchaseOrders[user.purchaseOrders.length - 1]
                        .total_price
                    )}
                  </span>
                  <span>
                    (incluso frete de{" "}
                    {formatPrices(
                      user.purchaseOrders[user.purchaseOrders.length - 1]
                        .shipping
                    )}
                    )
                  </span>
                </div>
              </div>
            </li>
            <li>
              <span>Número do pedido</span>{" "}
              <span>
                {user.purchaseOrders[user.purchaseOrders.length - 1].id}
              </span>
            </li>
          </OrderDescriptionContainer>
          {user.purchaseOrders[user.purchaseOrders.length - 1].products.map(
            (product) => (
              <ProductInformation key={product.id}>
                <div className="image-container">
                  <img src={product.img} alt="Imagem ilustrativa de relógio" />
                </div>
                <div className="description-container">
                  <h2>{product.description}</h2>
                  <span>{formatPrices(product.price)}</span>
                  <span>Quantidade: {product.purchase_units}</span>
                </div>
              </ProductInformation>
            )
          )}
        </OrderDetailsContainer>
      )}
    </>
  );
};

export default OrderDetails;
