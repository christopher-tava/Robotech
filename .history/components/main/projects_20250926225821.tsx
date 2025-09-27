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
 <div className="text-base text-gray-200 mb-10 leading-relaxed max-w-4xl mx-auto px-6">
            <p className="mb-6">
              Interstellar's Cooper wisely summed up human fascination with space when he declared, 
              <span className="italic text-blue-300 mx-2">
                "Mankind was born on Earth. It was never meant to die here."
              </span>
            </p>
            
            <p className="mb-6">
              The next century will undoubtedly see exciting innovations in space exploration as a result of creative engineering solutions. 
              As such, IEEE @ GT challenges you to build your own lunar space robot to demonstrate your creative approach to navigating space.
            </p>
            
            <p className="mb-6">
              The competition will focus on terrain navigation and interaction, including but not limited to obstacle avoidance, 
              article placement, and potential human-robot collaboration. The tracks, listed below, allow competitors to concentrate 
              in specific areas of the event that interest them. You can only apply to one track.
            </p>
            
            <p className="mb-6">
              As the event approaches, we will release a tentative point rubric for each track. Teams will receive points for each 
              element of the robot that they build and for each task that their robot completes. Certain features and tasks will be 
              worth more than others due to expected difficulty.
            </p>
            
            <p className="font-semibold text-yellow-300">
              However, each robot will have exactly 4 minutes to execute their features and tasks, so teams are encouraged to plan 
              ahead of time and understand how to maximize their point totals based on their strengths.
            </p>
          </div>

  <h3 className="text-2xl font-semibold text-white text-center mb-4">
    Tracks
  </h3>
  <ul className="list-disc list-inside text-gray-200 mt-2 text-left max-w-3xl px-6">
    <li><strong>Autonomous</strong> — The robot makes decisions by itself. Think computer vision and audio detection for navigation and interaction. </li>
    <li><strong>Controller/Communication</strong> — team builds an RF or wired controller to control the robot. A human will control the robot's motion and decisions.</li>
    <li><strong>Beginner</strong> — open opportunity for younger or inexperienced students. Great for experimentation and learning, with no particular limits on project functionality. </li>
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