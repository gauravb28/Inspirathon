import './App.css';
import Footer from './Components/Footer';
import Header from "./Components/Header"
import Login from './Components/Login/Login';
import Product from './Components/Product';
import Slider from "./Components/SliderC"
function App() {
  return (
    <div className="App">
       <Header/>
      {/* <Slider />
      <div className="products">
        <Product />
        </div>
      <Footer/>   */}
      <Login/>
    </div>
  );
}

export default App;