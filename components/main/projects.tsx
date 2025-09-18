import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      
      <h1 className="text-[40px] font-semibold bg-clip-text bg-gradient-to-r py-20">
        Cooper from the movie Interstellar wisely summed human fascination with space when he
          declared, “Mankind was born on Earth. It was never meant to die here.”
          The next century will undoubtedly see exciting innovations in space
          exploration as a result of creative engineering solutions. As such, IEEE @
          GT challenges you to build your own lunar space robot to demonstrate your
          creative approach to navigating space. The competition will focus on terrain
          navigation and interaction, including but not limited to obstacle avoidance,
          article placement, and potential human-robot collaboration.
          
          Tracks:
          • Autonomous — robot is making decisions itself  
          • Controller/Communication — team builds an RF or wired controller to operate the robot  
          • Beginner — open opportunity for younger/inexperienced students to participate
        
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
