import ProjectCard from '../components/ProjectCard';

function ProjectsView() {
  return (
    <section className="p-8 flex flex-col items-center justify-center">
      <div className="flex w-full max-w-6xl flex-col">
        <h2 className="text-4xl font-semibold">Projects 💻</h2>
        <h3 className="my-4 text-2xl font-medium text-primary">
          Some things I&apos;ve built.
        </h3>
        <ProjectCard
          sourceLink=""
          techs={[]}
          name="Medician"
          description="UNSW CSESoc Project Competition 2021"
          detail="Medician is a cross-platform health tracking app that is intuitive and easy to use. You will be able to record details about your symptoms and set notifications for your medical + fitness routines."
        />
        <ProjectCard
          sourceLink=""
          techs={[]}
          name="Medician"
          description="UNSW CSESoc Project Competition 2021"
          detail="Medician is a cross-platform health tracking app that is intuitive and easy to use. You will be able to record details about your symptoms and set notifications for your medical + fitness routines."
        />
        <ProjectCard
          sourceLink=""
          techs={[]}
          name="Medician"
          description="UNSW CSESoc Project Competition 2021"
          detail="Medician is a cross-platform health tracking app that is intuitive and easy to use. You will be able to record details about your symptoms and set notifications for your medical + fitness routines."
        />
      </div>
    </section>
  );
}

export default ProjectsView;
