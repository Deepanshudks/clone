import AnnouncementBanner from "../../components/announcementBanner";
import Expertise from "../../components/expertise";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Partners from "../../components/partners";
import Industries from "../../components/services";
import StatsCards from "../../components/stats";
import WhyChooseUs from "../../components/whyChooseUs";

const Home = () => {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <AnnouncementBanner />
      <div className="pt-12">
        <Navbar />
      </div>
      <Hero />
      <Partners />
      <StatsCards />
      <Industries />
      <Expertise />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
