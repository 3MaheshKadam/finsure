// "use client";
// import React, { useState, useEffect } from 'react';
// import { 
//   Building,
//   Users,
//   Award,
//   Shield,
//   Target,
//   Heart,
//   TrendingUp,
//   Globe,
//   CheckCircle,
//   Calendar,
//   MapPin,
//   Phone,
//   Mail,
//   Linkedin,
//   Star,
//   Clock,
//   Handshake,
//   Eye,
//   Zap
// } from 'lucide-react';

// const AboutUsSection = () => {
//   const [activeTab, setActiveTab] = useState('mission');
//   const [currentAchievement, setCurrentAchievement] = useState(0);

//   const companyStats = [
//     { number: '8+', label: 'Years of Excellence', icon: Calendar, color: '#4248f8' },
//     { number: '50,000+', label: 'Happy Customers', icon: Users, color: '#10b981' },
//     { number: '₹500Cr+', label: 'Loans Disbursed', icon: TrendingUp, color: '#f59e0b' },
//     { number: '25+', label: 'Cities Covered', icon: Globe, color: '#8b5cf6' },
//     { number: '99.2%', label: 'Approval Rate', icon: Award, color: '#ef4444' },
//     { number: '24/7', label: 'Customer Support', icon: Clock, color: '#06b6d4' }
//   ];

//   const teamMembers = [
//     {
//       name: 'Rajesh Mehta',
//       position: 'Founder & CEO',
//       experience: '15+ years',
//       image: '👨‍💼',
//       description: 'Former VP at HDFC Bank with expertise in retail lending and digital transformation',
//       linkedin: '#',
//       specialization: 'Strategic Leadership'
//     },
//     {
//       name: 'Priya Agarwal',
//       position: 'CTO',
//       experience: '12+ years',
//       image: '👩‍💻',
//       description: 'Ex-Google engineer specialized in fintech solutions and AI-driven lending platforms',
//       linkedin: '#',
//       specialization: 'Technology & Innovation'
//     },
//     {
//       name: 'Vikram Singh',
//       position: 'Head of Operations',
//       experience: '10+ years',
//       image: '👨‍🔧',
//       description: 'Former operations head at ICICI Bank, expert in process optimization and risk management',
//       linkedin: '#',
//       specialization: 'Operations & Risk'
//     },
//     {
//       name: 'Anita Sharma',
//       position: 'Head of Customer Success',
//       experience: '8+ years',
//       image: '👩‍💼',
//       description: 'Customer experience specialist with track record of achieving 98%+ satisfaction rates',
//       linkedin: '#',
//       specialization: 'Customer Experience'
//     }
//   ];

//   const milestones = [
//     { year: '2016', event: 'Company Founded', description: 'Started with a vision to democratize access to financial services' },
//     { year: '2017', event: 'First 1,000 Customers', description: 'Achieved our first milestone with personalized service approach' },
//     { year: '2018', event: 'RBI Registration', description: 'Obtained official registration and compliance certifications' },
//     { year: '2020', event: 'Digital Platform Launch', description: 'Launched fully digital loan application and processing system' },
//     { year: '2022', event: '₹100Cr Disbursed', description: 'Crossed the ₹100 crore milestone in total loan disbursements' },
//     { year: '2024', event: '50,000+ Customers', description: 'Became the trusted financial partner for over 50,000 families' }
//   ];

//   const achievements = [
//     {
//       title: 'Best Fintech Startup 2023',
//       issuer: 'Banking Technology Awards',
//       icon: Award,
//       color: '#4248f8'
//     },
//     {
//       title: 'Customer Choice Award',
//       issuer: 'Financial Express',
//       icon: Heart,
//       color: '#ef4444'
//     },
//     {
//       title: 'Digital Innovation Excellence',
//       issuer: 'FICCI',
//       icon: Zap,
//       color: '#f59e0b'
//     },
//     {
//       title: 'Top Employer Certification',
//       issuer: 'Great Place to Work',
//       icon: Users,
//       color: '#10b981'
//     }
//   ];

//   const values = [
//     {
//       icon: Heart,
//       title: 'Customer First',
//       description: 'Every decision we make puts our customers interests at the center'
//     },
//     {
//       icon: Shield,
//       title: 'Trust & Transparency',
//       description: 'Complete transparency in all our processes and communications'
//     },
//     {
//       icon: Zap,
//       title: 'Innovation',
//       description: 'Continuously innovating to make financial services more accessible'
//     },
//     {
//       icon: Handshake,
//       title: 'Integrity',
//       description: 'Conducting business with the highest ethical standards'
//     }
//   ];

//   const missionVision = {
//     mission: {
//       title: 'Our Mission',
//       content: 'To democratize access to financial services by providing quick, transparent, and affordable loan solutions that empower individuals and businesses to achieve their dreams.',
//       icon: Target
//     },
//     vision: {
//       title: 'Our Vision',
//       content: 'To become India\'s most trusted and preferred digital lending platform, known for exceptional customer experience and innovative financial solutions.',
//       icon: Eye
//     }
//   };

//   // Auto-rotate achievements
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentAchievement((prev) => (prev + 1) % achievements.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [achievements.length]);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ color: '#4248f8' }}>
//             <Building className="h-4 w-4 mr-2" />
//             About Finsure Solutions
//           </div>
          
//           <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
//             Empowering Dreams Through
//             <span className="block" style={{ color: '#4248f8' }}>Smart Financial Solutions</span>
//           </h2>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Since 2016, we've been on a mission to make financial services accessible, transparent, 
//             and customer-centric. Today, we're proud to be the trusted financial partner for thousands of families across India.
//           </p>
//         </div>

//         {/* Company Stats */}
//         <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-20">
//           {companyStats.map((stat, index) => {
//             const IconComponent = stat.icon;
//             return (
//               <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
//                 <div 
//                   className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
//                   style={{ backgroundColor: `${stat.color}20` }}
//                 >
//                   <IconComponent className="h-6 w-6" style={{ color: stat.color }} />
//                 </div>
//                 <div className="text-2xl font-bold text-black mb-1">{stat.number}</div>
//                 <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Mission & Vision */}
//         <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-20">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {Object.entries(missionVision).map(([key, item]) => {
//               const IconComponent = item.icon;
//               return (
//                 <div key={key} className="text-center lg:text-left">
//                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg">
//                     <IconComponent className="h-8 w-8" style={{ color: '#4248f8' }} />
//                   </div>
                  
//                   <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
//                   <p className="text-gray-700 text-lg leading-relaxed">{item.content}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Our Values */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-black mb-4">Our Core Values</h3>
//             <p className="text-gray-600 text-lg">
//               The principles that guide everything we do
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => {
//               const IconComponent = value.icon;
//               return (
//                 <div key={index} className="text-center group">
//                   <div className="w-20 h-20 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
//                     <IconComponent className="h-10 w-10" style={{ color: '#4248f8' }} />
//                   </div>
                  
//                   <h4 className="text-lg font-bold text-black mb-3">{value.title}</h4>
//                   <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Leadership Team */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-black mb-4">Meet Our Leadership Team</h3>
//             <p className="text-gray-600 text-lg">
//               Experienced professionals committed to your financial success
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100">
//                 <div className="text-center">
//                   <div className="text-6xl mb-4">{member.image}</div>
                  
//                   <h4 className="text-lg font-bold text-black mb-1">{member.name}</h4>
//                   <p className="font-medium mb-2" style={{ color: '#4248f8' }}>{member.position}</p>
//                   <p className="text-sm text-gray-600 mb-4">{member.experience} Experience</p>
                  
//                   <div className="text-xs bg-blue-50 rounded-lg p-2 mb-4" style={{ color: '#4248f8' }}>
//                     {member.specialization}
//                   </div>
                  
//                   <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                  
//                   <a 
//                     href={member.linkedin}
//                     className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
//                   >
//                     <Linkedin className="h-4 w-4 mr-2" />
//                     Connect
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Company Milestones */}
//         <div className="bg-gray-50 rounded-3xl p-12 mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-black mb-4">Our Journey</h3>
//             <p className="text-gray-600 text-lg">
//               Key milestones that define our growth story
//             </p>
//           </div>

//           <div className="relative">
//             {/* Timeline Line */}
//             <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 hidden lg:block"></div>

//             <div className="space-y-12">
//               {milestones.map((milestone, index) => (
//                 <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
//                   {/* Content */}
//                   <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
//                     <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//                       <div className="text-2xl font-bold mb-2" style={{ color: '#4248f8' }}>
//                         {milestone.year}
//                       </div>
//                       <h4 className="text-lg font-bold text-black mb-3">{milestone.event}</h4>
//                       <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
//                     </div>
//                   </div>

//                   {/* Timeline Dot */}
//                   <div className="hidden lg:flex w-2/12 justify-center">
//                     <div className="w-4 h-4 rounded-full border-4 border-white shadow-lg" style={{ backgroundColor: '#4248f8' }}></div>
//                   </div>

//                   {/* Spacer for alternating layout */}
//                   <div className="hidden lg:block w-5/12"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Awards & Recognition */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-black mb-4">Awards & Recognition</h3>
//             <p className="text-gray-600 text-lg">
//               Recognized by industry leaders for excellence and innovation
//             </p>
//           </div>

//           <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
//             <div className="text-center">
//               {(() => {
//                 const IconComponent = achievements[currentAchievement].icon;
//                 return (
//                   <>
//                     <div 
//                       className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500"
//                       style={{ backgroundColor: `${achievements[currentAchievement].color}20` }}
//                     >
//                       <IconComponent className="h-10 w-10" style={{ color: achievements[currentAchievement].color }} />
//                     </div>
                    
//                     <h4 className="text-2xl font-bold text-black mb-2">
//                       {achievements[currentAchievement].title}
//                     </h4>
//                     <p className="text-gray-600 mb-8">
//                       {achievements[currentAchievement].issuer}
//                     </p>
//                   </>
//                 );
//               })()}

//               {/* Achievement Dots */}
//               <div className="flex justify-center space-x-2">
//                 {achievements.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentAchievement(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       currentAchievement === index ? 'w-8' : ''
//                     }`}
//                     style={{ 
//                       backgroundColor: currentAchievement === index ? '#4248f8' : '#cbd5e1' 
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Information */}
//         <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
//           <h3 className="text-2xl font-bold text-black mb-4">Ready to Start Your Journey?</h3>
//           <p className="text-gray-600 mb-8 text-lg">
//             Join thousands of satisfied customers who have achieved their financial goals with us
//           </p>
          
//           <div className="grid md:grid-cols-3 gap-6 mb-8">
//             <div className="flex items-center justify-center">
//               <Phone className="h-5 w-5 mr-3" style={{ color: '#4248f8' }} />
//               <div>
//                 <div className="font-semibold text-black">Call Us</div>
//                 <div className="text-gray-600">+91 98765 43210</div>
//               </div>
//             </div>
            
//             <div className="flex items-center justify-center">
//               <Mail className="h-5 w-5 mr-3" style={{ color: '#4248f8' }} />
//               <div>
//                 <div className="font-semibold text-black">Email Us</div>
//                 <div className="text-gray-600">info@finsuresolutions.com</div>
//               </div>
//             </div>
            
//             <div className="flex items-center justify-center">
//               <MapPin className="h-5 w-5 mr-3" style={{ color: '#4248f8' }} />
//               <div>
//                 <div className="font-semibold text-black">Visit Us</div>
//                 <div className="text-gray-600">Pimpri, Maharashtra</div>
//               </div>
//             </div>
//           </div>
          
//           <button className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mr-4" style={{ backgroundColor: '#4248f8' }}>
//             Get Started Today
//           </button>
          
//           <button className="border-2 text-gray-700 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 bg-white hover:shadow-lg" style={{ borderColor: '#4248f8' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4248f8'} onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}>
//             Learn More
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutUsSection;
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building,
  Users,
  Award,
  Shield,
  Target,
  Heart,
  TrendingUp,
  Globe,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Star,
  Clock,
  Handshake,
  Eye,
  Zap
} from 'lucide-react';

const iconMap = {
  Building,
  Users,
  Award,
  Shield,
  Target,
  Heart,
  TrendingUp,
  Globe,
  Clock,
  Handshake,
  Eye,
  Zap,
  Star // Added as a fallback icon
};

const AboutUsSection = () => {
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentAchievement, setCurrentAchievement] = useState(0);

  // Fetch company data
  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch('/api/company');
        if (!response.ok) {
          throw new Error('Failed to fetch company data');
        }
        const data = await response.json();
        console.log('Company Data:', data); // Debug API response
        setCompanyData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchCompanyData();
  }, []);

  // Auto-rotate achievements
  useEffect(() => {
    if (companyData?.achievements?.length > 0) {
      const interval = setInterval(() => {
        setCurrentAchievement((prev) => (prev + 1) % companyData.achievements.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [companyData?.achievements?.length]);

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <div>
      {/* Section Header Skeleton */}
      <div className="text-center mb-16">
        <motion.div
          className="inline-flex items-center bg-gray-200 h-8 w-48 rounded-full mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="h-12 bg-gray-200 rounded w-3/4 mx-auto mb-6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="h-6 bg-gray-200 rounded w-1/2 mx-auto"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Company Stats Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-20">
        {[...Array(6)].map((_, idx) => (
          <motion.div
            key={idx}
            className="text-center bg-gray-50 rounded-xl p-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </motion.div>
        ))}
      </div>

      {/* Mission & Vision Skeleton */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {[...Array(2)].map((_, idx) => (
            <motion.div
              key={idx}
              className="text-center lg:text-left"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto lg:mx-0 mb-6"></div>
              <div className="h-6 bg-gray-200 rounded w-32 mb-4 mx-auto lg:mx-0"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Values Skeleton */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <motion.div
            className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="h-6 bg-gray-200 rounded w-1/2 mx-auto"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-20 h-20 bg-gray-200 rounded-2xl mx-auto mb-6"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership Team Skeleton */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <motion.div
            className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="h-6 bg-gray-200 rounded w-1/2 mx-auto"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-24 mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Company Milestones Skeleton */}
      <div className="bg-gray-50 rounded-3xl p-12 mb-20">
        <div className="text-center mb-12">
          <motion.div
            className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="h-6 bg-gray-200 rounded w-1/2 mx-auto"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="space-y-12">
          {[...Array(6)].map((_, idx) => (
            <motion.div
              key={idx}
              className="flex items-center lg:flex-row"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-full lg:w-5/12">
                <div className="bg-white rounded-2xl p-6">
                  <div className="h-6 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
              <div className="hidden lg:flex w-2/12 justify-center">
                <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
              </div>
              <div className="hidden lg:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Awards & Recognition Skeleton */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <motion.div
            className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="h-6 bg-gray-200 rounded w-1/2 mx-auto"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <motion.div
          className="bg-white rounded-3xl p-12 border border-gray-100"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-2xl mx-auto mb-6"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
            <div className="flex justify-center space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-3 w-3 bg-gray-200 rounded-full"></div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Information Skeleton */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
        <motion.div
          className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[...Array(3)].map((_, idx) => (
            <motion.div
              key={idx}
              className="flex items-center justify-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="h-5 w-5 bg-gray-200 rounded-full mr-3"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="h-12 bg-gray-200 rounded-xl w-64"></div>
          <div className="h-12 bg-gray-200 rounded-xl w-64"></div>
        </motion.div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonLoader />
        </div>
      </section>
    );
  }

  if (error || !companyData) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500 text-lg">Error: {error || 'No company data available'}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ color: '#4248f8' }}>
            <Building className="h-4 w-4 mr-2" />
            About {companyData.name}
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Empowering Dreams Through
            <span className="block" style={{ color: '#4248f8' }}>Smart Financial Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {companyData.description}
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-20">
          {companyData.companyStats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || iconMap.Star; // Fallback to Star icon
            return (
              <motion.div 
                key={index}
                className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <IconComponent className="h-6 w-6" style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-bold text-black mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {Object.entries(companyData.missionVision).map(([key, item]) => {
              const IconComponent = iconMap[item.icon] || iconMap.Star; // Fallback to Star icon
              return (
                <motion.div 
                  key={key}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg">
                    <IconComponent className="h-8 w-8" style={{ color: '#4248f8' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{item.content}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">Our Core Values</h3>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.values.map((value, index) => {
              const IconComponent = iconMap[value.icon] || iconMap.Star; // Fallback to Star icon
              return (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <IconComponent className="h-10 w-10" style={{ color: '#4248f8' }} />
                  </div>
                  <h4 className="text-lg font-bold text-black mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">Meet Our Leadership Team</h3>
            <p className="text-gray-600 text-lg">
              Experienced professionals committed to your financial success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h4 className="text-lg font-bold text-black mb-1">{member.name}</h4>
                  <p className="font-medium mb-2" style={{ color: '#4248f8' }}>{member.position}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.experience} Experience</p>
                  <div className="text-xs bg-blue-50 rounded-lg p-2 mb-4" style={{ color: '#4248f8' }}>
                    {member.specialization}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Company Milestones */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">Our Journey</h3>
            <p className="text-gray-600 text-lg">
              Key milestones that define our growth story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 hidden lg:block"></div>

            <div className="space-y-12">
              {companyData.milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold mb-2" style={{ color: '#4248f8' }}>
                        {milestone.year}
                      </div>
                      <h4 className="text-lg font-bold text-black mb-3">{milestone.event}</h4>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 rounded-full border-4 border-white shadow-lg" style={{ backgroundColor: '#4248f8' }}></div>
                  </div>
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">Awards & Recognition</h3>
            <p className="text-gray-600 text-lg">
              Recognized by industry leaders for excellence and innovation
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
            <div className="text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAchievement}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {(() => {
                    const IconComponent = iconMap[companyData.achievements[currentAchievement].icon] || iconMap.Star; // Fallback to Star icon
                    return (
                      <>
                        <div 
                          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500"
                          style={{ backgroundColor: `${companyData.achievements[currentAchievement].color}20` }}
                        >
                          <IconComponent className="h-10 w-10" style={{ color: companyData.achievements[currentAchievement].color }} />
                        </div>
                        <h4 className="text-2xl font-bold text-black mb-2">
                          {companyData.achievements[currentAchievement].title}
                        </h4>
                        <p className="text-gray-600 mb-8">
                          {companyData.achievements[currentAchievement].issuer}
                        </p>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>

              {/* Achievement Dots */}
              <div className="flex justify-center space-x-2">
                {companyData.achievements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAchievement(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentAchievement === index ? 'w-8' : ''
                    }`}
                    style={{ 
                      backgroundColor: currentAchievement === index ? '#4248f8' : '#cbd5e1' 
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of satisfied customers who have achieved their financial goals with us
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="h-5 w-5 mr-3" style={{ color: '#4248f8' }} />
              <div>
                <div className="font-semibold text-black">Call Us</div>
                <div className="text-gray-600">{companyData.phone}</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="h-5 w-5 mr-3" style={{ color: '#4248f8' }} />
              <div>
                <div className="font-semibold text-black">Email Us</div>
                <div className="text-gray-600">{companyData.email}</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="h-5 w-5 mr-3" style={{ color: '#4248f8' }} />
              <div>
                <div className="font-semibold text-black">Visit Us</div>
                <div className="text-gray-600">{companyData.address}</div>
              </div>
            </motion.div>
          </div>
          
          <motion.button 
            className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mr-4"
            style={{ backgroundColor: '#4248f8' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(`tel:${companyData.phone}`)}
          >
            Get Started Today
          </motion.button>
          
          <motion.button 
            className="border-2 text-gray-700 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 bg-white hover:shadow-lg"
            style={{ borderColor: '#4248f8' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#4248f8'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/+919876543210')}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;