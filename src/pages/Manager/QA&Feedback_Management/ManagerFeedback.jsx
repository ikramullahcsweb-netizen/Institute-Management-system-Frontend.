import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../Header/Header";

function ManagerFeedback() {
  // STATIC DATA
  const [feedbacks, setFeedbacks] = useState([
    {
      _id: 1,
      grade: "Grade 10",
      feedback: "Teacher teaching style is very good.",
      reply: "Thank you for your feedback.",
    },
    {
      _id: 2,
      grade: "Grade 9",
      feedback: "Need more practical classes.",
      reply: "We will improve this soon.",
    },
    {
      _id: 3,
      grade: "Grade 8",
      feedback: "Class timings are perfect.",
      reply: "Glad to hear that.",
    },
  ]);

  // DELETE
  const handleDelete = (id) => {
    setFeedbacks(feedbacks.filter((item) => item._id !== id));
  };

  return (
    <div className="bg-white min-h-screen">
      <Head />

      <div className="ml-[270px] p-6">
        {/* TOP */}
        <div className="bg-[#C9E8EA] border-2 border-black rounded-3xl p-6 shadow-md">
          <h1 className="text-3xl font-bold text-[#384D6C]">
            Over View of Feedbacks
          </h1>

          <p className="text-lg text-gray-700 mt-2">
            The goal is to turn data into information, and information into
            insight.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <Link to="/ManagerNFeedback">
              <button className="bg-[#384D6C] hover:bg-[#1DB6D9] text-white font-bold px-6 py-3 rounded-2xl duration-300">
                VIEW NEW FEEDBACKS
              </button>
            </Link>

            <Link to="/managerfeedbackgenrate">
              <button className="bg-[#384D6C] hover:bg-[#1DB6D9] text-white font-bold px-6 py-3 rounded-2xl duration-300">
                Generate Feedback Report
              </button>
            </Link>
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-[#384D6C] mt-8 mb-6 underline">
          Feedbacks
        </h2>

        {/* FEEDBACK LIST */}
        <div className="space-y-6">
          {feedbacks.map((feedback) => (
            <div
              key={feedback._id}
              className="bg-[#C9E8EA] border-2 border-black rounded-3xl p-6 shadow-md"
            >
              <p className="text-lg text-black mb-3">
                <span className="font-bold text-[#384D6C]">Grade:</span>{" "}
                {feedback.grade}
              </p>

              <p className="text-lg text-black mb-3">
                <span className="font-bold text-[#384D6C]">Feedback:</span>{" "}
                {feedback.feedback}
              </p>

              <p className="text-lg text-black mb-5">
                <span className="font-bold text-[#384D6C]">Reply:</span>{" "}
                {feedback.reply}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-4">
                <Link to={`/MFeedbackUpdate/${feedback._id}`}>
                  <button className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-2 rounded-xl duration-300">
                    Edit
                  </button>
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
