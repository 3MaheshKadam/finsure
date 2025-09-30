"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowLeft, CheckCircle, Mail, Phone, MapPin, FileText, Clock } from 'lucide-react';

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

const GrievanceRedressalPage = () => {
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
            <AlertCircle className="h-12 w-12 text-white mr-4" />
            <h1 className="text-4xl font-bold text-white">Grievance Redressal Policy</h1>
          </div>
          <p className="text-gray-100 text-lg max-w-3xl">
            We value your feedback and are committed to resolving your concerns promptly
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
          <Section title="Our Commitment">
            <p>
              At [Company Name], customer satisfaction is our priority. We have established a comprehensive grievance redressal mechanism to address your concerns efficiently and fairly. This policy is designed in compliance with RBI guidelines on customer service.
            </p>
          </Section>

          <Section title="What Constitutes a Grievance?">
            <p>A grievance can relate to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delay in loan processing or disbursement</li>
              <li>Issues with loan terms or conditions</li>
              <li>Incorrect charges or EMI deductions</li>
              <li>Problems with customer service</li>
              <li>Unfair collection practices</li>
              <li>Privacy or data security concerns</li>
              <li>Billing or documentation errors</li>
              <li>Any other service-related issues</li>
            </ul>
          </Section>

          <Section title="How to Register a Complaint">
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  Email
                </h3>
                <p className="text-sm text-gray-700">finsuresolutions1@gmail.com</p>
                <p className="text-xs text-gray-600 mt-1">Response within 48 hours</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  Phone
                </h3>
                <p className="text-sm text-gray-700">+91 8208864853</p>
                <p className="text-xs text-gray-600 mt-1">Available Mon-Sat, 9 AM - 7 PM</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Written Complaint
                </h3>
                <p className="text-sm text-gray-700">
                  Grievance Redressal Officer<br />
                  Finsure Soultions<br />
                  Office no 502 Laxmi vinayak complex opp to greenfeild hotel Sinhgad road dhayri Pune 411041
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  Online Portal
                </h3>
                <p className="text-sm text-gray-700">www.finsuresolution.com</p>
                <p className="text-xs text-gray-600 mt-1">24/7 complaint registration</p>
              </div>
            </div>
          </Section>

          <Section title="Information Required for Complaint">
            <ul className="list-disc pl-6 space-y-2">
              <li>Your full name and contact details</li>
              <li>Loan account number or application reference number</li>
              <li>Nature of complaint with detailed description</li>
              <li>Supporting documents (if any)</li>
              <li>Previous communication reference (if applicable)</li>
              <li>Preferred mode of communication for resolution</li>
            </ul>
          </Section>

          <Section title="Complaint Resolution Process">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Registration</h4>
                  <p className="text-sm text-gray-700">Your complaint is registered and you receive an acknowledgment with ticket number within 2 working days.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Investigation</h4>
                  <p className="text-sm text-gray-700">Our team investigates the complaint thoroughly and may contact you for additional information.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Resolution</h4>
                  <p className="text-sm text-gray-700">We aim to resolve your complaint within 30 days. You will be informed of the resolution via your preferred communication channel.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Closure</h4>
                  <p className="text-sm text-gray-700">Once resolved, the complaint is closed. You can provide feedback on the resolution process.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Escalation Matrix">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Level</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Designation</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Contact</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Level 1</td>
                    <td className="border border-gray-300 px-4 py-2">Customer Service Executive</td>
                    <td className="border border-gray-300 px-4 py-2">support@yourcompany.com</td>
                    <td className="border border-gray-300 px-4 py-2">0-7 days</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Level 2</td>
                    <td className="border border-gray-300 px-4 py-2">Grievance Redressal Officer</td>
                    <td className="border border-gray-300 px-4 py-2">grievance@yourcompany.com</td>
                    <td className="border border-gray-300 px-4 py-2">7-21 days</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Level 3</td>
                    <td className="border border-gray-300 px-4 py-2">Principal Nodal Officer</td>
                    <td className="border border-gray-300 px-4 py-2">nodal@yourcompany.com</td>
                    <td className="border border-gray-300 px-4 py-2">21-30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Principal Nodal Officer Details">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-bold text-gray-900 mb-2">Mr./Ms. [Name]</p>
              <p className="text-sm text-gray-700">Principal Nodal Officer</p>
              <p className="text-sm text-gray-700">Email: nodal@yourcompany.com</p>
              <p className="text-sm text-gray-700">Phone: +91-XXX-XXXXXXX</p>
              <p className="text-sm text-gray-700">Address: [Complete Address]</p>
            </div>
          </Section>

          <Section title="If Your Complaint Remains Unresolved">
            <p>
              If you are not satisfied with the resolution or if your complaint is not resolved within 30 days, you may approach:
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-gray-900 mb-2">RBI Ombudsman</h4>
              <p className="text-sm text-gray-700 mb-2">
                The Reserve Bank of India has an Ombudsman Scheme for redressal of complaints against NBFCs.
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Website:</strong> https://cms.rbi.org.in
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Email:</strong> complaints@rbi.org.in
              </p>
              <p className="text-sm text-gray-700">
                <strong>Toll Free:</strong> 14448
              </p>
            </div>
          </Section>

          <Section title="Our Commitment to You">
            <ul className="list-disc pl-6 space-y-2">
              <li>Fair and unbiased investigation of all complaints</li>
              <li>Transparent communication throughout the process</li>
              <li>Timely resolution within specified timelines</li>
              <li>No retaliation or adverse action for filing complaints</li>
              <li>Continuous improvement based on feedback</li>
              <li>Regular training of staff on grievance handling</li>
            </ul>
          </Section>

          <Section title="Complaint Tracking">
            <p>
              You can track the status of your complaint using your ticket number:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Online: www.yourcompany.com/track-complaint</li>
              <li>SMS: Send TRACK [Ticket Number] to XXXXX</li>
              <li>Call our helpline with your ticket number</li>
            </ul>
          </Section>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-700 font-semibold mb-2">
                  Quick Response Guarantee
                </p>
                <p className="text-sm text-gray-700">
                  We are committed to acknowledging your complaint within 2 working days and resolving it within 30 days. Your satisfaction is our priority.
                </p>
              </div>
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

export default GrievanceRedressalPage;