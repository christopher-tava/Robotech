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

      <div className="mt-20 mb-10 flex flex-col items-center">
  <h2 className="text-4xl font-medium text-white text-center mb-4">
    Theme Overview
  </h2>
  <p className="text-base text-gray-200 mb-10 leading-relaxed max-w-3xl text-center px-6">
    Cooper from the movie <em>Interstellar</em> wisely summed human fascination
    with space when he declared, &quot;Mankind was born on Earth. It was never meant
    to die here.&quot; ...
  </p>
  <h3 className="text-2xl font-semibold text-white text-center mb-4">
    Tracks
  </h3>
  <ul className="list-disc list-inside text-gray-200 mt-2 text-left max-w-3xl px-6">
    <li><strong>Autonomous</strong> — robot makes decisions itself</li>
    <li><strong>Controller/Communication</strong> — team builds an RF or wired controller</li>
    <li><strong>Beginner</strong> — open opportunity for younger or inexperienced students</li>
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