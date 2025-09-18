import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h2 className="text-4xl font-medium text-white mb-4">
        Theme Overview
      </h2>
            <p className="text-base text-gray-200 mb-10 leading-relaxed max-w-3xl text-center px-6">

              Theme Overview

              
        Cooper from the movie <em>Interstellar</em> wisely summed human fascination
        with space when he declared, “Mankind was born on Earth. It was never meant
        to die here.” The next century will undoubtedly see exciting innovations in
        space exploration as a result of creative engineering solutions. As such,
        IEEE @ GT challenges you to build your own lunar space robot to demonstrate
        your creative approach to navigating space. The competition will focus on
        terrain navigation and interaction, including but not limited to obstacle
        avoidance, article placement, and potential human-robot collaboration.
        <br />
        <br />
        <strong>Tracks:</strong>
        <ul className="list-disc list-inside text-gray-200 mt-2 text-left">
          <li>
            <strong>Autonomous</strong> — robot makes decisions itself
          </li>
          <li>
            <strong>Controller/Communication</strong> — team builds an RF or wired
            controller to operate the robot
          </li>
          <li>
            <strong>Beginner</strong> — open opportunity for younger or
            inexperienced students to participate
          </li>
        </ul>
      </p>

      {/* Section title */}
      <h2 className="text-4xl font-medium text-white mb-4">
        Schedule of Events
      </h2>

      
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
