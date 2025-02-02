import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FinerWorksSkuForm = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const [product_sku, setProduct_sku] = useState("");
  const [product_qty, setProduct_qty] = useState("");

  const mutation = useMutation({
    mutationFn: async (newData) => {
      const response = await axiosSecure.post("/finerarts", newData);
      return response.data;
    },
    onSuccess: () => {
      Swal.fire("Success!", "SKU and quantity added successfully!", "success");
      queryClient.invalidateQueries(["finerarts"]);
      setProduct_sku("");
      setProduct_qty("");
    },
    onError: () => {
      Swal.fire("Error!", "Failed to add SKU and quantity.", "error");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product_sku || !product_qty) return;

    const newData = {
      product_sku,
      product_qty: parseInt(product_qty, 10),
    };

    mutation.mutate(newData);
  };

  return (
    <div className="p-5 bg-gray-50 rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="space-y-3">
          <label htmlFor="sku" className="block text-gray-600 font-medium">
            Art Product SKU
          </label>
          <input
            className="w-full px-4 py-2 border border-blue-300 focus:outline-blue-500 rounded-md bg-white"
            name="product_sku"
            id="product_sku"
            type="text"
            placeholder="Input Art Product SKU"
            value={product_sku}
            onChange={(e) => setProduct_sku(e.target.value)}
            required
          />

          <label htmlFor="quantity" className="block text-gray-600 font-medium">
            Quantity
          </label>
          <input
            className="w-full px-4 py-2 border border-blue-300 focus:outline-blue-500 rounded-md bg-white"
            name="product_qty"
            id="product_qty"
            type="number"
            placeholder="Available quantity"
            value={product_qty}
            onChange={(e) => setProduct_qty(e.target.value)}
            min="1"
            required
          />

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Saving..." : "Add SKU & Quantity"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinerWorksSkuForm;
