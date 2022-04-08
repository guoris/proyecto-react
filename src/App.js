import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';
import Products from './pages/Products';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/CartPage'
import AppContextProvider from './components/context/AppContext';


function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:categoryId" component={Products} />
          <Route exact path="/item/:itemId" component={ProductDetail} />
          <Route exact path="/cart/" component={Cart} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
