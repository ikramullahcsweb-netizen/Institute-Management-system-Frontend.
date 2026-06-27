import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Head from '../Header/Header';

function TeView() {
  const [allPayments, setAllPayments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Backend Integration & Teacher-specific filtering
  useEffect(() => {
    const fetchTeacherPayments = async () => {
      try {
        // 1. Teacher profile se subject nikalna
        const profileRes = await axios.get('http://localhost:3000/teacherprofile');
        const tsubject = profileRes.data.subject;

        // 2. Teeno endpoints se data lana
        const [onlineRes, bankRes, cashRes] = await Promise.all([
          axios.get('http://localhost:3000/displayonline'),
          axios.get('http://localhost:3000/displaybank'),
          axios.get('http://localhost:3000/displaycash')
        ]);

        // 3. Combine aur Filter karna
        const combined = [...onlineRes.data, ...bankRes.data, ...cashRes.data];
        const filtered = combined.filter(payment => payment.description === tsubject);
        
        setAllPayments(filtered);
      } catch (err) {
        console.error("Error fetching data:", err);
        toast.error("Failed to load records");
      }
    };

    fetchTeacherPayments();
  }, []);

  // Search Logic
  const filteredPayments = allPayments.filter(payment => 
    payment.itnumber && payment.itnumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Search Feedback
  useEffect(() => {
    if (searchQuery && filteredPayments.length === 0) {
      toast.error('Student IT number not found', {
        duration: 2000,
        style: {
          background: '#ffffff',
          color: '#13293d',
          borderRadius: '12px',
          border: '2px solid #384D6C',
          fontSize: '13px',
          fontWeight: 'bold'
        },
      });
    }
  }, [searchQuery, filteredPayments]);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />
      <Toaster position="top-right" />

      <div className="w-full max-w-[1350px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        <div className="bg-[#C9E8EA] border-2 border-slate-900 rounded-[20px] p-6 mb-8 text-center shadow-xs">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">My Remittance & Payments Stream</h1>
          <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mt-1">
            Tracking tuition ledger settlements synchronized via active course filters
          </p>
        </div>

        <div className="bg-[#C9E8EA] border-2 border-slate-900 rounded-xl p-4 mb-6 max-w-md mx-auto sm:mx-0">
          <div className="relative flex items-center w-full bg-white rounded-xl border border-slate-300 overflow-hidden shadow-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by IT Number..."
              className="w-full bg-transparent px-4 py-2.5 text-sm text-gray-800 font-medium outline-none"
            />
            <div className="bg-[#384D6C] text-white text-xs font-bold px-4 py-3 uppercase">Search</div>
          </div>
        </div>

        <div className="w-full bg-white border-2 border-slate-900 rounded-[20px] shadow-sm overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[950px] border-collapse text-left text-sm">
              <thead className="bg-[#384D6C] text-xs font-bold text-white uppercase tracking-wider border-b-2 border-slate-900">
                <tr>
                  <th className="px-6 py-4">Student IT Number</th>
                  <th className="px-6 py-4">Settlement Date</th>
                  <th className="px-6 py-4">Amount Released</th>
                  <th className="px-6 py-4">Course Module</th>
                  <th className="px-6 py-4">Gateway</th>
                  <th className="px-6 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredPayments.length > 0 ? (
                  filteredPayments.map((payment) => (
                    <tr key={payment._id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-mono font-bold">{payment.itnumber}</td>
                      <td className="px-6 py-4 text-xs">{payment.date}</td>
                      <td className="px-6 py-4 font-bold">{payment.amount}</td>
                      <td className="px-6 py-4 text-xs font-semibold text-[#384D6C]">{payment.description}</td>
                      <td className="px-6 py-4"><span className="text-xs bg-slate-100 px-2 py-1 rounded">{payment.type}</span></td>
                      <td className="px-6 py-4 text-center">
                        <span className={`text-xs font-black uppercase px-3 py-1 rounded-lg ${
                          payment.status === 'Approved' ? 'bg-emerald-50 text-emerald-700' : 
                          payment.status === 'Rejected' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-12 text-xs font-black text-gray-400 uppercase">No matching records found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeView;