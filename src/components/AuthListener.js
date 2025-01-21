import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { logedIn, logedOut, setLoading } from "../slice/authSlice"; // Import your actions

const auth = getAuth();

export default function AuthStateListener() {
  const dispatch = useDispatch();
  //   const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(setLoading(true)); // Set loading to true initially

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { uid, displayName, email } = user;
        dispatch(logedIn({ user: { uid, displayName, email } }));
      } else {
      }
      dispatch(setLoading(false)); // Set loading to false once the auth state is determined
    });

    // Clean up listener on component unmount
    return () => unsubscribe();
  }, [dispatch]);

  return null; // This component doesn't need to render anything
}
