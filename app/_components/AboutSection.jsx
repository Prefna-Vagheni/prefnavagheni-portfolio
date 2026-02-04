import CoreValue from './CoreValue';
import StatsGrid from './StatsGrid';
import TerminalFooter from './TerminalFooter';
import JourneyTimeline from './JourneyTimeline';
import TerminalHeader from './TerminalHeader';
import MainAbout from './MainAbout';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(234,88,12,0.05),transparent)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <TerminalHeader title="About Me" text="cat about.md" />

        {/* Main Bio */}
        <MainAbout />

        <StatsGrid />

        <CoreValue />

        <JourneyTimeline />

        <TerminalFooter />
      </div>
    </section>
  );
}
