// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import toast from "react-hot-toast";
// import { useNavigate, useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import LoadingSpinner from "../components/Shared/LoadingSpinner";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import UpdateArtForm from "./Form/UpdateArtForm";

// const UpdateArt = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const axiosSecure = useAxiosSecure();

//   // Fetch art data using TanStack Query
//   const {
//     data: artData,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["art", id],
//     queryFn: async () => {
//       if (!id) throw new Error("Art ID is missing.");
//       const { data } = await axiosSecure.get(`/arts/${id}`);
//       return data;
//     },
//     retry: false, // Prevent infinite retry loops
//   });

//   // Handle update submission
//   const handleUpdate = async (e, uploadToCloudinary) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const description = form.description.value;
//     const price = parseFloat(form.price.value);
//     const image = uploadToCloudinary || artData?.image;

//     const updatedData = { name, description, price, image };

//     try {
//       await axiosSecure.put(`/arts/${id}`, updatedData);
//       Swal.fire("Success!", "Art updated successfully!", "success");
//       navigate("/dashboard/products");
//     } catch (error) {
//       console.error("Error updating art:", error);
//       toast.error("Failed to update art!");
//     }
//   };

//   if (isLoading) return <LoadingSpinner />;
//   if (error) {
//     console.error("Error fetching art data:", error);
//     return (
//       <p className="text-red-500">
//         Error loading art data: {error.message || "Unknown error occurred."}
//       </p>
//     );
//   }

//   return (
//     <div>
//       <Helmet>
//         <title>Update Art | Dashboard</title>
//       </Helmet>
//       <UpdateArtForm handleUpdate={handleUpdate} artData={artData} />
//     </div>
//   );
// };

// export default UpdateArt;

import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useAxiosSecure from "../hooks/useAxiosSecure";
import UpdateArtForm from "./Form/UpdateArtForm";

const UpdateArt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  // Fetch art data using TanStack Query
  const {
    data: artData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["art", id],
    queryFn: async () => {
      if (!id) throw new Error("Art ID is missing.");
      const { data } = await axiosSecure.get(`/arts/${id}`);
      return data;
    },
    retry: false, // Prevent infinite retry loops
  });

  // Handle update submission
  const handleUpdate = async (e, uploadToCloudinary) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value);
    const category = form.category.value;
    const sku = form.sku.value;
    const quantity = parseInt(form.quantity.value, 10);
    const image = uploadToCloudinary || artData?.image;
    const updatedData = {
      title,
      description,
      price,
      category,
      sku,
      quantity,
      image,
    };

    try {
      await axiosSecure.put(`/arts/${id}`, updatedData);
      Swal.fire("Success!", "Art updated successfully!", "success");
      navigate("/dashboard/products");
    } catch (error) {
      console.error("Error updating art:", error);
      toast.error("Failed to update art!");
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) {
    console.error("Error fetching art data:", error);
    return (
      <p className="text-red-500">
        Error loading art data: {error.message || "Unknown error occurred."}
      </p>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Update Art | Dashboard</title>
      </Helmet>
      <UpdateArtForm handleUpdate={handleUpdate} artData={artData} />
    </div>
  );
};

export default UpdateArt;
