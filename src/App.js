import './App.css';
import Header from './Components/Layout/Header'
import Home from './Components/Home';
import Footer from './Components/Layout/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Cart from './Components/Cart/Cart';
import Delivery from './Components/Cart/Delivery';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='container container-fluid'>
          <Routes>
            <Route path='/' element={<Home/>} exact />
            <Route path='/eats/stores/:id/menus' element={<Menu/>} exact />
            <Route path='/cart' element={<Cart/>} exact />
            <Route path='/delivery' element={<Delivery/>} exact />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;