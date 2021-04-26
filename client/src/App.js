import React from "react";
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cart from './Component/cart';

import Header from "./Component/header";
import HomePage from "./Component/homePage";
import Register from "./Component/register";
import SignIn from "./Component/signIn";
import Category from "./Component/category";
import CategoryA1 from "./pages/categoryA1";
import CategoryA2 from "./pages/categoryA2";
import CategoryA3 from "./pages/categoryA3";

import Footer from "./Component/footer";
import ProductPage from "./pages/productPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />


        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/signIn' exact component={SignIn}/>
          <Route path='/category/:category' component={Category}/>
          <Route path='/categoryA1' exact component={CategoryA1}/>
          <Route path='/categoryA2' exact component={CategoryA2}/>
          <Route path='/categoryA3' exact component={CategoryA3}/>
          <Route path='/productPage' exact component={ProductPage}/>
          <Route path='/cart' exact component={Cart}/>



          {/* <Route path='/add' component={AddEvent} />
          <Route path='/edit/:id' component={Edit} />  */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
