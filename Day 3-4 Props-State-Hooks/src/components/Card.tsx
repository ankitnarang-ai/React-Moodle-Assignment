import { useState } from "react"

// Define an interface for the product structure
interface Product {
    name: string;
    price: number;
    description: string;
}

function ProductCard() {
    // Explicitly type the products state
    const [products, setProducts] = useState<Product[]>([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const myProduct: Product = {
        name: 'Scenery',
        price: 100,
        description: 'This is a Scenery',
    }

    const IsLoggedIn = () => {
        setIsLoggedIn(true)
        return alert("you are logged In")
    }
    const IsLoggedOut = () => {
        setIsLoggedIn(false)
        return alert("you are logged Out")
    }

    const AddProduct = () => {
        if(!isLoggedIn){
            return alert('Please login first')
        }
        setProducts([...products, myProduct])
    }

    return (
        <>
            <div className="login-logout">
                <button onClick={IsLoggedIn}>Login</button>
                <button onClick={IsLoggedOut}>Logout</button>
            </div>

            <div className="card-container-class">
                <h2>Functional Component</h2>
                <div><img src='https://picsum.photos/300/300' alt="Random" /></div>
                <div className="card-content">
                    <div className="list-content">
                        <ul className="list">
                            <li>Scenery</li>
                            <li>Rating</li>
                            <div>{isLoggedIn?(<li>❤️</li>):null}</div>
                        </ul>
                    </div>
                    <div>Add to wish list</div>
                    <div><button onClick={AddProduct}>Add to cart</button></div>
                </div>
            </div>

            <div style={{zIndex:999, marginLeft:500,}}>
                <h3 style={{color:'black'}}>Products:</h3>
                {products.length > 0 ? (
                    <ul>
                        {products.map((product, index) => (
                            <li key={index}>
                                {product.name} - ${product.price} - {product.description}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No products added yet.</p>
                )}
            </div>
        </>
    )
}

export default ProductCard