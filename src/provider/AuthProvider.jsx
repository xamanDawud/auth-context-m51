import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"; /* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";

export let authContext = createContext(null);
let auth = getAuth(app);

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  //create User
  let crateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn user
  let signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Logout User
  let logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Manage User
  useEffect(() => {
    let unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current value of the login user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  //All Outside Handler
  let authInfo = { user, crateUser, signInUser, logOut, loading };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
