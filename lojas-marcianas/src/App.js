import { Filters } from './components/Filters/Filters'
import { Home } from './components/ProductList/Home/Home';
import { Cart } from './components/ShoppingCart/Cart/Cart';
import { GlobalStyle } from './GlobalStyle'
import { ContainerApp } from './components/styleApp';
import { productsStock } from './assents/productsList';
import { useState } from 'react';
import './App.css';



function App() {
  const [products, setProducts] = useState(productsStock)


  const onClickSetProducts = (event) => {
    let newOrder = products

    switch (event.target.value) {
      case 'decrescent':
        newOrder = [...products].sort((a, b) => b.value - a.value);
        break;
      case 'crescent':
        newOrder = [...products].sort((a, b) => a.value - b.value);
        break;
      default:
    }
    setProducts(newOrder)
  }



  return (
    <ContainerApp className="App">
      <GlobalStyle />
      <Filters />
      <Home onClickSetProducts={onClickSetProducts} products={products} />
      <Cart />
    </ContainerApp>
  );
}

export default App;
