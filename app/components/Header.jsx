'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  DollarSign,
  CreditCard,
  Building2,
  Coins
} from 'lucide-react';
import Image from 'next/image';
import Logo from "../assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  // Map string icon names to Lucide React icons
  const iconMap = {
    User,
    Building,
    Home,
    Car,
    GraduationCap,
    DollarSign,
    CreditCard,
    Building2,
    Coins
  };

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setServices(data);
        setLoadingServices(false);
      } catch (err) {
        setError(err.message);
        setLoadingServices(false);
      }
    };
    fetchServices();
  }, []);

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

  // Handle navigation
  const handleNavigation = (item) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setActiveSection(item.href.substring(2) || 'home');
    
    if (item.type === 'page' || item.type === 'service') {
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
    
    const mailtoLink = `mailto:finsuresolutions1@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <div className="space-y-2 px-4 py-2">
      {[...Array(4)].map((_, idx) => (
        <motion.div
          key={idx}
          className="flex items-center py-3 px-4 bg-gray-100 rounded-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-5 h-5 bg-gray-300 rounded-full mr-3"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </motion.div>
      ))}
    </div>
  );

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
              {/* Logo Image */}
              <div className="relative w-48 h-12"> {/* Adjust width and height as needed */}
                <Image
                  src={Logo} 
                  alt="Finsure Solutions"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 120px, 192px"
                />
                
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
                  <AnimatePresence>
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
                        {loadingServices ? (
                          <SkeletonLoader />
                        ) : error ? (
                          <div className="px-4 py-2 text-sm text-red-600">Error: {error}</div>
                        ) : (
                          services.map((service, idx) => {
                            const ServiceIcon = iconMap[service.icon] || User; // Fallback to User icon
                            return (
                              <Link
                                key={idx}
                                href={`/services/${service.id}`}
                                onClick={() => handleNavigation({ name: service.title, href: `/services/${service.id}`, type: 'service' })}
                                className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors duration-200 group"
                              >
                                <ServiceIcon className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
                                <span className="text-sm text-gray-700 group-hover:font-medium ml-3">{service.title}</span>
                              </Link>
                            );
                          })
                        )}
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
                  </AnimatePresence>
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
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 8208864853</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">finsuresolutions1@gmail.com</span>
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
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 space-y-2 mt-2"
                      >
                        {loadingServices ? (
                          <SkeletonLoader />
                        ) : error ? (
                          <div className="px-4 py-2 text-sm text-red-600">Error: {error}</div>
                        ) : (
                          services.slice(0, 4).map((service, idx) => {
                            const ServiceIcon = iconMap[service.icon] || User; // Fallback to User icon
                            return (
                              <Link
                                key={idx}
                                href={`/services/${service.id}`}
                                onClick={() => handleNavigation({ name: service.title, href: `/services/${service.id}`, type: 'service' })}
                                className="flex items-center py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors rounded-lg"
                              >
                                <ServiceIcon className="h-5 w-5" />
                                <span className="ml-2">{service.title}</span>
                              </Link>
                            );
                          })
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 8208864853</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">finsuresolutions1@gmail.com</span>
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