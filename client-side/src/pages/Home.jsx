import ArtMarketingConsulting from "../components/ArtMarketingConsulting";
import ArtSellingFeatures from "../components/ArtSellingFeatures";
import Banner from "../components/Banner";
import MarQuee from "../components/MarQuee";
import PrintOnDemandFeatures from "../components/PrintOnDemandFeatures";
import Tabcategories from "../components/Tabcategories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MarQuee></MarQuee>
      <Tabcategories></Tabcategories>
      <ArtSellingFeatures></ArtSellingFeatures>
      <PrintOnDemandFeatures></PrintOnDemandFeatures>
      <ArtMarketingConsulting></ArtMarketingConsulting>
      {/* <FileUploadComponent></FileUploadComponent> */}
    </div>
  );
};

export default Home;
