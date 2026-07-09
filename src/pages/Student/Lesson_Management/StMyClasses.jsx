import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API from '../../../api';
import './StMyClasses.css';
import Head from '../Header/Header';

function StMyClasses() {
  const { description } = useParams();

  const [notices,   setNotices]   = useState([]);
  const [materials, setMaterials] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [grade,     setGrade]     = useState('');
  const [loading,   setLoading]   = useState(true);

  // ── Step 1: Student profile se grade fetch karo ──
  useEffect(() => {
    API.get('/api/v1/studentprofile')
      .then(res => {
        const d = res.data?.data || res.data;
        setGrade(d.grade || '');
      })
      .catch(err => console.error('Student profile error:', err));
  }, []);

  // ── Step 2: Grade mil jaaye toh notices fetch karo ──
  useEffect(() => {
    if (!grade) return;

    API.get('/api/lessons/viewnotice')
      .then(res => {
        const all = Array.isArray(res.data?.data) 
          ? res.data.data 
          : Array.isArray(res.data) 
          ? res.data 
          : [];

        // Subject aur grade ke hisaab se filter
        const filtered = all.filter(n => {
          const subjectMatch = description
            ? n.subject_name?.toLowerCase() === description?.toLowerCase()
            : true;
          const gradeMatch = n.grade === grade || n.grade === String(grade);
          return subjectMatch && gradeMatch;
        });

        setNotices(filtered);
      })
      .catch(err => console.error('Notices error:', err))
      .finally(() => setLoading(false));
  }, [grade, description]);

  // ── Step 3: Materials fetch karo ──
  useEffect(() => {
    if (!grade) return;

    axios.get('http://localhost:3000/showmaterials')
      .then(res => {
        const all = Array.isArray(res.data) ? res.data : [];
        const filtered = all.filter(m => {
          const subjectMatch = description
            ? m.subject_name?.toLowerCase() === description?.toLowerCase()
            : true;
          const gradeMatch = m.grade === grade || m.grade === String(grade);
          return subjectMatch && gradeMatch;
        });
        setMaterials(filtered);
      })
      .catch(err => console.error('Materials error:', err));
  }, [grade, description]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredMaterials = materials.filter(m =>
    m.lesson_topic?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showFile = (file) => {
    window.open(`http://localhost:3000/files/${file}`, '_blank', 'noreferrer');
  };

  const downloadFile = async (file) => {
    try {
      const response = await axios.get(`http://localhost:3000/files/${file}`, {
        responseType: 'blob'
      });
      const url  = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href  = url;
      link.setAttribute('download', file);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <div>
      <Head />
      <div className="container">
        <div className="main-content">

          {/* Class Details */}
          <div className="class_details">
            <h2>Class Details</h2>
            <div className="class-info">
              <div className="class-title">
                {description || 'All Subjects'} — Grade {grade || '...'}
              </div>
              {filteredMaterials.length > 0 && (
                <div className="class-detail">
                  Teacher: {filteredMaterials[0].teachername || '—'}
                </div>
              )}
            </div>
          </div>

          {/* Notices */}
          <div className="notices">
            <h2 style={{ color: 'black' }}>Notices</h2>

            {loading ? (
              <p style={{ color: '#888', fontSize: '14px' }}>Loading notices...</p>
            ) : notices.length === 0 ? (
              <p style={{ color: '#aaa', fontSize: '14px' }}>
                No notices found for this subject/grade.
              </p>
            ) : (
              notices.map(notice => (
                <div className="notice" key={notice._id}>
                  <div className="notice-date">{notice.date}</div>
                  <div className="notice-title">{notice.topic}</div>
                  <div className="notice-description">{notice.description}</div>
                </div>
              ))
            )}
          </div>

          {/* Lesson Materials */}
          <div className="lesson-container">
            <h2 style={{ color: 'black' }}>Lesson Materials</h2>

            <div className="search_bar_container">
              <input
                type="search"
                className="search_input"
                placeholder="Search Materials..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {filteredMaterials.length === 0 ? (
              <p style={{ color: '#aaa', fontSize: '14px' }}>
                No materials found for this subject/grade.
              </p>
            ) : (
              filteredMaterials.map(lesson => (
                <div className="lesson" key={lesson._id}>
                  <div className="lesson-title">{lesson.lesson_topic}</div>
                  <div className="lesson-date">Date: {lesson.lesson_date}</div>
                  <div className="lesson-description">{lesson.lesson_description}</div>
                  <button className="material_view" onClick={() => showFile(lesson.lesson_Files)}>
                    View Material
                  </button>
                  <button className="material_download" onClick={() => downloadFile(lesson.lesson_Files)}>
                    Download
                  </button>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default StMyClasses;
