function Card({ title, description, date, githubLink }) {
  return (
    <div className="card">
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="card-title">
        {title}
      </a>
      <p className="card-description">{description}</p>
      {date && <p className="card-date">{date}</p>}
    </div>
  );
}

export default Card;
