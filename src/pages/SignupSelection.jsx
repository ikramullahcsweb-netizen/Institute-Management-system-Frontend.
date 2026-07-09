import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Briefcase, GraduationCap, User } from 'lucide-react';
import logofull from '../assets/step2 scientist logo.jpeg';
import logo from '../assets/crop logo.jfif';

function SignupSelection() {
  const roles = [
    {
      name: 'Admin',
      path: '/adminsignup',
      description: 'System root control & configurations',
      icon: Shield,
      color: 'hover:border-brand-blue hover:text-brand-blue group-hover:bg-brand-blue/10',
      iconColor: 'text-brand-blue',
      bgColor: 'bg-brand-blue/10',
      shadow: 'hover:shadow-brand-blue/20',
    },
    {
      name: 'Manager',
      path: '/managersignup',
      description: 'Operations, finance & approvals',
      icon: Briefcase,
      color: 'hover:border-brand-teal hover:text-brand-teal group-hover:bg-brand-teal/10',
      iconColor: 'text-brand-teal',
      bgColor: 'bg-brand-teal/10',
      shadow: 'hover:shadow-brand-teal/20',
    },
    {
      name: 'Teacher',
      path: '/teacherregister',
      description: 'Timetables, notices & lesson uploads',
      icon: GraduationCap,
      color: 'hover:border-brand-green hover:text-brand-green group-hover:bg-brand-green/10',
      iconColor: 'text-brand-green',
      bgColor: 'bg-brand-green/10',
      shadow: 'hover:shadow-brand-green/20',
    },
    {
      name: 'Student',
      path: '/studentregister',
      description: 'Study materials, attendance & wallet',
      icon: User,
      color: 'hover:border-brand-teal hover:text-brand-teal group-hover:bg-brand-teal/10',
      iconColor: 'text-brand-teal',
      bgColor: 'bg-brand-teal/10',
      shadow: 'hover:shadow-brand-teal/20',
    },
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans mt-10">
      <div className="w-full max-w-4xl bg-white border border-slate-100 rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col items-center">
        
        {/* Logos & Header Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
          <img
            src={logofull}
            alt="Step 2 Scientist Full Logo"
            className="h-16 w-auto object-contain"
          />
          <div className="hidden sm:block h-10 w-px bg-slate-200"></div>
          <img
            src={logo}
            alt="Step 2 Scientist Crop Logo"
            className="h-16 w-auto object-contain rounded-full shadow-md border border-slate-100"
          />
        </div>

        <div className="text-center max-w-lg mb-10">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-3">
            Join Step 2 Scientist
          </h1>
          <p className="text-slate-500 text-sm">
            Select your professional profile category to create an account and access the academy management platform.
          </p>
        </div>

        {/* Roles Grid Selection */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Link 
                key={role.name} 
                to={role.path} 
                className="group block no-underline"
              >
                <div className={`h-full border border-slate-200 rounded-2xl p-6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${role.shadow} ${role.color.split(' ')[0]} flex flex-col items-center text-center`}>
                  {/* Icon Wrapper */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${role.bgColor} group-hover:bg-opacity-80`}>
                    <Icon className={`w-7 h-7 ${role.iconColor}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-inherit mb-2 transition-colors">
                    {role.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed mt-auto">
                    {role.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Already have an account?{' '}
            <Link 
              to="/login" 
              className="font-bold text-brand-blue hover:text-brand-teal transition-colors no-underline"
            >
              Sign In here
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
}

export default SignupSelection;