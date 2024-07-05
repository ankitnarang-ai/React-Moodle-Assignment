// Card should have a product image, name, description, star rating, add to cart button, wish list heart icon like this:
function ProductCard() {
  return (
    <div className="card-container-class">
        <h2>Functional Component</h2>
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

export default ProductCard
