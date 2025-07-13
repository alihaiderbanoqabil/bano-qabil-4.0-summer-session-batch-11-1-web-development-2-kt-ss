export const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src="https://images.pexels.com/photos/18960521/pexels-photo-18960521.jpeg" alt="Product Image" />
            </div>
            <div className="product-details">
                <div className="product-title">Wireless Headphones</div>
                <div className="product-description">High-quality sound, noise-cancelling, and 20h battery life.</div>
                <div className="product-price">$99.99</div>
                <button className="product-button">Add to Cart</button>
            </div>
        </div>
    )
}
