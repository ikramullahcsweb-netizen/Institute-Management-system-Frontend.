import React, { useState } from 'react';
import Head from '../Header/Header';

function MFeedbackUpdate() {

  const [feedback] = useState(
    'Teachers are very supportive and classes are well organized.'
  );

  const [reply, setReply] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Response Submitted Successfully');

    setReply('');
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      
      <Head />

      <div className="ml-[240px] p-8">

        {/* Heading */}

        <h1 className="text-[30px] font-bold text-[#063a67] mb-8">
          We Want to Hear from You - Service Feedbacks
        </h1>

        {/* Card */}

        <div className="w-[950px] bg-white rounded-[20px] border border-[#d9e2ec] shadow-md p-8">

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Feedback Section */}

            <div>
              <label className="block text-[22px] font-semibold text-[#063a67] mb-4">
                Feedback
              </label>

              <div className="w-full min-h-[170px] rounded-[15px] border border-[#cfd8e3] bg-[#f8fbff] p-5 text-[17px] text-[#333] leading-8">
                {feedback}
              </div>
            </div>

            {/* Response Section */}

            <div>
              <label className="block text-[22px] font-semibold text-[#063a67] mb-4">
                Response
              </label>

              <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Write your response here..."
                className="w-full h-[220px] rounded-[15px] border border-[#cfd8e3] bg-white p-5 text-[17px] outline-none resize-none focus:border-[#063a67] focus:ring-2 focus:ring-[#b7d4ec]"
                required
              />
            </div>

            {/* Button */}

            <div className="flex justify-end">

              <button
                type="submit"
                className="bg-[#063a67] hover:bg-[#0b4d88] text-white text-[18px] font-bold px-10 py-4 rounded-[14px] transition duration-300 shadow-md"
              >
                Submit Response
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default MFeedbackUpdate;