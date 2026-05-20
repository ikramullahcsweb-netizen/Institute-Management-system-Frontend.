import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../Header/Header";

function ManagerNFeedback() {
  // STATIC DATA
  const [feedbacks] = useState([
    {
      _id: 1,
      grade: "Grade 10",
      feedback: "Need more computer practical classes.",
    },
    {
      _id: 2,
      grade: "Grade 9",
      feedback: "Teacher explains topics very clearly.",
    },
    {
      _id: 3,
      grade: "Grade 8",
      feedback: "Please improve classroom environment.",
    },
  ]);

  return (
    <div className="bg-white min-h-screen">
      <Head />

      <div className="ml-[270px] p-6">
        {/* HEADING */}
        <div className="bg-[#C9E8EA] border-2 border-black rounded-3xl p-6 shadow-md mb-8">
          <h1 className="text-3xl font-bold text-[#384D6C]">
            Connect With Your Teachers - New Questions
          </h1>
        </div>

        {/* FEEDBACKS */}
        <div className="space-y-6">
          {feedbacks.map((feedback) => (
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

              {/* BUTTON */}
              <Link to={`/ReplyF/${feedback._id}`}>
                <button className="bg-[#384D6C] hover:bg-[#1DB6D9] text-white font-bold px-6 py-3 rounded-2xl duration-300">
                  Reply
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManagerNFeedback;
