"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Banks = () => {
  // List limited to available local logos
  const banks = [
    { name: 'Axis Bank', logo: '/Bank/axis-bank.png' },
    { name: 'Bank of India', logo: '/Bank/boi-bank.png' },
    { name: 'Federal Bank', logo: '/Bank/federal-bank.png' },
    { name: 'HDFC Bank', logo: '/Bank/hdfc-bank.png' },
    { name: 'ICICI Bank', logo: '/Bank/icici-bank.png' },
    { name: 'IndusInd Bank', logo: '/Bank/indusind-bank.png' },
    { name: 'Kotak Mahindra Bank', logo: '/Bank/kotak-mahindra-bank.png' },
    { name: 'State Bank of India', logo: '/Bank/sbi-bank.png' },
    { name: 'Union Bank of India', logo: '/Bank/union-bank.png' },
    { name: 'Yes Bank', logo: '/Bank/yes-bank-logo.png' },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedBanks = [...banks, ...banks];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span>💼</span>
            <span>Our Banking Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leading Banks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with top banks across India to bring you the best financial solutions
          </p>
        </motion.div>

        {/* Scrolling Banks Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none md:w-48"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none md:w-48"></div>

          {/* Scrolling Animation */}
          <div className="flex overflow-hidden py-8">
            <motion.div
              className="flex gap-8 pr-8"
              animate={{
                x: [0, - (banks.length * 288)], // Adjusted for larger size: width 272 + gap 16 = 288
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBanks.map((bank, index) => (
                <div
                  key={`${bank.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 w-72 h-40 flex items-center justify-center border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
                    <img
                      src={bank.logo}
                      alt={`${bank.name} logo`}
                      className="max-h-20 max-w-[200px] object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4"
        >
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">60+</div>
            <div className="text-sm text-gray-600">Banking Partners</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">25+</div>
            <div className="text-sm text-gray-600">Maharashtra Banks</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Approval Rate</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center px-4"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span>RBI Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span>Secure Transactions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span>Quick Approvals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span>Best Interest Rates</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banks;