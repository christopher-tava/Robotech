import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { ScrollProgressIndicator } from "@/components/sub/scroll-progress-indicator";
import { BackToTopButton } from "@/components/sub/back-to-top-button";

export default function Home() {
  return (
    <>
      {/* Progress indicator */}
      <ScrollProgressIndicator />
      
      {/* Back to top button */}
      <BackToTopButton />

      <main className="h-full w-full">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Hero Section */}
          <section id="hero">
            <Hero />
          </section>

          {/* About/Sponsors Section */}
          <section id="skills">
            <Skills />
          </section>

          {/* About Mission Section */}
          <section id="about">
            <Encryption />
          </section>

          {/* FAQ and Schedule Section */}
          <section id="projects">
            <Projects />
          </section>
        </div>
      </main>
    </>
  );
}