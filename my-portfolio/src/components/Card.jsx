function Card({ title, description, date, githubLink, isThought }) {
  return (
    <div className={isThought ? "thought-card" : "card"}>
      {title && githubLink ? (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="card-title">
          {title}
        </a>
      ) : title ? (
        <div className="card-title">{title}</div>
      ) : null}
      <p className="card-description">{description}</p>
      {date && <p className="card-date">{date}</p>}
    </div>
  );
}

export default Card;
