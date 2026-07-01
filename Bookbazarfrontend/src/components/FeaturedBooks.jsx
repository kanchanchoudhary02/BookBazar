import "./FeaturedBooks.css";
import books from "../data/books";
import ProductCard from "./ProductCard";

function FeaturedBooks() {
  return (
    <section className="featured">

      <div className="featured-header">

        <h2>Featured Listings</h2>

        <button>View All →</button>

      </div>

      <div className="featured-grid">

        {books.map((book)=>(
          <ProductCard
            key={book.id}
            book={book}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedBooks;