import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Banner from './components/Banner.js'  
import Product from './components/products.js'
import About from './components/About.js'
import {Cart} from './components/Cart.js'
import { ProductDetails } from './components/ProductDetails.js'
import {createBrowserRouter, Outlet} from "react-router-dom"
import {Provider} from "react-redux";
import appStore from './utils/store.js'
// import New from './components/new.js'
// import Demo from './components/new.js'


// import { useState } from "react";



function App() {

// const[count,setCount]=useState(0)


  return (
    <Provider store={appStore}>
    <div>

      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
       <button onClick={() => setCount(count - 1)}>Decrement</button>
        <h2>Count: {count}</h2> */}
      {/* <New/> */}
      <Navbar />
      <Outlet/>
      {/* <Banner />
      <Header />
      <Product /> */}
      <Footer/>
    </div>
    </Provider>
   
  );
}
  

export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:[<Banner/>,<Header/>,<Product/>]
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:'/productDetails/:_id',
        element:<ProductDetails/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }
])

export default App;
