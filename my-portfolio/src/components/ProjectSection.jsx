import Card from './Card';

function ProjectSection({ projects }) {
  return (
    <section>
      <h1 className="projects-title">Projects</h1>
      <div className="cards-container">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            date={project.date}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
