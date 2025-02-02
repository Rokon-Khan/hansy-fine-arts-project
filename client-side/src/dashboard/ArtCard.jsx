import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ArtCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // Fetch art details
  const { data: art, isLoading } = useQuery({
    queryKey: ["art", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/arts/${id}`);
      return data;
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async () => await axiosSecure.delete(`/arts/${id}`),
    onSuccess: () => {
      Swal.fire("Deleted!", "The art has been deleted.", "success");
      queryClient.invalidateQueries(["arts"]); // Refetch art list
      navigate("/dashboard/products");
    },
  });

  if (isLoading) return <LoadingSpinner />;

  // Handle delete
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) deleteMutation.mutate();
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex">
      {/* Left: Details */}
      <div className="p-6 flex flex-col justify-center md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-800">{art.title}</h2>
        <p className="text-gray-600 mt-2">{art.description}</p>
        <p className="text-blue-600 font-semibold mt-2">
          Category: {art.category}
        </p>
        <p className="text-gray-700 mt-2">Price: ${art.price}</p>
        <p className="text-gray-700">SKU: {art.sku}</p>
        <p className="text-gray-700">Quantity: {art.quantity}</p>
        <div className="flex items-center mt-4">
          <img
            src={art.seller.image}
            alt={art.seller.name}
            className="w-10 h-10 rounded-full mr-2"
          />
          <p className="text-gray-800">
            {art.seller.name} ({art.seller.email})
          </p>
        </div>
        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => navigate(`/dashboard/update-arts/${id}`)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
      {/* Right: Image */}
      <div className="md:w-1/3 flex justify-center items-center p-4">
        <img src={art.image} alt={art.title} className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default ArtCard;
