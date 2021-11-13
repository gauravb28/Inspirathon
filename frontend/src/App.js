import React, { useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login/Login';
import Product from './Components/Product';
import Slider from './Components/SliderC';
import Popup from './Components/Popup';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Loader from './Components/Loader';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import ErrorMessage from './Components/ErrorMessage';
import Products from './Components/Products';
import PrivateRoute from './PrivateRoute';

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/loader" component={Loader}></Route>
          <Route exact path="/login" component={Login}></Route>
          <PrivateRoute exact path="/products">
            <Slider />
            <Products />
          </PrivateRoute>
          <PrivateRoute exact path="/modal" component={Popup}></PrivateRoute>
          <PrivateRoute exact path="/cart" component={Cart}></PrivateRoute>
          <Route path="/error" component={ErrorMessage}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
