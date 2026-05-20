import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Head from '../Header/Header';

function TeView() {
  // STATIC TRANSACTION LAYOUT LOG FOR COMPUTER SCIENCE DEPT
  const [allPayments] = useState([
    {
      _id: 'tx-online-901',
      itnumber: 'IT-2023-4081',
      date: '2026-05-12',
      amount: 'Rs. 45,000',
      description: 'Database Management Systems & Lab',
      type: 'Online Transfer',
      status: 'Approved'
    },
    {
      _id: 'tx-bank-902',
      itnumber: 'IT-2022-3104',
      date: '2026-05-14',
      amount: 'Rs. 42,000',
      description: 'Advanced Data Structures & Lab',
      type: 'Bank Deposit',
      status: 'Pending'
    },
    {
      _id: 'tx-cash-903',
      itnumber: 'IT-2024-1152',
      date: '2026-05-15',
      amount: 'Rs. 38,000',
      description: 'Database Management Systems & Lab',
      type: 'Cash Voucher',
      status: 'Rejected'
    },
    {
      _id: 'tx-online-904',
      itnumber: 'IT-2023-4412',
      date: '2026-05-16',
      amount: 'Rs. 45,000',
      description: 'Advanced Algorithms & Complexity',
      type: 'Online Transfer',
      status: 'Approved'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Client-Side Realtime Search Pattern Logic
  const filteredPayments = allPayments.filter(payment => {
    return payment.itnumber && payment.itnumber.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Handles Instant Feedback Toast if IT Key Query Yields Zero Results
  useEffect(() => {
    if (searchQuery && filteredPayments.length === 0) {
      toast.error('Student IT reference number not found', {
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
      {/* Head navigation panel core integration */}
      <Head />
      <Toaster position="top-right" />

      {/* DASHBOARD WORKSPACE FLOW WRAPPER: Synchronized offset 260px padding layout */}
      <div className="w-full max-w-[1350px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        
        {/* Modern Clean Header Row */}
        <div className="bg-[#C9E8EA] border-2 border-slate-900 rounded-[20px] p-6 mb-8 text-center shadow-xs">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
            My Remittance & Payments Stream
          </h1>
          <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mt-1">
            Tracking tuition ledger settlements synchronized via active course filters
          </p>
        </div>

        {/* Search Management Box Panel */}
        <div className="bg-[#C9E8EA] border-2 border-slate-900 rounded-xl p-4 mb-6 max-w-md mx-auto sm:mx-0">
          <div className="relative flex items-center w-full bg-white rounded-xl border border-slate-300 overflow-hidden shadow-xs focus-within:border-[#384D6C]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search registry by IT Number (e.g., IT-2023)..."
              className="w-full bg-transparent px-4 py-2.5 text-sm text-gray-800 font-medium outline-none placeholder:text-gray-400 placeholder:text-xs"
            />
            <div className="bg-[#384D6C] text-white text-xs font-bold px-4 py-3 cursor-default uppercase tracking-wider">
              Search
            </div>
          </div>
        </div>

        {/* Master Ledger Data Table Layout Section */}
        <div className="w-full bg-white border-2 border-slate-900 rounded-[20px] shadow-sm overflow-hidden">
          
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[950px] border-collapse text-left text-sm">
              
              {/* Table Column Head Field Controls */}
              <thead className="bg-[#384D6C] text-xs font-bold text-white uppercase tracking-wider border-b-2 border-slate-900">
                <tr>
                  <th scope="col" className="px-6 py-4 border-r border-slate-700">Student IT Number</th>
                  <th scope="col" className="px-6 py-4 border-r border-slate-700">Settlement Date</th>
                  <th scope="col" className="px-6 py-4 border-r border-slate-700">Amount Released</th>
                  <th scope="col" className="px-6 py-4 border-r border-slate-700">Associated Course Module</th>
                  <th scope="col" className="px-6 py-4 border-r border-slate-700">Gateway Type</th>
                  <th scope="col" className="px-6 py-4 text-center">Verification Status</th>
                </tr>
              </thead>

              {/* Table Data Stream Content Mapping Rows */}
              <tbody className="divide-y divide-slate-200 bg-white font-medium text-gray-700">
                {filteredPayments.length > 0 ? (
                  filteredPayments.map((payment) => (
                    <tr key={payment._id} className="hover:bg-slate-50 transition-colors">
                      
                      <td className="px-6 py-4 font-mono font-bold text-slate-900 whitespace-nowrap">
                        {payment.itnumber}
                      </td>
                      
                      <td className="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">
                        {payment.date}
                      </td>
                      
                      <td className="px-6 py-4 font-bold text-slate-900 whitespace-nowrap">
                        {payment.amount}
                      </td>
                      
                      <td className="px-6 py-4 text-xs font-semibold text-[#384D6C] max-w-[260px] truncate">
                        {payment.description}
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xs bg-slate-100 text-slate-700 border border-slate-300 font-bold px-2.5 py-1 rounded-md">
                          {payment.type}
                        </span>
                      </td>
                      
                      <td className="px-6 py-4 text-center whitespace-nowrap">
                        <span 
                          className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-lg ${
                            payment.status === 'Approved' 
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-300' 
                              : payment.status === 'Rejected' 
                              ? 'bg-red-50 text-red-700 border border-red-300' 
                              : 'bg-amber-50 text-amber-700 border border-amber-300'
                          }`}
                        >
                          {payment.status}
                        </span>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-12 font-black text-gray-400 uppercase tracking-widest text-xs bg-slate-50">
                      No matching records recovered in active query buffer.
                    </td>
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