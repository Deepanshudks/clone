import AnnouncementBanner from "../../components/announcementBanner";
import Navbar from "../../components/navbar";
import AboutHero from "../../components/aboutHero";
import AboutUs from "../../components/aboutUs";

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
