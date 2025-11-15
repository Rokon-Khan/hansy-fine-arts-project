import AboutUs from "../components/AboutUs";
import BannerSlider from "../components/BannerSlider";
import FileImageFormFineWork from "../components/FileImageFormFineWork";
import MasonaryGrid from "../components/MasonaryGrid";
import NewsSection from "../components/NewsSection";
import PricingTestimonials from "../components/PricingTestimonials";
// import TabCategories from "../components/TabCategories";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <BannerSlider></BannerSlider>
      <FileImageFormFineWork />
      {/* <TabCategories></TabCategories> */}
      {/* <MarQuee></MarQuee> */}
      <MasonaryGrid></MasonaryGrid>

      <AboutUs></AboutUs>
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
