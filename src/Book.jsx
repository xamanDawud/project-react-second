import "./Book.css";
export default function book(book) {
  let { id, name, writer } = book.book;
  return (
    <div className="book-card">
      <h3>Book Name: {name} </h3>
      <h5>Writer: {writer}</h5>
    </div>
  );
}
