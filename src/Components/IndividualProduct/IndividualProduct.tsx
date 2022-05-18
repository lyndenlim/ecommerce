import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Product } from "../../model"
import "./IndividualProduct.css"

const IndividualProduct: React.FC = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        async function getProductInfo() {
            axios.get(`https://fakestoreapi.com/products/${id}`)
                .then((data: AxiosResponse) => {
                    setProduct(data.data)
                })
        }

        getProductInfo()
    }, [])


    return (
        product ?
            <div className="individual-item-container">
                <img className="single-item-image" src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
            </div>
            :
            null
    )
}

export default IndividualProduct