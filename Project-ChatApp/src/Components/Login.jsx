// rfce
import React,{useEffect} from 'react'
import whatsapplogo from "../Assets/whatsapp.svg"
import { Fingerprint, LogIn as LoginIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
//auth import -> Step-3
import { signInWithPopup } from "firebase/auth";
import { auth, db } from "../../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from './AuthContext';

async function createUser(authdata) {
  const userObject = authdata.user; 
  const { uid, displayName, photoURL, email } = userObject;
  //Create a new user in firestore
  await setDoc(doc(db, "users", uid), {
    email,
    name: displayName,
    profile_pic: photoURL

  })

  console.log("User Created");

}

function Login() {

  const {userData:isLoggedIn} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  
  const handleLogin = async () => {
    // login Logic of firebase
    //auth import -> Step-4
    const userData = await signInWithPopup(auth, new GoogleAuthProvider());
    // console.log(userData);
    await createUser(userData);
  // Go to home page.
    navigate("/");
  }

  return (
    <>
      <div className="h-[220px] bg-primary ">
        <div className="flex ml-[200px] pt-[40px] items-center gap-4">
          <img src={whatsapplogo} alt="WhatsApplogo" className="h-8" />
          <div className="text-white font-semibold">WHATSAPP</div>
        </div>
      </div>

      <div className="h-[calc(100vh-220px)] bg-background flex items-center justify-center relative">
        <div className="bg-white h-[100%] w-[55%] shadow-2xl flex flex-col items-center justify-center gap-6 absolute -top-[93px] rounded-xl">
          <Fingerprint
            className="h-[90px] w-[90px] text-[#449f8c]"
            strokeWidth={1.1}
          />
          <div className="gap-1 flex flex-col items-center">
            <div className="text-2xl font-semibold">Sign In</div>
            <div className="text-[#606060] w-60 text-center text-sm">
              Sign in with Your Google account to get started.
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="bg-primary text-white p-4  rounded-md flex gap-2 items-center font-[550]"
          >
            Sign in with Google <LoginIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;