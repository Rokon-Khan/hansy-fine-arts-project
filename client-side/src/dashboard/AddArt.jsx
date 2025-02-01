import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { uploadToCloudinary } from "../api/utlis";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import AddArtFrom from "./Form/AddArtFrom";

const AddArt = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [uploadImage, setUploadImage] = useState({
    image: { name: "Upload Button" },
  });
  console.log(uploadImage);
  const [loading, setLoading] = useState(false);
  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const image = form.image.files[0];
    const imageUrl = await uploadToCloudinary(image);

    // seller info
    const seller = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    // Create plant data object
    const artData = {
      name,
      category,
      description,
      price,
      quantity,
      image: imageUrl,
      seller,
    };

    console.table(artData);
    // save plant in db
    try {
      // post req
      await axiosSecure.post("/arts", artData);
      Swal.fire({
        title: "Success!",
        text: "Your account has been created successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      // 6. Navigate to homepage
      //   navigate("/");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
      Swal.fire({
        title: "Error!",
        text: err.message || "Something went wrong!",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Add Art | Dashboard</title>
      </Helmet>

      {/* Form */}
      <AddArtFrom
        handleSubmit={handleSubmit}
        uploadImage={uploadImage}
        setUploadImage={setUploadImage}
        loading={loading}
      />
    </div>
  );
};

export default AddArt;
