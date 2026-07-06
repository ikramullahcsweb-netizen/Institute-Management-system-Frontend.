
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from '../Header/Header';

function ViewTeacherFeedback() {
  const [tfeedbacks, setTFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileRes = await axios.get('/api/v1/teacherprofile');
        const tsub = profileRes.data.subject;
        const feedbackRes = await axios.get('http://localhost:3000/MyTFeedbacks');
        
        const filtered = feedbackRes.data.filter(f => f.subject === tsub);
        setTFeedbacks(filtered);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Head waisa hi hai, isse hum ne touch nahi kiya */}
      <Head />

      {/* Main Content Area: 
         1. 'md:ml-[230px]' ka matlab hai: Laptop/Desktop par left side se 230px ka margin le, 
            taaki sidebar ke upar content na aaye.
         2. Mobile par 'ml-0' rahega (default), isliye full width milegi.
      */}
      <div className="md:ml-[210px] lg:ml-[260px] p-4 md:p-5 my-10 mx-auto">
        
        <h2 className="text-2xl font-bold text-[#063a67] mb-6">
          We Want to Hear from You - My Feedbacks
        </h2>

        {/* Feedback Cards container */}
        <div className="flex flex-col gap-6 max-w-4xl">
          {tfeedbacks.length > 0 ? (
            tfeedbacks.map((tfeedback, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-full"
              >
                <h3 className="text-lg font-bold border-b pb-2 mb-4 text-gray-700">Feedback Details</h3>
                
                <div className="space-y-2 text-gray-800">
                  <p><strong>Grade:</strong> {tfeedback.grade}</p>
                  <p><strong>Subject:</strong> {tfeedback.subject}</p>
                  <p><strong>Teacher:</strong> {tfeedback.teacher}</p>
                  <p className="mt-3 pt-2 border-t text-gray-600">
                    <strong>Feedback:</strong> {tfeedback.feedback}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No feedback available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewTeacherFeedback;