import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Cart from "./components/Cart/Cart";
import Error from "./components/ErrorPage/Error";
import PaymentOption from "./components/PaymentOption/PaymentOption";
import AddAddress from './components/AddAddress/AddAddress';
import MyOrderHistory from './components/MyOrderHistory/MyOrderHistory';
import ProductsDetails from './components/ProductsDetails/ProductsDetails';
import UploadProduct from "./components/UploadProduct";

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const App = () => {
  return (
    <>
      <ReactNotification />
      <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/auth" component={Auth} exact/>
            <Route path="/product/:id" component={ProductsDetails} exact/>
            <Route path="/cart" component={Cart} exact/>
            <Route path="/addaddress" component={AddAddress} exact/>
            <Route path="/payment" component={PaymentOption} exact/>
            <Route path="/order_history" component={MyOrderHistory} exact/>
            <Route component={Error}/>
      </Switch>
    </>
  );
};

export default App;