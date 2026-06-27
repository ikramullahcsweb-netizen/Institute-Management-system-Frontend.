import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from '../Header/Header';

function RequestedAdditionalClasses() {
  const [classes, setClasses] = useState([]);

  // Backend se data fetch karna
  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/requestedadditionalclasses');
      setClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
      toast.error("Failed to load classes");
    }
  };

  // Backend se record delete karna
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`http://localhost:5000/request/${id}`);
        setClasses(classes.filter(item => item._id !== id));
        toast.success("Record deleted successfully");
      } catch (error) {
        console.error("Error deleting:", error);
        toast.error("Failed to delete record");
      }
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      <Head />

      <div className="w-full max-w-[1250px] mx-auto px-4 mt-6 md:pl-[260px] transition-all duration-300">
        
        <div className="border-b-2 border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Requested Additional Classes
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Review and manage all requested additional lectures from database
          </p>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-5 overflow-hidden">
          <div className="overflow-x-auto border border-slate-100 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-50 text-gray-600 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Teacher</th>
                  <th className="p-3">Grade</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Date 1</th>
                  <th className="p-3">Date 2</th>
                  <th className="p-3">Date 3</th>
                  <th className="p-3">Date 4</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-gray-700">
                
                {classes.length > 0 ? (
                  classes.map((item) => (
                    <tr key={item._id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 font-semibold text-[#13293d]">{item.teacher}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 bg-slate-100 rounded text-gray-600 font-bold">{item.grade}</span>
                      </td>
                      <td className="p-3 font-medium">{item.subject}</td>
                      <td className="p-3 text-gray-500">{item.date1 || '-'}</td>
                      <td className="p-3 text-gray-500">{item.date2 || '-'}</td>
                      <td className="p-3 text-gray-500">{item.date3 || '-'}</td>
                      <td className="p-3 text-gray-500">{item.date4 || '-'}</td>
                      <td className="p-3 text-center flex items-center justify-center gap-2">
                        <Link 
                          to={`/approvalclasses/${item._id}`}
                          className="bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-emerald-200 hover:border-emerald-600 transition-colors text-center shadow-xs"
                        >
                          Edit
                        </Link>
                        <button 
                          type="button"
                          className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-bold px-3 py-1.5 rounded-lg border border-red-200 hover:border-red-600 transition-colors shadow-xs"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="p-8 text-center text-gray-400 font-semibold tracking-wide">
                      No records found in database.
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

export default RequestedAdditionalClasses;