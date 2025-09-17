"use client";
import React, { useState } from 'react';
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
  Star
} from 'lucide-react';

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    amount: '',
    message: '',
    preferredTime: ''
  });

  const [formStatus, setFormStatus] = useState(null);
  const [activeContactMethod, setActiveContactMethod] = useState(0);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Speak with our experts',
      details: '+91 98765 43210',
      subDetails: 'Mon-Sat: 9:00 AM - 6:00 PM',
      action: 'Call Now',
      color: '#4248f8',
      bgColor: '#eff6ff'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      subtitle: 'Quick chat support',
      details: '+91 98765 43210',
      subDetails: 'Available 24/7',
      action: 'Chat Now',
      color: '#10b981',
      bgColor: '#ecfdf5'
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Send your queries',
      details: 'info@finsuresolutions.com',
      subDetails: 'Response within 2 hours',
      action: 'Send Email',
      color: '#f59e0b',
      bgColor: '#fffbeb'
    },
    {
      icon: Calendar,
      title: 'Book Meeting',
      subtitle: 'Schedule a consultation',
      details: 'Free 30-min consultation',
      subDetails: 'Available slots today',
      action: 'Book Now',
      color: '#8b5cf6',
      bgColor: '#f3e8ff'
    }
  ];

  const officeLocations = [
    {
      city: 'Pune (Head Office)',
      address: 'Finsure Solutions Pvt Ltd, Plot No. 123, IT Park, Pimpri-Chinchwad, Pune - 411018',
      phone: '+91 98765 43210',
      email: 'pune@finsuresolutions.com',
      timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
      isHeadOffice: true
    },
    {
      city: 'Mumbai',
      address: 'Finsure Solutions, Office No. 456, Business Center, Andheri East, Mumbai - 400069',
      phone: '+91 98765 43211',
      email: 'mumbai@finsuresolutions.com',
      timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
      isHeadOffice: false
    },
    {
      city: 'Bangalore',
      address: 'Finsure Solutions, Floor 3, Tech Park, Electronic City, Bangalore - 560100',
      phone: '+91 98765 43212',
      email: 'bangalore@finsuresolutions.com',
      timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
      isHeadOffice: false
    }
  ];

  const supportFeatures = [
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your queries'
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'Average response time of less than 30 minutes'
    },
    {
      icon: Shield,
      title: 'Secure Communication',
      description: 'All communications are encrypted and secure'
    },
    {
      icon: Star,
      title: 'Expert Guidance',
      description: 'Certified financial advisors to help you'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus('error');
      return;
    }

    // Simulate form submission
    setFormStatus('loading');
    
    setTimeout(() => {
      setFormStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        loanType: '',
        amount: '',
        message: '',
        preferredTime: ''
      });
    }, 2000);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ color: '#4248f8' }}>
            <MessageCircle className="h-4 w-4 mr-2" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Ready to Take the
            <span className="block" style={{ color: '#4248f8' }}>Next Step?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of financial experts is here to help you find the perfect loan solution. 
            Reach out to us through any of the channels below and get started today.
          </p>
        </div>

        {/* Quick Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            const isActive = activeContactMethod === index;
            
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 border-2 ${
                  isActive ? 'border-opacity-100 shadow-xl -translate-y-2' : 'border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
                style={{ borderColor: isActive ? method.color : undefined }}
                onClick={() => setActiveContactMethod(index)}
                onMouseEnter={() => setActiveContactMethod(index)}
              >
                <div 
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                    isActive ? 'scale-110' : ''
                  }`}
                  style={{ backgroundColor: isActive ? method.color : method.bgColor }}
                >
                  <IconComponent 
                    className="h-8 w-8 transition-colors duration-300" 
                    style={{ color: isActive ? 'white' : method.color }}
                  />
                </div>

                <h3 className="text-lg font-bold text-black mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{method.subtitle}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="font-semibold text-black">{method.details}</p>
                  <p className="text-xs text-gray-500">{method.subDetails}</p>
                </div>

                <button 
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    isActive ? 'text-white shadow-lg' : 'text-gray-700 bg-gray-50 hover:shadow-md'
                  }`}
                  style={{ 
                    backgroundColor: isActive ? method.color : undefined,
                    color: isActive ? 'white' : undefined
                  }}
                >
                  {method.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Contact Form - Simple & Formal */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Fill out this form and we'll get back to you within 2 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Loan Type and Amount */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Type
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount
                  </label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
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
              {formStatus === 'success' && (
                <div className="flex items-center bg-green-50 border border-green-200 px-4 py-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-green-700">Thank you! We'll contact you within 2 hours.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="flex items-center bg-red-50 border border-red-200 px-4 py-3 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-red-700">Please fill in all required fields.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center text-white"
                style={{ backgroundColor: '#4248f8' }}
              >
                {formStatus === 'loading' ? (
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
              </button>

              {/* Privacy note */}
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>

          {/* Office Location */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-black mb-6">Visit Our Office</h3>
            
            <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-bold text-black text-lg">Pune (Head Office)</h4>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  Head Office
                </span>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Finsure Solutions Pvt Ltd, Plot No. 123, IT Park, Pimpri-Chinchwad, Pune - 411018</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">+91 98765 43210</span>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">pune@finsuresolutions.com</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Mon-Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-bold text-black mb-4">Quick Contact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-blue-50 rounded-xl p-4">
                  <Phone className="h-6 w-6 mx-auto mb-2" style={{ color: '#4248f8' }} />
                  <p className="text-xs text-gray-600 mb-1">Call Directly</p>
                  <p className="font-semibold text-black text-sm">+91 98765 43210</p>
                </div>
                <div className="text-center bg-green-50 rounded-xl p-4">
                  <MessageCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 mb-1">WhatsApp</p>
                  <p className="font-semibold text-black text-sm">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Our financial experts are standing by to help you find the perfect loan solution. 
            Don't wait - your financial goals are just a call away!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center" style={{ backgroundColor: '#4248f8' }}>
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +91 98765 43210
            </button>
            
            <button className="border-2 text-gray-700 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg bg-white" style={{ borderColor: '#4248f8' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4248f8'} onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}>
              <MessageCircle className="h-5 w-5 mr-2" />
              Start WhatsApp Chat
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUsSection;