import './App.css';
import Footer from './Components/Footer';
import Header from "./Components/Header"
import Login from './Components/Login/Login';
import Product from './Components/Product';
import Slider from "./Components/SliderC"
import Popup from "./Components/Popup"
import Cart from './Components/Cart';
import NotFound from "./Components/NotFound"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Loader from './Components/Loader';
function App() {
  return (
    <div className="App">
       <Router>
     
       <Header/>
       
        <Switch>
         
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/loader">
            <Loader />
          </Route>
          <Route path="/notFound">
            <NotFound />
          </Route>
          <Route path="/modal">
            <Popup />
          </Route>
          <Route path="/">
            <Slider />
            <div className="products">
        <Product />
        </div>
          </Route>
        </Switch>
        <Footer/> 
    </Router>
      
    
     
    </div>
  );
}

export default App;