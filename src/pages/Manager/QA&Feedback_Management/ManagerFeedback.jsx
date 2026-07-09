import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Head from "../Header/Header";

function ManagerFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // API se feedbacks fetch karna
  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("/api/feedback/feedbacksShow", { withCredentials: true });
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      toast.error("Failed to load feedbacks");
    }
  };

  // Feedback delete karna
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#384D6C",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.put(`http://localhost:3000/deletereply/${id}`);
          setFeedbacks(feedbacks.filter((item) => item._id !== id));
          toast.success("Feedback deleted successfully");
        } catch (error) {
          toast.error("Failed to delete feedback");
        }
      }
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <Head />
      <Toaster />

      <div className="ml-[270px] p-6">
        {/* TOP SECTION */}
        <div className="bg-[#C9E8EA] border-2 border-black rounded-3xl p-6 shadow-md">
          <h1 className="text-3xl font-bold text-[#384D6C]">Over View of Feedbacks</h1>
          <p className="text-lg text-gray-700 mt-2">The goal is to turn data into information, and information into insight.</p>
          <div className="flex gap-4 mt-6 flex-wrap">
            <Link to="/ManagerNFeedback">
              <button className="bg-[#384D6C] hover:bg-[#1DB6D9] text-white font-bold px-6 py-3 rounded-2xl duration-300">VIEW NEW FEEDBACKS</button>
            </Link>
            <Link to="/managerfeedbackgenrate">
              <button className="bg-[#384D6C] hover:bg-[#1DB6D9] text-white font-bold px-6 py-3 rounded-2xl duration-300">Generate Feedback Report</button>
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#384D6C] mt-8 mb-6 underline">Feedbacks</h2>

        {/* FEEDBACK LIST */}
        <div className="space-y-6">
          {feedbacks.map((feedback) => (
            <div key={feedback._id} className="bg-[#C9E8EA] border-2 border-black rounded-3xl p-6 shadow-md">
              <p className="text-lg text-black mb-3"><span className="font-bold text-[#384D6C]">Grade:</span> {feedback.grade}</p>
              <p className="text-lg text-black mb-3"><span className="font-bold text-[#384D6C]">Feedback:</span> {feedback.feedback}</p>
              <p className="text-lg text-black mb-5"><span className="font-bold text-[#384D6C]">Reply:</span> {feedback.reply}</p>
              
              <div className="flex gap-4">
                <Link to={`/MFeedbackUpdate/${feedback._id}`}>
                  <button className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-2 rounded-xl duration-300">Edit</button>
                </Link>
                <button
                  onClick={() => handleDelete(feedback._id)}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold px-6 py-2 rounded-xl duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManagerFeedback;