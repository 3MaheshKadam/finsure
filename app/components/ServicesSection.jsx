// // "use client";
// // import React, { useState } from 'react';
// // import { 
// //   Home,
// //   Car,
// //   GraduationCap,
// //   Building2,
// //   Coins,
// //   CreditCard,
// //   ArrowRight,
// //   CheckCircle,
// //   Clock,
// //   Shield,
// //   Calculator,
// //   TrendingUp,
// //   Users,
// //   Award
// // } from 'lucide-react';

// // const ServicesSection = () => {
// //   const [hoveredService, setHoveredService] = useState(null);

// //   const services = [
// //     {
// //       id: 'personal',
// //       icon: CreditCard,
// //       title: 'Personal Loans',
// //       description: 'Quick personal loans for all your immediate financial needs',
// //       features: ['Instant approval', 'No collateral required', 'Flexible tenure'],
// //       amount: '₹50K - ₹25L',
// //       rate: '10.5% onwards',
// //       color: '#4248f8'
// //     },
// //     {
// //       id: 'home',
// //       icon: Home,
// //       title: 'Home Loans',
// //       description: 'Make your dream home a reality with our affordable home loans',
// //       features: ['Low interest rates', 'Longer tenure', 'Quick processing'],
// //       amount: '₹5L - ₹5Cr',
// //       rate: '8.5% onwards',
// //       color: '#10b981'
// //     },
// //     {
// //       id: 'auto',
// //       icon: Car,
// //       title: 'Auto Loans',
// //       description: 'Drive your dream car home with our competitive auto loans',
// //       features: ['New & used cars', 'Minimal documentation', 'Fast approval'],
// //       amount: '₹1L - ₹50L',
// //       rate: '9.5% onwards',
// //       color: '#06b6d4'
// //     },
// //     {
// //       id: 'business',
// //       icon: Building2,
// //       title: 'Business Loans',
// //       description: 'Fuel your business growth with our flexible business loans',
// //       features: ['Working capital', 'Equipment financing', 'Expansion loans'],
// //       amount: '₹1L - ₹10Cr',
// //       rate: '11% onwards',
// //       color: '#f59e0b'
// //     },
// //     {
// //       id: 'education',
// //       icon: GraduationCap,
// //       title: 'Education Loans',
// //       description: 'Invest in your future with our comprehensive education loans',
// //       features: ['Study in India/Abroad', 'Moratorium period', 'Tax benefits'],
// //       amount: '₹50K - ₹1Cr',
// //       rate: '9% onwards',
// //       color: '#8b5cf6'
// //     },
// //     {
// //       id: 'gold',
// //       icon: Coins,
// //       title: 'Gold Loans',
// //       description: 'Unlock the value of your gold with instant gold loans',
// //       features: ['Instant disbursement', 'Secure gold storage', 'Part payment'],
// //       amount: '₹10K - ₹1Cr',
// //       rate: '12% onwards',
// //       color: '#f97316'
// //     }
// //   ];

// //   const benefits = [
// //     {
// //       icon: Clock,
// //       title: '24-Hour Approval',
// //       description: 'Quick processing and instant approval for all loan types'
// //     },
// //     {
// //       icon: Shield,
// //       title: 'RBI Registered',
// //       description: 'Fully compliant and registered with Reserve Bank of India'
// //     },
// //     {
// //       icon: Calculator,
// //       title: 'Transparent Pricing',
// //       description: 'No hidden charges, clear terms and competitive interest rates'
// //     },
// //     {
// //       icon: Users,
// //       title: 'Expert Guidance',
// //       description: 'Dedicated relationship managers for personalized service'
// //     }
// //   ];

// //   const stats = [
// //     { number: '50,000+', label: 'Happy Customers', icon: Users },
// //     { number: '₹500Cr+', label: 'Loans Disbursed', icon: TrendingUp },
// //     { number: '99.2%', label: 'Approval Rate', icon: Award },
// //     { number: '24 Hours', label: 'Average Processing', icon: Clock }
// //   ];

// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// //         {/* Section Header */}
// //         <div className="text-center mb-16">
// //           <div className="inline-flex items-center bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ color: '#4248f8' }}>
// //             <Award className="h-4 w-4 mr-2" />
// //             Comprehensive Financial Solutions
// //           </div>
          
// //           <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
// //             Loan Services Designed
// //             <span className="block" style={{ color: '#4248f8' }}>For Your Success</span>
// //           </h2>
          
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             From personal needs to business expansion, we offer a complete range of loan products 
// //             with competitive rates and flexible terms to help you achieve your financial goals.
// //           </p>
// //         </div>

// //         {/* Services Grid */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
// //           {services.map((service) => {
// //             const IconComponent = service.icon;
// //             return (
// //               <div
// //                 key={service.id}
// //                 className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
// //                 onMouseEnter={() => setHoveredService(service.id)}
// //                 onMouseLeave={() => setHoveredService(null)}
// //               >
// //                 {/* Service Icon */}
// //                 <div 
// //                   className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
// //                   style={{ 
// //                     backgroundColor: hoveredService === service.id ? service.color : '#f8fafc',
// //                   }}
// //                 >
// //                   <IconComponent 
// //                     className="h-8 w-8 transition-colors duration-300" 
// //                     style={{ 
// //                       color: hoveredService === service.id ? 'white' : service.color 
// //                     }} 
// //                   />
// //                 </div>

// //                 {/* Service Content */}
// //                 <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-900 transition-colors">
// //                   {service.title}
// //                 </h3>
                
// //                 <p className="text-gray-600 mb-6 leading-relaxed">
// //                   {service.description}
// //                 </p>

// //                 {/* Loan Details */}
// //                 <div className="space-y-3 mb-6">
// //                   <div className="flex justify-between items-center">
// //                     <span className="text-sm text-gray-500">Loan Amount</span>
// //                     <span className="font-semibold text-black">{service.amount}</span>
// //                   </div>
// //                   <div className="flex justify-between items-center">
// //                     <span className="text-sm text-gray-500">Interest Rate</span>
// //                     <span className="font-semibold" style={{ color: service.color }}>{service.rate}</span>
// //                   </div>
// //                 </div>

// //                 {/* Features List */}
// //                 <div className="space-y-2 mb-6">
// //                   {service.features.map((feature, index) => (
// //                     <div key={index} className="flex items-center text-sm">
// //                       <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: service.color }} />
// //                       <span className="text-gray-600">{feature}</span>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* CTA Button */}
// //                 <button 
// //                   className="w-full bg-gray-50 hover:text-white text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
// //                   style={{
// //                     backgroundColor: hoveredService === service.id ? service.color : '#f8fafc'
// //                   }}
// //                   onMouseEnter={(e) => {
// //                     e.target.style.backgroundColor = service.color;
// //                     e.target.style.color = 'white';
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     e.target.style.backgroundColor = hoveredService === service.id ? service.color : '#f8fafc';
// //                     e.target.style.color = hoveredService === service.id ? 'white' : '#374151';
// //                   }}
// //                 >
// //                   Apply Now
// //                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
// //                 </button>
// //               </div>
// //             );
// //           })}
// //         </div>

// //         {/* Benefits Section */}
// //         <div className="bg-gray-50 rounded-3xl p-12 mb-20">
// //           <div className="text-center mb-12">
// //             <h3 className="text-3xl font-bold text-black mb-4">
// //               Why Choose Finsure Solutions?
// //             </h3>
// //             <p className="text-gray-600 text-lg">
// //               Experience the difference with our customer-first approach and industry-leading services
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {benefits.map((benefit, index) => {
// //               const IconComponent = benefit.icon;
// //               return (
// //                 <div key={index} className="text-center group">
// //                   <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
// //                     <IconComponent className="h-10 w-10" style={{ color: '#4248f8' }} />
// //                   </div>
// //                   <h4 className="text-lg font-bold text-black mb-2">{benefit.title}</h4>
// //                   <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* Stats Section */}
// //         <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-lg">
// //           <div className="text-center mb-12">
// //             <h3 className="text-3xl font-bold text-black mb-4">
// //               Trusted by Thousands Across India
// //             </h3>
// //             <p className="text-gray-600 text-lg">
// //               Our numbers speak for our commitment to excellence
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
// //             {stats.map((stat, index) => {
// //               const IconComponent = stat.icon;
// //               return (
// //                 <div key={index} className="text-center group">
// //                   <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
// //                     <IconComponent className="h-8 w-8" style={{ color: '#4248f8' }} />
// //                   </div>
// //                   <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
// //                   <div className="text-gray-600 font-medium">{stat.label}</div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* CTA Section */}
// //         <div className="text-center mt-16">
// //           <h3 className="text-2xl font-bold text-black mb-4">
// //             Ready to Get Started?
// //           </h3>
// //           <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
// //             Choose the loan that fits your needs and start your application process today. 
// //             Our experts are here to guide you every step of the way.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <button className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center" style={{ backgroundColor: '#4248f8' }}>
// //               Start Application
// //               <ArrowRight className="ml-2 h-5 w-5" />
// //             </button>
// //             <button className="border-2 text-gray-700 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg" style={{ borderColor: '#4248f8' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4248f8'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
// //               Talk to Expert
// //               <Users className="ml-2 h-5 w-5" />
// //             </button>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesSection;

"use client";
import React, { useState } from 'react';
import { 
  Home,
  Car,
  GraduationCap,
  Building2,
  Coins,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Calculator,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

const ServicesSection = ({ onServiceClick }) => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 'personal',
      icon: CreditCard,
      title: 'Personal Loans',
      description: 'Quick personal loans for all your immediate financial needs',
      features: ['Instant approval', 'No collateral required', 'Flexible tenure'],
      amount: '₹50K - ₹25L',
      rate: '10.5% onwards',
      color: '#4248f8'
    },
    {
      id: 'home',
      icon: Home,
      title: 'Home Loans',
      description: 'Make your dream home a reality with our affordable home loans',
      features: ['Low interest rates', 'Longer tenure', 'Quick processing'],
      amount: '₹5L - ₹5Cr',
      rate: '8.5% onwards',
      color: '#10b981'
    },
    {
      id: 'auto',
      icon: Car,
      title: 'Auto Loans',
      description: 'Drive your dream car home with our competitive auto loans',
      features: ['New & used cars', 'Minimal documentation', 'Fast approval'],
      amount: '₹1L - ₹50L',
      rate: '9.5% onwards',
      color: '#06b6d4'
    },
    {
      id: 'business',
      icon: Building2,
      title: 'Business Loans',
      description: 'Fuel your business growth with our flexible business loans',
      features: ['Working capital', 'Equipment financing', 'Expansion loans'],
      amount: '₹1L - ₹10Cr',
      rate: '11% onwards',
      color: '#f59e0b'
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education Loans',
      description: 'Invest in your future with our comprehensive education loans',
      features: ['Study in India/Abroad', 'Moratorium period', 'Tax benefits'],
      amount: '₹50K - ₹1Cr',
      rate: '9% onwards',
      color: '#8b5cf6'
    },
    {
      id: 'gold',
      icon: Coins,
      title: 'Gold Loans',
      description: 'Unlock the value of your gold with instant gold loans',
      features: ['Instant disbursement', 'Secure gold storage', 'Part payment'],
      amount: '₹10K - ₹1Cr',
      rate: '12% onwards',
      color: '#f97316'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24-Hour Approval',
      description: 'Quick processing and instant approval for all loan types'
    },
    {
      icon: Shield,
      title: 'RBI Registered',
      description: 'Fully compliant and registered with Reserve Bank of India'
    },
    {
      icon: Calculator,
      title: 'Transparent Pricing',
      description: 'No hidden charges, clear terms and competitive interest rates'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Dedicated relationship managers for personalized service'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers', icon: Users },
    { number: '₹500Cr+', label: 'Loans Disbursed', icon: TrendingUp },
    { number: '99.2%', label: 'Approval Rate', icon: Award },
    { number: '24 Hours', label: 'Average Processing', icon: Clock }
  ];

  // Handle service card click
  const handleServiceClick = (serviceId) => {
    if (onServiceClick) {
      onServiceClick(serviceId);
    } else {
      // Default behavior - redirect to service page
      window.location.href = `/services/${serviceId}`;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ color: '#4248f8' }}>
            <Award className="h-4 w-4 mr-2" />
            Comprehensive Financial Solutions
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Loan Services Designed
            <span className="block" style={{ color: '#4248f8' }}>For Your Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From personal needs to business expansion, we offer a complete range of loan products 
            with competitive rates and flexible terms to help you achieve your financial goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => handleServiceClick(service.id)}
              >
                {/* Service Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ 
                    backgroundColor: hoveredService === service.id ? service.color : '#f8fafc',
                  }}
                >
                  <IconComponent 
                    className="h-8 w-8 transition-colors duration-300" 
                    style={{ 
                      color: hoveredService === service.id ? 'white' : service.color 
                    }} 
                  />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-900 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Loan Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Loan Amount</span>
                    <span className="font-semibold text-black">{service.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Interest Rate</span>
                    <span className="font-semibold" style={{ color: service.color }}>{service.rate}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: service.color }} />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className="w-full bg-gray-50 hover:text-white text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
                  style={{
                    backgroundColor: hoveredService === service.id ? service.color : '#f8fafc'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = service.color;
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = hoveredService === service.id ? service.color : '#f8fafc';
                    e.target.style.color = hoveredService === service.id ? 'white' : '#374151';
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click when button is clicked
                    handleServiceClick(service.id);
                  }}
                >
                  View More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Why Choose Finsure Solutions?
            </h3>
            <p className="text-gray-600 text-lg">
              Experience the difference with our customer-first approach and industry-leading services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <IconComponent className="h-10 w-10" style={{ color: '#4248f8' }} />
                  </div>
                  <h4 className="text-lg font-bold text-black mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Trusted by Thousands Across India
            </h3>
            <p className="text-gray-600 text-lg">
              Our numbers speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8" style={{ color: '#4248f8' }} />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the loan that fits your needs and start your application process today. 
            Our experts are here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center" style={{ backgroundColor: '#4248f8' }}>
              Start Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 text-gray-700 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg" style={{ borderColor: '#4248f8' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4248f8'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              Talk to Expert
              <Users className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
// "use client";
// import React, { useState } from 'react';
// import { 
//   Home,
//   Car,
//   GraduationCap,
//   Building2,
//   Coins,
//   CreditCard,
//   ArrowRight,
//   CheckCircle,
//   Clock,
//   Shield,
//   Calculator,
//   TrendingUp,
//   Users,
//   Award
// } from 'lucide-react';

// const ServicesSection = ({ onServiceClick }) => {
//   const [hoveredService, setHoveredService] = useState(null);

//   const services = [
//     {
//       id: 'personal',
//       icon: CreditCard,
//       title: 'Personal Loans',
//       description: 'Quick personal loans for all your immediate financial needs',
//       features: ['Instant approval', 'No collateral required', 'Flexible tenure'],
//       amount: '₹50K - ₹25L',
//       rate: '10.5% onwards',
//       color: '#4248f8'
//     },
//     {
//       id: 'home',
//       icon: Home,
//       title: 'Home Loans',
//       description: 'Make your dream home a reality with our affordable home loans',
//       features: ['Low interest rates', 'Longer tenure', 'Quick processing'],
//       amount: '₹5L - ₹5Cr',
//       rate: '8.5% onwards',
//       color: '#10b981'
//     },
//     {
//       id: 'auto',
//       icon: Car,
//       title: 'Auto Loans',
//       description: 'Drive your dream car home with our competitive auto loans',
//       features: ['New & used cars', 'Minimal documentation', 'Fast approval'],
//       amount: '₹1L - ₹50L',
//       rate: '9.5% onwards',
//       color: '#06b6d4'
//     },
//     {
//       id: 'business',
//       icon: Building2,
//       title: 'Business Loans',
//       description: 'Fuel your business growth with our flexible business loans',
//       features: ['Working capital', 'Equipment financing', 'Expansion loans'],
//       amount: '₹1L - ₹10Cr',
//       rate: '11% onwards',
//       color: '#f59e0b'
//     },
//     {
//       id: 'education',
//       icon: GraduationCap,
//       title: 'Education Loans',
//       description: 'Invest in your future with our comprehensive education loans',
//       features: ['Study in India/Abroad', 'Moratorium period', 'Tax benefits'],
//       amount: '₹50K - ₹1Cr',
//       rate: '9% onwards',
//       color: '#8b5cf6'
//     },
//     {
//       id: 'gold',
//       icon: Coins,
//       title: 'Gold Loans',
//       description: 'Unlock the value of your gold with instant gold loans',
//       features: ['Instant disbursement', 'Secure gold storage', 'Part payment'],
//       amount: '₹10K - ₹1Cr',
//       rate: '12% onwards',
//       color: '#f97316'
//     }
//   ];

//   const benefits = [
//     {
//       icon: Clock,
//       title: '24-Hour Approval',
//       description: 'Quick processing and instant approval for all loan types'
//     },
//     {
//       icon: Shield,
//       title: 'RBI Registered',
//       description: 'Fully compliant and registered with Reserve Bank of India'
//     },
//     {
//       icon: Calculator,
//       title: 'Transparent Pricing',
//       description: 'No hidden charges, clear terms and competitive interest rates'
//     },
//     {
//       icon: Users,
//       title: 'Expert Guidance',
//       description: 'Dedicated relationship managers for personalized service'
//     }
//   ];

//   const stats = [
//     { number: '50,000+', label: 'Happy Customers', icon: Users },
//     { number: '₹500Cr+', label: 'Loans Disbursed', icon: TrendingUp },
//     { number: '99.2%', label: 'Approval Rate', icon: Award },
//     { number: '24 Hours', label: 'Average Processing', icon: Clock }
//   ];

//   // Handle service card click
//   const handleServiceClick = (serviceId) => {
//     if (onServiceClick) {
//       onServiceClick(serviceId);
//     } else {
//       // Default behavior - redirect to service page
//       window.location.href = `/services/${serviceId}`;
//     }
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ color: '#4248f8' }}>
//             <Award className="h-4 w-4 mr-2" />
//             Comprehensive Financial Solutions
//           </div>
          
//           <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
//             Loan Services Designed
//             <span className="block" style={{ color: '#4248f8' }}>For Your Success</span>
//           </h2>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             From personal needs to business expansion, we offer a complete range of loan products 
//             with competitive rates and flexible terms to help you achieve your financial goals.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {services.map((service) => {
//             const IconComponent = service.icon;
//             return (
//               <div
//                 key={service.id}
//                 className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
//                 onMouseEnter={() => setHoveredService(service.id)}
//                 onMouseLeave={() => setHoveredService(null)}
//                 onClick={() => handleServiceClick(service.id)}
//               >
//                 {/* Service Icon */}
//                 <div 
//                   className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
//                   style={{ 
//                     backgroundColor: hoveredService === service.id ? service.color : '#f8fafc',
//                   }}
//                 >
//                   <IconComponent 
//                     className="h-8 w-8 transition-colors duration-300" 
//                     style={{ 
//                       color: hoveredService === service.id ? 'white' : service.color 
//                     }} 
//                   />
//                 </div>

//                 {/* Service Content */}
//                 <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-900 transition-colors">
//                   {service.title}
//                 </h3>
                
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>

//                 {/* Loan Details */}
//                 <div className="space-y-3 mb-6">
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm text-gray-500">Loan Amount</span>
//                     <span className="font-semibold text-black">{service.amount}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm text-gray-500">Interest Rate</span>
//                     <span className="font-semibold" style={{ color: service.color }}>{service.rate}</span>
//                   </div>
//                 </div>

//                 {/* Features List */}
//                 <div className="space-y-2 mb-6">
//                   {service.features.map((feature, index) => (
//                     <div key={index} className="flex items-center text-sm">
//                       <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: service.color }} />
//                       <span className="text-gray-600">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Button */}
//                 <button 
//                   className="w-full bg-gray-50 hover:text-white text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
//                   style={{
//                     backgroundColor: hoveredService === service.id ? service.color : '#f8fafc'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.backgroundColor = service.color;
//                     e.target.style.color = 'white';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.backgroundColor = hoveredService === service.id ? service.color : '#f8fafc';
//                     e.target.style.color = hoveredService === service.id ? 'white' : '#374151';
//                   }}
//                   onClick={(e) => {
//                     e.stopPropagation(); // Prevent card click when button is clicked
//                     handleServiceClick(service.id);
//                   }}
//                 >
//                   View More
//                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//         {/* Benefits Section */}
//         <div className="bg-gray-50 rounded-3xl p-12 mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-black mb-4">
//               Why Choose Finsure Solutions?
//             </h3>
//             <p className="text-gray-600 text-lg">
//               Experience the difference with our customer-first approach and industry-leading services
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {benefits.map((benefit, index) => {
//               const IconComponent = benefit.icon;
//               return (
//                 <div key={index} className="text-center group">
//                   <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
//                     <IconComponent className="h-10 w-10" style={{ color: '#4248f8' }} />
//                   </div>
//                   <h4 className="text-lg font-bold text-black mb-2">{benefit.title}</h4>
//                   <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-lg">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-black mb-4">
//               Trusted by Thousands Across India
//             </h3>
//             <p className="text-gray-600 text-lg">
//               Our numbers speak for our commitment to excellence
//             </p>
//           </div>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => {
//               const IconComponent = stat.icon;
//               return (
//                 <div key={index} className="text-center group">
//                   <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                     <IconComponent className="h-8 w-8" style={{ color: '#4248f8' }} />
//                   </div>
//                   <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
//                   <div className="text-gray-600 font-medium">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-16">
//           <h3 className="text-2xl font-bold text-black mb-4">
//             Ready to Get Started?
//           </h3>
//           <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//             Choose the loan that fits your needs and start your application process today. 
//             Our experts are here to guide you every step of the way.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center" style={{ backgroundColor: '#4248f8' }}>
//               Start Application
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </button>
//             <button className="border-2 text-gray-700 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg" style={{ borderColor: '#4248f8' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4248f8'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
//               Talk to Expert
//               <Users className="ml-2 h-5 w-5" />
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ServicesSection;