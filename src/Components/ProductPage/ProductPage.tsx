import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import "./ProductPage.css"
import { Product } from "../../model"

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function getAllProductData() {
      axios.get("https://fakestoreapi.com/products")
        .then((response: AxiosResponse) => {
          setProducts(response.data)
        })
    }

    getAllProductData()
  }, [])

  return (
    <div className="item-container">
      {products.map(product =>
        <Link key={product.id} to={`/products/${product.id}`}>
          <div>
            <div className="item-image-container">
              <img className="item-image" src={product.image} alt={product.title} />
            </div>
            <div>
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>${product.price.toFixed(2)}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default ProductPage