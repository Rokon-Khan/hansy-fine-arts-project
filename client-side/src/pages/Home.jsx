import Banner from "../components/Banner";
import FileUploadComponent from "../components/FileUploadComponent";
import MarQuee from "../components/MarQuee";
import Tabcategories from "../components/Tabcategories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MarQuee></MarQuee>
      <Tabcategories></Tabcategories>
      <FileUploadComponent></FileUploadComponent>
    </div>
  );
};

export default Home;
