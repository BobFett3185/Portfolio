
function Book({ title, description, imageSrc }) {
  return (
    <div className="book-card">
      <img src={imageSrc} alt={title} className="book-cover" />
      <div className="book-info">
        <br></br>
        <div className="book-description">{description}</div>
      </div>
    </div>
  );
}

export default Book;
