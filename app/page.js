import Hero from '@/_components/Hero';
import TechStack from '@/_components/TechStack';
import ProjectGallery from '@/_components/ProjectGallery';
import LearningLog from '@/_components/LearningLog';
import Contact from '@/_components/Contact';
import TechHighlights from '@/_components/TechHighlights';
import Divider from '@/_components/Divider';
import AboutSection from './_components/AboutSection';
import ExperienceSection from './_components/ExperienceSection';
import ResumeDownload from './_components/ResumeDownload';
import SkillsSection from './_components/SkillsSection';
import WhyHireMe from './_components/WhyHireMe';

export default function Page() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <section id="engine">
        <Hero />
      </section>

      <Divider />

      <AboutSection />

      <Divider />

      <ExperienceSection />

      <Divider />

      <section id="stack">
        <TechStack />
      </section>

      <Divider />

      <section id="highlights">
        <TechHighlights />
      </section>

      <Divider />

      <section id="projects">
        <ProjectGallery />
      </section>

      <Divider />

      <SkillsSection />

      <Divider />

      <section id="logs">
        <LearningLog />
      </section>

      <Divider />

      <ResumeDownload />

      <Divider />

      <section id="why-hire">
        <WhyHireMe />
      </section>

      <Divider />

      <Contact />
    </main>
  );
}
