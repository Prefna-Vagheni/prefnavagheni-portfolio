import Hero from '@/_components/Hero';
import TechStack from '@/_components/TechStack';
import ProjectGallery from '@/_components/ProjectGallery';
import LearningLog from '@/_components/LearningLog';
import Contact from '@/_components/Contact';
import Divider from '@/_components/Divider';

export default function Page() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <section id="engine">
        <Hero />
      </section>

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
