// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   MessageCircle,
//   Send,
//   User,
//   Calendar,
//   CheckCircle,
//   AlertCircle,
//   Headphones,
//   Building,
//   Globe,
//   Shield,
//   Zap,
//   ArrowRight,
//   Star
// } from 'lucide-react';

// const iconMap = {
//   Phone,
//   MessageCircle,
//   Mail,
//   Calendar,
//   Headphones,
//   Shield,
//   Zap,
//   Star
// };

// const ContactUsSection = () => {
//   const [companyData, setCompanyData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     loanType: '',
//     amount: '',
//     message: '',
//     preferredTime: ''
//   });
//   const [formStatus, setFormStatus] = useState(null);
//   const [activeContactMethod, setActiveContactMethod] = useState(0);

//   // Fetch company data
//   useEffect(() => {
//     const fetchCompanyData = async () => {
//       try {
//         const response = await fetch('/api/company');
//         if (!response.ok) {
//           throw new Error('Failed to fetch company data');
//         }
//         const data = await response.json();

//         console.log(data);
        
//         setCompanyData(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };
//     fetchCompanyData();
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.name || !formData.email || !formData.phone) {
//       setFormStatus('error');
//       return;
//     }

//     setFormStatus('loading');
    
//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });



//       if (!response.ok) {
//         throw new Error('Failed to submit form');
//       }

//       setFormStatus('success');
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         loanType: '',
//         amount: '',
//         message: '',
//         preferredTime: ''
//       });
//       setTimeout(() => setFormStatus(null), 3000);
//     } catch (err) {
//       setFormStatus('error');
//     }
//   };

//   // Skeleton Loader Component
//   const SkeletonLoader = () => (
//     <div>
//       {/* Section Header Skeleton */}
//       <div className="text-center mb-16">
//         <motion.div
//           className="inline-flex items-center bg-gray-200 h-8 w-48 rounded-full mb-4"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="h-12 bg-gray-200 rounded w-3/4 mx-auto mb-6"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="h-6 bg-gray-200 rounded w-1/2 mx-auto"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//         />
//       </div>

//       {/* Quick Contact Methods Skeleton */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
//         {[...Array(4)].map((_, idx) => (
//           <motion.div
//             key={idx}
//             className="bg-white rounded-2xl p-8 border border-gray-100"
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//           >
//             <div className="w-16 h-16 bg-gray-200 rounded-xl mx-auto mb-6"></div>
//             <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
//             <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>
//             <div className="space-y-2 mb-6">
//               <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
//               <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
//             </div>
//             <div className="h-10 bg-gray-200 rounded-xl w-full"></div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Main Contact Section Skeleton */}
//       <div className="grid lg:grid-cols-2 gap-12 mb-20">
//         {/* Contact Form Skeleton */}
//         <div className="bg-white rounded-2xl p-8 border border-gray-100">
//           <motion.div
//             className="h-6 bg-gray-200 rounded w-1/3 mb-2"
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//           />
//           <motion.div
//             className="h-4 bg-gray-200 rounded w-1/2 mb-6"
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//           />
//           <div className="space-y-5">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
//                 <div className="h-10 bg-gray-200 rounded w-full"></div>
//               </div>
//               <div>
//                 <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
//                 <div className="h-10 bg-gray-200 rounded w-full"></div>
//               </div>
//             </div>
//             <div>
//               <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
//               <div className="h-10 bg-gray-200 rounded w-full"></div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
//                 <div className="h-10 bg-gray-200 rounded w-full"></div>
//               </div>
//               <div>
//                 <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
//                 <div className="h-10 bg-gray-200 rounded w-full"></div>
//               </div>
//             </div>
//             <div>
//               <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
//               <div className="h-20 bg-gray-200 rounded w-full"></div>
//             </div>
//             <div className="h-10 bg-gray-200 rounded w-full"></div>
//             <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
//           </div>
//         </div>

//         {/* Office Location Skeleton */}
//         <div className="bg-white rounded-3xl p-8">
//           <motion.div
//             className="h-6 bg-gray-200 rounded w-1/3 mb-6"
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//           />
//           <div className="border border-gray-100 rounded-2xl p-6">
//             <div className="flex items-start justify-between mb-4">
//               <div className="h-6 bg-gray-200 rounded w-1/3"></div>
//               <div className="h-4 bg-gray-200 rounded w-24"></div>
//             </div>
//             <div className="space-y-3">
//               {[...Array(4)].map((_, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="flex items-center"
//                   animate={{ opacity: [0.5, 1, 0.5] }}
//                   transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//                 >
//                   <div className="h-4 w-4 bg-gray-200 rounded-full mr-3"></div>
//                   <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//           <div className="mt-8 pt-6 border-t border-gray-100">
//             <motion.div
//               className="h-5 bg-gray-200 rounded w-24 mb-4"
//               animate={{ opacity: [0.5, 1, 0.5] }}
//               transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//             />
//             <div className="grid grid-cols-2 gap-4">
//               {[...Array(2)].map((_, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="text-center bg-gray-50 rounded-xl p-4"
//                   animate={{ opacity: [0.5, 1, 0.5] }}
//                   transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//                 >
//                   <div className="h-6 w-6 bg-gray-200 rounded-full mx-auto mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-1"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section Skeleton */}
//       <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
//         <motion.div
//           className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-8"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <motion.div
//             className="h-12 bg-gray-200 rounded-xl w-64"
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//           />
//           <motion.div
//             className="h-12 bg-gray-200 rounded-xl w-64"
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//           />
//         </div>
//       </div>
//     </div>
//   );

//   if (loading) {
//     return (
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <SkeletonLoader />
//         </div>
//       </section>
//     );
//   }

//   if (error || !companyData) {
//     return (
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-red-500 text-lg">Error: {error || 'No company data available'}</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ color: '#4248f8' }}>
//             <MessageCircle className="h-4 w-4 mr-2" />
//             Get In Touch
//           </div>
          
//           <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
//             Ready to Take the
//             <span className="block" style={{ color: '#4248f8' }}>Next Step?</span>
//           </h2>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our team of financial experts is here to help you find the perfect loan solution. 
//             Reach out to us through any of the channels below and get started today.
//           </p>
//         </div>

//         {/* Quick Contact Methods */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
//           {companyData.contactMethods.map((method, index) => {
//             const IconComponent = iconMap[method.icon];
//             const isActive = activeContactMethod === index;
            
//             return (
//               <motion.div
//                 key={index}
//                 className={`bg-white rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 border-2 ${
//                   isActive ? 'border-opacity-100 shadow-xl -translate-y-2' : 'border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1'
//                 }`}
//                 style={{ borderColor: isActive ? method.color : undefined }}
//                 onClick={() => setActiveContactMethod(index)}
//                 onMouseEnter={() => setActiveContactMethod(index)}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <div 
//                   className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
//                     isActive ? 'scale-110' : ''
//                   }`}
//                   style={{ backgroundColor: isActive ? method.color : method.bgColor }}
//                 >
//                   <IconComponent 
//                     className="h-8 w-8 transition-colors duration-300" 
//                     style={{ color: isActive ? 'white' : method.color }}
//                   />
//                 </div>

//                 <h3 className="text-lg font-bold text-black mb-2">{method.title}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{method.subtitle}</p>
                
//                 <div className="space-y-2 mb-6">
//                   <p className="font-semibold text-black">{method.details}</p>
//                   <p className="text-xs text-gray-500">{method.subDetails}</p>
//                 </div>

//                 <motion.button 
//                   className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
//                     isActive ? 'text-white shadow-lg' : 'text-gray-700 bg-gray-50 hover:shadow-md'
//                   }`}
//                   style={{ 
//                     backgroundColor: isActive ? method.color : undefined,
//                     color: isActive ? 'white' : undefined
//                   }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {method.action}
//                 </motion.button>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Main Contact Section */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-20">
//           {/* Contact Form */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//             <div className="mb-6">
//               <h3 className="text-2xl font-bold text-black mb-2">Contact Us</h3>
//               <p className="text-gray-600">
//                 Fill out this form and we'll get back to you within 2 hours.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Name and Phone */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
//                     placeholder="+91 98765 43210"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
//                   placeholder="your.email@example.com"
//                   required
//                 />
//               </div>

//               {/* Loan Type and Amount */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Loan Type
//                   </label>
//                   <select
//                     name="loanType"
//                     value={formData.loanType}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
//                   >
//                     <option value="">Select Loan Type</option>
//                     <option value="personal">Personal Loan</option>
//                     <option value="home">Home Loan</option>
//                     <option value="auto">Auto Loan</option>
//                     <option value="business">Business Loan</option>
//                     <option value="education">Education Loan</option>
//                     <option value="gold">Gold Loan</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Loan Amount
//                   </label>
//                   <input
//                     type="text"
//                     name="amount"
//                     value={formData.amount}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
//                     placeholder="₹ 5,00,000"
//                   />
//                 </div>
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows={3}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-gray-900"
//                   placeholder="Tell us about your loan requirements..."
//                 />
//               </div>

//               {/* Form Status */}
//               <AnimatePresence>
//                 {formStatus === 'success' && (
//                   <motion.div
//                     className="flex items-center bg-green-50 border border-green-200 px-4 py-3 rounded-lg"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                     <span className="text-green-700">Thank you! We'll contact you within 2 hours.</span>
//                   </motion.div>
//                 )}
//                 {formStatus === 'error' && (
//                   <motion.div
//                     className="flex items-center bg-red-50 border border-red-200 px-4 py-3 rounded-lg"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
//                     <span className="text-red-700">Please fill in all required fields.</span>
//                     </motion.div>
//               )}
//             </AnimatePresence>

//             <motion.button
//               type="submit"
//               disabled={formStatus === 'loading'}
//               className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center text-white"
//               style={{ backgroundColor: '#4248f8' }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {formStatus === 'loading' ? (
//                 <>
//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   <Send className="h-5 w-5 mr-2" />
//                   Send Message
//                 </>
//               )}
//             </motion.button>

//             {/* Privacy note */}
//             <p className="text-xs text-gray-500 text-center">
//               By submitting this form, you agree to our Privacy Policy and Terms of Service.
//             </p>
//           </form>
//         </div>

//         {/* Office Location */}
//         <div className="bg-white rounded-3xl p-8 shadow-xl">
//           <h3 className="text-2xl font-bold text-black mb-6">Visit Our Office</h3>
          
//           {companyData.officeLocations.map((location, index) => (
//             <motion.div
//               key={index}
//               className="border border-gray-100 rounded-2xl p-6 mb-4 hover:shadow-lg transition-all duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <h4 className="font-bold text-black text-lg">{location.city}</h4>
//                 {location.isHeadOffice && (
//                   <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
//                     Head Office
//                   </span>
//                 )}
//               </div>
              
//               <div className="space-y-3 text-sm">
//                 <div className="flex items-start">
//                   <MapPin className="h-4 w-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-600">{location.address}</span>
//                 </div>
                
//                 <div className="flex items-center">
//                   <Phone className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
//                   <span className="text-gray-600">{location.phone}</span>
//                 </div>
                
//                 <div className="flex items-center">
//                   <Mail className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
//                   <span className="text-gray-600">{location.email}</span>
//                 </div>
                
//                 <div className="flex items-center">
//                   <Clock className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
//                   <span className="text-gray-600">{location.timing}</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}

//           {/* Support Features */}
//           <div className="mt-8 pt-6 border-t border-gray-100">
//             <h4 className="font-bold text-black mb-4">Why Contact Us?</h4>
//             <div className="grid grid-cols-2 gap-4">
//               {companyData.supportFeatures.map((feature, index) => {
//                 const IconComponent = iconMap[feature.icon];
//                 return (
//                   <motion.div
//                     key={index}
//                     className="text-center bg-blue-50 rounded-xl p-4"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                   >
//                     <IconComponent className="h-6 w-6 mx-auto mb-2" style={{ color: '#4248f8' }} />
//                     <p className="text-xs text-gray-600 mb-1">{feature.title}</p>
//                     <p className="font-semibold text-black text-sm">{feature.description}</p>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
//         <h3 className="text-3xl font-bold text-black mb-4">
//           Still Have Questions?
//         </h3>
//         <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
//           Our financial experts are standing by to help you find the perfect loan solution. 
//           Don't wait - your financial goals are just a call away!
//         </p>
        
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <motion.button
//             className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
//             style={{ backgroundColor: '#4248f8' }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => window.open(`tel:${companyData.phone}`)}
//           >
//             <Phone className="h-5 w-5 mr-2" />
//             Call Now: {companyData.phone}
//           </motion.button>
          
//           <motion.button
//             className="border-2 text-gray-700 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg bg-white"
//             style={{ borderColor: '#4248f8' }}
//             onMouseEnter={(e) => e.target.style.backgroundColor = '#4248f8'}
//             onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => window.open('https://wa.me/+919876543210')}
//           >
//             <MessageCircle className="h-5 w-5 mr-2" />
//             Start WhatsApp Chat
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   </section>
//   );
// };

// export default ContactUsSection;


"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  User,
  Calendar,
  CheckCircle,
  AlertCircle,
  Headphones,
  Building,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  Star,
} from "lucide-react";

const iconMap = {
  Phone,
  MessageCircle,
  Mail,
  Calendar,
  Headphones,
  Shield,
  Zap,
  Star,
};

const ContactUsSection = () => {
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    amount: "",
    message: "",
    preferredTime: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [activeContactMethod, setActiveContactMethod] = useState(0);

  // Fetch company data
  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch("/api/company");
        if (!response.ok) {
          throw new Error("Failed to fetch company data");
        }
        const data = await response.json();
        setCompanyData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchCompanyData();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus("error");
      return;
    }

    setFormStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        loanType: "",
        amount: "",
        message: "",
        preferredTime: "",
      });
      setTimeout(() => setFormStatus(null), 3000);
    } catch (err) {
      setFormStatus("error");
    }
  };

  // ------------ NEW: Action handler for contact methods ------------
  const normalizePhoneForTel = (phone = "") => {
    // Keep + for tel:, remove spaces
    const cleaned = phone.replace(/[^\d+]/g, "");
    return cleaned;
  };

  const normalizePhoneForWhatsapp = (phone = "") => {
    // Remove everything except digits (WhatsApp expects country code + number without + in wa.me URL)
    const digits = phone.replace(/\D/g, "");
    return digits;
  };

  const openInNewTab = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inferTypeFromMethod = (method) => {
    if (!method) return "form";
    const t = (method.type || method.icon || method.title || "").toString().toLowerCase();
    if (t.includes("phone") || t.includes("call")) return "phone";
    if (t.includes("whatsapp")) return "whatsapp";
    if (t.includes("mail") || t.includes("email")) return "email";
    if (t.includes("book") || t.includes("calendar") || t.includes("booking")) return "booking";
    if (t.includes("external") || method.url) return "external";
    return "form";
  };

  const openContactAction = (method) => {
    if (!method && !companyData) return;

    // method can be a method object OR a shortcut object like { type: 'phone', details: companyData.phone }
    const m = method || {};
    const merged = {
      // fallback to company-level defaults
      details: (m.details || companyData?.phone || companyData?.email || ""),
      url: m.url || null,
      subject: m.subject || null,
      body: m.body || null,
      type: m.type || inferTypeFromMethod(m),
    };

    try {
      switch (merged.type) {
        case "phone": {
          const tel = normalizePhoneForTel(merged.details);
          if (tel) {
            // use window.location.href so mobile opens dialer
            window.location.href = `tel:${tel}`;
          } else {
            // fallback: scroll to contact form
            const formEl = document.querySelector("form");
            if (formEl) formEl.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          break;
        }

        case "whatsapp": {
          // WhatsApp uses wa.me/<number-without-plus-or-spaces>
          const num = normalizePhoneForWhatsapp(merged.details || companyData?.phone || "");
          if (num) {
            openInNewTab(`https://wa.me/${num}`);
          } else {
            // fallback open WhatsApp web with company website
            if (companyData?.website) openInNewTab(companyData.website);
          }
          break;
        }

        case "email": {
          const to = merged.details || companyData?.email || companyData?.officeLocations?.[0]?.email;
          if (to) {
            const subject = encodeURIComponent(merged.subject || `Inquiry from ${companyData?.name || "website"}`);
            const body = encodeURIComponent(
              merged.body ||
                `Hi ${companyData?.name || ""},%0D%0A%0D%0AI am contacting you regarding...%0D%0A%0D%0ARegards,`
            );
            openInNewTab(`mailto:${to}?subject=${subject}&body=${body}`);
          }
          break;
        }

        case "booking": {
          // prefer explicit URL, fallback to companyData.bookingUrl or website
          if (merged.url) openInNewTab(merged.url);
          else if (companyData?.bookingUrl) openInNewTab(companyData.bookingUrl);
          else if (companyData?.website) openInNewTab(companyData.website);
          else {
            // fallback: scroll to form
            const formEl = document.querySelector("form");
            if (formEl) formEl.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          break;
        }

        case "external": {
          if (merged.url) openInNewTab(merged.url);
          else if (companyData?.website) openInNewTab(companyData.website);
          break;
        }

        case "form":
        default: {
          // Scroll to the contact form as a graceful fallback
          const formEl = document.querySelector("form");
          if (formEl) formEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    } catch (err) {
      console.error("openContactAction error", err);
    }
  };
  // ----------------------------------------------------------------

  // Skeleton Loader Component (unchanged)
  const SkeletonLoader = () => (
    <div>
      {/* Section Header Skeleton */}
      <div className="text-center mb-16">
        <motion.div
          className="inline-flex items-center bg-gray-200 h-8 w-48 rounded-full mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="h-12 bg-gray-200 rounded w-3/4 mx-auto mb-6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="h-6 bg-gray-200 rounded w-1/2 mx-auto"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Quick Contact Methods Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[...Array(4)].map((_, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl p-8 border border-gray-100"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-16 h-16 bg-gray-200 rounded-xl mx-auto mb-6"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>
            <div className="space-y-2 mb-6">
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
            </div>
            <div className="h-10 bg-gray-200 rounded-xl w-full"></div>
          </motion.div>
        ))}
      </div>

      {/* Main Contact Section Skeleton */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Contact Form Skeleton */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          <motion.div
            className="h-6 bg-gray-200 rounded w-1/3 mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="h-4 bg-gray-200 rounded w-1/2 mb-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
              <div className="h-20 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="h-10 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>

        {/* Office Location Skeleton */}
        <div className="bg-white rounded-3xl p-8">
          <motion.div
            className="h-6 bg-gray-200 rounded w-1/3 mb-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="border border-gray-100 rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="h-6 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="space-y-3">
              {[...Array(4)].map((_, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="h-4 w-4 bg-gray-200 rounded-full mr-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100">
            <motion.div
              className="h-5 bg-gray-200 rounded w-24 mb-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="grid grid-cols-2 gap-4">
              {[...Array(2)].map((_, idx) => (
                <motion.div
                  key={idx}
                  className="text-center bg-gray-50 rounded-xl p-4"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="h-6 w-6 bg-gray-200 rounded-full mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
        <motion.div
          className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            className="h-12 bg-gray-200 rounded-xl w-64"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="h-12 bg-gray-200 rounded-xl w-64"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonLoader />
        </div>
      </section>
    );
  }

  if (error || !companyData) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500 text-lg">Error: {error || "No company data available"}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ color: "#4248f8" }}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Get In Touch
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Ready to Take the
            <span className="block" style={{ color: "#4248f8" }}>
              Next Step?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of financial experts is here to help you find the perfect loan solution. Reach
            out to us through any of the channels below and get started today.
          </p>
        </div>

        {/* Quick Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {companyData.contactMethods.map((method, index) => {
            const IconComponent = iconMap[method.icon] || MessageCircle;
            const isActive = activeContactMethod === index;

            return (
              <motion.div
                key={method._id || index}
                className={`bg-white rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 border-2 ${
                  isActive ? "border-opacity-100 shadow-xl -translate-y-2" : "border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1"
                }`}
                style={{ borderColor: isActive ? method.color : undefined }}
                onClick={() => {
                  setActiveContactMethod(index);
                  openContactAction(method);
                }}
                onMouseEnter={() => setActiveContactMethod(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                    isActive ? "scale-110" : ""
                  }`}
                  style={{ backgroundColor: isActive ? method.color : method.bgColor }}
                >
                  <IconComponent className="h-8 w-8 transition-colors duration-300" style={{ color: isActive ? "white" : method.color }} />
                </div>

                <h3 className="text-lg font-bold text-black mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{method.subtitle}</p>

                <div className="space-y-2 mb-6">
                  <p className="font-semibold text-black">{method.details}</p>
                  <p className="text-xs text-gray-500">{method.subDetails}</p>
                </div>

                <motion.button
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    isActive ? "text-white shadow-lg" : "text-gray-700 bg-gray-50 hover:shadow-md"
                  }`}
                  style={{
                    backgroundColor: isActive ? method.color : undefined,
                    color: isActive ? "white" : undefined,
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openContactAction(method)}
                >
                  {method.action}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">Contact Us</h3>
              <p className="text-gray-600">Fill out this form and we'll get back to you within 2 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                    placeholder={companyData.phone || "+91 98765 43210"}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                  placeholder={companyData.email || "your.email@example.com"}
                  required
                />
              </div>

              {/* Loan Type and Amount */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Type</label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                  >
                    <option value="">Select Loan Type</option>
                    <option value="personal">Personal Loan</option>
                    <option value="home">Home Loan</option>
                    <option value="auto">Auto Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="education">Education Loan</option>
                    <option value="gold">Gold Loan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount</label>
                  <input
                    type="text"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                    placeholder="₹ 5,00,000"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-gray-900"
                  placeholder="Tell us about your loan requirements..."
                />
              </div>

              {/* Form Status */}
              <AnimatePresence>
                {formStatus === "success" && (
                  <motion.div
                    className="flex items-center bg-green-50 border border-green-200 px-4 py-3 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-700">Thank you! We'll contact you within 2 hours.</span>
                  </motion.div>
                )}
                {formStatus === "error" && (
                  <motion.div
                    className="flex items-center bg-red-50 border border-red-200 px-4 py-3 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                    <span className="text-red-700">Please fill in all required fields.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center text-white"
                style={{ backgroundColor: "#4248f8" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {formStatus === "loading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Privacy note */}
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>

          {/* Office Location */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-black mb-6">Visit Our Office</h3>

            {companyData.officeLocations.map((location, index) => (
              <motion.div
                key={location._id || index}
                className="border border-gray-100 rounded-2xl p-6 mb-4 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-bold text-black text-lg">{location.city}</h4>
                  {location.isHeadOffice && (
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Head Office</span>
                  )}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{location.address}</span>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{location.phone}</span>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{location.email}</span>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{location.timing}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Support Features */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-bold text-black mb-4">Why Contact Us?</h4>
              <div className="grid grid-cols-2 gap-4">
                {companyData.supportFeatures.map((feature, index) => {
                  const IconComponent = iconMap[feature.icon] || Star;
                  return (
                    <motion.div
                      key={index}
                      className="text-center bg-blue-50 rounded-xl p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <IconComponent className="h-6 w-6 mx-auto mb-2" style={{ color: "#4248f8" }} />
                      <p className="text-xs text-gray-600 mb-1">{feature.title}</p>
                      <p className="font-semibold text-black text-sm">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Our financial experts are standing by to help you find the perfect loan solution. Don't
            wait - your financial goals are just a call away!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              style={{ backgroundColor: "#4248f8" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openContactAction({ type: "phone", details: companyData.phone })}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: {companyData.phone}
            </motion.button>

            <motion.button
              className="border-2 text-gray-700 hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg bg-white"
              style={{ borderColor: "#4248f8" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openContactAction({ type: "whatsapp", details: companyData.phone })}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Start WhatsApp Chat
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
