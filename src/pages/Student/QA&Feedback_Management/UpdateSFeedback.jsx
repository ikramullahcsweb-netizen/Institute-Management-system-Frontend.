import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';
import API from '../../../api';

function UpdateSFeedback() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [grade, setGrade]         = useState('');
  const [sfeedbacks, setSFeedbacks] = useState('');
  const [date, setDate]           = useState('');
  const [loading, setLoading]     = useState(false);
  const [fetching, setFetching]   = useState(true);

  // Fetch existing feedback
  useEffect(() => {
    API.get(`/api/feedback/getSFeedback/${id}`)
      .then(res => {
        const d = res.data?.data || res.data;
        setGrade(d.grade       || '');
        setSFeedbacks(d.feedback || '');
        // ISO date string se sirf date part lo
        setDate(d.date ? d.date.split('T')[0] : '');
      })
      .catch(err => console.error(err))
      .finally(() => setFetching(false));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Update Feedback?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#384D6C',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update!',
    }).then(async result => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await API.put(`/api/feedback/updateSFeedback/${id}`, {
            grade, sfeedbacks, date
          });
          toast.success('Service feedback updated!');
          setTimeout(() => navigate('/MyFeedbacks'), 1500);
        } catch (err) {
          toast.error(err.response?.data?.message || 'Update failed');
        } finally {
          setLoading(false);
        }
      }
    });
  };

  if (fetching) {
    return (
      <div><Head />
        <div className="md:ml-[270px] pt-8 px-4">
          <div className="flex items-center gap-3 text-gray-400 font-semibold">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-[#384D6C] rounded-full animate-spin" />
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Head />
      <Toaster />

      <div className="max-w-3xl mx-auto px-4 mt-6 md:ml-[270px] pb-12">
        <h2 className="text-xl font-bold text-[#063a67] mb-6">Update Service Feedback</h2>

        <div className="bg-white border-2 border-gray-100 rounded-[20px] shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Grade</label>
                <input value={grade} readOnly className="w-full p-3 border-2 border-gray-100 bg-gray-50 rounded-xl font-semibold text-gray-700 cursor-not-allowed" />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 focus:outline-none focus:border-[#384D6C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Your Feedback</label>
              <textarea
                required
                rows={5}
                value={sfeedbacks}
                onChange={e => setSFeedbacks(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 focus:outline-none focus:border-[#384D6C] resize-none"
              />
            </div>

            <div className="flex gap-3 justify-end">
              <button type="button" onClick={() => navigate('/MyFeedbacks')}
                className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold px-6 py-3 rounded-xl text-sm transition-all">
                Cancel
              </button>
              <button type="submit" disabled={loading}
                className="bg-[#384D6C] hover:bg-[#283952] disabled:opacity-60 text-white font-bold px-8 py-3 rounded-xl transition-all">
                {loading ? 'Updating...' : 'Update Feedback'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateSFeedback;
