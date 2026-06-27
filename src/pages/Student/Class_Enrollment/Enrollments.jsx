import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Head from '../Header/Header';

function Enrollments() {
    const [username, setUsername] = useState('');
    const [subjects, setSubjects] = useState([]);

    // Base URL define kar di taake code saaf rahe
    const BASE_URL = 'http://localhost:3000';

    useEffect(() => {
        fetchStudentProfile();
        fetchSubjects();
    }, []);

    const fetchStudentProfile = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/studentprofile`);
            setUsername(res.data.username);
        } catch (err) {
            console.error('Profile fetch error:', err);
        }
    };

    const fetchSubjects = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/viewSubject`);
            setSubjects(res.data);
        } catch (err) {
            console.error('Subjects fetch error:', err);
            toast.error('Subjects load nahi ho sakay');
        }
    };

    const enrollStudent = async (classId, teacherid, subject, teacherName, grade) => {
        try {
            // Student ka username already state mein hai
            await axios.post(`${BASE_URL}/classenrollments`, { 
                studentId: username, 
                classId: classId, 
                teacherid: teacherid, 
                subject: subject, 
                time: teacherName, 
                grade: grade 
            });
            toast.success('Enrollment kamyab rahi!');
        } catch (err) {
            console.error('Enrollment error:', err);
            toast.error('Aap pehle hi enrolled hain ya server error hai.');
        }
    };

    return (
        <main>
            <Head />
            <div className='profilecontent'>
                <div>
                    <p className='usertxt'>Enrollments</p>
                    <div className='line1'></div>
                    <br/>
                    <center>
                        <div className='card'>
                            <div className='card-header'>Enroll To New Class</div>
                            <div className='card-body'>
                                <table className='table'>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>Class ID</th>
                                            <th>Subject</th>
                                            <th>Teacher</th>
                                            <th>Class fee</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subjects.map((subject) => (
                                            <tr key={subject.sbid}>
                                                <td>{subject.sbid}</td>
                                                <td>{subject.subjectname}</td>
                                                <td>{subject.teachername}</td>
                                                <td>{subject.amount}</td>
                                                <td>
                                                    <button
                                                        type='button'
                                                        className='btn btn-info'
                                                        onClick={() => enrollStudent(
                                                            subject.sbid, 
                                                            subject.teid, 
                                                            subject.subjectname, 
                                                            subject.teachername, 
                                                            subject.grade
                                                        )}
                                                    >
                                                        Enroll
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </main>
    );
}

export default Enrollments;