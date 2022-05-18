import ProductPage from "./Components/ProductPage/ProductPage"
import IndividualProduct from "./Components/IndividualProduct/IndividualProduct"
import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"

const App: React.FC = () => {
  return (
    <div className="item-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/products/:id" element={<IndividualProduct />} />
      </Routes>
    </div>
  );
}

export default App;
