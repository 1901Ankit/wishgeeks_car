import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaLock,
  FaRegEnvelope,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Auth = () => {
  const otpLength = 6;
  const [isSignUp, setIsSignUp] = useState(false);
  const [otpState, setOtpState] = useState({
    values: new Array(otpLength).fill(""),
    showOtp: false,
  });

  //   otpstart
  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (!/^\d?$/.test(value)) return;
    const otpCopy = [...otpState.values];
    otpCopy[index] = value;
    setOtpState({ ...otpState, values: otpCopy });

    if (value && index < otpLength - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpState.values[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(pasteData)) return;

    const pasteArray = pasteData.slice(0, otpLength).split("");
    setOtpState({
      ...otpState,
      values: [
        ...pasteArray,
        ...new Array(otpLength - pasteArray.length).fill(""),
      ],
    });
    document
      .getElementById(`otp-input-${Math.min(pasteArray.length, otpLength) - 1}`)
      ?.focus();
  };
  // otpend

  // framer
  const formVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
    transition: { duration: 0.7, type: "tween", ease: "easeInOut" },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://wishgeekstechserve.s3.ap-southeast-2.amazonaws.com/7875596-hd_1280_720_60fps.mp4"
          type="video/mp4"
        />
      </video>

      <AnimatePresence mode="wait">
        <motion.div
          key={isSignUp + "-" + otpState.showOtp}
          className="relative w-full max-w-md mx-auto"
          variants={formVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={formVariants.transition}
        >
          <div className="bg-transparent bg-opacity-10 backdrop-blur-md rounded-2xl px-5 py-5 w-full max-w-md border border-gray-300 cursor-pointer">
            {/* Sign In Form */}
            {!isSignUp && (
              <form className="mb-5">
                <div className="mb-5 relative">
                  <label className="text-white block mb-1">Email</label>
                  <div className="flex items-center border rounded px-3 py-2 bg-transparent text-white">
                    <FaEnvelope className="mr-2" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-transparent outline-none text-white w-full"
                    />
                  </div>
                </div>
                <div className="mb-5 relative">
                  <label className="text-white block mb-1">Password</label>
                  <div className="flex items-center border rounded px-3 py-2 bg-transparent text-white">
                    <FaLock className="mr-2" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="bg-transparent outline-none text-white w-full"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-white mb-5">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-[#fff] font-medium text-base">
                    Forgot password?
                  </a>
                </div>
                <button
                  className="w-full py-2 bg-[#2380D9]  text-[#fff] cursor-pointer
               font-bold rounded mb-4 "
                >
                  Sign In
                </button>
                <p className="text-white text-center mb-5">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="text-[#fff] font-semibold cursor-pointer"
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign Up
                  </button>
                </p>
              </form>
            )}

            {/* Sign Up Form */}
            {isSignUp && (
              <>
                {!otpState.showOtp ? (
                  <form
                    className=""
                    onSubmit={(e) => {
                      e.preventDefault();
                      setOtpState({ ...otpState, showOtp: true });
                    }}
                  >
                    <div className="mb-4 relative">
                      <label className="text-white block mb-1">Name</label>
                      <div className="flex items-center border rounded px-3 py-2 bg-transparent text-white">
                        <FaUser className="mr-2" />
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="bg-transparent outline-none text-white w-full"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4 relative">
                      <label className="text-white block mb-1">Email</label>
                      <div className="flex items-center border rounded px-3 py-2 bg-transparent text-white">
                        <FaEnvelope className="mr-2" />
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="bg-transparent outline-none text-white w-full"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4 relative">
                      <label className="text-white block mb-1">Password</label>
                      <div className="flex items-center border rounded px-3 py-2 bg-transparent text-white">
                        <FaLock className="mr-2" />
                        <input
                          type="password"
                          placeholder="Enter your password"
                          className="bg-transparent outline-none text-white w-full"
                          required
                        />
                      </div>
                    </div>

                       <button
                  className="w-full py-2 bg-[#2380D9]  text-[#fff] cursor-pointer
               font-bold rounded mb-4 "
                >
                      Sign Up
                    </button>
                    <p className="text-white text-center mb-5">
                      Already have an account?{" "}
                      <button
                        type="button"
                        className="text-[#fff] font-semibold  cursor-pointer"
                        onClick={() => setIsSignUp(false)}
                      >
                        Sign In
                      </button>
                    </p>
                  </form>
                ) : (
                  <div className="otp-verification-container">
                    <h1 className="otp-instruction text-white text-lg font-semibold mb-2">
                      An OTP has been sent to your email.
                    </h1>
                    <p className="otpverif text-white mb-4">
                      Please enter the OTP to verify.
                    </p>
                    <div className="otp-input-wrapper mt-5 flex gap-2 justify-center  ">
                      {Array.from({ length: otpLength }).map((_, index) => (
                        <input
                          key={index}
                          id={`otp-input-${index}`}
                          maxLength="1"
                          pattern="[0-9]*"
                          autoComplete="off"
                          className="otp-input w-12 h-12 text-center text-white border border-white rounded "
                          type="text"
                          value={otpState.values[index] || ""}
                          onChange={(e) => handleOtpChange(e, index)}
                          onFocus={(e) => e.target.select()}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          onPaste={handlePaste}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between gap-4 py-5">
                      <button
                        className="w-1/2 py-2 bg-gray-300  cursor-pointer text-black font-semibold rounded"
                        type="button"
                        onClick={() => {
                          setOtpState({
                            ...otpState,
                            values: new Array(otpLength).fill(""),
                          });
                        }}
                      >
                        Resend OTP
                      </button>
                      <button
                        className="w-1/2 py-2 bg[#fff] border  cursor-pointer text-white font-semibold rounded"
                        type="button"
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="flex justify-between items-center w-full space-x-4">
              <button
                className="p-3 border rounded-md text-white  
              transition w-full items-center justify-center flex  cursor-pointer "
              >
                <FaFacebookF className="text-lg" />
              </button>
              <button
                className="p-3 border rounded-md text-white  
              transition w-full items-center justify-center flex  cursor-pointer"
              >
                <FaTwitter className="text-lg" />
              </button>
              <button
                className="p-3 border rounded-md text-white  
              transition w-full items-center justify-center flex  cursor-pointer"
              >
                <FaRegEnvelope className="text-lg" />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Auth;
