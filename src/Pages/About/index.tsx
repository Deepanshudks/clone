import AnnouncementBanner from "../../components/announcementBanner";
import Navbar from "../../components/navbar";
import AboutHero from "../../components/aboutHero";
import AboutSection from "../../components/aboutSection";
import ClientLogos from "../../components/clientLogos";
import TimelineSection from "../../components/timelineSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <AnnouncementBanner />
      <Navbar />
      <AboutHero />
      <AboutSection />
      <TimelineSection />
      <ClientLogos />
    </div>
  );
};

export default About;
