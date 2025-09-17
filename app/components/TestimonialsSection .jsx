"use client";
import React, { useState, useEffect } from 'react';
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      loanType: 'Home Loan',
      amount: '₹35 Lakhs',
      rating: 5,
      image: '👩‍💼',
      review: 'Finsure Solutions made my dream of owning a home come true! The process was incredibly smooth and the team was very supportive throughout. Got approval within 2 days and the interest rate was the best I found in the market.',
      helpful: true,
      verified: true,
      date: '2 months ago'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi, NCR',
      loanType: 'Business Loan',
      amount: '₹12 Lakhs',
      rating: 5,
      image: '👨‍💼',
      review: 'As a small business owner, I needed quick funding for expansion. Finsure delivered exactly what they promised - fast approval, competitive rates, and excellent customer service. My business has grown 40% since then!',
      helpful: true,
      verified: true,
      date: '3 months ago'
    },
    {
      id: 3,
      name: 'Aisha Patel',
      location: 'Bangalore, Karnataka',
      loanType: 'Personal Loan',
      amount: '₹5 Lakhs',
      rating: 5,
      image: '👩‍🎓',
      review: 'I needed urgent funds for my wedding and Finsure came to the rescue. The entire process was digital, no paperwork hassles, and I received the money in my account the same day. Highly recommended!',
      helpful: true,
      verified: true,
      date: '1 month ago'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Pune, Maharashtra',
      loanType: 'Auto Loan',
      amount: '₹8 Lakhs',
      rating: 4,
      image: '👨‍🔧',
      review: 'Great experience with Finsure for my car loan. The documentation process was simple and the loan officer was very helpful in explaining all the terms clearly. Driving my dream car now!',
      helpful: true,
      verified: true,
      date: '4 months ago'
    },
    {
      id: 5,
      name: 'Meera Reddy',
      location: 'Hyderabad, Telangana',
      loanType: 'Education Loan',
      amount: '₹15 Lakhs',
      rating: 5,
      image: '👩‍🎓',
      review: 'Thanks to Finsure, I could pursue my MBA from a top college. The education loan process was hassle-free and they even helped with the documentation required by the university. Forever grateful!',
      helpful: true,
      verified: true,
      date: '6 months ago'
    },
    {
      id: 6,
      name: 'Amit Gupta',
      location: 'Ahmedabad, Gujarat',
      loanType: 'Gold Loan',
      amount: '₹3 Lakhs',
      rating: 4,
      image: '👨‍💻',
      review: 'Needed quick funds for a medical emergency and Finsure provided instant gold loan against my jewelry. The valuation was fair and the process took just 30 minutes. Very satisfied with the service.',
      helpful: true,
      verified: true,
      date: '2 weeks ago'
    }
  ];

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

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    return () => clearInterval(interval);
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
                <div className="text-sm text-gray-600">Based on 50,000+ reviews</div>
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
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 w-6" style={{ color: '#4248f8' }} />
                </div>
                <div className="text-2xl font-bold text-black mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-6 left-6">
            <Quote className="h-12 w-12 text-blue-200" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].review}"
            </blockquote>
            
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
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.slice(slideIndex * 3, (slideIndex + 1) * 3).map((testimonial) => (
                      <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
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
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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