/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";

const TabCategories = () => {
  // const { user } = useContext(AuthContext)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchAllProdcuts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);
  const fetchAllProdcuts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products`
    );
    // setProducts(data.data);
    setProducts(data);
  };
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
            <Tab>Portrait</Tab>
            <Tab>Contemporary</Tab>
            <Tab>Abstract</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products
              .filter((product) => product.category === "Portrait")
              .map((product) => (
                <Card key={product._id} product={product} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products
              .filter((product) => product.category === "Abstract")
              .map((product) => (
                <Card key={product._id} product={product} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products
              .filter((product) => product.category === "Contemporary")
              .map((product) => (
                <Card key={product._id} product={product} />
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
