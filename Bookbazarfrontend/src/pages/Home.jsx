import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import FeaturedBooks from "../components/FeaturedBooks";
import WhyChooseUs from "../components/WhyChooseUs";
;
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
      <FeaturedBooks />
      <WhyChooseUs />
     
      <Footer />
    </>
  );
}

export default Home;