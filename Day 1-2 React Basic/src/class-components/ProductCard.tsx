import { Component } from "react";

export class ProductCardClass extends Component {
    render() {
        return (
            <div className="card-container">
                <h2>Class Component</h2>
                <div><img src='https://picsum.photos/300/300' /></div>
                <div className="card-content">
                    <div className="list-content">

                        <ul className="list">
                            <li>Scenery</li>
                            <li>Rating</li>
                        </ul>
                    </div>
                    <div>Add to wish list</div>
                    <div><button>Add to cart</button></div>
                </div>
            </div>
        )
    }
}