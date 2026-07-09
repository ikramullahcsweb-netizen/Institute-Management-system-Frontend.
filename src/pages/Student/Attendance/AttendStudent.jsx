import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Head from '../Header/Header';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

function AttendStudent() {
    const BASE_URL = 'http://localhost:3000'; // API Port 3000

    const [attendances, setAttendances] = useState([]);
    const [dateFilter, setDateFilter] = useState('');
    const [classFilter, setClassFilter] = useState('');
    const [studentName, setStudentName] = useState('');
    const [userName, setUserName] = useState('');
    const [studentId, setStudentId] = useState('');

    useEffect(() => {
        fetchStudentProfile();
        fetchAttendances();
    }, []);

    const fetchStudentProfile = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/studentprofile`);
            setStudentId(response.data.username);
            setStudentName(response.data.name);
            setUserName(response.data.username);
        } catch (error) {
            console.log('Error fetching profile:', error);
        }
    };

    const fetchAttendances = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/attendancemark`);
            setAttendances(response.data);
        } catch (error) {
            toast.error('Failed to fetch attendances');
        }
    };

    const filteredAttendances = attendances.filter((attendance) =>
        attendance.studentId === studentId && 
        (classFilter ? attendance.classId.toLowerCase().includes(classFilter.toLowerCase()) : true) &&
        (dateFilter ? attendance.date === dateFilter : true)
    );

    // PDF Component
    const MyDocument = () => (
        <Document>
            <Page size="A4" style={{ padding: 20 }}>
                <Text style={{ fontSize: 18, marginBottom: 10 }}>Attendance Report</Text>
                <Text>Student: {studentName} ({userName})</Text>
                {filteredAttendances.map((a, index) => (
                    <Text key={index}>{a.classId} - {a.subject} - {a.date}</Text>
                ))}
            </Page>
        </Document>
    );

    return (
        <main className="p-4">
            <Head />
            <div className="max-w-4xl mx-auto mt-6 md:ml-[290px]">
                <h2 className="text-2xl font-bold mb-4">Attendance</h2>
                
                {/* Filters */}
                <div className="flex gap-4 mb-6">
                    <input 
                        className="border p-2 rounded" 
                        placeholder="Search Class ID" 
                        onChange={(e) => setClassFilter(e.target.value)} 
                    />
                    <input 
                        type="date" 
                        className="border p-2 rounded" 
                        onChange={(e) => setDateFilter(e.target.value)} 
                    />
                </div>

                {/* Table */}
                <table className="w-full border-collapse border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Class ID</th>
                            <th className="border p-2">Subject</th>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAttendances.map((attendance) => (
                            <tr key={attendance._id} className="text-center">
                                <td className="border p-2">{attendance.classId}</td>
                                <td className="border p-2">{attendance.subject}</td>
                                <td className="border p-2">{attendance.date}</td>
                                <td className="border p-2">{attendance.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-4">
                    <PDFDownloadLink document={<MyDocument />} fileName="report.pdf" className="bg-blue-500 text-white p-2 rounded">
                        {({ loading }) => (loading ? 'Loading...' : 'Download PDF')}
                    </PDFDownloadLink>
                </div>
            </div>
        </main>
    );
}

export default AttendStudent;