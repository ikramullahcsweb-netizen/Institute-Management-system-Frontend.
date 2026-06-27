import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Head from "../Header/Header";

function ManagerNFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewFeedbacks();
  }, []);

  const fetchNewFeedbacks = async () => {
    try {
      // Backend route: getMFeedbacks
      const response = await axios.get("http://localhost:3000/getMFeedbacks");
      setFeedbacks(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      toast.error("Failed to load new feedbacks");
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Head />
      <Toaster />

      <div className="ml-[270px] p-6">
        {/* HEADING */}
        <div className="bg-[#C9E8EA] border-2 border-black rounded-3xl p-6 shadow-md mb-8">
          <h1 className="text-3xl font-bold text-[#384D6C]">
            Connect With Your Teachers - New Questions
          </h1>
        </div>

        {/* FEEDBACKS LIST */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="space-y-6">
            {feedbacks.length > 0 ? (
              feedbacks.map((feedback) => (
                <div
                  key={feedback._id}
                  className="bg-[#C9E8EA] border-2 border-black rounded-3xl p-6 shadow-md flex justify-between items-center"
                >
                  <div>
                    <p className="text-lg text-black mb-4">
                      <span className="font-bold text-[#384D6C]">Grade:</span>{" "}
                      {feedback.grade}
                    </p>
                    <p className="text-lg text-black">
                      <span className="font-bold text-[#384D6C]">Feedback:</span>{" "}
                      {feedback.feedback}
                    </p>
                  </div>

                  {/* REPLY BUTTON */}
                  <Link to={`/ReplyF/${feedback._id}`}>
                    <button className="bg-[#384D6C] hover:bg-[#1DB6D9] text-white font-bold px-6 py-3 rounded-2xl duration-300">
                      Reply
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No new feedbacks found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ManagerNFeedback;