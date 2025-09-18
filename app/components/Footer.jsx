"use client";
import React, { useState } from 'react';
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Shield,
  Award,
  Users,
  CreditCard,
  Home,
  Car,
  GraduationCap,
  Building2,
  Coins,
  Send,
  CheckCircle,
  ExternalLink,
  Globe
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail('');
      setIsSubmitting(false);
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  const handleContactClick = (type, value) => {
    if (type === 'phone') {
      window.open(`tel:${value}`);
    } else if (type === 'email') {
      window.open(`mailto:${value}`);
    } else if (type === 'address') {
      window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`);
    }
  };

  const currentYear = new Date().getFullYear();

  const loanServices = [
    { name: 'Personal Loans', href: '/services/personal', icon: CreditCard },
    { name: 'Home Loans', href: '/services/home', icon: Home },
    { name: 'Auto Loans', href: '/services/auto', icon: Car },
    { name: 'Business Loans', href: '/services/business', icon: Building2 },
    { name: 'Education Loans', href: '/services/education', icon: GraduationCap },
    { name: 'Gold Loans', href: '/services/gold', icon: Coins }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'EMI Calculator', href: '/emi-calculator' },
    { name: 'Apply Online', href: '/apply' },
    { name: 'Track Application', href: '/track' },
    { name: 'Customer Support', href: '/support' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Grievance Redressal', href: '/grievance' },
    { name: 'Fair Practices Code', href: '/fair-practices' },
    { name: 'Regulatory Disclosures', href: '/disclosures' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/finsuresolutions', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/finsuresolutions', icon: Twitter },
    { name: 'Instagram', href: 'https://instagram.com/finsuresolutions', icon: Instagram },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/finsuresolutions', icon: Linkedin },
    { name: 'YouTube', href: 'https://youtube.com/finsuresolutions', icon: Youtube }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
     

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">Finsure</span>
                    <span className="text-lg text-gray-300 ml-1">Solutions</span>
                  </div>
                  <span className="text-xs text-gray-400 -mt-1">Your Financial Partner</span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering your financial dreams with transparent, reliable, and customer-centric loan solutions. 
                Your trusted partner in achieving financial goals.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-800 rounded-lg">
                  <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-400 font-medium">RBI Registered</p>
                </div>
                <div className="text-center p-3 bg-gray-800 rounded-lg">
                  <Award className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-400 font-medium">Award Winner</p>
                </div>
                <div className="text-center p-3 bg-gray-800 rounded-lg">
                  <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-400 font-medium">50K+ Customers</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                        title={social.name}
                      >
                        <SocialIcon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Loan Services */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Loan Services</h4>
              <div className="space-y-3">
                {loanServices.map((service, index) => {
                  const ServiceIcon = service.icon;
                  return (
                    <a
                      key={index}
                      href={service.href}
                      className="flex items-center text-gray-300 hover:text-white transition-colors group"
                    >
                      <ServiceIcon className="h-4 w-4 mr-3 text-blue-400 group-hover:text-white flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </a>
                  );
                })}
              </div>
              
              {/* Special Offer Banner */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-blue-500/30">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-400 text-sm font-semibold">Special Offer</span>
                </div>
                <p className="text-white text-sm mb-2">Get up to 2% off on processing fees</p>
                <a href="/offers" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center">
                  View All Offers <ArrowRight className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              {/* Customer Support Hours */}
              <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                <h5 className="text-white font-semibold mb-3 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-400" />
                  Support Hours
                </h5>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 font-medium">24/7 Emergency Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Legal */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Information</h4>
              
              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div 
                  className="flex items-start cursor-pointer group"
                  onClick={() => handleContactClick('address', 'Kolhapur, Maharashtra, India')}
                >
                  <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0 group-hover:text-white" />
                  <div className="text-gray-300 group-hover:text-white transition-colors">
                    <p className="font-medium">Head Office</p>
                    <p className="text-sm">Kolhapur, Maharashtra, India</p>
                  </div>
                </div>

                <div 
                  className="flex items-center cursor-pointer group"
                  onClick={() => handleContactClick('phone', '+91 98765 43210')}
                >
                  <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 group-hover:text-white" />
                  <div className="text-gray-300 group-hover:text-white transition-colors">
                    <p>+91 98765 43210</p>
                    <p className="text-sm text-gray-400">Call for instant support</p>
                  </div>
                </div>

                <div 
                  className="flex items-center cursor-pointer group"
                  onClick={() => handleContactClick('email', 'info@finsuresolutions.com')}
                >
                  <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 group-hover:text-white" />
                  <div className="text-gray-300 group-hover:text-white transition-colors">
                    <p>info@finsuresolutions.com</p>
                    <p className="text-sm text-gray-400">Email us anytime</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>www.finsuresolutions.com</p>
                    <p className="text-sm text-gray-400">Visit our website</p>
                  </div>
                </div>
              </div>

              {/* Legal Links */}
              <div>
                <h5 className="text-white font-semibold mb-4">Legal & Compliance</h5>
                <div className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-gray-400 hover:text-gray-300 text-sm transition-colors hover:translate-x-1 transform duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Finsure Solutions. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span>RBI Registered NBFC</span>
                <span>•</span>
                <span>CIN: U65999MH2020PTC123456</span>
                <span>•</span>
                <span>GST: 27AABCU9603R1ZX</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-xs text-gray-400">Secure & Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-blue-400" />
                <span className="text-xs text-gray-400">ISO Certified</span>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> Finsure Solutions is a registered NBFC with RBI. All loan approvals are subject to our credit policy and verification process. 
              Interest rates and processing fees are subject to change without prior notice. Please read all terms and conditions carefully before applying. 
              We do not charge any upfront fees for loan processing. Beware of fraudulent calls asking for advance payments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;