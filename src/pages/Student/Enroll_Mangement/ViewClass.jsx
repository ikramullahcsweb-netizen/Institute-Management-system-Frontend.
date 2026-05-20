import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Head from '../Header/Header';
import { FaGraduationCap, FaReceipt, FaInfoCircle, FaCreditCard, FaArrowRight } from 'react-icons/fa';

function ViewClass() {
  const { subid } = useParams(); // URL dynamically injected params hook
  const [subname, setSubName] = useState('');

  // Mock catalog array matching application domain architecture schemas
  const mockDatabase = {
    'SBJ-991': 'Advanced React Frontend Optimization',
    'SBJ-442': 'Node.js Core Architecture Design',
    'SBJ-108': 'MongoDB Enterprise Pipeline Aggregations',
    'SBJ-753': 'Tailwind UI/UX Responsive Engineering'
  };

  useEffect(() => {
    // Sync state immediately based on custom url parameter indexing safely
    if (subid && mockDatabase[subid]) {
      setSubName(mockDatabase[subid]);
    } else {
      setSubName('Selected Specialized Curricular Stream');
    }
  }, [subid]);

  const instructions = [
    { id: 1, text: 'Payment Deadline: Please complete your payment by the first week to secure your enrollment. Failure to do so may result in being dropped from the class.' },
    { id: 2, text: 'Refund Policy: Refunds are available within the first 3 days of payment. To request a refund, please contact our support team.' },
    { id: 3, text: 'Contact Information: For any payment-related inquiries, please contact our support desk immediately.' },
    { id: 4, text: 'Payment Confirmation: After completing the payment process, you will receive an institutional confirmation email containing full transactional receipts.' },
    { id: 5, text: 'Multiple Installments: If you prefer to pay in structural installments, please contact our financial desk to discuss available installment plans.' },
    { id: 6, text: 'Financial Aid or Scholarships: If you require financial assistance, please visit our campus portal or apply directly for standard semester scholarships.' },
    { id: 7, text: 'Payment Assistance: If you need technical assistance with making the online payment, please reach out to our structural support team for step-by-step guidance.' }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <Head />

      {/* Main Responsive Layout Canvas with Fixed Left Sidebar Protection Guard */}
      <div className="w-full max-w-[1000px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all">
        
        {/* Step 2 Themed Dashboard Structural Main Banner Row */}
        <div className="w-full bg-[#C9E8EA] border border-slate-200 rounded-[20px] p-5 mb-8 flex items-center justify-between shadow-xs">
          <div>
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <FaReceipt className="text-slate-700" />
              <span>Tuition Invoice Desk</span>
            </h1>
            <p className="text-[11px] text-slate-600 font-bold mt-0.5 uppercase tracking-wide">
              Review current cohort module metrics, verify pricing statements, and execute gateway operations safely.
            </p>
          </div>
        </div>

        {/* Core Billing Details & Policies Matrix Frame */}
        <div className="bg-white border-2 border-slate-200 rounded-[22px] shadow-xs overflow-hidden">
          
          {/* Section Dynamic Ribbon Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#483EA8]" />
              <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">
                Class Summary & Gateway Protocols
              </h2>
            </div>
            <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
              Awaiting Remittance
            </span>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            
            {/* Class Specification Block Panel Row */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                <FaGraduationCap className="text-xl text-[#483EA8]" />
              </div>
              <div>
                <h3 className="text-[10px] font-black text-[#667A8A] uppercase tracking-wider">
                  Target Course Stream
                </h3>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight mt-0.5">
                  {subname}
                </p>
                <div className="inline-flex items-center gap-1.5 mt-2 bg-slate-200/60 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-slate-600">
                  <span>ID:</span>
                  <span className="uppercase">{subid || 'N/A'}</span>
                </div>
              </div>
            </div>

            {/* Terms and Instructions Component Block Layout */}
            <div>
              <div className="flex items-center gap-1.5 mb-4">
                <FaInfoCircle className="text-slate-400 text-sm" />
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">
                  Required Payment Instructions & Legal Policy
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {instructions.map((inst) => (
                  <div 
                    key={inst.id} 
                    className="p-4 rounded-xl border border-slate-100 bg-white hover:border-slate-200 transition-colors flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-md bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500 font-mono shrink-0 mt-0.5">
                      {inst.id}
                    </span>
                    <p className="text-xs leading-relaxed text-slate-600 font-medium">
                      {inst.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Operational CTA Directives Button Row Section */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
              <Link to={`/paybank/${subid}`} className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#483EA8] hover:bg-[#392f8a] text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md group"
                >
                  <FaCreditCard className="text-sm" />
                  <span>Proceed to Payment</span>
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ViewClass;