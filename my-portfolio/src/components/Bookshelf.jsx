import Book from './Book';



function Bookshelf({ books }) {
  return (
    <section className="intro">
      <div className="intro-text" style={{ textAlign: 'center' }}>
        <p>----------------------------------------------------------------------------------------------------------</p>
        <h2 className="engraved">My Bookshelf</h2>
        <p>----------------------------------------------------------------------------------------------------------</p>
        <div className="bookshelf-grid">
          {books.map((book, idx) => (
            <Book
              key={book.title + idx}
              title={book.title}
              description={book.description}
              imageSrc={book.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bookshelf;
