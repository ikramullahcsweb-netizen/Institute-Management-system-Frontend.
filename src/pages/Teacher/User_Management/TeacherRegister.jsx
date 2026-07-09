import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { User, Mail, Lock, Phone, GraduationCap, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import API from '../../../api';
import logo from '../../../assets/crop logo.jfif';
import loginbg from '../../../assets/office image.avif';

const TeacherRegister = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactnumber: '',
    teid: '',
    gender: 'Male',
    subject: '',
    password: '',
    SecAnswer: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.teid.trim()) {
      toast.error('Teacher ID is required!');
      return;
    }
    if (!formData.subject.trim()) {
      toast.error('Subject specialization is required!');
      return;
    }
    if (!formData.contactnumber.trim()) {
      toast.error('Contact number is required!');
      return;
    }
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters!');
      return;
    }

    setLoading(true);
    const toastId = toast.loading('Registering teacher profile...');

    try {
      // Connect to teacher registration endpoint
      const response = await API.post('/api/v1/teacherregister', formData);
      
      toast.success('Teacher profile registered successfully!', { id: toastId });
      console.log('API Teacher Registration Success:', response.data);
      
      setTimeout(() => {
        navigate('/TeacherLogin');
      }, 1500);
    } catch (error) {
      console.error('API Teacher Registration Error:', error);
      toast.error(error.message || 'Teacher registration failed.', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat p-4 relative pt-20"
      style={{ backgroundImage: `url(${loginbg})` }}
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-0"></div>

      <div className="w-full max-w-2xl bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 z-10 my-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={logo}
            alt="Step 2 Scientist Logo"
            className="h-16 w-16 object-contain rounded-full shadow-md mb-4 border border-slate-100"
          />
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Teacher Registration</h2>
          <p className="text-slate-500 text-xs mt-1">Enroll your educator profile to manage classes and rosters</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Full Name */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <User className="h-4 w-4 text-slate-400" />
            </span>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-11 pl-9 pr-3 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-slate-50/50"
            />
          </div>

          {/* Email Address */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail className="h-4 w-4 text-slate-400" />
            </span>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-11 pl-9 pr-3 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-slate-50/50"
            />
          </div>

          {/* Contact Number */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Phone className="h-4 w-4 text-slate-400" />
            </span>
            <input
              name="contactnumber"
              type="tel"
              placeholder="Teacher Contact Number"
              value={formData.contactnumber}
              onChange={handleChange}
              required
              className="w-full h-11 pl-9 pr-3 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-slate-50/50"
            />
          </div>

          {/* Teacher ID (teid) */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <GraduationCap className="h-4 w-4 text-slate-400" />
            </span>
            <input
              name="teid"
              type="text"
              placeholder="Teacher ID (e.g., TEA-3004)"
              value={formData.teid}
              onChange={handleChange}
              required
              className="w-full h-11 pl-9 pr-3 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-slate-50/50"
            />
          </div>

          {/* Subject Specialization */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <GraduationCap className="h-4 w-4 text-slate-400" />
            </span>
            <input
              name="subject"
              type="text"
              placeholder="Subject (e.g., Physics, Chemistry)"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full h-11 pl-9 pr-3 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-slate-50/50"
            />
          </div>

          {/* Gender */}
          <div className="relative w-full">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full h-11 px-3 text-slate-800 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-slate-50/50 appearance-none"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Security Answer */}
          <div className="relative w-full md:col-span-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <ShieldCheck className="h-4 w-4 text-slate-400" />
            </span>
            <input
              name="SecAnswer"
              type="text"
              placeholder="Security Answer (for password reset)"
              value={formData.SecAnswer}
              onChange={handleChange}
              required
              className="w-full h-11 pl-9 pr-3 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-slate-50/50"
            />
          </div>

          {/* Password */}
          <div className="relative w-full md:col-span-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Lock className="h-4 w-4 text-slate-400" />
            </span>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Choose password (min 6 characters)"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full h-11 pl-9 pr-10 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-slate-50/50"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-slate-400 hover:text-slate-600" />
              ) : (
                <Eye className="h-4 w-4 text-slate-400 hover:text-slate-600" />
              )}
            </button>
          </div>

          {/* Submit Action */}
          <div className="md:col-span-2 pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-11 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green text-white font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-brand-green/30 active:scale-[0.98] disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Registering Teacher Profile...' : 'Complete Registration'}
            </button>
          </div>

        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already registered?{' '}
          <Link to="/TeacherLogin" className="text-brand-blue font-bold hover:text-brand-teal transition-colors no-underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default TeacherRegister;