"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowLeft, CheckCircle, Mail, Phone, Shield } from 'lucide-react';

const Section = ({ title, children }) => (
  <motion.div 
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
      <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
      {title}
    </h2>
    <div className="text-gray-700 space-y-4">
      {children}
    </div>
  </motion.div>
);

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Lock className="h-12 w-12 text-white mr-4" />
            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-gray-100 text-lg max-w-3xl">
            Effective Date: September 30, 2025 | Last Updated: September 30, 2025
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.button
          onClick={() => window.history.back()}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </motion.button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <Section title="Introduction">
            <p>
              At [Company Name] ("we," "us," or "our"), we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, website, or mobile application. This policy complies with the Information Technology Act, 2000, and Reserve Bank of India (RBI) guidelines.
            </p>
            <p>
              By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with our policies, please do not use our services.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p><strong>Personal Information:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, date of birth, gender, and contact details (phone, email, address)</li>
              <li>Government-issued identification (PAN, Aadhaar, Voter ID, Passport, Driving License)</li>
              <li>Financial information (bank account details, income details, credit history)</li>
              <li>Employment information (employer name, designation, salary details)</li>
              <li>Biometric data (photograph, fingerprints) for KYC verification</li>
            </ul>
            
            <p className="mt-4"><strong>Technical Information:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, clicks)</li>
              <li>Location data (with your consent)</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>Process loan applications and verify your identity</li>
              <li>Assess creditworthiness and conduct risk analysis</li>
              <li>Communicate about your loan status, payments, and account information</li>
              <li>Comply with KYC, AML, and regulatory requirements</li>
              <li>Prevent fraud and unauthorized transactions</li>
              <li>Improve our services and customer experience</li>
              <li>Send promotional offers (you can opt-out anytime)</li>
              <li>Maintain records as required by law</li>
            </ul>
          </Section>

          <Section title="Information Sharing and Disclosure">
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Credit Bureaus:</strong> CIBIL, Experian, Equifax, CRIF High Mark for credit assessment</li>
              <li><strong>Banks and Financial Institutions:</strong> For loan disbursal and repayment processing</li>
              <li><strong>Service Providers:</strong> Payment gateways, collection agencies, IT service providers</li>
              <li><strong>Regulatory Authorities:</strong> RBI, tax authorities, law enforcement (as required by law)</li>
              <li><strong>Business Partners:</strong> With your consent for co-branded services</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information to third parties. All third-party service providers are bound by confidentiality agreements.
            </p>
          </Section>

          <Section title="Data Security">
            <p>
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>256-bit SSL encryption for data transmission</li>
              <li>Secure data storage with access controls</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection</li>
              <li>Multi-factor authentication for sensitive operations</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Withdraw consent for data processing (subject to legal obligations)</li>
              <li>Opt-out of marketing communications</li>
              <li>Request deletion of data (subject to retention requirements)</li>
              <li>Lodge a complaint with regulatory authorities</li>
            </ul>
          </Section>

          <Section title="Data Retention">
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy and as required by law. Loan-related documents are retained for a minimum of 8 years after loan closure as per RBI guidelines.
            </p>
          </Section>

          <Section title="Cookies Policy">
            <p>
              We use cookies to enhance your experience. You can control cookies through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </Section>

          <Section title="Changes to Privacy Policy">
            <p>
              We may update this policy periodically. Changes will be posted on our website with the updated effective date. Continued use of our services constitutes acceptance of the revised policy.
            </p>
          </Section>

          <Section title="Contact Information">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold mb-2">For privacy-related queries, contact:</p>
              <p><strong>Data Protection Officer</strong></p>
              <p>Email: finsuresolutions1@gmail.com</p>
              <p>Phone: +91 8208864853</p>
              <p>Address: Office no 502 Laxmi vinayak complex opp to greenfeild hotel Sinhgad road dhayri Pune 411041</p>
            </div>
          </Section>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 flex items-start">
            <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-700 font-semibold mb-2">
                Your privacy is our priority. We are committed to protecting your personal information.
              </p>
              <p className="text-xs text-gray-600">
                If you have any concerns about how your data is handled, please contact our Data Protection Officer immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          © 2025 Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;