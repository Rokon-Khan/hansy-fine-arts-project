import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import MasonaryGrid from "../components/MasonaryGrid";
import NewsSection from "../components/NewsSection";
import PricingTestimonials from "../components/PricingTestimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      {/* <MarQuee></MarQuee> */}
      {/* <Tabcategories></Tabcategories> */}
      <MasonaryGrid></MasonaryGrid>
      <PricingTestimonials></PricingTestimonials>
      <NewsSection></NewsSection>
      {/* <ArtSellingFeatures></ArtSellingFeatures> */}
      {/* <PrintOnDemandFeatures></PrintOnDemandFeatures> */}
      {/* <ArtMarketingConsulting></ArtMarketingConsulting> */}
      {/* <FileUploadComponent></FileUploadComponent> */}
    </div>
  );
};

export default Home;
