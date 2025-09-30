"use client";
import React, { useState, useEffect } from 'react';
import { 
  FileText,
  Search,
  CheckCircle,
  DollarSign,
  ArrowRight,
  Clock,
  Shield,
  User,
  CreditCard,
  Building,
  Phone,
  Mail,
  Calculator
} from 'lucide-react';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-animate steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('how-it-works');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const steps = [
    {
      id: 1,
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out our simple online form with your basic details and loan requirements',
      details: [
        'Complete application in 5 minutes',
        'Upload required documents',
        'Choose loan amount and tenure',
        'No physical paperwork required'
      ],
      color: '#4248f8',
      bgColor: '#eff6ff'
    },
    {
      id: 2,
      icon: Search,
      title: 'Instant Verification',
      description: 'Our AI-powered system instantly verifies your details and creditworthiness',
      details: [
        'Real-time document verification',
        'Credit score assessment',
        'Income validation',
        'Automated background checks'
      ],
      color: '#10b981',
      bgColor: '#ecfdf5'
    },
    {
      id: 3,
      icon: CheckCircle,
      title: 'Quick Approval',
      description: 'Get instant approval with competitive interest rates and flexible terms',
      details: [
        'Decision within 30 minutes',
        'Competitive interest rates',
        'Flexible repayment options',
        'Pre-approved loan offers'
      ],
      color: '#f59e0b',
      bgColor: '#fffbeb'
    },
    {
      id: 4,
      icon: DollarSign,
      title: 'Fund Disbursement',
      description: 'Funds transferred directly to your bank account within 24 hours',
      details: [
        'Direct bank transfer',
        'Same-day disbursement*',
        'SMS and email notifications',
        'Digital loan agreement'
      ],
      color: '#8b5cf6',
      bgColor: '#f3e8ff'
    }
  ];

  const requirements = [
    {
      icon: User,
      title: 'Personal Details',
      items: ['Valid ID Proof', 'Address Proof', 'Age: 21-65 years', 'Indian Citizen/Resident']
    },
    {
      icon: CreditCard,
      title: 'Financial Info',
      items: ['Bank Statements', 'Salary Slips', 'Credit Score Report', 'Income Tax Returns']
    },
    {
      icon: Building,
      title: 'Employment',
      items: ['Employment Certificate', 'Work Experience: 2+ years', 'Current Company Details', 'HR Contact Information']
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24 Hour Processing',
      description: 'Lightning fast approval and disbursement'
    },
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Bank-grade security for all transactions'
    },
    {
      icon: Calculator,
      title: 'Best Rates',
      description: 'Competitive interest rates starting from 8.5%'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ color: '#4248f8' }}>
            <CheckCircle className="h-4 w-4 mr-2" />
            Simple & Fast Process
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Get Your Loan in
            <span className="block" style={{ color: '#4248f8' }}>4 Easy Steps</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined digital process makes getting a loan quick, easy, and hassle-free. 
            From application to disbursement, everything happens online.
          </p>
        </div>

        {/* Main Process Flow */}
        <div className="relative mb-20">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 hidden lg:block">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.id}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    isActive ? 'transform -translate-y-2' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 lg:relative lg:top-0 lg:left-0 lg:transform-none">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto transition-all duration-300 ${
                        isActive ? 'scale-110 shadow-lg' : ''
                      }`}
                      style={{ backgroundColor: isActive ? step.color : '#9ca3af' }}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Step Card */}
                  <div 
                    className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 ${
                      isActive ? 'shadow-2xl border-2' : 'border border-gray-100'
                    }`}
                    style={{ 
                      borderColor: isActive ? step.color : undefined,
                      backgroundColor: isActive ? step.bgColor : 'white'
                    }}
                  >
                    {/* Icon */}
                    <div 
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                        isActive ? 'scale-110' : ''
                      }`}
                      style={{ backgroundColor: isActive ? step.color : '#f3f4f6' }}
                    >
                      <IconComponent 
                        className="h-8 w-8 transition-colors duration-300" 
                        style={{ color: isActive ? 'white' : step.color }}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-black mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div 
                            className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                            style={{ backgroundColor: step.color }}
                          />
                          <span className="text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="bg-white rounded-3xl p-12 mb-20 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              What You'll Need
            </h3>
            <p className="text-gray-600 text-lg">
              Keep these documents ready to speed up your application process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => {
              const IconComponent = req.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10" style={{ color: '#4248f8' }} />
                  </div>
                  
                  <h4 className="text-lg font-bold text-black mb-4">{req.title}</h4>
                  
                  <div className="space-y-2">
                    {req.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: '#4248f8' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-7 w-7" style={{ color: '#4248f8' }} />
                </div>
                <h4 className="font-bold text-black mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
      

      </div>
    </section>
  );
};

export default HowItWorksSection;