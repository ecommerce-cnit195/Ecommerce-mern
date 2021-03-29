import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Component/Authenication/Register';
import SignIn from './Component/Authenication/Signin';
import NavBar from './Component/Navbar/Navbar';
import Cart from './Component/Cart/Cart';

import Header from "./Component/Header";
import HomePage from "./Component/HomePage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />


        <Switch>
          <Route path='/' exact component={HomePage} />

          <Route path='/SignIn' exact component={SignIn} />
          <Route path='/Register' exact component={Register} />
          <Route path='/Cart' component={Cart} />





          {/* <Route path='/add' component={AddEvent} />
          <Route path='/edit/:id' component={Edit} />  */}
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
