import Card from './Card';

function ThoughtSection({ thoughts }) {
  return (
    <section>
      <h2 className="engraved" style={{ textAlign: 'center' }}>Food For Thought </h2>
      <br></br><br></br>

      <div className="cards-container2">
        {thoughts.map((thought) => (
          <Card
            key={thought.id}
            description={thought.text}
            date={`- ${thought.author}`}
            isThought={true}
          />
        ))}
      </div>
    </section>
  );
}

export default ThoughtSection;
