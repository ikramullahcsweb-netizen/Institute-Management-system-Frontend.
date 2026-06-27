import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Head from '../Header/Header';

function MyClass() {
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    const [username, setUsername] = useState('');
    
    // Base URL define kar di
    const BASE_URL = 'http://localhost:3000';
   
    useEffect(() => {
        axios.get(`${BASE_URL}/studentprofile`)
            .then((res) => {
                setUsername(res.data.username);
                const studentId = res.data.username; 
                fetchEnrolledClasses(studentId);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Profile load nahi ho saki!");
            });
    }, []);

    const pay = () => {
        toast.error("SORRY, FUNCTION IS NOT AVAILABLE YET!");
    };

    const fetchEnrolledClasses = (studentId) => {
        axios.get(`${BASE_URL}/classenrollments`)
            .then((res) => {
                const enrolledClassesData = res.data.filter((enrollment) => enrollment.studentId === studentId);
                setEnrolledClasses(enrolledClassesData);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Enrollments fetch nahi ho sakin!");
            });
    };

    const unenrollFromClass = (id) => {
        axios.delete(`${BASE_URL}/classenrollments/${id}`)
            .then((res) => {
                console.log('Unenrolled successfully:', res.data);
                const updatedEnrolledClasses = enrolledClasses.filter(enrollment => enrollment._id !== id);
                setEnrolledClasses(updatedEnrolledClasses);
                toast.success('Unenrolled successfully!');
            })
            .catch((err) => {
                console.error('Error unenrolling:', err);
                toast.error('Error unenrolling!');
            });
    };

    return (
        <main>
            <Head />
            <div className='profilecontent'>
                <div>
                    <p className='usertxt'>My Classes</p>
                    <div className='line1'></div>
                    <br/>
                    <center>
                        <div className='card'>
                            <div className='card-header'>Your Enrolled Classes</div>
                            <div className='card-body'>
                                <table className='table'>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope='col'>Class ID</th>
                                            <th scope='col'>Teacher ID</th>
                                            <th scope='col'>Subject</th>
                                            <th scope='col'>Teacher Name</th>
                                            <th scope='col'>Actions</th>
                                            <th scope='col'>Make payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {enrolledClasses.map((enrollment) => (
                                            <tr key={enrollment._id}>
                                                <td>{enrollment.classId}</td>
                                                <td>{enrollment.teacherid}</td>
                                                <td>{enrollment.subject}</td>
                                                <td>{enrollment.time}</td>
                                                <td>
                                                    <button
                                                        type='button'
                                                        className='btn btn-danger'
                                                        onClick={() => unenrollFromClass(enrollment._id)}
                                                    >
                                                        Unenroll
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        type='button'
                                                        className='btn btn-success'
                                                        onClick={() => pay()}
                                                    >
                                                        Pay
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

export default MyClass;