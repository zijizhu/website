import projects from '../projects';
import ProjectCard from '../components/ProjectCard';

function ProjectsView() {
  return (
    <>
      <h2 className="text-4xl font-semibold animate-fade-in-200ms">
        Projects 💻
      </h2>
      <h3 className="my-4 text-2xl font-medium text-primary animate-fade-in-200ms">
        Some things I&apos;ve built.
      </h3>
      {projects.map((info, idx) => (
        <ProjectCard
          key={idx}
          {...info}
          imgLayout={idx % 2 === 0 ? 'right' : 'left'}
        />
      ))}
    </>
  );
}

export default ProjectsView;
