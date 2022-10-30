import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import CartPage from "../pages/CartPage";

const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={CartPage} path="/cart-page" />
    </Switch>
  );
};

export default Routes;
