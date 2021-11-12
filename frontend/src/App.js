import './App.css';
import Footer from './Components/Footer';
import Header from "./Components/Header"
import Login from './Components/Login/Login';
import Product from './Components/Product';
import Slider from "./Components/SliderC"
import Popup from "./Components/Popup"
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App">
       <Header/>
      {/* <Slider />
      <div className="products">
        <Product />
        </div>
      <Footer/>   */}
      <Cart/>
    </div>
  );
}

export default App;