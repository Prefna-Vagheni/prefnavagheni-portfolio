import Hero from '@/_components/Hero';
import TechStack from '@/_components/TechStack';
import ProjectGallery from '@/_components/ProjectGallery';
import LearningLog from '@/_components/LearningLog';
import Contact from '@/_components/Contact';
import Divider from '@/_components/Divider';
import AboutSection from './_components/AboutSection';
import ExperienceSection from './_components/ExperienceSection';

export default function Page() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <section id="engine">
        <Hero />
      </section>

      <AboutSection />

      <Divider />

      <ExperienceSection />

      <Divider />

      <section id="stack">
        <TechStack />
      </section>

      <Divider />

      <section id="projects">
        <ProjectGallery />
      </section>

      <Divider />

      <section id="logs">
        <LearningLog />
      </section>

      <Divider />

      <Contact />
    </main>
  );
}
