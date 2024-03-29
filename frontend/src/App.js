import {Container} from 'react-bootstrap' 
import {BrowserRouter as Router, Routes, Route} from'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import ProfileScreen from './Screens/ProfileScreen'
import RegisterScreen from './Screens/RegisterScreen'
import OrderScreen from './Screens/OrderScreen';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" exact element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen/>} />
              <Route path="/cart/:id" element={<CartScreen/>} />
              <Route path="/login" element={<LoginScreen/>} />
              <Route path="/shipping" element={<ShippingScreen/>} />
              <Route path="/payment" element={<PaymentScreen/>} />
              <Route path='/placeorder' element={<PlaceOrderScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/order/:id' element={<OrderScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
    
  );
}

export default App;
