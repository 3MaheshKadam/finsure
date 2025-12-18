
"use client";
import Link from 'next/link';
import emi from "../../emi/page.jsx";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
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
  Award,
  Phone,
  Mail,
  FileText,
  DollarSign,
  Calendar,
  Star,
  ChevronLeft,
  Info,
  Download,
  Share2,
  Bookmark,
  MessageCircle,
  AlertTriangle,
  Target,
  Lightbulb
} from 'lucide-react';

const iconMap = {
  CreditCard,
  Home,
  Car,
  Building2,
  GraduationCap,
  Coins
};

const ServicePage = () => {
  const params = useParams();
  const router = useRouter();
  const serviceId = params?.serviceId;
  const [serviceData, setServiceData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [showEMICalculator, setShowEMICalculator] = useState(false);
  const [emiData, setEMIData] = useState({
    amount: '',
    tenure: '',
    rate: ''
  });
  const [emiResult, setEMIResult] = useState(null);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      if (!serviceId) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`/api/services/${serviceId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch service');
        }
        const data = await response.json();
        setServiceData(data);
        setEMIData({
          amount: data.minAmount.toString(),
          tenure: '12',
          rate: data.minRate.toString()
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching service:', err);
        setLoading(false);
      }
    };
    fetchService();
  }, [serviceId]);

  // EMI Calculator
  const calculateEMI = () => {
    const principal = parseFloat(emiData.amount);
    const rate = parseFloat(emiData.rate) / 12 / 100;
    const tenure = parseFloat(emiData.tenure);

    if (principal && rate && tenure) {
      const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
      const totalAmount = emi * tenure;
      const totalInterest = totalAmount - principal;

      setEMIResult({
        emi: Math.round(emi),
        totalAmount: Math.round(totalAmount),
        totalInterest: Math.round(totalInterest)
      });
    } else {
      setEMIResult(null); // Reset if inputs are invalid
    }
  };

  const handleApplyNow = () => {
    if (!serviceData) {
      alert('Please select a valid service first.');
      return;
    }
    const subject = encodeURIComponent(`Finsure Solutions - ${serviceData.title} Application`);
    const body = encodeURIComponent(`Hello Finsure Solutions Team,

I am interested in applying for a ${serviceData.title} and would like to proceed with the application process.

Loan Details:
- Service: ${serviceData.title}
- Loan Amount Required: [Please specify]
- Purpose: [Please specify]

Please contact me to discuss the application process and requirements.

Best regards`);
    
    const mailtoLink = `mailto:finsuresolutions1@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handleGetQuote = () => {
    if (!serviceData) {
      alert('Please select a valid service first.');
      return;
    }
    const subject = encodeURIComponent(`Finsure Solutions - ${serviceData.title} Quote Request`);
    const body = encodeURIComponent(`Hello Finsure Solutions Team,

I would like to request a personalized quote for ${serviceData.title}.

My Requirements:
- Loan Amount: [Please specify]
- Tenure Preferred: [Please specify]
- Purpose: [Please specify]

Please provide me with a detailed quote including interest rates, EMI calculations, and processing fees.

Best regards`);
    
    const mailtoLink = `mailto:finsuresolutions1@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: serviceData.title,
          text: serviceData.subtitle,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('URL copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <AlertTriangle className="h-24 w-24 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service "{serviceId || 'unknown'}" is not available. Please check the URL and try again.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[serviceData.icon];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <button 
              onClick={() => router.push('/')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Home
            </button>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-medium">{serviceData.title}</span>
          </nav>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${serviceData.color}20` }}
                  >
                    <IconComponent 
                      className="h-8 w-8" 
                      style={{ color: serviceData.color }} 
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      {serviceData.title}
                    </h1>
                    <p className="text-xl text-gray-600">{serviceData.subtitle}</p>
                  </div>
                </div>
                
                <div className="hidden lg:flex items-center space-x-3">
                  <button
                    onClick={handleShare}
                    className="p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-900"
                    title="Share"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-all ${bookmarked ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                    title="Bookmark"
                  >
                    <Bookmark className={`h-5 w-5 ${bookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {serviceData.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: serviceData.color }}>
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-4 w-4 mr-2" style={{ color: serviceData.color }} />
                    <span className="text-sm font-semibold text-gray-600">Amount</span>
                  </div>
                  <p className="font-bold text-gray-900">{serviceData.amount}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: serviceData.color }}>
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-4 w-4 mr-2" style={{ color: serviceData.color }} />
                    <span className="text-sm font-semibold text-gray-600">Rate</span>
                  </div>
                  <p className="font-bold text-gray-900">{serviceData.rate}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: serviceData.color }}>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 mr-2" style={{ color: serviceData.color }} />
                    <span className="text-sm font-semibold text-gray-600">Tenure</span>
                  </div>
                  <p className="font-bold text-gray-900">{serviceData.tenure}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: serviceData.color }}>
                  <div className="flex items-center mb-2">
                    <Clock className="h-4 w-4 mr-2" style={{ color: serviceData.color }} />
                    <span className="text-sm font-semibold text-gray-600">Processing</span>
                  </div>
                  <p className="font-bold text-gray-900">{serviceData.processingTime}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleApplyNow}
                  className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                  style={{ backgroundColor: serviceData.color }}
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
               <Link 
  href={`/emi`}
  className="border-2 bg-white text-gray-700 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg"
  style={{ borderColor: serviceData.color }}
  onMouseEnter={(e) => e.target.style.backgroundColor = serviceData.color}
  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
>
  <Calculator className="mr-2 h-5 w-5" />
  EMI Calculator
</Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="h-6 w-6 mr-2" style={{ color: serviceData.color }} />
                  Key Features
                </h3>
                <div className="space-y-4">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <CheckCircle 
                        className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" 
                        style={{ color: serviceData.color }} 
                      />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2" style={{ color: serviceData.color }} />
                  Common Use Cases
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {serviceData.useCases?.map((useCase, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div 
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: serviceData.color }}
                      ></div>
                      <span className="text-sm text-gray-700 font-medium">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EMI Calculator Modal/Section */}
      {showEMICalculator && (
        <div className="bg-blue-50 border-t border-blue-200 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Calculator className="h-6 w-6 mr-2" style={{ color: serviceData.color }} />
                  EMI Calculator
                </h3>
                <button
                  onClick={() => setShowEMICalculator(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₹)</label>
                      <input
                        type="number"
                        value={emiData.amount}
                        onChange={(e) => setEMIData({...emiData, amount: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter loan amount"
                        min={serviceData.minAmount}
                        max={serviceData.maxAmount}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                      <input
                        type="number"
                        value={emiData.rate}
                        onChange={(e) => setEMIData({...emiData, rate: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter interest rate"
                        step="0.1"
                        min="0"
                        max="30"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tenure (Months)</label>
                      <input
                        type="number"
                        value={emiData.tenure}
                        onChange={(e) => setEMIData({...emiData, tenure: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter tenure in months"
                        min="6"
                        max="360"
                      />
                    </div>
                    
                    <button
                      onClick={calculateEMI}
                      className="w-full text-white py-3 rounded-lg font-semibold transition-colors"
                      style={{ backgroundColor: serviceData.color }}
                    >
                      Calculate EMI
                    </button>
                  </div>
                </div>
                
                <div>
                  {emiResult && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-4">EMI Calculation Results</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Monthly EMI:</span>
                          <span className="font-bold text-lg" style={{ color: serviceData.color }}>
                            ₹{emiResult.emi.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Total Amount:</span>
                          <span className="font-semibold">₹{emiResult.totalAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Total Interest:</span>
                          <span className="font-semibold">₹{emiResult.totalInterest.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <div className="text-sm text-blue-800">
                        <p className="font-semibold mb-1">Important Note:</p>
                        <p>This is an indicative calculation. Actual EMI may vary based on processing fees, insurance, and other charges.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
          {[
            { key: 'overview', label: 'Overview', icon: FileText },
            { key: 'eligibility', label: 'Eligibility', icon: Users },
            { key: 'documents', label: 'Documents', icon: FileText },
            { key: 'benefits', label: 'Benefits', icon: Star },
            { key: 'faqs', label: 'FAQs', icon: MessageCircle }
          ].map(tab => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'text-white shadow-lg transform -translate-y-1'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:shadow-md'
                }`}
                style={{
                  backgroundColor: activeTab === tab.key ? serviceData.color : 'transparent'
                }}
              >
                <TabIcon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {activeTab === 'overview' && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="h-8 w-8 mr-3" style={{ color: serviceData.color }} />
                Service Overview
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">{serviceData.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Target className="h-6 w-6 mr-2" style={{ color: serviceData.color }} />
                      Loan Highlights
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Amount Range:</span>
                        <span className="font-bold" style={{ color: serviceData.color }}>{serviceData.amount}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Interest Rate:</span>
                        <span className="font-bold" style={{ color: serviceData.color }}>{serviceData.rate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Repayment Period:</span>
                        <span className="font-bold" style={{ color: serviceData.color }}>{serviceData.tenure}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Processing Time:</span>
                        <span className="font-bold" style={{ color: serviceData.color }}>{serviceData.processingTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="h-6 w-6 mr-2" style={{ color: serviceData.color }} />
                      Why Choose This Loan?
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our {serviceData.title.toLowerCase()} offer competitive interest rates, 
                      flexible repayment options, and quick processing to meet your financial needs efficiently.
                    </p>
                    <div className="flex items-center text-sm text-gray-600">
                      <Shield className="h-4 w-4 mr-2" style={{ color: serviceData.color }} />
                      <span>RBI Registered & Secure</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Simple Application Process</h4>
                  <div className="grid md:grid-cols-4 gap-6">
                    {[
                      { step: '1', title: 'Apply Online', desc: 'Fill our simple application form' },
                      { step: '2', title: 'Document Upload', desc: 'Submit required documents digitally' },
                      { step: '3', title: 'Quick Verification', desc: 'Our team verifies your details' },
                      { step: '4', title: 'Get Approved', desc: 'Receive funds in your account' }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3"
                          style={{ backgroundColor: serviceData.color }}
                        >
                          {item.step}
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-2">{item.title}</h5>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'eligibility' && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" style={{ color: serviceData.color }} />
                    Basic Requirements
                  </h4>
                  <div className="space-y-4">
                    {serviceData.eligibility.map((criterion, index) => (
                      <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                        <CheckCircle 
                          className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-green-600" 
                        />
                        <span className="text-gray-700 font-medium">{criterion}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Info className="h-6 w-6 mr-2 text-blue-600" />
                      Additional Information
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Meeting the basic eligibility criteria does not guarantee loan approval. 
                      Final approval is subject to our credit policy and verification process.
                    </p>
                    <p className="text-gray-700 mb-4">
                      For detailed eligibility assessment, please contact our loan experts 
                      who will guide you through the process.
                    </p>
                    <button
                      onClick={handleGetQuote}
                      className="text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                      style={{ backgroundColor: serviceData.color }}
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Check Eligibility
                    </button>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                      Important Notes
                    </h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Credit score requirements may vary based on loan amount</li>
                      <li>• Additional income proof may be required for higher amounts</li>
                      <li>• Co-applicant may be required in some cases</li>
                      <li>• Terms subject to final approval and documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="h-6 w-6 mr-2" style={{ color: serviceData.color }} />
                    Document Checklist
                  </h4>
                  <div className="space-y-3">
                    {serviceData.documents.map((document, index) => (
                      <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <FileText 
                          className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" 
                          style={{ color: serviceData.color }} 
                        />
                        <span className="text-gray-700">{document}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Download className="h-6 w-6 mr-2 text-blue-600" />
                      Document Guidelines
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                        All documents should be self-attested
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                        Original documents required for verification
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                        Digital copies acceptable for initial processing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                        Additional documents may be requested
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Lightbulb className="h-5 w-5 mr-2 text-green-600" />
                      Pro Tips
                    </h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Ensure all documents are clear and readable</li>
                      <li>• Keep both physical and digital copies ready</li>
                      <li>• Update documents should be recent (within 3 months)</li>
                      <li>• Contact us if you need help with documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-8 w-8 mr-3" style={{ color: serviceData.color }} />
                Key Benefits & Features
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${serviceData.color}15` }}
                      >
                        <Star 
                          className="h-6 w-6" 
                          style={{ color: serviceData.color }} 
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 group-hover:text-gray-800 transition-colors">{benefit}</h4>
                    </div>
                    <div 
                      className="h-1 w-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: serviceData.color }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageCircle className="h-8 w-8 mr-3" style={{ color: serviceData.color }} />
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {serviceData.faqs?.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5 flex-shrink-0"
                        style={{ backgroundColor: serviceData.color }}
                      >
                        Q
                      </div>
                      {faq.question}
                    </h4>
                    <div className="ml-9">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
                
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4" style={{ color: serviceData.color }} />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Have More Questions?</h4>
                  <p className="text-gray-600 mb-4">Our loan experts are here to help you with any queries.</p>
                  <button
                    onClick={handleGetQuote}
                    className="text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    style={{ backgroundColor: serviceData.color }}
                  >
                    Contact Expert
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Apply for {serviceData.title}?
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our loan experts are here to guide you through the application process 
              and help you get the best deal possible.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button 
              onClick={handleApplyNow}
              className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center"
              style={{ backgroundColor: serviceData.color }}
            >
              Start Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button
              onClick={handleGetQuote}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Get Personalized Quote
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-medium">+91 8208864853</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span className="font-medium">finsuresolutions1@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-medium">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;