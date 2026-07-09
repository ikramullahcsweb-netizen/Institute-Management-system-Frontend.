import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';

function MgView() {
  const [allmpayments, setAllPayments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      // Yahan port 3000 update kar diya gaya hai
      const [onlineRes, bankRes, cashRes] = await Promise.all([
        axios.get('http://localhost:3000/api/payments/displayonline', { withCredentials: true }),
        axios.get('http://localhost:3000/api/payments/displaybank', { withCredentials: true }),
        axios.get('http://localhost:3000/api/payments/displaycash', { withCredentials: true })
      ]);
      setAllPayments([...onlineRes.data, ...bankRes.data, ...cashRes.data]);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to fetch data");
    }
  };

  const handleDelete = async (id) => {
    try {
      // Yahan bhi port 3000 update kar diya gaya hai
      await axios.delete(`http://localhost:3000/api/payments/deletepayment/${id}`, { withCredentials: true });
      setAllPayments(allmpayments.filter(item => item._id !== id));
      toast.success('Payment Deleted Successfully');
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) handleDelete(id);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head />
      <Toaster />
      
      <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Student Payments</h1>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4">IT Number</th>
                <th className="p-4">Description</th>
                <th className="p-4">Date</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Type</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {allmpayments.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="p-4">{item.itnumber}</td>
                  <td className="p-4">{item.description}</td>
                  <td className="p-4">{item.date}</td>
                  {/* Ab ye dynamic data le raha hai */}
                  <td className="p-4 font-semibold">Rs {item.amount}</td>
                  <td className="p-4">{item.type}</td>
                  <td className={`p-4 font-bold ${
                    item.status === 'Approved' ? 'text-green-600' : 
                    item.status === 'Rejected' ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {item.status}
                  </td>
                  <td className="p-4 flex gap-2">
                    <Link to={`/editmanager/${item._id}`} className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                      Edit
                    </Link>
                    <button onClick={() => confirmDelete(item._id)} className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MgView;