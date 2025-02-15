// /* eslint-disable react/prop-types */
// import axios from "axios";
// import {
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import app from "../firebase/firebase.config";

// // eslint-disable-next-line react-refresh/only-export-components
// export const AuthContext = createContext(null);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const signInWithGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   const logOut = async () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   const updateUserProfile = (name, photo) => {
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photo,
//     });
//   };

//   // onAuthStateChange
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       console.log("CurrentUser-->", currentUser);
//       if (currentUser?.email) {
//         setUser(currentUser);

//         // Get JWT token
//         await axios.post(
//           `${import.meta.env.VITE_API_URL}/jwt`,
//           {
//             email: currentUser?.email,
//           },
//           { withCredentials: true }
//         );
//       } else {
//         setUser(currentUser);
//         await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
//           withCredentials: true,
//         });
//       }
//       setLoading(false);
//     });
//     return () => {
//       return unsubscribe();
//     };
//   }, []);

//   const authInfo = {
//     user,
//     setUser,
//     loading,
//     setLoading,
//     createUser,
//     signIn,
//     signInWithGoogle,
//     logOut,
//     updateUserProfile,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// ------------- shami  ---------

/* eslint-disable react/prop-types */
import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jwtFetched, setJwtFetched] = useState(false);

  const createUser = async (email, password) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    setJwtFetched(false);
    return result;
  };

  const signIn = async (email, password) => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password);
    setJwtFetched(false);
    return result;
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    setJwtFetched(false);
    return result;
  };

  const logOut = async () => {
    setLoading(true);
    setJwtFetched(false);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("CurrentUser-->", currentUser);
      if (currentUser?.email) {
        setUser(currentUser);
        if (!jwtFetched) {
          setJwtFetched(true);
          try {
            await axios.post(
              `${import.meta.env.VITE_API_URL}/jwt`,
              { email: currentUser.email },
              { withCredentials: true }
            );
          } catch (error) {
            console.error("JWT Fetch Error:", error);
          }
        }
      } else {
        setUser(null);
        setJwtFetched(false);
        try {
          await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
            withCredentials: true,
          });
        } catch (error) {
          console.error("Logout Error:", error);
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [jwtFetched]);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
