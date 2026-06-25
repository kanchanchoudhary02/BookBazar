import books from '../data/book';
import book from '../data/book'
import '../pages/Book.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Books(){
    return(
        <>   
        <Navbar/>
        <div className="book-container">
  {books.map((book) => (
    <div className="book-card" key={book.id}>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Price: ₹{book.price}</p>
      <p>Condition: {book.condition}</p>

      <button>View Details</button>
    </div>
  ))}
</div>
<Footer/>
        </>

    )       
}
export default Books;