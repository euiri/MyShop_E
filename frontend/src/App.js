import {Container} from 'react-bootstrap' 
import {BrowserRouter as Router, Routes, Route} from'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

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
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
    
  );
}

export default App;
