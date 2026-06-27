import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import Head from '../Header/Header';

function UpdateManager() {
  const { id } = useParams();
  const navigator = useNavigate();

  const [TeacherName, setEnterTeacherName] = useState("");
  const [TeacherID, setEnterTeacherID] = useState("");
  const [SubjectName, setEnetrSubjectName] = useState("");
  const [Grade, setEnterGrade] = useState("");
  const [AttendStudents, setEnterEnrollStudent] = useState("");
  const [FreeCardAmount, setEnterFreeCardAmount] = useState("");
  const [InstitutePayment, setEnterInstitutePayment] = useState("");
  const [MonthlySalary, setEnterMonthelySalary] = useState("");
  const [Date, setEnetrDate] = useState("");

  // Backend API (Port 3000) se data fetch karna
  useEffect(() => {
    axios.get(`http://localhost:3000/getUser/${id}`)
      .then((res) => {
        setEnterTeacherName(res.data.TeacherName);
        setEnterTeacherID(res.data.TeacherID);
        setEnetrSubjectName(res.data.SubjectName);
        setEnterGrade(res.data.Grade);
        setEnterEnrollStudent(res.data.AttendStudents);
        setEnterFreeCardAmount(res.data.FreeCardAmount);
        setEnterInstitutePayment(res.data.InstitutePayment);
        setEnterMonthelySalary(res.data.MonthlySalary);
        setEnetrDate(res.data.Date);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [id]);

  const update = async () => {
    try {
      await axios.put(`http://localhost:3000/updateUser/${id}`, {
        TeacherName, TeacherID, SubjectName, Grade, AttendStudents,
        FreeCardAmount, InstitutePayment, MonthlySalary, Date
      });
      handleClick2();
    } catch (err) {
      toast.error("Update failed!");
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Update Salary",
      text: "Are you sure you want to proceed with the Salary update?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        update();
      } else {
        Swal.fire({ title: "Salary is Not Updated", icon: "error" });
      }
    });
  };

  const handleClick2 = () => {
    toast.loading('Update Salary is processing...', {
      style: { background: 'black', color: '#ffffff', borderRadius: '10px', border: '2px solid #ffffff' },
    });

    setTimeout(() => {
      toast.dismiss();
      setTimeout(() => {
        toast.success('Salary is Updated!', {
          style: { background: '#28a745', color: '#ffffff', borderRadius: '10px', border: '2px solid #ffffff' },
          iconTheme: { primary: '#ffffff', secondary: '#28a745' },
        });
        setTimeout(() => {
          navigator('/managersalary'); // Redirect to management dashboard
        }, 2500);
      }, 500);
    }, 5000);
  };

  return (
    <div>
      <Head />
      <div className="body">
        <Toaster />
        <h1 className="h12">Update Salary</h1>
        <div className="container">
          <form onSubmit={handleSubmit} className="UpdateSalary">
            <label className="label1">Enter Teacher Name :</label>
            <input type="text" value={TeacherName} onChange={(e) => setEnterTeacherName(e.target.value)} required className="text1" /><br /><br />
            
            <label className="label2">Enter Teacher ID :</label>
            <input type="text" value={TeacherID} onChange={(e) => setEnterTeacherID(e.target.value)} required className="text2" /><br /><br />
            
            <label className="label3">Enter Subject Name :</label>
            <input type="text" value={SubjectName} onChange={(e) => setEnetrSubjectName(e.target.value)} required className="text3" /><br /><br />
            
            <label className="label4">Enter Grade :</label>
            <input type="text" value={Grade} onChange={(e) => setEnterGrade(e.target.value)} required className="text4" /><br /><br />
            
            <label className="label5">Enter Attend Students :</label>
            <input type="text" value={AttendStudents} onChange={(e) => setEnterEnrollStudent(e.target.value)} required className="text5" /><br /><br />
            
            <label className="label6">Enter Free Card Amount :</label>
            <input type="text" value={FreeCardAmount} onChange={(e) => setEnterFreeCardAmount(e.target.value)} required className="text6" /><br /><br />
            
            <label className="label7">Enter Institute Payment :</label>
            <input type="text" value={InstitutePayment} onChange={(e) => setEnterInstitutePayment(e.target.value)} required className="text7" /><br /><br />
            
            <label className="label8">Enter Monthly Salary :</label>
            <input type="text" value={MonthlySalary} onChange={(e) => setEnterMonthelySalary(e.target.value)} required className="text8" /><br /><br />
            
            <label className="label2">Enter Date :</label>
            <input type="text" value={Date} onChange={(e) => setEnetrDate(e.target.value)} required className="text5" /><br /><br />

            <div className="sign1">
              <button type="submit" className="button3">Update</button>
              <button type="button" onClick={() => navigator('/managersalary')} className="button1">Back</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateManager;