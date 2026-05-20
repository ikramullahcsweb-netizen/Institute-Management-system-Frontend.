import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddMaterials() {
  const navigate = useNavigate();

  // STATIC SYSTEM REGISTRY METADATA DEFAULT HOOKS
  const [lesson_topic, setLessonTopic] = useState('');
  const [lesson_files, setLessonFiles] = useState(null);
  const [lesson_date, setLessonDate] = useState('');
  const [lesson_fileType, setLessonFileType] = useState('');
  const [lesson_description, setLessonDescription] = useState('');
  const [subject_name, setClass_id] = useState('Database Management Systems');
  const [grade, setGrade] = useState('');
  const [teacher_id, setTeacher_id] = useState('TEACH-CS-404');
  const [teachername, setTeachername] = useState('Dr. Asim Khan');
  const [fileSizeError, setFileSizeError] = useState('');

  // Automated date parser mounting layout synchronization
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;

    const formattedDate = `${yyyy}-${mm}-${dd}`;
    setLessonDate(formattedDate);
    console.log("Material distribution instance locked on localized standard clock cycle.");
  }, []);

  const submitFile = (e) => {
    e.preventDefault();

    // Standard structural payload validation parameters
    const fileSizeLimit = 10 * 1024 * 1024; // 10MB Threshold limit
    if (lesson_files && lesson_files.size > fileSizeLimit) {
      setFileSizeError('Selected repository element file footprint limits exceed maximum allowed 10MB threshold.');
      return;
    }

    setFileSizeError('');

    // Print local parameters to client terminal console tracking log
    console.log("Local standalone assets logged cleanly for repository ingestion:", {
      lesson_topic, lesson_files, lesson_date, lesson_fileType, lesson_description, subject_name, grade, teacher_id, teachername
    });

    Swal.fire({
      icon: 'success',
      title: 'Repository Log Appended',
      text: 'Academic coursework handout material added successfully to active registry arrays!',
      confirmButtonColor: '#10a1b6',
      confirmButtonText: 'Acknowledge'
    }).then(() => {
      navigate('/myclasses');
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setLessonFiles(files[0]);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12 font-sans">
      
      {/* MASTER COLLABORATIVE CONTAINER GRID:
        md:pl-[276px] precisely ensures structural spacing for your 260px wide left sidebar layout.
      */}
      <div className="w-full max-w-[1350px] mx-auto px-4 mt-8 md:pl-[276px] transition-all duration-300">
        
        {/* Module Master Banner Identification */}
        <div className="border-b-2 border-gray-200 pb-4 mb-8">
          <h1 className="text-2xl font-black text-[#13293d] tracking-tight uppercase">
            Deploy Lecture Materials
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Publish syllabus course notes, dynamic laboratory sheets, and text reference manuals directly to student portals
          </p>
        </div>

        {/* Centralised Form Card Layout Layout */}
        <div className="max-w-[850px] mx-auto bg-white border-2 border-slate-200 rounded-[20px] shadow-sm p-6 sm:p-10">
          
          <form onSubmit={submitFile} className="space-y-6">
            
            {/* Asset Ingestion Header Segment */}
            <div>
              <h2 className="text-base font-black text-[#384D6C] tracking-wide uppercase mb-1">
                Step 1: Document Transfer Vector
              </h2>
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                Select or drop documentation elements to upload
              </p>
              <div className="h-[2px] bg-slate-100 w-full mt-2" />
            </div>

            {/* Interactive Drag & Drop Area Box Element */}
            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="border-2 border-dashed border-slate-300 hover:border-[#10a1b6] rounded-[15px] p-8 text-center bg-slate-50 transition-colors flex flex-col items-center justify-center gap-2"
            >
              <h3 className="text-sm font-bold text-slate-700">
                Drag and Drop Syllabus Files Here
              </h3>
              <p className="text-xs text-gray-400 font-medium">System supports extensions: PDF, PNG, JPG, PPTX, DOC</p>
              <span className="text-xs font-bold text-gray-400 my-1">OR</span>
              
              <label className="bg-[#384D6C] hover:bg-[#25354c] text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer shadow-xs transition-colors tracking-wide uppercase">
                Browse Files
                <input
                  type="file"
                  accept=".pdf, .png, .jpg, .jpeg, .pptx, .doc"
                  className="hidden"
                  onChange={(e) => setLessonFiles(e.target.files[0])}
                />
              </label>

              {/* Real-time reactive label showing target files status info data */}
              {lesson_files && (
                <div className="mt-3 text-xs font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md max-w-full truncate">
                  Target Stack Selected: {lesson_files.name}
                </div>
              )}
            </div>

            {/* Error Message Context Rendering Window */}
            {fileSizeError && (
              <p className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 p-3 rounded-xl">
                {fileSizeError}
              </p>
            )}

            {/* Step 2: Meta Context Information Allocation Entry Fields */}
            <div className="pt-4">
              <h2 className="text-base font-black text-[#384D6C] tracking-wide uppercase mb-1">
                Step 2: Catalog Parameters
              </h2>
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                Specify curricular assignments configurations below
              </p>
              <div className="h-[2px] bg-slate-100 w-full mt-2" />
            </div>

            {/* Form Input Variables Setup Rows Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Variable Element Select Selector: Target Batches Group */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="grade" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Target Academic Batch Grade
                </label>
                <select 
                  id="grade" 
                  name="grade" 
                  required 
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all cursor-pointer"
                >
                  <option value="">Select Batch Frame</option>
                  <option value="06">Grade 6</option>
                  <option value="07">Grade 7</option>
                  <option value="08">Grade 8</option>
                  <option value="09">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                </select>
              </div>

              {/* Input Core Object Context Area Field: Topic Title Box */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="topic" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Lecture Presentation Module Topic
                </label>
                <input 
                  type="text" 
                  id="topic"
                  name="topic" 
                  required
                  placeholder="e.g., Array Indices & Pointer Math" 
                  value={lesson_topic}
                  onChange={(e) => setLessonTopic(e.target.value)} 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all"
                />
              </div>

            </div>

            {/* Split Row Grid Layout Fields Matrix Panel Box Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Date Input Layout Picker Context Container Box */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="date" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Distribution Execution Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  min={lesson_date} 
                  value={lesson_date} 
                  onChange={(e) => setLessonDate(e.target.value)}
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all cursor-text"
                />
              </div>

              {/* File Format Extension Context Classification Selector Block Box */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fileType" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Primary Data Asset Type Format
                </label>
                <select 
                  id="fileType"
                  name="fileType" 
                  value={lesson_fileType}
                  onChange={(e) => setLessonFileType(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-2.5 text-sm text-gray-800 font-medium outline-none transition-all cursor-pointer"
                >
                  <option value="">Select Extension File Spec</option>
                  <option value="pdf">PDF Document Framework</option>
                  <option value="image">Image Asset Vector (.png/.jpg)</option>
                  <option value="pptx">Powerpoint Presentation Deck</option>
                  <option value="doc">Microsoft Word Document File</option>
                </select>
              </div>

            </div>

            {/* Large Rich Text Description Area Container Field Row Block */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="description" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Comprehensive Briefing / Scope Assignment Description
              </label>
              <textarea 
                id="description"
                name="description" 
                required
                placeholder="Provide precise execution overview details and study objectives targeting students parameters..." 
                value={lesson_description}
                onChange={(e) => setLessonDescription(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#10a1b6] rounded-xl px-4 py-3 text-sm text-gray-800 font-medium outline-none transition-all h-32 resize-none"
              />
            </div>

            {/* Hidden Parameter Bindings Fields Framework Logs */}
            <input type="hidden" name="class_id" value={subject_name} />
            <input type="hidden" name="teacher_id" value={teacher_id} />

            {/* Control Panel Redirection Navigation Trigger Action Buttons Box Layout */}
            <div className="flex items-center justify-between pt-6 gap-4 border-t border-slate-100">
              <Link 
                to="/myclasses" 
                className="bg-slate-500 hover:bg-slate-600 text-white text-xs font-bold py-3 px-8 rounded-xl shadow-xs transition-colors text-center uppercase tracking-wider"
              >
                Cancel Redirection
              </Link>
              <button 
                type="submit"
                className="bg-[#483EA8] hover:bg-[#342b82] text-white text-xs font-bold py-3 px-8 rounded-xl shadow-xs transition-colors text-center uppercase tracking-wider"
              >
                Deploy Assets
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default AddMaterials;