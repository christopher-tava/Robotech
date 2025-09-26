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
<p className="text-base text-gray-200 mb-10 leading-relaxed max-w-3xl text-center px-6">
  <strong>Am I eligible?</strong><br />
  Most likely yes! You just have to be a current undergrad or grad student in the Atlanta area at the time of the event. GT students will receive priority registration but other university students are welcome to apply after reading the next FAQ!
  <br /><br />

  <strong>Is it free to participate?</strong><br />
  Yes! There is no entry fee or cost. However, if you are not at GT, you will need to arrange your own transportation to and from the event.
  <br /><br />

  <strong>What is the application process?</strong><br />
  Apply through the application Google Form until XXXX @ 11:59 pm. You will only be considered for the track you apply for and then accepted, waitlisted, or rejected for that track. Teammate requests are considered.
  <br /><br />

  <strong>What if I don’t have a full team before the event?</strong><br />
  No problem! We will have a spot on Discord where competitors can introduce themselves and find teammates, and depending on interest, we may have an event before the competition to meet people!
  <br /><br />

  <strong>Do I have to pay for parts?</strong><br />
  No! We will make available nearly all the resources you would need to be successful in your track. However, that may mean that certain parts are limited to competitors in the same track.
  <br /><br />

  <strong>Which meals do I get for free as a competitor?</strong><br />
  A Friday evening snack; breakfast, lunch and dinner on Saturday; and Sunday breakfast.
</p>
<br />
<br />
<br />
      

      
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