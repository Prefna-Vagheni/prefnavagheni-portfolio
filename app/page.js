import Hero from '@/_components/Hero';
import TechStack from '@/_components/TechStack';
import ProjectGallery from '@/_components/ProjectGallery';
import LearningLog from '@/_components/LearningLog';
import Contact from '@/_components/Contact';
import Divider from '@/_components/Divider';

export default function Page() {
  return (
    <>
      <Hero />
      <Divider />

      <div id="stack">
        <TechStack />
      </div>
      <Divider />

      <div id="projects">
        <ProjectGallery />
      </div>
      <Divider />

      <div id="logs">
        <LearningLog />
      </div>
      <Divider />

      <Contact />
    </>
  );
}
