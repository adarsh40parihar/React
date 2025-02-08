import React from 'react'
import whatsapplogo from "../Assets/whatsapp.svg";
import { ArrowLeftToLine } from "lucide-react";
import { useNavigate } from 'react-router-dom';


function PageNotFound() {
  const Navigate = useNavigate();

  const handleHome = () => {
    Navigate("/");
  };

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
          <video
            className="h-[200px] w-[210px] rounded-lg shadow-lg"
            autoPlay
            loop
            muted
          >
            <source src="/404.mp4" type="video/mp4" />
          </video>
          <div className="gap-1 flex flex-col items-center">
            <div className="text-2xl font-semibold">PageNotFound </div>
          </div>
          <button onClick={handleHome} className="bg-primary text-white p-4  rounded-md flex gap-2 items-center font-[550]">
            <ArrowLeftToLine /> Back to Home
          </button>
        </div>
      </div>
    </>
  );
}

export default PageNotFound