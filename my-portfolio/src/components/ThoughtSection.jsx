import Card from './Card';

function ThoughtSection({ thoughts }) {
  return (
    <section>
      <h1 className="projects-title">Food for thought...</h1>
      <div className="cards-container2">
        {thoughts.map((thought) => (
          <Card
            key={thought.id}
            description={thought.text}
            date={`- ${thought.author}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ThoughtSection;
