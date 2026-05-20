import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import loginimg from "./photos/managerlogin.png";

function Forgetpasswordadmin() {
  const [username, setusername] = useState("");
  const [SecAnswer, setSecAnswer] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [rePassword, setrePassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !SecAnswer || !newPassword || !rePassword) {
      toast.error("Please fill in all identity credentials fields.");
      return;
    }

    if (newPassword !== rePassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      // Local Client Authentication Memory Lookup
      const savedAdmin = localStorage.getItem("s2s_admin_profile");
      let adminData = savedAdmin ? JSON.parse(savedAdmin) : null;

      // Fallback fallback verification validation values if no record exists yet
      const activeUsername = adminData ? adminData.username : "admin";
      const activeSecAnswer = adminData
        ? adminData.SecAnswer || adminData.secanswer
        : "Peshawar";

      // Validating administrative handle identity matching sequence
      if (
        username.toLowerCase() === activeUsername.toLowerCase() &&
        SecAnswer.toLowerCase() === activeSecAnswer.toLowerCase()
      ) {
        // Formulating updated record map
        const updatedAdminObj = {
          name: adminData ? adminData.name : "Super Administrator",
          username: activeUsername,
          email: adminData ? adminData.email : "admin@step2scientist.com",
          contactnumber: adminData
            ? adminData.contactnumber
            : "+92 300 1234567",
          SecAnswer: activeSecAnswer,
          password: newPassword, // Updating with new password token
        };

        localStorage.setItem(
          "s2s_admin_profile",
          JSON.stringify(updatedAdminObj),
        );
        toast.success(
          "Security authorization clear! Password modified successfully.",
        );

        navigate("/adminlogin");
      } else {
        toast.error(
          "Identity clearance mismatch! Username or Security Answer is incorrect.",
        );
      }
    } catch (error) {
      console.error("Local recovery stream error:", error);
      toast.error("Something went wrong with account encryption reset logic.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans flex items-center justify-center p-0 md:p-6">
      {/* Core Split-Screen Vault Frame */}
      <div className="w-full max-w-[1100px] min-h-[650px] bg-white md:rounded-[24px] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-gray-100">
        {/* Left Aspect: Visual Identity Banner Node */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-[#063a67] to-[#12538c] p-12 relative text-white text-center">
          <div className="absolute inset-0 bg-blue-950/10 backdrop-blur-[2px]"></div>

          <div className="relative z-10 space-y-6 max-w-[400px]">
            <img
              src={loginimg}
              alt="Security Challenge Terminal"
              className="w-full max-w-[280px] mx-auto drop-shadow-2xl animate-pulse [animation-duration:10s]"
            />
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight m-0">
                Step 2 Scientist Academy
              </h2>
              <p className="text-blue-200/80 text-xs font-semibold uppercase tracking-widest mt-2">
                Credential Reset Authorization Center
              </p>
            </div>
          </div>
        </div>

        {/* Right Aspect: Interactive Reset Operations Terminal */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 bg-white relative">
          {/* Section Header Module */}
          <div className="mb-6 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-[11px] font-bold text-amber-800 tracking-wider uppercase mb-3">
              Trouble Logging In?
            </div>
            <h1 className="text-3xl font-black text-[#063a67] m-0 tracking-tight">
              Recover Account
            </h1>
            <p className="text-sm text-gray-400 font-medium mt-1">
              Provide cryptography handle tokens to overwrite forgotten cipher
              access tokens.
            </p>
          </div>

          {/* Interactive Form Action Field controls */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Module: Admin Username Verification */}
            <div className="space-y-1">
              <label
                htmlFor="username"
                className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider"
              >
                Username Identifier
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter admin workspace handle"
                className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50 text-sm"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
              />
            </div>

            {/* Input Module: Security Guard Challenge Response Field */}
            <div className="space-y-1">
              <label
                htmlFor="securityans"
                className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider"
              >
                Security Question:{" "}
                <span className="text-[#063a67] font-bold lowercase italic">
                  What city were you born in?
                </span>
              </label>
              <input
                type="text"
                id="securityans"
                placeholder="Provide verification passphrase answer"
                className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50 text-sm"
                value={SecAnswer}
                onChange={(e) => setSecAnswer(e.target.value)}
                required
              />
            </div>

            {/* Input Module: Cipher Token Definition Box */}
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider"
              >
                New Terminal Access Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter custom alpha-numeric password keys"
                className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50 text-sm"
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
                required
              />
            </div>

            {/* Input Module: Cipher Token Matching Re-Evaluation Block */}
            <div className="space-y-1">
              <label
                htmlFor="repassword"
                className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider"
              >
                Confirm New Access Password
              </label>
              <input
                type="password"
                id="repassword"
                placeholder="Confirm character matrix matching validation"
                className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none font-semibold text-gray-800 transition-all focus:border-[#063a67] focus:bg-white bg-gray-50 text-sm"
                value={rePassword}
                onChange={(e) => setrePassword(e.target.value)}
                required
              />
            </div>

            {/* Form Execution Ribbon */}
            <div className="pt-4 flex flex-col gap-4">
              <button
                type="submit"
                className="w-full text-white cursor-pointer bg-[#063a67] text-center rounded-xl py-4 outline-none transition-all duration-200 text-sm font-extrabold hover:bg-gradient-to-r hover:from-[#da4a0c] hover:to-[#e60b45] hover:scale-[1.01] shadow-lg border-none"
              >
                Reset Account Token Passkey
              </button>

              <div className="text-center">
                <Link
                  to="/adminlogin"
                  className="text-xs font-bold text-[#063a67] hover:text-[#da4a0c] no-underline transition-colors tracking-wide"
                >
                  Already authenticated?{" "}
                  <span className="underline">Log In Here</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Forgetpasswordadmin;
