import Book from "./Book";
export default function Books(book) {
  //   console.log(book.book.name);
  return (
    <div>
      <Book book={book.book}></Book>
    </div>
  );
}
