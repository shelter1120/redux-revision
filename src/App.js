import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
   const showCart =useSelector((state)=> state.ui.cartIsVisible);
  return (
    <Layout>
      <Cart />
    { showCart && <Products />}  
     </Layout>
  );
}

export default App;
