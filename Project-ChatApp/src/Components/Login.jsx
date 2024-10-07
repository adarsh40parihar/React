// rfce
import React from 'react'
import whatsapplogo from "../Assets/whatsapp.svg"
import fingerprintlogo from "../Assets/fingerprint.svg";
function Login() {
  return (
    <>
      <div>
        <img src={whatsapplogo} alt="WhatsApplogo" />
        <div>WHATSAPP</div>
      </div>
      <div>
        <img src={fingerprintlogo} alt="fingerprint Svg" className="h-8"/>
        <div>Sign In</div>
        <div>Sign In with Your Google account to get started.</div>
        <button>Sign in with Google</button>
      </div>
    </>
  );
}

export default Login;