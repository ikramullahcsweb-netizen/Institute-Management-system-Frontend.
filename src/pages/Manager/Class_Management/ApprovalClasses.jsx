import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from '../Header/Header';

function SubjectView() {
    const [subjects, setSubjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Aapka fetch pattern: /approveClass
        axios.get('http://localhost:5000/approveClass') 
            .then(res => setSubjects(res.data))
            .catch(err => console.error(err));
    }, []);

    // ID ke sath update handle karna
    const handleUpdateClick = (id) => {
        Swal.fire({
            title: "Update Class",
            text: `Are you sure you want to update class ID: ${id}?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Proceed!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Aapka route pattern: /request/${id}
                window.location.href = `/request/${id}`;
            }
        });
    };

    const filteredSubjects = subjects.filter(sub => 
        sub.subjectname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.teachername?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub._id?.includes(searchTerm)
    );

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <Head />
            <div className="max-w-6xl mx-auto mt-6">
                <h2 className="text-2xl font-black text-gray-800 uppercase mb-6">Manage & Update Classes</h2>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                    <input 
                        type="text" 
                        placeholder="Search by ID, Subject or Teacher..." 
                        className="w-full mb-6 p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-gray-500 uppercase text-xs tracking-wider border-b-2 border-gray-100">
                                    <th className="p-4">Class ID</th> {/* ID Column Add kar diya */}
                                    <th className="p-4">Subject Name</th>
                                    <th className="p-4">Grade</th>
                                    <th className="p-4">Teacher</th>
                                    <th className="p-4">Amount</th>
                                    <th className="p-4 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredSubjects.map((sub) => (
                                    <tr key={sub._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 text-xs font-mono text-gray-400">{sub._id}</td>
                                        <td className="p-4 font-semibold text-gray-800">{sub.subjectname}</td>
                                        <td className="p-4 text-gray-600">{sub.grade}</td>
                                        <td className="p-4 text-gray-600">{sub.teachername}</td>
                                        <td className="p-4 font-bold text-green-600">Rs. {sub.amount}</td>
                                        <td className="p-4 text-center">
                                            <button 
                                                className="bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-2 px-4 rounded-lg transition-all border border-blue-200"
                                                onClick={() => handleUpdateClick(sub._id)}
                                            >
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubjectView;