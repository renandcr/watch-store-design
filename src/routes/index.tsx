import { Switch, Route } from "react-router-dom";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={CartPage} path="/cart-page" />
    </Switch>
  );
};

export default Routes;
