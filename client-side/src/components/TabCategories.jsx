/* eslint-disable react/prop-types */
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCategories = () => {
  //   const [arts, setArts] = useState([]);
  //   useEffect(() => {
  //     fetchAllarts();
  //   }, []);
  //   const fetchAllarts = async () => {
  //     const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/arts`);
  //     setArts(data);
  //   };

  return (
    <Tabs>
      <div className=" container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
          Browse Arts By Categories
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
          Three categories available for the Arts and Watercolor. They are
          Potrait, Horizontal Browse them by clicking on the tabs below.
        </p>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Potrait</Tab>
            <Tab>Landscape</Tab>
            <Tab>Others</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* {arts
              .filter((art) => art.category === "potrait")
              .map((art) => (
                <ArtCard key={art._id} art={art} />
                <div
                  className="text-3xl font-bold text-center"
                  key={art._id}
                  art={art}
                >
                  This is art Card Here
                </div>
              ))} */}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* {arts
              .filter((art) => art.category === "Horizontal")
              .map((art) => (
                <div
                  className="text-3xl font-bold text-center"
                  key={art._id}
                  art={art}
                >
                  This is art Card Here
                </div>
                <JobCard key={art._id} job={art} />
              ))} */}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* {arts
              .filter((art) => job.category === "Others")
              .map((art) => (
                <div
                  className="text-3xl font-bold text-center"
                  key={art._id}
                  art={art}
                >
                  This is art Card Here
                </div>
                <JobCard key={job._id} job={art} />
              ))} */}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
