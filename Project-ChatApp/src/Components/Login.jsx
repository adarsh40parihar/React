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

          <button className="bg-[#15b491] text-white p-4  rounded-md flex gap-2 items-center font-[550]">
            Sign in with Google <LoginIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;