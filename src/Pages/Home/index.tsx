import AnnouncementBanner from "../../components/AnnouncementBanner";
import ClientLogos from "../../components/clientLogos";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import StatsCards from "../../components/statsCard";
import TimelineSection from "../../components/timelineSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner />
      <div className="pt-12">
        <Navbar />
      </div>
      <Hero />
      <StatsCards />
      <TimelineSection />
      <ClientLogos />
    </div>
  );
};

export default Home;
