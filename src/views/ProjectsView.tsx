import projects from '../projects';
import ProjectCard from '../components/ProjectCard';

function ProjectsView() {
  return (
    <section className="p-8 flex flex-col items-center justify-center">
      <div className="flex w-full max-w-6xl flex-col">
        <h2 className="text-4xl font-semibold">Projects 💻</h2>
        <h3 className="my-4 text-2xl font-medium text-primary">
          Some things I&apos;ve built.
        </h3>
        {projects.map((info, idx) => (
          <ProjectCard
            key={idx}
            {...info}
            imgLayout={idx % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsView;
