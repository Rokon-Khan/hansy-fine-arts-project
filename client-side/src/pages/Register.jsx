import axios from "axios";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Register = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    setErrorMessage("");
    setSuccess(false);

    if (password.length < 6) {
      setErrorMessage("Password should be 6 characters or longer");
      return;
    }

    if (!regex.test(password)) {
      setErrorMessage(
        "At least one uppercase, one lowercase, and more than 6 characters"
      );
      return;
    }

    try {
      // Create Firebase user
      const result = await createUser(email, password);
      const firebaseUser = result.user;

      // Update profile
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      // Prepare user object for MongoDB
      const newUser = {
        uid: firebaseUser.uid,
        name,
        email,
      };

      // Add user to MongoDB
      try {
        // 1. Make a POST request with axios
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/users`,
          newUser
        );

        // 2. Check the response
        if (response.data.insertedId) {
          Swal.fire({
            title: "Wow!!!",
            text: "User Registered Successfully!",
            icon: "success",
          });

          // 3. Reset form
          if (formRef.current) {
            formRef.current.reset();
          }

          // 4. Navigate to the next page
          navigate(location?.state ? location.state : "/");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error(error.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage(error.message);
    }
  };

  const handleSignWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      // Prepare user object for MongoDB
      const newUser = {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        // photo: firebaseUser.photoURL,
        email: firebaseUser.email,
      };

      // Add user to MongoDB
      try {
        // 1. Make a POST request with axios
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/users`,
          newUser
        );

        // 2. Check the response
        if (response.data.insertedId) {
          Swal.fire({
            title: "Wow!!!",
            text: "User Registered Successfully!",
            icon: "success",
          });

          // 3. Reset form
          // If there is no form, you can remove or adjust this line
          // form.reset();

          // 4. Navigate to the next page
          navigate(location?.state ? location.state : "/");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error(error.message);
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  return (
    <div className="space-y-10">
      <Navbar></Navbar>
      <div className="flex flex-col md:w-3/4 lg:w-1/2 mx-auto p-6">
        <h2 className="text-3xl my-10 font-bold text-center">
          SignUp for Place an Order
        </h2>
        <form ref={formRef} onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div> */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
            <p
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-2 top-12"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </p>
          </div>
          <div className="form-control mt-6 space-y-4">
            <button className="btn btn-success text-xl text-white font-bold">
              SignUp
            </button>
          </div>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {success && <p className="text-green-600">Register is Successful.</p>}
        </form>
        <button
          onClick={handleSignWithGoogle}
          className="btn btn-full btn-success text-xl text-white font-bold my-4"
        >
          SignUp With Google
        </button>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="text-green-600 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
