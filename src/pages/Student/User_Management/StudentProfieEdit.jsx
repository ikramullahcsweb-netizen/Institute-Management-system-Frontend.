import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Head from '../Header/Header';
import Swal from 'sweetalert2';
import { FaUserCircle, FaSave, FaTimes, FaCloudUploadAlt, FaTrashAlt, FaIdCard, FaVenusMars, FaEnvelope, FaPhone, FaUserShield, FaCity } from 'react-icons/fa';

function StudentProfileEdit() {
  const navigate = useNavigate();

  // Local Master Controlled Form Input Configuration Hooks
  const [name, setName] = useState('Ikram Khan');
  const [username, setUsername] = useState('ikram_dev');
  const [gender, setGender] = useState('Male');
  const [email, setEmail] = useState('ikram@royalacademy.edu');
  const [contactnumber, setContactnumber] = useState('03001234567');
  const [parentname, setParentName] = useState('Muhammad Khan');
  const [parentphonenumber, setParentPhonenumber] = useState('03337654321');
  const [secanswer, setSecAnswer] = useState('Peshawar');
  const [profile_photo, setProfilePhoto] = useState(null);
  const [student_id] = useState('STD-2026-991');

  // Hardcoded Static State Base64 Avatar Loop Stream Fallback
  const [show_profile_photo, setProfilePhotoView] = useState([
    {
      _id: "photo_node_01",
      profile_photo: "placeholder_avatar.png"
    }
  ]);

  // Simulated Photo Deletion Thread Pipeline
  const handleDeletePhoto = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you explicitly want to discard this profile image node from local state cache?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#384D6C',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        popup: 'rounded-2xl border-2 border-slate-900 font-sans'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // State Clean down logic optimization
        setProfilePhotoView([]);
        setProfilePhoto(null);
        
        Swal.fire({
          title: 'Deleted!',
          text: 'Your image layer data was cleared from view memory.',
          icon: 'success',
          confirmButtonColor: '#384D6C'
        });
      }
    });
  };

  // Simulated Form Profile Master Submission Trigger
  const updateStudent = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Changes Preserved Successfully',
      text: 'Student identity structure logs were updated inside local cache context matrix.',
      confirmButtonColor: '#384D6C',
      confirmButtonText: 'Proceed to Profile'
    }).then(() => {
      navigate('/studentprofile');
    });
  };

  const onInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePhoto(e.target.files[0]);
    }
  };

  // Local Static Simulated Image File Upload Processing Block
  const submitImage = (e) => {
    e.preventDefault();

    if (!profile_photo) {
      Swal.fire({
        icon: 'error',
        title: 'Empty Stream Injection',
        text: 'Please select an image entity inside your file navigator before launching compiler stream.',
        confirmButtonColor: '#384D6C'
      });
      return;
    }

    // Append standard runtime fallback file reference dynamically for interface loop
    setProfilePhotoView([
      {
        _id: `photo_node_${Date.now()}`,
        profile_photo: "dynamically_injected_stream.png"
      }
    ]);

    Swal.fire({
      icon: 'success',
      title: 'File Array Hydrated',
      text: 'Image stream processed into component state mock wrapper arrays successfully.',
      confirmButtonColor: '#384D6C'
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 font-sans antialiased">
      <Head />

      {/* Primary Layout Structural Core Panel Wrapper with Offset Pad Buffer */}
      <div className="w-full max-w-[1300px] mx-auto px-4 pl-4 md:pl-[290px] mt-8 transition-all space-y-6">
        
        {/* Module Master Headline Descriptor Group */}
        <div className="border-b-2 border-slate-200 pb-3">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
            <FaIdCard className="text-[#384D6C]" /> Edit Student Profile
          </h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">
            Modify local parameters, configure emergency contact loops and upload verification image nodes.
          </p>
        </div>

        {/* Top Split Block Area: Avatar View Panel & Upload Controller Card */}
        <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Avatar Rendering Section Terminal */}
          <div className="flex flex-col items-center justify-center text-center p-4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl min-h-[160px]">
            {show_profile_photo.length > 0 ? (
              show_profile_photo.map((data, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 w-full">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-slate-900 bg-white group shadow-sm">
                    {/* Simulated Fallback Vector Rendering Logic */}
                    {profile_photo ? (
                      <div className="w-full h-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-black text-xs uppercase p-1 text-center">
                        Selected File Image Stream Active
                      </div>
                    ) : (
                      <div className="w-full h-full bg-[#C9E8EA] flex items-center justify-center text-[#384D6C]">
                        <FaUserCircle className="w-16 h-16" />
                      </div>
                    )}
                  </div>
                  <button 
                    type="button"
                    onClick={() => handleDeletePhoto(data._id)}
                    className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 px-3 py-1.5 rounded-md transition-colors"
                  >
                    <FaTrashAlt /> Clear Node
                  </button>
                </div>
              ))
            ) : (
              <div className="text-slate-400 space-y-1 flex flex-col items-center">
                <FaUserCircle className="w-12 h-12 opacity-40" />
                <span className="text-xs font-black uppercase tracking-wider">No Active Stream</span>
              </div>
            )}
          </div>

          {/* Core Name Meta Metadata Descriptor Flag block */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest bg-[#C9E8EA] text-[#384D6C] px-2.5 py-1 rounded-md border border-slate-300">
              Identity Node
            </span>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight pt-1">
              {name || "Unassigned Record"}
            </h3>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">
              Role Specification: Student // ID: {student_id}
            </p>
          </div>

          {/* Interactive File Binary Submission Engine Console Container */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4">
            <form onSubmit={submitImage} className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center md:items-stretch lg:items-center gap-2">
              <label className="flex-1 relative border-2 border-slate-300 hover:border-slate-400 bg-white text-slate-700 rounded-lg px-4 py-2.5 text-center cursor-pointer transition-colors overflow-hidden">
                <span className="text-xs font-black uppercase tracking-wide flex items-center justify-center gap-1.5">
                  <FaCloudUploadAlt className="text-base text-[#384D6C]" />
                  {profile_photo ? "File Attached" : "Select Image"}
                </span>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={onInputChange} 
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </label>
              
              <button 
                type="submit" 
                className="bg-[#384D6C] hover:bg-[#2e3e56] text-white text-xs font-black uppercase tracking-widest px-5 py-3 rounded-lg transition-colors border border-slate-950"
              >
                Upload
              </button>
            </form>
            {profile_photo && (
              <div className="text-[10px] text-emerald-700 font-mono font-bold mt-2 text-center overflow-hidden text-ellipsis whitespace-nowrap bg-emerald-50 p-1 rounded border border-emerald-200">
                Loaded: {profile_photo.name}
              </div>
            )}
          </div>

        </div>

        {/* Bottom Master Configuration Multi-Grid Structural Update Form */}
        <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 md:p-8 shadow-sm">
          <form onSubmit={updateStudent} className="space-y-6">
            
            {/* Form Section Group Alpha: Primary Identification Attributes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                  Full Name Signature
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors shadow-xs"
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="username" className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                  Unique Username Token
                </label>
                <input 
                  type="text" 
                  id="username" 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors shadow-xs"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </div>

            </div>

            {/* Input Element Pipeline Segment: Custom Radio Gender Selector Deck */}
            <div className="space-y-2 border-y border-dashed border-slate-200 py-4">
              <span className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                <FaVenusMars className="text-slate-400" /> Declared Gender Field Specification
              </span>
              
              <div className="flex items-center gap-6 bg-slate-50 p-3 rounded-xl border border-slate-200 w-fit">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-xs text-slate-800">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Male" 
                    checked={gender === 'Male'} 
                    onChange={(e) => setGender(e.target.value)}
                    className="w-4 h-4 text-[#384D6C] border-slate-300 focus:ring-0"
                  />
                  <span>Male Identity Block</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-bold text-xs text-slate-800">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Female" 
                    checked={gender === 'Female'} 
                    onChange={(e) => setGender(e.target.value)}
                    className="w-4 h-4 text-[#384D6C] border-slate-300 focus:ring-0"
                  />
                  <span>Female Identity Block</span>
                </label>
              </div>
            </div>

            {/* Form Section Group Beta: Contact Metrics Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                  <FaPaperplane className="text-slate-400 text-[10px]" /> Email Target Endpoint
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors shadow-xs"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="cnumber" className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                  <FaPhone className="text-slate-400 text-[10px]" /> Direct Contact Pipeline
                </label>
                <input 
                  type="text" 
                  id="cnumber" 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors shadow-xs"
                  value={contactnumber} 
                  onChange={(e) => setContactnumber(e.target.value)} 
                />
              </div>

            </div>

            {/* Form Section Group Gamma: Emergency Relative Guardian Loops */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-slate-100 pt-4">
              
              <div className="space-y-1.5">
                <label htmlFor="pname" className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                  <FaUserShield className="text-slate-400 text-[10px]" /> Guardian/Parent Designation Name
                </label>
                <input 
                  type="text" 
                  id="pname" 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors shadow-xs"
                  value={parentname} 
                  onChange={(e) => setParentName(e.target.value)} 
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="pcnumber" className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                  <FaPhone className="text-slate-400 text-[10px]" /> Guardian Emergency Hot-Line
                </label>
                <input 
                  type="text" 
                  id="pcnumber" 
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors shadow-xs"
                  value={parentphonenumber} 
                  onChange={(e) => setParentPhonenumber(e.target.value)} 
                />
              </div>

            </div>

            {/* Input Element: Secure Vault Verification Challenge Answer */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <label htmlFor="qans" className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1">
                <FaCity className="text-slate-400" /> Security Challenge Answer
              </label>
              <div className="text-[10px] text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg max-w-fit font-bold uppercase tracking-wide mb-1">
                Security Question: What city were you born in?
              </div>
              <input 
                type="text" 
                id="qans" 
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-[#384D6C] text-slate-900 font-bold text-xs rounded-xl px-4 py-3.5 focus:outline-none transition-colors shadow-xs"
                value={secanswer} 
                onChange={(e) => setSecAnswer(e.target.value)} 
              />
            </div>

            {/* Form Operation Termination Control Buttons Segment */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t-2 border-slate-100">
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-[#384D6C] hover:bg-[#283952] text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl border-2 border-slate-950 flex items-center justify-center gap-1.5 transition-transform active:scale-[0.99] shadow-xs"
              >
                <FaSave /> Save Structural Changes
              </button>

              <Link 
                to="/studentprofile" 
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl border-2 border-slate-300 flex items-center justify-center gap-1.5 transition-colors text-center"
              >
                <FaTimes /> Abort / Cancel
              </Link>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

// Minimal missing component link mapping to avoid breakdown inside target stream
function FaPaperplane(props) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={props.className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-435.2C514.5 11 493.5-6.8 476 3.2z"></path>
    </svg>
  );
}

export default StudentProfileEdit;