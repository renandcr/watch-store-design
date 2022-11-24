import CompletedPurchasePage from "../pages/CompletedPurchasePage";
import RegistrationPage from "../pages/RegistrationPage";
import { MyRequestsPage } from "../pages/MyRequestsPage";
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
      <Route component={MyRequestsPage} path="/my-requests-page" />
      <Route component={MyAddressesPage} path="/my-addresses-page" />
      <Route component={RegistrationPage} path="/registration-page" />
      <Route
        component={CompletedPurchasePage}
        path="/completed-purchase-page"
      />
    </Switch>
  );
};

export default Routes;
