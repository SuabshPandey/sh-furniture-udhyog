import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../home/Home";
import Admin from "../admin/Admin";
import Dashboard from "../admin/pages/Dashboard";
import ProductAdmin from "../admin/pages/ProductAdmin";
import OrdersAdmin from "../admin/pages/OrdersAdmin";
import Customer from "../admin/pages/Customer";
import PlaceOrder from "../placeOrder/PlaceOrder";
import Products from "../product/Products";
import ProductDetail from "../productDetaiil/ProductDetail";
import AboutUs from "../aboutus/AboutUs";
import Contact from "../contact/Contact";
import Privacy from "../privacy/Privacy";
import Refund from "../refund/Refund";
import AdminUser from "../login/AdminUser";

const HomeRoute = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/placeorder" component={PlaceOrder} />
        {/* <Route path="/placeorder/:name" component={PlaceOrder} /> */}
        <Route path="/productdetails/:name" component={ProductDetail} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        {/* <Route path="/refund" component={Refund} />   */}




        <Route path="/dashboard" component={Admin} />
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/adminproduct" component={ProductAdmin} />
        <Route path="/admin/orderproduct" component={OrdersAdmin} />
        <Route path="/admin/customers" component={Customer} />
        <Route path="/adminlogin" component={AdminUser} />
        {/* <Route path="/adminproduct" component={ProductAdmin} /> */}
      </Switch>
    </div>
  );
};

export default HomeRoute;
