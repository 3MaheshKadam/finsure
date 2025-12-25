// "use client";
// import React from 'react';
// import { Home, Briefcase, Star, LogOut } from 'lucide-react';

// const AdminLayout = ({ children, activeSection, setActiveSection, onLogout }) => {
//   const sections = [
//     { name: 'Company', icon: Home, value: 'company' },
//     { name: 'Services', icon: Briefcase, value: 'services' },
//     { name: 'Testimonials', icon: Star, value: 'testimonials' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-lg p-6">
//         <div className="flex items-center mb-8">
//           <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
//             <span className="text-white font-bold text-lg">F</span>
//           </div>
//           <h2 className="text-xl font-bold text-gray-900 ml-2">Finsure Admin</h2>
//         </div>
//         <nav className="space-y-2">
//           {sections.map((section) => (
//             <button
//               key={section.value}
//               onClick={() => setActiveSection(section.value)}
//               className={`w-full flex items-center p-3 rounded-lg text-sm font-medium transition-colors ${
//                 activeSection === section.value
//                   ? 'bg-blue-50 text-blue-600'
//                   : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
//               }`}
//             >
//               <section.icon className="h-5 w-5 mr-3" />
//               {section.name}
//             </button>
//           ))}
//           <button
//             onClick={onLogout}
//             className="w-full flex items-center p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-red-600"
//           >
//             <LogOut className="h-5 w-5 mr-3" />
//             Logout
//           </button>
//         </nav>
//       </div>
//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;
"use client";
import React from 'react';
import { Home, Briefcase, Star, LogOut, Zap } from 'lucide-react';

const AdminLayout = ({ children, activeSection, setActiveSection, onLogout }) => {
  const sections = [
    { name: 'Company', icon: Home, value: 'company' },
    { name: 'Services', icon: Briefcase, value: 'services' },
    { name: 'Testimonials', icon: Star, value: 'testimonials' },
    { name: 'Offers', icon: Zap, value: 'offers' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 ml-2">Finsure Admin</h2>
        </div>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.value}
              onClick={() => setActiveSection(section.value)}
              className={`w-full flex items-center p-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === section.value
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              <section.icon className="h-5 w-5 mr-3" />
              {section.name}
            </button>
          ))}
          <button
            onClick={onLogout}
            className="w-full flex items-center p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-red-600"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;