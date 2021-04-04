import React from "react";
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Register from './Component/Authenication/Register';
// import SignIn from './Component/Authenication/Signin';
import NavBar from './Component/Navbar/Navbar';
import Cart from './Component/cart';

import Header from "./Component/header";
import HomePage from "./Component/homePage";
import Register from "./Component/register";
import SignIn from "./Component/signIn";
import CategoryA from "./Component/categoryA";
import CategoryA1 from "./Component/categoryA1";
import CategoryA2 from "./Component/categoryA2";
import CategoryA3 from "./Component/categoryA3";
import Product from "./Component/product";
import Footer from "./Component/footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />


        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/signIn' exact component={SignIn}/>
          <Route path='/categoryA' exact component={CategoryA}/>
          <Route path='/categoryA1' exact component={CategoryA1}/>
          <Route path='/categoryA2' exact component={CategoryA2}/>
          <Route path='/categoryA3' exact component={CategoryA3}/>
          <Route path='/product' exact component={Product}/>
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
