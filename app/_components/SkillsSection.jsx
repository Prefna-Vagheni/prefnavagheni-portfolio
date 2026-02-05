import SoftSkills from './SoftSkills';
import TechnicalSkills from './TechnicalSkills';
import TerminalFooter from './TerminalFooter';
import TerminalHeader from './TerminalHeader';
import CurrentlyLearning from './CurrentlyLearning';
import SkillLegend from './SkillLegend';

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(234,88,12,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <TerminalHeader
          text="./list-skills.sh
            --verbose"
          title="Skills & Competencies"
        />

        <TechnicalSkills />

        <SoftSkills />

        {/* <CurrentlyLearning /> */}

        <SkillLegend />

        <TerminalFooter text="Skills loaded successfully ✓" />
      </div>
    </section>
  );
}
