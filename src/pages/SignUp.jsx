import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { User, Mail, Lock, Phone, UserCheck, Eye, EyeOff } from 'lucide-react';
import API from '../api';
import logo from '../assets/crop logo.jfif';
import loginbg from '../assets/office image.avif';

const SignUp = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email_address: '',
    mobile_no: '',
    password: '',
    role: '',
    SecAnswer: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.role) {
      toast.error('Please select a Profile Role before signing up!');
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      return;
    }

    setLoading(true);
    const toastId = toast.loading('Creating your account, please wait...');

    try {
      // Connecting to backend register route
      const response = await API.post('/api/auth/register', formData);
      
      toast.success('Registration successful! Welcome aboard.', { id: toastId });
      console.log('API Registration Success:', response.data);
      
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error) {
      console.error('API Registration Error:', error);
      toast.error(error.message || 'Registration failed. Check if email already exists.', { id: toastId });
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

      <div className="w-full max-w-md bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 z-10 my-10">
        
        {/* Header Layout */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={logo}
            alt="Step 2 Scientist Logo"
            className="h-16 w-16 object-contain rounded-full shadow-md mb-4 border border-slate-100"
          />
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Create Account</h2>
          <p className="text-slate-500 text-xs mt-1">Fill in the fields to sign up to Step 2 Scientist</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* First & Last Name */}
          <div className="flex gap-4">
            <div className="relative w-1/2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <User className="h-4 w-4 text-slate-400" />
              </span>
              <input
                name="first_name"
                type="text"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="w-full h-11 pl-9 pr-3 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-slate-50/50"
              />
            </div>
            <div className="relative w-1/2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <User className="h-4 w-4 text-slate-400" />
              </span>
              <input
                name="last_name"
                type="text"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="w-full h-11 pl-9 pr-3 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-slate-50/50"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail className="h-4 w-4 text-slate-400" />
            </span>
            <input
              name="email_address"
              type="email"
              placeholder="Email Address"
              value={formData.email_address}
              onChange={handleChange}
              required
              className="w-full h-11 pl-9 pr-3 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-slate-50/50"
            />
          </div>

          {/* Phone Number */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Phone className="h-4 w-4 text-slate-400" />
            </span>
            <input
              name="mobile_no"
              type="tel"
              placeholder="Mobile Number"
              value={formData.mobile_no}
              onChange={handleChange}
              required
              className="w-full h-11 pl-9 pr-3 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-slate-50/50"
            />
          </div>

          {/* Password */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Lock className="h-4 w-4 text-slate-400" />
            </span>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Choose Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full h-11 pl-9 pr-10 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-slate-50/50"
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

          {/* Secret Answer / Security Question */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <UserCheck className="h-4 w-4 text-slate-400" />
            </span>
            <input
              name="SecAnswer"
              type="text"
              placeholder="Security Answer (e.g., your favorite color)"
              value={formData.SecAnswer}
              onChange={handleChange}
              required
              className="w-full h-11 pl-9 pr-3 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-slate-50/50"
            />
          </div>

          {/* Profile Role Selector */}
          <div className="relative w-full">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full h-11 px-3 text-slate-800 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-slate-50/50 appearance-none"
            >
              <option value="" className="text-slate-400">Select Profile Role</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Submit Action */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full h-11 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green text-white font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-brand-blue/30 active:scale-[0.98] disabled:opacity-50 mt-6 cursor-pointer"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

        </form>

        <p className="text-center text-xs text-slate-500 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-brand-blue font-bold hover:text-brand-teal transition-colors no-underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;