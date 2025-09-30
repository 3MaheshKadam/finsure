"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch company details
  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch('/api/company');
        if (!response.ok) {
          throw new Error('Failed to fetch company details');
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

  // Newsletter subscription API call
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
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

  // Map icon names to Lucide icons
  const iconMap = {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    CreditCard,
    Home,
    Car,
    Building2,
    GraduationCap,
    Coins,
  };

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <div>
      {/* Newsletter Section Skeleton */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-6"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="flex justify-center max-w-lg mx-auto">
              <motion.div
                className="h-12 bg-gray-300 rounded-l-xl w-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="h-12 bg-gray-400 rounded-r-xl w-32"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content Skeleton */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info Skeleton */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  className="w-12 h-12 bg-gray-300 rounded-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="space-y-2">
                  <motion.div
                    className="h-6 bg-gray-300 rounded w-32"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="h-4 bg-gray-300 rounded w-24"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>
              <motion.div
                className="space-y-2 mb-6"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </motion.div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[...Array(3)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center p-3 bg-gray-800 rounded-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="h-8 w-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-3/4 mx-auto"></div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="space-y-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="h-5 bg-gray-300 rounded w-24 mb-4"></div>
                <div className="flex space-x-3">
                  {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="h-10 w-10 bg-gray-300 rounded-lg"></div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Loan Services Skeleton */}
            <div>
              <motion.div
                className="h-6 bg-gray-300 rounded w-32 mb-6"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="space-y-3">
                {[...Array(6)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="h-4 w-4 bg-gray-300 rounded-full mr-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-8 p-4 bg-gray-800 rounded-lg space-y-3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-24"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-32"></div>
              </motion.div>
            </div>

            {/* Quick Links Skeleton */}
            <div>
              <motion.div
                className="h-6 bg-gray-300 rounded w-32 mb-6"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="space-y-3">
                {[...Array(6)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="h-4 bg-gray-300 rounded w-3/4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </div>
              <motion.div
                className="mt-8 p-4 bg-gray-800 rounded-lg space-y-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="h-5 bg-gray-300 rounded w-24 mb-3"></div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, idx) => (
                    <div key={idx} className="flex justify-between">
                      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact & Legal Skeleton */}
            <div>
              <motion.div
                className="h-6 bg-gray-300 rounded w-32 mb-6"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="space-y-4 mb-8">
                {[...Array(4)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="h-5 w-5 bg-gray-300 rounded-full mr-3"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-300 rounded w-24"></div>
                      <div className="h-3 bg-gray-300 rounded w-32"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="space-y-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="h-5 bg-gray-300 rounded w-24 mb-4"></div>
                {[...Array(6)].map((_, idx) => (
                  <div key={idx} className="h-3 bg-gray-300 rounded w-3/4"></div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Skeleton */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <motion.div
                className="h-4 bg-gray-300 rounded w-48"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="flex items-center space-x-4">
                {[...Array(3)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="h-3 bg-gray-300 rounded w-24"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {[...Array(2)].map((_, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center space-x-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-16"></div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="mt-6 pt-6 border-t border-gray-800"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <footer className="bg-gray-900 text-white">
        <SkeletonLoader />
      </footer>
    );
  }

  if (error || !companyData) {
    return (
      <footer className="min-h-[300px] flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <p className="text-red-400 text-lg">Error: {error || 'No company details available'}</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      {/* <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with {companyData.name}</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest offers, financial tips, and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex justify-center max-w-lg mx-auto">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-4 pr-32 rounded-l-xl bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-0 top-0 h-full px-6 bg-blue-700 hover:bg-blue-800 rounded-r-xl text-white font-semibold transition-colors flex items-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      Subscribe <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
            <AnimatePresence>
              {isSubscribed && (
                <motion.div
                  className="mt-4 flex items-center justify-center text-green-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Thank you for subscribing!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white font-bold text-xl">{companyData.logoLetter}</span>
                </motion.div>
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">{companyData.name}</span>
                  </div>
                  <span className="text-xs text-gray-400 -mt-1">{companyData.tagline}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{companyData.description}</p>

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
                  {companyData.socialLinks.map((social, index) => {
                    const SocialIcon = iconMap[social.icon];
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                        title={social.name}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <SocialIcon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

         
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <div className="space-y-3">
                {companyData.quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              {/* Customer Support Hours */}
              <motion.div 
                className="mt-8 p-4 bg-gray-800 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h5 className="text-white font-semibold mb-3 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-400" />
                  Support Hours
                </h5>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>{companyData.supportHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>{companyData.supportHours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>{companyData.supportHours.sunday}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 font-medium">{companyData.supportHours.emergency}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact & Legal */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Information</h4>
              
              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <motion.div 
                  className="flex items-start cursor-pointer group"
                  onClick={() => handleContactClick('address', companyData.address)}
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0 group-hover:text-white" />
                  <div className="text-gray-300 group-hover:text-white transition-colors">
                    <p className="font-medium">Head Office</p>
                    <p className="text-sm">{companyData.address}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center cursor-pointer group"
                  onClick={() => handleContactClick('phone', companyData.phone)}
                  whileHover={{ x: 5 }}
                >
                  <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 group-hover:text-white" />
                  <div className="text-gray-300 group-hover:text-white transition-colors">
                    <p>{companyData.phone}</p>
                    <p className="text-sm text-gray-400">Call for instant support</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center cursor-pointer group"
                  onClick={() => handleContactClick('email', companyData.email)}
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 group-hover:text-white" />
                  <div className="text-gray-300 group-hover:text-white transition-colors">
                    <p>{companyData.email}</p>
                    <p className="text-sm text-gray-400">Email us anytime</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <Globe className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>{companyData.website}</p>
                    <p className="text-sm text-gray-400">Visit our website</p>
                  </div>
                </motion.div>
              </div>

              {/* Legal Links */}
              {/* <div>
                <h5 className="text-white font-semibold mb-4">Legal & Compliance</h5>
                <div className="space-y-2">
                  {companyData.legalLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="block text-gray-400 hover:text-gray-300 text-sm transition-colors hover:translate-x-1 transform duration-200"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div> */}
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
                © {currentYear} {companyData.name}. All rights reserved.
              </p>

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
          <motion.div 
            className="mt-6 pt-6 border-t border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> {companyData.disclaimer}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;