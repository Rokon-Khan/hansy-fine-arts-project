import axios from "axios";
import { useEffect, useState } from "react";

export default function FileImageFormFineWork() {
    const [fileImagess, setFileImages] = useState();
    const [productTypes, setProductTypes] = useState();
     useEffect(() => {
         fetchAllProdcuts();
         fetchAllProdcutType();
     }, []);
     const fetchAllProdcuts = async () => {
       const { data } = await axios.post(
         `${import.meta.env.VITE_API_URL}/image-file-manager`,
         {
           library: {
             name: "inventory",
             session_id: "123456789",
             account_key: "dc9e5410-0107-441a-92eb-6a4fd1c34c79",
             site_id: 2,
           },
           search_filter: "",
           guid_filter: null,
           page_number: 1,
           per_page: 10,
           sort_field: "id",
           sort_direction: "DESC",
           upload_date_from: null,
           upload_date_to: null,
           list_products: true,
           active: null,
         },
        
       );
       // setarts(data.data);
       setFileImages(data);
     };
    
    const fetchAllProdcutType = async () => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/products/product-type`,
        {
          library: {
            name: "inventory",
            session_id: "123456789",
            account_key: "dc9e5410-0107-441a-92eb-6a4fd1c34c79",
            site_id: 2,
          },
          search_filter: "",
          guid_filter: null,
          page_number: 1,
          per_page: 10,
          sort_field: "id",
          sort_direction: "DESC",
          upload_date_from: null,
          upload_date_to: null,
          list_products: true,
          active: null,
        }
      );
      // setarts(data.data);
      setProductTypes(data);
    };
    console.log(productTypes, "productsTypes");
  return <div>FileImageFormFineWork</div>;
}
