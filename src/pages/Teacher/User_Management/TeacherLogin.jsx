import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Mail, Lock, Eye, EyeOff, GraduationCap } from 'lucide-react';
import API, { clearPreviousSession } from '../../../api';
import logo from '../../../assets/crop logo.jfif';

function TeacherLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email_address: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginTeacher = async (e) => {
    e.preventDefault();
    const { email_address, password } = formData;

    if (!email_address || !password) {
      toast.error('Please enter your email and password.');
      return;
    }

    setLoading(true);
    const toastId = toast.loading('Logging into teacher portal...');

    try {
      // Pehle purana session clear karo — role leakage rok'ta hai
      clearPreviousSession();

      // Backend email field expect karta hai
      const response = await API.post('/api/v1/teacherlogin', { email: email_address, password });
      
      const responseData = response.data?.data;
      const loggedInUser = responseData?.teacher;
      
      toast.success('Welcome back, Educator!', { id: toastId });
      
      localStorage.setItem('token', responseData.accessToken);
      localStorage.setItem('userRole', 'teacher');
      localStorage.setItem('user', JSON.stringify(loggedInUser || {}));

      setFormData({ email_address: '', password: '' });
      
      setTimeout(() => {
        navigate('/TeacherTimetable'); // Navigate to a dashboard or timetable
      }, 1200);
    } catch (error) {
      console.error('Teacher Login Failure:', error);
      toast.error(error.message || 'Credentials authentication failed.', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-[950px] min-h-[550px] bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-slate-100">
        
        {/* Left Side: Gradient Branding Hero */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-brand-green via-brand-teal to-brand-blue p-12 text-white text-center relative">
          <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[1px]"></div>
          
          <div className="relative z-10 space-y-6 max-w-[320px]">
            <img 
              src={logo} 
              alt="Step 2 Scientist" 
              className="w-24 h-24 mx-auto rounded-full shadow-lg border-2 border-white/30" 
            />
            <div>
              <h2 className="text-2xl font-black tracking-tight">Step 2 Scientist</h2>
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mt-2">
                Educator Control Console
              </p>
            </div>
            <div className="pt-6 border-t border-white/20">
              <p className="text-xs text-white/70 leading-relaxed">
                Management of student attendance, notice distribution boards, and academic timetables.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Authentication Panel */}
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 bg-white">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full text-[11px] font-bold text-brand-green tracking-wide uppercase mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              Teacher Authentication
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">Educator Portal</h1>
            <p className="text-sm text-slate-400 mt-1">Provide your credentials to manage courses and schedule rosters</p>
          </div>

          <form onSubmit={loginTeacher} className="space-y-4">
            
            {/* Input Module: Email */}
            <div className="space-y-1">
              <label htmlFor="email_address" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Teacher Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-4 w-4 text-slate-400" />
                </span>
                <input 
                  type="email" 
                  id="email_address" 
                  name="email_address" 
                  placeholder="teacher@gmail.com" 
                  value={formData.email_address}
                  onChange={handleChange}
                  required
                  className="w-full h-11 pl-9 pr-3 text-slate-800 placeholder-slate-400 border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-slate-50/50"
                />
              </div>
            </div>

            {/* Input Module: Password */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Access Password
                </label>
                <Link 
                  to="/TeacherForgetPassword" 
                  className="text-xs font-bold text-brand-blue hover:text-brand-teal no-underline transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-4 w-4 text-slate-400" />
                </span>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  value={formData.password}
                  onChange={handleChange}
                  required
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
            </div>

            {/* Submit Action */}
            <div className="pt-4">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full h-11 bg-brand-green text-white font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-brand-green/30 active:scale-[0.98] disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Authorizing Educator Session...' : 'Sign In to Portal'}
              </button>
            </div>

          </form>

          {/* Registration Redirect */}
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              New teacher?{' '}
              <Link to="/TeacherRegister" className="font-bold text-brand-blue hover:text-brand-teal transition-colors no-underline">
                Create teacher profile here
              </Link>
            </p>
            <div className="mt-4">
              <Link to="/login" className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors no-underline">
                ← Go back to user gateways
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default TeacherLogin;