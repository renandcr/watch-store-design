import MasterCard from "../../assets/images/icon-master-card.png";
import { IDatabaseUser } from "../../store/modules/user/actions";
import { useTypedSelector } from "../../store/modules";
import { AddressInformationContainer } from "./style";
import { Link } from "react-router-dom";

export interface IAddressInformation {
  showDisplay?: boolean;
  border?: boolean;
}

const AddressInformation: React.FC<IAddressInformation> = ({
  showDisplay,
  border,
}): JSX.Element => {
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const mainAddress = user.addresses.find((address) => {
    return address.main === true;
  });

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
          {mainAddress?.street} {mainAddress?.house_number}
        </li>
        <li className="upper">
          {mainAddress?.complement} {mainAddress?.district}
        </li>
        <li>
          {mainAddress?.city}, {mainAddress?.state} {mainAddress?.zip_code}
        </li>
        <li>Brasil</li>
        <li>Telefone: {mainAddress?.phone}</li>
        <li className="weight">
          Forma de pagamento
          <Link to="/checkout-page">
            <span className="link-change">Alterar</span>
          </Link>
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
