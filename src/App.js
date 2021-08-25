import React, {useState, useEffect} from 'react'
import {commerce} from './lib/commerce'
import {Products, Navbar, Cart, Checkout, Categories} from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./App.css";


const App = () => {
    const [products, setProducts] = useState(null)
    const [cart, setCart] = useState(null)
    const [categories, setCategories] = useState(null)

    const fetchPtroducts = async() => {
        const {data} = await commerce.products.list();


        setProducts(data);
    }

    const fetchCategories = async() => {
      const data = await commerce.categories.list();
//commerce.categories.list().then((category) => console.log(category));

      console.log(11)
      setCategories(data.data);
      if(data);
      console.log(data.data[0])
      console.log(data.data);

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
        const {cart} = await commerce.cart.emtpy();
        setCart(cart);
    }
    
    useEffect(()=> {
        fetchPtroducts();
        fetchCart();
        fetchCategories();
    }, [])

    if(!cart || !products) return (<span>در حال بارگزاری...</span> )

    return (
      <Router>
        <Navbar className='font-is' totalItems={cart.total_items} />
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
            <Checkout cart={cart}/>
          </Route>
          <Route exact path='/categories'>
            <Categories categories={categories}/>
          </Route>
        </div>
      </Router>
    );
}

export default App
