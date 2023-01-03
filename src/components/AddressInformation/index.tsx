import { IAddressesDatabase } from "../../store/modules/user/actions";
import MasterCard from "../../assets/images/icon-master-card.png";
import { IDatabaseUser } from "../../store/modules/user/actions";
import { useTypedSelector } from "../../store/modules";
import { AddressInformationContainer } from "./style";
import { Link } from "react-router-dom";

export interface IAddressInformation {
  showDisplay?: boolean;
  border?: boolean;
}

const AddressInformation: React.FC<
  { address: IAddressesDatabase | undefined } & IAddressInformation
> = ({ showDisplay, border, address }): JSX.Element => {
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];

  return (
    <AddressInformationContainer showDisplay={showDisplay} border={border}>
      <ul>
        <li className="weight">
          Endereço de entrega{" "}
          <Link to="/my-addresses-page">
            <span className="link-change">Alterar</span>
          </Link>
        </li>
        <li className="upper name">
          {user.name} {user.last_name}
        </li>
        <li className="upper">
          {address?.street} {address?.house_number}
        </li>
        <li className="upper">
          {address?.complement} {address?.district}
        </li>
        <li>
          {address?.city}, {address?.state} {address?.zip_code}
        </li>
        <li>Brasil</li>
        <li>Telefone: {address?.phone}</li>
        <li className="form-of-payment">
          <span className="weight">Forma de pagamento</span>
          <span
            className="link-change"
            onClick={() =>
              alert(
                "Desculpe, por enquanto esta ação ainda não está habilitada"
              )
            }
          >
            Alterar
          </span>
        </li>

        <li className="flag-card weight">
          <img src={MasterCard} alt="Bandeira MasterCard" />
          <span>(Crédito) com final 4321</span>
        </li>
      </ul>
    </AddressInformationContainer>
  );
};

export default AddressInformation;
