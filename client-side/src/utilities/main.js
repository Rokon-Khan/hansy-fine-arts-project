import toast from "react-hot-toast";
// get all cart product from local storage
const getAllCarts = () => {
  //   const all = localStorage.getItem("carts");
  const all = localStorage.getItem("carts");
  // const carts = JSON.parse(all);
  //   console.log(carts);
  if (all) {
    const carts = JSON.parse(all);
    // console.log(carts);
    return carts;
  } else {
    // console.log([]);
    return [];
  }
};
const clearAllCarts = () => {
  // const carts = getAllCarts();
  localStorage.removeItem("carts");
};

const getAllWishlists = () => {
  //   const all = localStorage.getItem("carts");
  const all = localStorage.getItem("wishlists");
  // const carts = JSON.parse(all);
  //   console.log(carts);
  if (all) {
    const wishlists = JSON.parse(all);
    // console.log(carts);
    return wishlists;
  } else {
    // console.log([]);
    return [];
  }
};

//  Add Product to local Storage
const addTOCart = (product) => {
  const carts = getAllCarts();
  const isExist = carts.find((item) => item.id == product.id);
  if (isExist) return toast.error("This Product already Add To Cart!");
  carts.push(product);
  localStorage.setItem("carts", JSON.stringify(carts));
  toast.success("Add to Cart Successfully added!");
};
// Add to Wishlist
const addTOWishList = (product) => {
  const wishlists = getAllWishlists();
  const isExist = wishlists.find((item) => item.id == product.id);
  if (isExist) return toast.error("This Product already  Wishlist!");
  wishlists.push(product);
  localStorage.setItem("wishlists", JSON.stringify(wishlists));
  toast.success("Wishlist Successfully added!");
};

// Remove product from local Storage

const removeAddToCart = (id) => {
  console.log(id);
  const removeCarts = getAllCarts();
  const remaining = removeCarts.filter((product) => product.id != id);
  localStorage.setItem("carts", JSON.stringify(remaining));
  toast.success("Cart Removed Successfully!!!");
};

export {
  addTOCart,
  addTOWishList,
  getAllCarts,
  getAllWishlists,
  removeAddToCart,
  clearAllCarts,
};
