import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";
// pages
import Home from "./pages/Home";
import WomensClothing from "./pages/WomensClothing";
import MensClothing from "./pages/MensClothing";
import KidsClothing from "./pages/KidsClothing";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Shoes from "./pages/Shoes";

// api's
import { productsData } from "./api/data";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={productsData} />
      <Route path="womens-clothing" element={<WomensClothing />} />
      <Route path="mens-clothing" element={<MensClothing />} />
      <Route path="kids-clothing" element={<KidsClothing />} />
      <Route path="shoes" element={<Shoes />} />
      <Route path="account" element={<Account />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
