import AboutHero from "../../components/aboutHero";
import AboutUs from "../../components/aboutUs";
import AnnouncementBanner from "../../components/announcement";
import Navbar from "../../components/navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <AnnouncementBanner />
      <Navbar />
      <AboutHero />
      <AboutUs />
    </div>
  );
};

export default About;
