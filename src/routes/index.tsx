import CompletedPurchasePage from "../pages/CompletedPurchasePage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import RegistrationPage from "../pages/RegistrationPage";
import { MyRequestsPage } from "../pages/MyRequestsPage";
import MyAddressesPage from "../pages/MyAddressesPage";
import MyAccountPage from "../pages/MyAccountPage";
import { Switch, Route } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route component={PrivacyPolicyPage} path="/privacy-policy-page" />
      <Route component={RegistrationPage} path="/registration-page" />
      <Route component={MyAddressesPage} path="/my-addresses-page" />
      <Route component={MyRequestsPage} path="/my-requests-page" />
      <Route component={MyAccountPage} path="/my-account-page" />
      <Route component={CheckoutPage} path="/checkout-page" />
      <Route component={LoginPage} path="/login-page" />
      <Route component={CartPage} path="/cart-page" />
      <Route component={Home} path="/" exact />
      <Route
        component={CompletedPurchasePage}
        path="/completed-purchase-page"
      />
    </Switch>
  );
};

export default Routes;
