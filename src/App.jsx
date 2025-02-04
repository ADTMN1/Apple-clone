import { Route, Routes } from "react-router-dom";
import SharedLayout from "./FunctionalComponent/SharedLayout";
import Main from "./FunctionalComponent/Main";
import Cart from "./FunctionalComponent/Pages/Cart/Cart";
import Mac from "./FunctionalComponent/Pages/Mac/Mac";
import Ipad from "./FunctionalComponent/Pages/Ipad/Ipad";
import Iphone from "./FunctionalComponent/Pages/Iphone/Iphone";
import Support from "./FunctionalComponent/Pages/Support/Support";
import Tv from "./FunctionalComponent/Pages/Tv/Tv";
import Watch from "./FunctionalComponent/Pages/Watch/Watch";
import Four04 from "./FunctionalComponent/Pages/Four04/Four04";
import Product from "./FunctionalComponent/Pages/Product/Product";
import Music from "./FunctionalComponent/Pages/Music/Music";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* Nested routes for main pages */}
        <Route index element={<Main />} />
        <Route path="cart" element={<Cart />} />
        <Route path="mac" element={<Mac />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="/iphone/:productName" element={<Product />} />
        <Route path="music" element={<Music />} />
        <Route path="support" element={<Support />} />
        <Route path="watch" element={<Watch />} />
        <Route path="tv" element={<Tv />} />

        {/* Fallback route for 404 */}
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
