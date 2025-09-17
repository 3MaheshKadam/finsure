"use client";
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Shield,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  Home,
  Car,
  GraduationCap,
  Building2
} from 'lucide-react';

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '₹500Cr+', label: 'Loans Disbursed' },
    { number: '8.5%', label: 'Starting Interest Rate' },
    { number: '24 Hours', label: 'Quick Approval' }
  ];

  const loanTypes = [
    { icon: Home, name: 'Home Loan', color: '#4248f8', delay: 0 },
    { icon: Car, name: 'Auto Loan', color: '#06b6d4', delay: 1 },
    { icon: GraduationCap, name: 'Education Loan', color: '#10b981', delay: 2 },
    { icon: Building2, name: 'Business Loan', color: '#f59e0b', delay: 3 }
  ];

  // Animated counter for stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Animation flow for loan success
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 5);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const FloatingParticle = ({ delay = 0, size = 'w-2 h-2', color = 'bg-blue-100' }) => (
    <div 
      className={`absolute ${size} ${color} rounded-full opacity-60 animate-bounce`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    />
  );

  return (
    <div className="relative bg-white overflow-hidden min-h-screen">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Background Circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full opacity-50"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-gray-50 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-50 rounded-full opacity-40"></div>
        
        {/* Medium Shapes */}
        <div className="absolute top-60 right-1/3 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gray-100 rounded-full opacity-40"></div>
        
        {/* Small Decorative Elements */}
        <div className="absolute top-32 left-1/3 w-4 h-4 bg-blue-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-60 right-1/4 w-6 h-6 bg-gray-300 rounded-full opacity-50"></div>
        <div className="absolute top-3/4 left-1/5 w-3 h-3 rounded-full opacity-70" style={{ backgroundColor: '#4248f8' }}></div>
      </div>

      {/* Floating Particles */}
      <FloatingParticle delay={0} size="w-3 h-3" color="bg-blue-200" />
      <FloatingParticle delay={1} size="w-2 h-2" color="bg-gray-200" />
      <FloatingParticle delay={2} size="w-4 h-4" color="bg-blue-100" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
           
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-black">
                  Transform Your
                </span>
                <br />
                <span style={{ color: '#4248f8' }}>
                  Financial Dreams
                </span>
                <br />
                <span className="text-black">
                  Into Reality
                </span>
              </h1>
              
              <p className="text-xl lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Expert loan solutions and financial guidance to optimize your investments. 
                Get approvals backed by advanced analytics and proven strategies.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Instant Digital Approval',
                'Zero Processing Fees',
                'Flexible Repayment Terms', 
                'RBI Registered & Secure'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4248f8' }}>
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center" style={{ backgroundColor: '#4248f8' }}>
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
           
            </div>

      
          </div>

          {/* Right Side - Animated Loan Growth & Success Dashboard */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Dashboard Container */}
              <div className="w-full max-w-lg mx-auto">
                
             
                {/* Loan Success Flow */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <h3 className="text-lg font-bold text-black mb-6">Loan Success Journey</h3>
                  
                  <svg
                    className="w-full h-80"
                    viewBox="0 0 400 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Central Success Hub */}
                    <circle
                      cx="200"
                      cy="150"
                      r="30"
                      fill="#4248f8"
                      className={`transition-all duration-1000 ${
                        animationStep >= 4 ? 'animate-pulse' : ''
                      }`}
                    />
                    <text x="200" y="158" textAnchor="middle" className="fill-white text-sm font-bold">LOAN</text>

                    {/* Loan Type Nodes */}
                    {loanTypes.map((loan, index) => {
                      const positions = [
                        { x: 120, y: 80 },   // Home - top left
                        { x: 280, y: 80 },   // Auto - top right  
                        { x: 120, y: 220 },  // Education - bottom left
                        { x: 280, y: 220 }   // Business - bottom right
                      ];
                      
                      const pos = positions[index];
                      const isActive = animationStep === index;

                      return (
                        <g key={index}>
                          {/* Connection Line */}
                          <line
                            x1="200"
                            y1="150"
                            x2={pos.x}
                            y2={pos.y}
                            stroke={isActive ? loan.color : '#e5e7eb'}
                            strokeWidth={isActive ? '3' : '2'}
                            opacity={isActive ? '1' : '0.3'}
                            className="transition-all duration-500"
                          />
                          
                          {/* Loan Type Circle */}
                          <circle
                            cx={pos.x}
                            cy={pos.y}
                            r="25"
                            fill={isActive ? loan.color : '#f3f4f6'}
                            stroke={isActive ? loan.color : '#d1d5db'}
                            strokeWidth="2"
                            className={`transition-all duration-500 ${
                              isActive ? 'animate-pulse' : ''
                            }`}
                          />
                          
                          {/* Loan Type Icon (simplified shapes) */}
                          {index === 0 && ( // Home
                            <g>
                              <polygon
                                points={`${pos.x-10},${pos.y+3} ${pos.x},${pos.y-8} ${pos.x+10},${pos.y+3} ${pos.x+6},${pos.y+3} ${pos.x+6},${pos.y+10} ${pos.x-6},${pos.y+10} ${pos.x-6},${pos.y+3}`}
                                fill={isActive ? 'white' : '#6b7280'}
                              />
                            </g>
                          )}
                          {index === 1 && ( // Car
                            <g>
                              <rect x={pos.x-12} y={pos.y-4} width="24" height="8" rx="4" fill={isActive ? 'white' : '#6b7280'} />
                              <circle cx={pos.x-6} cy={pos.y+4} r="3" fill={isActive ? 'white' : '#6b7280'} />
                              <circle cx={pos.x+6} cy={pos.y+4} r="3" fill={isActive ? 'white' : '#6b7280'} />
                            </g>
                          )}
                          {index === 2 && ( // Education
                            <g>
                              <rect x={pos.x-8} y={pos.y-6} width="16" height="10" rx="2" fill={isActive ? 'white' : '#6b7280'} />
                              <polygon points={`${pos.x-4},${pos.y+4} ${pos.x},${pos.y+8} ${pos.x+4},${pos.y+4}`} fill={isActive ? 'white' : '#6b7280'} />
                            </g>
                          )}
                          {index === 3 && ( // Business
                            <g>
                              <rect x={pos.x-8} y={pos.y-6} width="4" height="12" fill={isActive ? 'white' : '#6b7280'} />
                              <rect x={pos.x-2} y={pos.y-3} width="4" height="9" fill={isActive ? 'white' : '#6b7280'} />
                              <rect x={pos.x+4} y={pos.y} width="4" height="6" fill={isActive ? 'white' : '#6b7280'} />
                            </g>
                          )}
                          
                          {/* Success Checkmark */}
                          {animationStep === index && (
                            <g>
                              <circle cx={pos.x+15} cy={pos.y-15} r="8" fill="#10b981" className="animate-ping" />
                              <path 
                                d={`M${pos.x+12},${pos.y-15} L${pos.x+14},${pos.y-13} L${pos.x+18},${pos.y-17}`} 
                                stroke="white" 
                                strokeWidth="2" 
                                fill="none" 
                              />
                            </g>
                          )}

                          {/* Loan Type Label */}
                          <text
                            x={pos.x}
                            y={pos.y + 35}
                            textAnchor="middle"
                            className="fill-gray-600 text-xs font-medium"
                          >
                            {loan.name}
                          </text>
                        </g>
                      );
                    })}

                    {/* Success Message */}
                    {animationStep >= 4 && (
                      <g className="animate-fade-in">
                        <text x="200" y="40" textAnchor="middle" className="fill-green-600 text-sm font-bold">
                          Loan Approved! 🎉
                        </text>
                      </g>
                    )}
                  </svg>
                </div>

                {/* Market Alert Card (Bottom) */}
        
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center animate-bounce border border-blue-200">
              <Clock className="h-6 w-6" style={{ color: '#4248f8' }} />
            </div>
            
            <div className="absolute bottom-20 left-10 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center animate-pulse border border-gray-200">
              <Users className="h-5 w-5 text-gray-600" />
            </div>
            
            <div className="absolute top-1/2 right-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center animate-ping border border-green-200">
              <Shield className="h-4 w-4 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;