import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Head from '../Header/Header';

function MFeedbackUpdate() {
  const { id } = useParams(); // URL se ID lena
  const navigate = useNavigate();
  
  const [feedback, setFeedback] = useState('');
  const [reply, setReply] = useState('');

  useEffect(() => {
    fetchFeedbackData();
  }, [id]);

  const fetchFeedbackData = async () => {
    try {
      // 1. Data fetch karna (Assuming getReply endpoint data return karta hai)
      const res = await axios.get(`http://localhost:3000/getReply/${id}`);
      setFeedback(res.data.feedback);
      setReply(res.data.reply || ''); 
    } catch (error) {
      toast.error("Failed to load feedback details");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 2. Response Update karna
      await axios.put(`http://localhost:3000/updateReply/${id}`, { reply });
      toast.success('Response Submitted Successfully');
      setTimeout(() => navigate('/managerfeedback'), 2000);
    } catch (error) {
      toast.error('Failed to submit response');
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <Head />
      <Toaster />
      <div className="ml-[240px] p-8">
        <h1 className="text-[30px] font-bold text-[#063a67] mb-8">
          We Want to Hear from You - Service Feedbacks
        </h1>

        <div className="w-[950px] bg-white rounded-[20px] border border-[#d9e2ec] shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-[22px] font-semibold text-[#063a67] mb-4">Feedback</label>
              <div className="w-full min-h-[170px] rounded-[15px] border border-[#cfd8e3] bg-[#f8fbff] p-5 text-[17px] text-[#333] leading-8">
                {feedback}
              </div>
            </div>

            <div>
              <label className="block text-[22px] font-semibold text-[#063a67] mb-4">Response</label>
              <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Write your response here..."
                className="w-full h-[220px] rounded-[15px] border border-[#cfd8e3] bg-white p-5 text-[17px] outline-none resize-none focus:border-[#063a67] focus:ring-2 focus:ring-[#b7d4ec]"
                required
              />
            </div>

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