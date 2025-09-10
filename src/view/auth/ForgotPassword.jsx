/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import useAuthStore from "../../Store/useAuthStore";

const formVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: { duration: 0.7, type: "tween", ease: "easeInOut" },
};

const ForgotPassword = () => {
  const { forgotPassword, loading, error } = useAuthStore();
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      await forgotPassword(email);
      toast.success("Reset link sent! Check your email.");
      setEmail("");
    } catch (err) {
      toast.error(error || "Failed to send reset link.");
    }
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
          key="forgot-password"
          className="relative w-full max-w-md mx-auto"
          variants={formVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={formVariants.transition}
        >
          <div className="bg-transparent bg-opacity-10 backdrop-blur-md rounded-2xl px-5 py-8 w-full max-w-md border border-gray-300 cursor-pointer">
            <h2 className="text-white text-xl font-semibold mb-4">Forgot Password</h2>
            <p className="text-white mb-4">
              Enter your email to receive a password reset link.
            </p>

            <div className="mb-5 flex items-center border rounded px-3 py-2 bg-transparent text-white">
              <FaEnvelope className="mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            {error && <p className="text-red-500 mb-2">{error}</p>}

            <button
              className="w-full py-2 bg-[#2380D9] text-white font-bold rounded"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ForgotPassword;
