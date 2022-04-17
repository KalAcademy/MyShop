import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from "./components/Footer.js";
import Header from "./components/Header";
import CartScreen from './screens/CartScreen.js';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen.js';
import PaymentScreen from './screens/PaymentScreen.js';
import PlaceOrderScreen from './screens/PlaceOrderScreen.js';
import OrderScreen from './screens/OrderScreen.js';

//arrow functions
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/login' element={<LoginScreen />} />
               <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/register' element={<RegisterScreen />} />              
              <Route path='/shipping' element={<ShippingScreen />} />              
              <Route path='/payment' element={<PaymentScreen />} />
              <Route path='/placeorder' element={<PlaceOrderScreen />} />
              <Route path='/order/:id' element={<OrderScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/:id' element={<CartScreen />} />
              <Route path='/cart' element={<CartScreen />} />
             </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
