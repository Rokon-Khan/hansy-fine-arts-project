import { useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineSave } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ImageUpload, InputWithLabel, Sidebar } from "../components";
import SimpleInput from "../components/SimpleInput";
import TextAreaInput from "../components/TextAreaInput";

import axios from "axios";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateProduct = () => {
  // const auth = getAuth();

  // const { createUser } = useContext(AuthContext);
  // const location = useLocation();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const productTitle = form.get("productTitle") as string;
    const productImage = form.get("productImage") as string;
    const category = form.get("category") as string;
    const stock = form.get("stock") as string;
    const price = form.get("price") as string;
    const SKU = form.get("SKU") as string;
    const stockList = form.get("stockList") as string;
    const discount = form.get("discount") as string;

    try {
      const newProduct = {
        productTitle,
        stockList,
        SKU,
        stock,
        discount,
        price,
        productImage,
        category,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/products`,
        newProduct
      );

      if (response.data.insertedId) {
        Swal.fire({
          title: "Wow!!!",
          text: "New Product Added Successfully!",
          icon: "success",
        });

        if (formRef.current) {
          (formRef.current as HTMLFormElement).reset();
        }

        navigate("/dashboard");
      }
    } catch (error: any) {
      console.error("Error during product addition:", error);
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="hover:bg-blackPrimary bg-whiteSecondary w-full ">
        <div className="dark:bg-blackPrimary bg-whiteSecondary py-10">
          <div className="px-4 sm:px-6 lg:px-8 pb-8 border-b border-gray-800 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Add new product
              </h2>
            </div>
            <div className="flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center">
              <button className="dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 w-48 py-2 text-lg dark:hover:border-gray-500 hover:border-gray-400 duration-200 flex items-center justify-center gap-x-2">
                <AiOutlineSave className="dark:text-whiteSecondary text-blackPrimary text-xl" />
                <span className="dark:text-whiteSecondary text-blackPrimary font-medium">
                  Save draft
                </span>
              </button>
              <Link
                to="/dashboard/products/add-product"
                className="dark:bg-whiteSecondary bg-blackPrimary w-48 py-2 text-lg dark:hover:bg-white hover:bg-black duration-200 flex items-center justify-center gap-x-2"
              >
                <HiOutlineSave className="dark:text-blackPrimary text-whiteSecondary text-xl" />
                <span className="dark:text-blackPrimary text-whiteSecondary font-semibold">
                  Published product
                </span>
              </Link>
            </div>
          </div>

          {/* Add Product section here  */}
          <form onSubmit={handleAddProduct} ref={formRef}>
            <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8 grid grid-cols-2 gap-x-10 max-xl:grid-cols-1 max-xl:gap-y-10">
              {/* left div */}
              <div>
                <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                  Basic information
                </h3>

                <div className="mt-4 flex flex-col gap-5">
                  <InputWithLabel label="Title">
                    <SimpleInput
                      type="text"
                      name="productTitle"
                      placeholder="Enter a product title..."
                    />
                  </InputWithLabel>

                  <InputWithLabel label="Description">
                    <TextAreaInput
                      placeholder="Enter a product description..."
                      rows={4}
                      cols={50}
                      name="description"
                    />
                  </InputWithLabel>
                  <InputWithLabel label="Category Name">
                    <SimpleInput
                      type="text"
                      name="category"
                      placeholder="Enter a product Category Name"
                    />
                  </InputWithLabel>
                  <InputWithLabel label="Input Photo URL">
                    <SimpleInput
                      type="text"
                      name="productImage"
                      placeholder="Enter a product Category Name"
                    />
                  </InputWithLabel>

                  {/* <InputWithLabel label="Category">
                  <SelectInput selectList={selectList} />
                </InputWithLabel> */}
                </div>

                <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary mt-16">
                  Pricing & Inventory
                </h3>

                <div className="mt-4 flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-x-5 max-[500px]:grid-cols-1 max-[500px]:gap-x-0 max-[500px]:gap-y-5">
                    <InputWithLabel label="Base pricing">
                      <SimpleInput
                        type="number"
                        name="price"
                        placeholder="Enter a product base pricing..."
                      />
                    </InputWithLabel>

                    <InputWithLabel label="Price with dicount">
                      <SimpleInput
                        type="number"
                        name="discount"
                        placeholder="Enter a price with discount..."
                      />
                    </InputWithLabel>
                  </div>

                  <div className="grid grid-cols-2 gap-x-5 max-[500px]:grid-cols-1 max-[500px]:gap-x-0 max-[500px]:gap-y-5">
                    <InputWithLabel label="Stock">
                      <SimpleInput
                        type="number"
                        name="stock"
                        placeholder="Enter a product stock..."
                      />
                    </InputWithLabel>

                    <InputWithLabel label="SKU">
                      <SimpleInput
                        type="text"
                        name="SKU"
                        placeholder="Enter a product SKU..."
                      />
                    </InputWithLabel>
                  </div>
                  <InputWithLabel label="Stock status">
                    {/* <SelectInput
                      name="stockList"
                      selectList={stockStatusList}
                    /> */}
                    <SimpleInput
                      type="text"
                      name="stockList"
                      placeholder="Enter a product Stock Status"
                    />
                  </InputWithLabel>
                  {/* <select name={name}>
                    {selectList.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select> */}
                </div>
                <button className="btn mt-4 text-xl font-bold text-white bg-slate-800">
                  Add New Product
                </button>

                {/* <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary mt-16">
                Delivery
              </h3>

              <div className="mt-4 flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-x-5 gap-y-5 max-[500px]:grid-cols-1 max-[500px]:gap-x-0 max-[500px]:gap-y-5">
                  <InputWithLabel label="Weight (kg)">
                    <SimpleInput
                      type="number"
                      placeholder="Enter a product weight..."
                    />
                  </InputWithLabel>
                  <InputWithLabel label="Length (cm)">
                    <SimpleInput
                      type="number"
                      placeholder="Enter a product length..."
                    />
                  </InputWithLabel>
                  <InputWithLabel label="Width (cm)">
                    <SimpleInput
                      type="number"
                      placeholder="Enter a product width..."
                    />
                  </InputWithLabel>
                  <InputWithLabel label="Height (cm)">
                    <SimpleInput
                      type="number"
                      placeholder="Enter a product height..."
                    />
                  </InputWithLabel>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary mt-16">
                  SEO
                </h3>

                <div className="mt-4 flex flex-col gap-5">
                  <InputWithLabel label="Meta title">
                    <SimpleInput
                      type="text"
                      placeholder="Enter a meta title..."
                    />
                  </InputWithLabel>

                  <InputWithLabel label="Meta description">
                    <TextAreaInput
                      placeholder="Enter a meta description..."
                      rows={4}
                      cols={50}
                    />
                  </InputWithLabel>
                </div>
              </div> */}
              </div>

              {/* right div */}
              <div>
                <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                  Product images
                </h3>

                <ImageUpload />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateProduct;
