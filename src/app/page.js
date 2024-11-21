import FAQ from "./component/Accordion";
import FAQSection from "./component/FAQ";
import Navbar from "./component/Header";
import Hero from "./component/Herosection";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InfoTop from "./component/InfoTop";
import CustomSlider from "./component/Carosel";
import Recommendation from "./component/Recommendation";
import FooterSection from "./component/Footer";
import Aboutus from "./component/Aboutus";
import Features from "./component/Createevent";


export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Aboutus />
      <Recommendation />
      <Features />
      <InfoTop />
      {/* <FAQSection /> */}
      <FooterSection />
    </div>
  );
}
