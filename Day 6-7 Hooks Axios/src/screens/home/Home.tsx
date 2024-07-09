import React, { useEffect } from "react";
import axios from "axios";

interface Rating{
    "rate": number,
    "count": number
}
interface product {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": Rating
}
export const Home: React.FC = () => {
    const [products, setProducts] = React.useState<product[]>([]);
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    })
    return (
        <div className="container">
        <div className="product-container">
            {products.map((product) => {
                return (
                    <div className="product">
                        <div className="image"><img  src={product.image} alt="" /></div>
                        <div className="product-content">
                        <ul>
                            <li>{product.title}</li>
                            <li>{product.rating.rate}</li>
                            <li>{product.rating.count}</li>
                        </ul>
                        </div>
                        <div className="product-description">{product.description}</div>
                        <div className="product-price">
                            <ul>
                                <li>{product.price}</li>
                                <li>{product.category}</li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    );
};