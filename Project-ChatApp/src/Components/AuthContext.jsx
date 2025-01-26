import React, { useContext, useEffect } from "react";
import { useState } from "react";
// for cookie step-1
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
//1.
const AuthContext = React.createContext();
//hook
export function useAuth() {
  //3
  return useContext(AuthContext);
}

function AuthWrapper({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // for cookie step-2
  useEffect(() => {
    //check if user already logged in.
    //kuchh bhi change hoga to yanha updte ho jayega.
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser) {
        const docRef = doc(db, "users", currentUser?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const { uid, name, profile_pic, email } = docSnap.data();
          setUserData({
            id: currentUser.uid,
            email,
            name,
            profile_pic,
          });
          console.log("User Data Added")
        }
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
    

  return (
    <AuthContext.Provider value={{ setUserData, userData , loading}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthWrapper;
