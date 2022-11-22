import RegistrationPage from "../pages/RegistrationPage";
import MyAddressesPage from "../pages/MyAddressesPage";
import { Switch, Route } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={CartPage} path="/cart-page" />
      <Route component={LoginPage} path="/login-page" />
      <Route component={CheckoutPage} path="/checkout-page" />
      <Route component={MyAddressesPage} path="/my-addresses-page" />
      <Route component={RegistrationPage} path="/registration-page" />
    </Switch>
  );
};

export default Routes;
