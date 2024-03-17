import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wishlist from './Components/Wishlist';
import NoPage from './Components/NoPage';
import Home from './Components/Home';
import Layout from './Layout/Layout';
import Basket from './Components/Basket';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
