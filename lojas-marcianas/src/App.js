import { Filters } from './components/Filters/Filters'
import { Home } from './components/ProductList/Home/Home';
import { Cart } from './components/ShoppingCart/Cart/Cart';
import { GlobalStyle } from './GlobalStyle'
import { ContainerApp } from './components/styleApp';
import { productsStock } from './assents/productsList';
import { useState, useEffect } from 'react';
import './App.css';



function App() {
  const [filters, setFilters] = useState({
    minValue: '',
    maxValue: '',
    nameProduct: ''
  })

  const [filteredProducts, setFilteredProducts] = useState([...productsStock])
  const [orderedProducts, setOrderedProducts] = useState([...productsStock])
  const [order, setOrder] = useState('')

  /* 1 - Filter: A função de filtar é dividida em duas etapas
         1º Coleta de dados usando o evento onChage, do meu elemento jsx que representa um select html
   
 */
  const onChangeSetFilters = (event) => {
    const key = event.target.id
    setFilters({ ...filters, [key]: event.target.value })
  }


  useEffect(() => {

    let filtered = [...productsStock]

    if (filters.minValue) {
      filtered = filtered.filter(product => product.value >= Number(filters.minValue))
    }

    if (filters.maxValue) {
      filtered = filtered.filter(product => product.value <= Number(filters.maxValue))
    }

    if (filters.nameProduct) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(filters.nameProduct.toLowerCase()))
    }

    setFilteredProducts(filtered)
  }, [filters])

  useEffect(() => {
    let ordered = [...filteredProducts]

    switch (order) {
      case 'decrescent':
        ordered = ordered.sort((a, b) => b.value - a.value);
        break;
      case 'crescent':
        ordered = ordered.sort((a, b) => a.value - b.value);
        break;
      default:
        break;
    }

    setOrderedProducts(ordered);
  }, [order, filteredProducts])

  const onChangeValueSelect = (event) => {
    setOrder(event.target.value)
  }

  return (
    <ContainerApp className="App">
      <GlobalStyle />
      <Filters onChangeSetFilters={onChangeSetFilters} />
      <Home products={orderedProducts} onChangeValueSelect={onChangeValueSelect} order={order} />
      <Cart />
    </ContainerApp>
  );
}

export default App;