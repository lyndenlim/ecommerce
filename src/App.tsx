import './App.css';
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function getProductData() {
      axios.get("https://fakestoreapi.com/products")
        .then((response: AxiosResponse) => {
          setProducts(response.data)
        })
    }

    getProductData()
  }, [])

  return (
    <div className="item-container">
      {products.map(product =>
        <div key={product.id}>
          <div className="item-image-container">
            <img className="item-image" src={product.image} alt={product.title} />
          </div>
          <div>
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
          </div>
        </div>)}
    </div>
  );
}

export default App;
