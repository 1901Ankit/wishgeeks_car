/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaLock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthStore from "../../Store/useAuthStore";

const formVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: { duration: 0.7, type: "tween", ease: "easeInOut" },
};

const ResetPassword = () => {
  const { id, token } = useParams();
  const { resetPassword, loading, error } = useAuthStore();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleReset = async () => {
    if (!password.trim()) return toast.error("Password cannot be empty");
    if (password !== confirm) return toast.error("Passwords do not match");

    try {
      const res = await resetPassword(id, token, password);
      toast.success(res.message || "Password reset successfully!");
      setPassword("");
      setConfirm("");
      navigate("/"); // redirect to login
    } catch (err) {
      toast.error(error || "Failed to reset password.");
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
          key="reset-password"
          className="relative w-full max-w-md mx-auto"
          variants={formVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={formVariants.transition}
        >
          <div className="bg-transparent bg-opacity-10 backdrop-blur-md rounded-2xl px-5 py-8 w-full max-w-md border border-gray-300 cursor-pointer">
            <h2 className="text-white text-xl font-semibold mb-4">Reset Password</h2>

            <div className="mb-4 flex items-center border rounded px-3 py-2 bg-transparent text-white">
              <FaLock className="mr-2" />
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            <div className="mb-4 flex items-center border rounded px-3 py-2 bg-transparent text-white">
              <FaLock className="mr-2" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            {error && <p className="text-red-500 mb-2">{error}</p>}

            <button
              className="w-full py-2 bg-[#2380D9] text-white font-bold rounded"
              onClick={handleReset}
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ResetPassword;
