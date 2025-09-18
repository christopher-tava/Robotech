import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        The Robotech Hackathon is the annual robotics hackathon run by the IEEE
          student chapter at Georgia Tech. Within the allotted 36 hours, teams of
          four individuals race to design, build, and test a robot to complete a
          set of engineering goals and competition tasks. Excellent collaboration
          and an element of strategy will be required to maximize a team’s score.
          Teams compete in one of several tracks differentiated by competition focus
          and experience. Products are judged by a panel of judges on the last day
          of the hackathon.
      </h1>

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Schedule of Events
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
