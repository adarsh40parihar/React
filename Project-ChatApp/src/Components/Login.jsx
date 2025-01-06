// rfce
import React from 'react'
import whatsapplogo from "../Assets/whatsapp.svg"
import fingerprintlogo from "../Assets/fingerprint.svg";
import { Fingerprint, LogIn as LoginIcon } from "lucide-react";
function Login() {
  return (
    <>
      <div className="h-[220px] bg-[#15b491] ">
        <div className="flex ml-[200px] pt-[40px] items-center gap-4">
          <img src={whatsapplogo} alt="WhatsApplogo" className="h-8" />
          <div className="text-white font-semibold">WHATSAPP</div>
        </div>
      </div>

      <div className="h-[calc(100vh-220px)] bg-[#eff2f5] flex items-center justify-center relative">
        <div className="bg-white h-[90%] w-[70%] shadow-2xl flex flex-col items-center justify-center gap-4 absolute -top-[93px] rounded">
          <Fingerprint
            className="h-20 w-20 text-primary"
            strokeWidth={1.1}
            style={{ color: "#15b491" }}
          />
          <div className="text-xl font-medium">Sign In</div>
          <div className="text-[#606060]">
            Sign In with Your Google account to get started.
          </div>
          <button className="bg-[#15b491] text-white p-4  rounded hover:border-blue-500">
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;