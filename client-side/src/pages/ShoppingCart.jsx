import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import purchasegIcon from "../assets/Group.png";
import Cart from "../components/Cart";
import ProductCart from "../components/ProductCart";
import Wishlist from "../components/Wishlist";
import {
  clearAllCarts,
  getAllCarts,
  getAllWishlists,
  removeAddToCart,
} from "../utilities/main";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [open, setOpen] = useState(true);
  const [change, setChange] = useState(true);
  const [price, setPrice] = useState(0);
  const [modalPrice, setModalPrice] = useState(0);

  const [cart, setCart] = useState(products.length);
  const [wishlist, setWishlist] = useState(wishlists.length);

  useEffect(() => {
    const load = async () => {
      const carts = await getAllCarts();
      const wishlists = await getAllWishlists();
      setProducts(carts);
      setWishlists(wishlists);
      setCart(carts.length);
      setWishlist(wishlists.length);

      const total = carts.reduce((acc, product) => acc + product.price, 0);
      setPrice(total);
    };
    load();
  }, [change]);
  // console.log(cart, wishlist);
  const handleRemove = (product) => {
    removeAddToCart(product.id);
    const carts = getAllCarts();
    const total = carts.reduce((acc, product) => acc + product.price, 0);
    setPrice(total);
    setProducts(carts);
  };
  const handleSort = () => {
    // Sort products by price in Descending Order
    const newProducts = [...products];
    newProducts.sort((a, b) => b.price - a.price);
    setProducts(newProducts);
  };
  const handleClearAllCart = () => {
    setModalPrice(price);
    document.getElementById("my_modal_5").showModal();
    clearAllCarts();
    setChange(!change);
  };

  return (
    <div className="lg:my-20 my-10">
      <Helmet>
        <title>Watercolor | Fantastic Cart</title>
      </Helmet>
      <div className="w-full h-[250px] bg-slate-900 text-center text-white space-y-3  py-6">
        <h2 className="text-3xl font-bold">Shopping Cart</h2>
        <p className=" max-w-[796px] mx-auto">
          Buy your favourite Watercolor arts from here. You can easily print
          your art through palcing an order.
        </p>
        <div className="">
          <button
            className={`btn mr-6 text-lg font-bold rounded-full  ${
              open ? "text-white bg-zinc-600" : ""
            }`}
            onClick={() => setOpen(true)}
          >
            Cart
          </button>
          <button
            className={`btn mr-6 text-lg font-bold rounded-full  ${
              !open ? "text-white bg-zinc-600" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            Wishlist
          </button>
          {/* <NavLink
            className={({ isActive }) =>
              `font-bold ${
                isActive ? "text-[#9538E2]" : "hover:text-[#9538E2]"
              }`
            }
            to="/dashboard/cart"
          >
            Cart
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-bold ${
                isActive ? "text-[#9538E2]" : "hover:text-[#9538E2]"
              }`
            }
            to="/dashboard/wishlist"
          >
            Wishlist
          </NavLink> */}
        </div>
      </div>
      {/* For Cart Components */}
      {open && (
        <div className={`max-w-[1024px] py-4 rounded-xl mx-auto`}>
          <div className="flex justify-between items-center mb-6">
            {/* <h3 className="text-2xl font-bold mb-5">Carts</h3> */}
            {/* <h3 className="text-2xl font-bold mb-5">Cart</h3> */}
            {/* <div className="flex justify-between items-center gap-6">
              <h3 className="text-xl font-bold">Total Cost:{price}</h3>
              <button
                className="btn text-lg font-bold text-white bg-[#9538E2]"
                onClick={handleSort}
              >
                Sort By Price
              </button>
              <button
                onClick={handleClearAllCart}
                className="btn text-lg font-bold text-white bg-[#9538E2]"
              >
                Purchase
              </button>
            </div> */}
          </div>
          {products.length > 0 &&
            products.map((product) => (
              <Cart
                handleRemove={handleRemove}
                key={product.id}
                product={product}
                handleSort={handleSort}
              ></Cart>
            ))}
        </div>
      )}
      {/* For Wishlist Component */}
      {!open && (
        <div className="max-w-[1024px] py-4 rounded-xl mx-auto">
          <h3 className="text-2xl font-bold mb-5">Wislist</h3>

          {wishlists.length > 0 &&
            wishlists.map((product) => (
              <Wishlist
                change={change}
                setChange={setChange}
                key={product.id}
                product={product}
              ></Wishlist>
            ))}
        </div>
      )}
      {/* <!-- Open the modal using ID.showModal() method --> */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <ProductCart></ProductCart>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-center">
            <img className="width-[50px]" src={purchasegIcon} alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-4xl font-black text-dark text-center">
              Congrates
            </h3>
            <h4 className="text-xl font-black text-dark text-center">
              Your purchase succefully Done
            </h4>
            <h3 className="text-xl font-black text-dark text-center">
              {modalPrice}
            </h3>
          </div>
          <div className="modal-action justify-center">
            <form method="dialog">
              {/* < if there is a button in form, it will close the modal  */}
              <button className="btn text-xl font-bold text-white bg-[#9538E2]">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <Outlet></Outlet>
    </div>
  );
};

export default ShoppingCart;
