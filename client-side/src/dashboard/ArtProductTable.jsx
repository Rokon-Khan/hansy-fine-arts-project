import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const ArtProductTable = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Fetch art products using TanStack Query
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["artProducts"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/arts`);
      return data;
    },
  });

  // Handle Delete Action with Instant Refetch
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You cannot revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${import.meta.env.VITE_API_URL}/arts/${id}`);
          Swal.fire("Deleted!", "The product has been removed.", "success");

          // ✅ Refetch data instantly after deleting
          queryClient.invalidateQueries(["artProducts"]);
        } catch (error) {
          Swal.fire("Error!", "Failed to delete the product.", "error");
        }
      }
    });
  };

  // Handle Edit Action (Navigate to UpdateClassForm with ID)
  const handleEdit = (id) => {
    navigate(`/dashboard/update-arts/${id}`);
  };

  // Handle View Details Action (Navigate to Detail Page)
  const handleView = (id) => {
    navigate(`/dashboard/art-details/${id}`);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error)
    return (
      <p className="text-red-500">Error fetching products: {error.message}</p>
    );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr className="text-left">
            <th className="p-3 border">Image</th>
            <th className="p-3 border">Product Name</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border-b hover:bg-gray-100">
              <td className="p-3 border">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>
              <td className="p-3 border">{product.name}</td>
              <td className="p-3 border">{product.category}</td>
              <td className="p-3 border">{product.price ?? "N/A"}</td>
              <td className="p-3 border flex space-x-3">
                <button
                  onClick={() => handleEdit(product._id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaPen />
                </button>
                <button
                  onClick={() => handleView(product._id)}
                  className="text-green-500 hover:text-green-700"
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtProductTable;
