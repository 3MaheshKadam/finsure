"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Heart,
  ThumbsUp
} from 'lucide-react';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const stats = [
    { number: '4.9/5', label: 'Average Rating', icon: Star },
    { number: '50,000+', label: 'Happy Customers', icon: Users },
    { number: '99.2%', label: 'Satisfaction Rate', icon: Award },
    { number: '₹500Cr+', label: 'Loans Disbursed', icon: TrendingUp }
  ];

  const reviews = [
    { rating: 5, percentage: 85, count: 42500 },
    { rating: 4, percentage: 12, count: 6000 },
    { rating: 3, percentage: 2, count: 1000 },
    { rating: 2, percentage: 1, count: 500 },
    { rating: 1, percentage: 0, count: 0 }
  ];

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <div>
      {/* Section Header Skeleton */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-gray-200 h-8 w-48 rounded-full mb-4"></div>
        <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
        {/* Overall Rating Skeleton */}
        <div className="inline-flex items-center bg-white border border-gray-200 px-6 py-4 rounded-2xl shadow-lg">
          <div className="flex items-center mr-6">
            <div className="h-10 w-12 bg-gray-200 rounded mr-2"></div>
            <div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 w-4 bg-gray-200 rounded"></div>
                ))}
              </div>
              <div className="h-4 bg-gray-200 rounded w-24 mt-2"></div>
            </div>
          </div>
          <div className="h-12 w-px bg-gray-300 mx-6"></div>
          <div className="flex items-center space-x-1">
            <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[...Array(4)].map((_, idx) => (
          <motion.div
            key={idx}
            className="text-center bg-gray-50 rounded-xl p-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </motion.div>
        ))}
      </div>

      {/* Featured Testimonial Skeleton */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-16 relative overflow-hidden">
        <div className="absolute top-6 left-6">
          <div className="h-12 w-12 bg-gray-200 rounded"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            className="space-y-3 mb-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded w-5/6 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
          </motion.div>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div className="text-left space-y-2">
              <div className="h-5 bg-gray-200 rounded w-32"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="flex items-center space-x-2">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-3 w-3 bg-gray-200 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Carousel Skeleton */}
      <div className="relative mb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="flex space-x-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex">
            <div className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-3 gap-8">
                {[...Array(3)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="h-4 w-4 bg-gray-200 rounded"></div>
                        ))}
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-gray-200 rounded-full mr-3"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-24"></div>
                          <div className="h-3 bg-gray-200 rounded w-20"></div>
                        </div>
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-4 w-4 bg-gray-200 rounded-full mr-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                      </div>
                      <div className="h-3 bg-gray-200 rounded w-20"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-2 w-6 bg-gray-200 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonLoader />
        </div>
      </section>
    );
  }

  if (error || testimonials.length === 0) {
    return (
      <section className="min-h-[400px] flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-red-500 text-lg">Error: {error || 'No testimonials available'}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ color: '#4248f8' }}>
            <Heart className="h-4 w-4 mr-2 text-red-500" />
            Customer Love Stories
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            What Our Customers
            <span className="block" style={{ color: '#4248f8' }}>Say About Us</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what thousands of satisfied customers 
            have to say about their experience with Finsure Solutions.
          </p>

          {/* Overall Rating Display */}
          <div className="inline-flex items-center bg-white border border-gray-200 px-6 py-4 rounded-2xl shadow-lg">
            <div className="flex items-center mr-6">
              <div className="text-4xl font-bold mr-2" style={{ color: '#4248f8' }}>4.9</div>
              <div>
                <div className="flex">{renderStars(5)}</div>
                <div className="text-sm text-gray-600">Based on {testimonials.length}+ reviews</div>
              </div>
            </div>
            <div className="h-12 w-px bg-gray-300 mx-6"></div>
            <div className="flex items-center space-x-1">
              <Award className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Excellent Rating</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index}
                className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 w-6" style={{ color: '#4248f8' }} />
                </div>
                <div className="text-2xl font-bold text-black mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-6 left-6">
            <Quote className="h-12 w-12 text-blue-200" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.blockquote 
              className="text-2xl lg:text-3xl font-medium text-gray-800 mb-8 leading-relaxed"
              key={testimonials[currentTestimonial].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              "{testimonials[currentTestimonial].review}"
            </motion.blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-4xl">{testimonials[currentTestimonial].image}</div>
              <div className="text-left">
                <div className="flex items-center">
                  <h4 className="text-lg font-bold text-black mr-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  {testimonials[currentTestimonial].verified && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                <div className="flex items-center mt-1">
                  <span className="text-sm font-medium" style={{ color: '#4248f8' }}>
                    {testimonials[currentTestimonial].loanType}
                  </span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-sm text-gray-600">
                    {testimonials[currentTestimonial].amount}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'w-8' 
                      : 'hover:bg-blue-300'
                  }`}
                  style={{ 
                    backgroundColor: currentTestimonial === index ? '#4248f8' : '#cbd5e1' 
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-black">Customer Reviews</h3>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                style={{ color: '#4248f8' }}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                style={{ color: '#4248f8' }}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence>
              <motion.div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                key={currentSlide}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-3 gap-8">
                      {testimonials.slice(slideIndex * 3, (slideIndex + 1) * 3).map((testimonial) => (
                        <motion.div
                          key={testimonial.id}
                          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: testimonials.slice(slideIndex * 3, (slideIndex + 1) * 3).indexOf(testimonial) * 0.1 }}
                        >
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex">{renderStars(testimonial.rating)}</div>
                            <div className="text-sm text-gray-500">{testimonial.date}</div>
                          </div>

                          {/* Review Text */}
                          <p className="text-gray-700 mb-6 leading-relaxed line-clamp-4">
                            "{testimonial.review}"
                          </p>

                          {/* Customer Info */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-2xl mr-3">{testimonial.image}</div>
                              <div>
                                <div className="flex items-center">
                                  <h4 className="font-bold text-black text-sm mr-2">
                                    {testimonial.name}
                                  </h4>
                                  {testimonial.verified && (
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  )}
                                </div>
                                <p className="text-gray-600 text-xs">{testimonial.location}</p>
                              </div>
                            </div>
                            
                            {/* Loan Type Badge */}
                            <div className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50" style={{ color: '#4248f8' }}>
                              {testimonial.loanType}
                            </div>
                          </div>

                          {/* Helpful Button */}
                          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors text-sm">
                              <ThumbsUp className="h-4 w-4 mr-2" />
                              Helpful
                            </button>
                            <span className="text-xs text-gray-500">Verified Purchase</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-6' : ''
                }`}
                style={{ 
                  backgroundColor: currentSlide === index ? '#4248f8' : '#cbd5e1' 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;