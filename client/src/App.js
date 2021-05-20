import React, {useState} from "react";
import './App.css';
import { Switch, Route, BrowserRouter,Redirect } from 'react-router-dom';
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
import ProductPage from "./Component/productPage";
import SearchPage from "./Component/searchPage";
import Admin from "./Component/admin";


function App() {
  const [ifSearch, setIfSearch] = useState(false);

  console.log("filterSearch,",JSON.parse(localStorage.getItem("filterProducts")));
  const filterSearch = JSON.parse(localStorage.getItem("filterProducts"));
  const searchProducts = JSON.parse(localStorage.getItem("Products" ));
  const categoriesForHeader = JSON.parse(localStorage.getItem("categoriesForHeader"));
  console.log("searchProducts,",searchProducts);
  console.log("categoriesForHeader,",categoriesForHeader);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header setSearch={setIfSearch} searchProducts={searchProducts} categoriesForHeader={categoriesForHeader}/>


        <Switch>
          {/* <Route path='/' exact component={HomePage}/> */}
          <Route exact={true} path='/' render={(props) => (<HomePage {...props} /> )} />
          <Route path='/register' exact component={Register}/>
          <Route path='/signIn' exact component={SignIn}/>
          <Route path='/category/:category' component={Category}/>
          <Route path='/categoryA1' exact component={CategoryA1}/>
          <Route path='/categoryA2' exact component={CategoryA2}/>
          <Route path='/categoryA3' exact component={CategoryA3}/>
          <Route path='/productPage/:id' component={ProductPage}/>
          <Route path='/cart' exact component={Cart}/>
          <Route path='/searchPage' render={(props) => <SearchPage {...props} filterSearch={filterSearch}/>} />
         {/* <Route path='/add' component={AddEvent} />
          <Route path='/edit/:id' component={Edit} />  */}
          <Route path='/admin' component={Admin} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
