import React, {useState, useEffect} from 'react'
import {commerce} from './lib/commerce'
import {Products, Navbar, Cart, Checkout} from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
    const [products, setProducts] = useState(null)
    const [cart, setCart] = useState(null)

    const fetchPtroducts = async() => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async() => {

        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart)
    }

    const handleUpdatetoCartQty = async(productId, quantity) =>{
        const {cart} = await commerce.cart.update(productId, {quantity})
        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId)
        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.emty();
        setCart(cart);
    }
    
    useEffect(()=> {
        fetchPtroducts();
        fetchCart()
    }, [])
    console.log(cart);
    if(!cart || !products) return (<span>در حال بارگزاری...</span> )
    return (
      <Router>
        <Navbar totalItems={cart.total_items} />
        <div>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdatetoCartQty={handleUpdatetoCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path='/checkout'>
            <Chckout/>
          </Route>
        </div>
      </Router>
    );
}

export default App
