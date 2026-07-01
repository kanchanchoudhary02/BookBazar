import "./ProductCard.css";

function ProductCard({book}) {

    return(

        <div className="card">

            <div className="image">

                <img src={book.image} alt={book.title}/>

                <span>{book.category}</span>

            </div>

            <div className="content">

                <h3>{book.title}</h3>

                <p>{book.author}</p>

                <div className="price">

                    <h2>₹{book.price}</h2>

                    <del>₹{book.oldPrice}</del>

                    <small>{book.discount}</small>

                </div>

                <p>{book.university}</p>

                <button>View Details</button>

            </div>

        </div>

    )

}

export default ProductCard;