import { ProjectCard } from "@/components/sub/project-card";
import { FAQAccordion } from "@/components/sub/faq-accordion";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      {/* FAQ Section */}
      <h2 className="text-4xl font-medium text-white mb-8">
        FAQ
      </h2>
      <FAQAccordion />

      <div className="mt-20 mb-10">
        <h2 className="text-4xl font-medium text-white mb-4">
          Theme Overview
        </h2>
        <p className="text-base text-gray-200 mb-10 leading-relaxed max-w-3xl text-center px-6">
          Cooper from the movie <em>Interstellar</em> wisely summed human fascination
          with space when he declared, &quot;Mankind was born on Earth. It was never meant
          to die here.&quot; The next century will undoubtedly see exciting innovations in
          space exploration as a result of creative engineering solutions. As such,
          IEEE @ GT challenges you to build your own lunar space robot to demonstrate
          your creative approach to navigating space. The competition will focus on
          terrain navigation and interaction, including but not limited to obstacle
          avoidance, article placement, and potential human-robot collaboration.
          <br />
          <br />
          <strong>Tracks:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-200 mt-2 text-left max-w-3xl mx-auto px-6">
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
      </div>

      {/* Schedule Section */}
      <h2 className="text-4xl font-medium text-white mb-8">
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