'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { 
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  User,
  Building,
  Home,
  Car,
  GraduationCap,
  DollarSign
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navigationItems = [
    { name: 'Home', href: '/', type: 'page' },
    { name: 'Services', href: '/#services', type: 'section' },
    { name: 'About Us', href: '/about', type: 'page' },
    { name: 'Contact', href: '/contact', type: 'page' }
  ];

  // Services for dropdown
  const serviceTypes = [
    { name: 'Personal Loans', href: '/#personal-loans', icon: <User className="h-5 w-5" /> },
    { name: 'Business Loans', href: '/#business-loans', icon: <Building className="h-5 w-5" /> },
    { name: 'Home Loans', href: '/#home-loans', icon: <Home className="h-5 w-5" /> },
    { name: 'Auto Loans', href: '/#auto-loans', icon: <Car className="h-5 w-5" /> },
    { name: 'Education Loans', href: '/#education-loans', icon: <GraduationCap className="h-5 w-5" /> },
    { name: 'Gold Loans', href: '/#gold-loans', icon: <DollarSign className="h-5 w-5" /> }
  ];

  // Handle navigation
  const handleNavigation = (item) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setActiveSection(item.href.substring(2) || 'home');
    
    if (item.type === 'page') {
      router.push(item.href);
    } else if (item.type === 'section') {
      if (pathname === '/') {
        const sectionId = item.href.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      } else {
        router.push(item.href);
      }
    }
  };

  // Handle Get Started button click
  const handleGetStarted = () => {
    const subject = encodeURIComponent('Finsure Solutions Inquiry - Get Started');
    const body = encodeURIComponent(`Hello Finsure Solutions Team,

I am interested in your financial services and would like to get started. Please provide me with more information about your offerings and how to proceed.

Best regards`);
    
    const mailtoLink = `mailto:info@finsuresolutions.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => handleNavigation({ name: 'Home', href: '/', type: 'page' })}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-gray-900">Finsure</span>
                  <span className="text-lg text-gray-600 ml-1">Solutions</span>
                </div>
                <span className="text-xs text-gray-500 -mt-1">Your Financial Partner</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              item.name === 'Services' ? (
                <div className="relative" key={index}>
                  <motion.button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setTimeout(() => setIsServicesOpen(false), 200)}
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      (pathname === '/' && item.type === 'section' && activeSection === item.href.substring(2))
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </motion.button>
                  {isServicesOpen && (
                    <motion.div 
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="px-4 pb-2">
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">Loan Services</h3>
                      </div>
                      {serviceTypes.map((service, idx) => (
                        <Link
                          key={idx}
                          href={service.href}
                          onClick={() => handleNavigation({ ...service, type: 'section' })}
                          className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors duration-200 group"
                        >
                          {service.icon}
                          <span className="text-sm text-gray-700 group-hover:font-medium ml-3">{service.name}</span>
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                        <Link
                          href="/#all-services"
                          onClick={() => handleNavigation({ href: '/#all-services', type: 'section' })}
                          className="text-sm font-medium flex items-center text-blue-600"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.button
                  key={index}
                  onClick={() => handleNavigation(item)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    (pathname === '/' && item.name === 'Home') || 
                    (pathname === item.href) ||
                    (pathname === '/' && item.type === 'section' && activeSection === item.href.substring(2))
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              )
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm font-medium">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm font-medium">info@finsuresolutions.com</span>
            </div>
            <motion.button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <div className="py-4 space-y-2">
            {navigationItems.map((item, index) => (
              item.name === 'Services' ? (
                <div key={index} className="px-4 py-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      (pathname === '/' && item.type === 'section' && activeSection === item.href.substring(2))
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 ml-1 inline transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      {serviceTypes.slice(0, 4).map((service, idx) => (
                        <Link
                          key={idx}
                          href={service.href}
                          onClick={() => handleNavigation({ ...service, type: 'section' })}
                          className="flex items-center py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors rounded-lg"
                        >
                          {service.icon}
                          <span className="ml-2">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={index}
                  onClick={() => handleNavigation(item)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    (pathname === '/' && item.name === 'Home') || 
                    (pathname === item.href) ||
                    (pathname === '/' && item.type === 'section' && activeSection === item.href.substring(2))
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              )
            ))}
            {/* Mobile Contact Info */}
            <div className="px-4 py-3 border-t border-gray-200 mt-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm">info@finsuresolutions.com</span>
                </div>
              </div>
              {/* Mobile CTA */}
              <motion.button 
                onClick={handleGetStarted}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;