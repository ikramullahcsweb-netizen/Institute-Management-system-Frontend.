import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Briefcase, GraduationCap, User } from 'lucide-react';
import logo from '../assets/crop logo.jfif';

function LoginSelection() {
  const portals = [
    {
      name: 'Admin',
      path: '/adminlogin',
      description: 'Sign in to root server panel',
      icon: Shield,
      color: 'hover:border-brand-blue hover:text-brand-blue hover:shadow-brand-blue/20',
      iconColor: 'text-brand-blue',
      bgColor: 'bg-brand-blue/10',
    },
    {
      name: 'Manager',
      path: '/managerlogin',
      description: 'Sign in to dashboard panel',
      icon: Briefcase,
      color: 'hover:border-brand-teal hover:text-brand-teal hover:shadow-brand-teal/20',
      iconColor: 'text-brand-teal',
      bgColor: 'bg-brand-teal/10',
    },
    {
      name: 'Teacher',
      path: '/teacherlogin',
      description: 'Sign in to educator classroom',
      icon: GraduationCap,
      color: 'hover:border-brand-green hover:text-brand-green hover:shadow-brand-green/20',
      iconColor: 'text-brand-green',
      bgColor: 'bg-brand-green/10',
    },
    {
      name: 'Student',
      path: '/studentlogin',
      description: 'Sign in to student portal space',
      icon: User,
      color: 'hover:border-brand-teal hover:text-brand-teal hover:shadow-brand-teal/20',
      iconColor: 'text-brand-teal',
      bgColor: 'bg-brand-teal/10',
    },
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans mt-10">
      <div className="w-full max-w-4xl bg-white border border-slate-100 rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col items-center">
        
        {/* Branding Logo */}
        <img
          src={logo}
          alt="Royal Academy Branding Logo"
          className="h-20 w-auto object-contain mb-6 rounded-full shadow-lg border border-slate-100"
        />

        <div className="text-center max-w-lg mb-10">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-3">
            Welcome to Step 2 Scientist
          </h1>
          <p className="text-slate-500 text-sm">
            Access your profile workspace dashboard by selecting your appropriate user gateway below.
          </p>
        </div>

        {/* Portals Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal) => {
            const Icon = portal.icon;
            return (
              <Link 
                key={portal.name} 
                to={portal.path} 
                className="group block no-underline"
              >
                <div className={`h-full border border-slate-200 rounded-2xl p-6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${portal.color} flex flex-col items-center text-center`}>
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${portal.bgColor} group-hover:bg-opacity-80`}>
                    <Icon className={`w-7 h-7 ${portal.iconColor}`} />
                  </div>
                  
                  {/* Portal Title */}
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-inherit mb-2 transition-colors">
                    {portal.name} Gateway
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed mt-auto">
                    {portal.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Signup redirection */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Don't have an account?{' '}
            <Link 
              to="/signup" 
              className="font-bold text-brand-blue hover:text-brand-teal transition-colors no-underline"
            >
              Sign Up here
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
}

export default LoginSelection;