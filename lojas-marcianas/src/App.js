import { Filters } from './components/Filters/Filters'
import { Home } from './components/ProductList/Home/Home';
import { Cart } from './components/ShoppingCart/Cart/Cart';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle'
import { ContainerApp } from './components/styleApp';
import { productsStock } from './assets/productsList';
import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [filters, setFilters] = useState({
    minValue: '',
    maxValue: '',
    nameProduct: ''
  })

  const recoverStorageCart = () => {
    return JSON.parse(localStorage.getItem('cart'))
  }

  const [order, setOrder] = useState('')
  const [cart, setCart] = useState(recoverStorageCart() ? recoverStorageCart() : [])
  const [listProducts, setListProducts] = useState([...productsStock])
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    const newStock = productsStock.filter((product) => {
      return filters.minValue ? product.value >= filters.minValue : product
    })
      .filter((product) => {
        return filters.maxValue ? product.value <= filters.maxValue : product
      })
      .filter((product) => {
        return product.name.toLocaleLowerCase().includes(filters.nameProduct.toLocaleLowerCase())
      })
      .sort((a, b) => {
        if (order === "crescent") {
          return a.value - b.value
        }

        if (order === "decrescent") {
          return b.value - a.value
        }

        return 0
      },)

    setListProducts(newStock)

  }, [filters, order])

  const onChangeSetFilters = (event, value) => {

    if (event) {
      const key = event.target.id
      setFilters({ ...filters, [key]: event.target.value })
    } else {
      setFilters({ ...Filters, nameProduct: value })
    }

  }

  const amountCart = cart.reduce((accumulator, product) => {
    return accumulator + product.amount
  }, 0)

  const onChangeValueSelect = (event) => {
    setOrder(event.target.value)
  }

  const addCart = (event, quantityItem, click) => {

    const item = productsStock.find((product) => {
      return product.id === Number(event.target.id)
    })

    let newItem

    if (!cart.find(product => product.id === item.id)) {
      newItem = { ...item, quantity: 1, amount: item.value }

      setCart([...cart, newItem])
    } else {
      newItem = [...cart]
      const index = cart.findIndex(product => product.id === item.id)

      if (quantityItem && !click) {
        newItem[index].quantity = quantityItem
        newItem[index].amount = quantityItem * newItem[index].value
      } else {

        if (click && quantityItem) {
          newItem[index].quantity += quantityItem
          newItem[index].amount += newItem[index].value * quantityItem
        } else if (click) {
          newItem[index].quantity += 1
          newItem[index].amount += newItem[index].value
        } else {
          newItem[index].quantity = ""
          newItem[index].amount = ""
        }

      }

      setCart(newItem)
    }

  }

  const removeProductCart = (event) => {
    const removed = cart.filter((item) => item.id !== Number(event.target.id))
    setCart(removed)
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleSetShowCart = () => {
    setShowCart(showCart ? false : true)
  }

  return (
    <>
      <Header onChangeSetFilters={onChangeSetFilters} handleSetShowCart={handleSetShowCart} />
      <ContainerApp className="App">
        <GlobalStyle />
        <Filters onChangeSetFilters={onChangeSetFilters} />
        <Home products={listProducts} onChangeValueSelect={onChangeValueSelect} order={order} addCart={addCart} />
        {showCart ? <Cart cart={cart} addCart={addCart} amountCart={amountCart} removeProductCart={removeProductCart} showCart={showCart} /> : false}
      </ContainerApp>
    </>
  );
}

export default App;