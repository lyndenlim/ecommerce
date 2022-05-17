import './App.css';
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
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
    <div className="App">
      {products.map(product => <div key={product.id}>{product.title}</div>)}
    </div>
  );
}

export default App;
