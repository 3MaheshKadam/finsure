"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '../components/admin/AdminLayout';
import AdminLogin from './components/AdminLogin';
import AdminTable from './components/AdminTable';
import AdminForm from './components/AdminForm';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('company');
  const [companyData, setCompanyData] = useState(null);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [isNewItem, setIsNewItem] = useState(false); // Track if adding new item

  // Check authentication status
  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch data based on active section
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (activeSection === 'company') {
          const response = await fetch('/api/company');
          if (!response.ok) throw new Error('Failed to fetch company data');
          const data = await response.json();
          console.log('Company API Response:', data); // Debug API response
          const company = Array.isArray(data) ? data[0] : data.data || data;
          setCompanyData(company || {});
        } else if (activeSection === 'services') {
          const response = await fetch('/api/services');
          if (!response.ok) throw new Error('Failed to fetch services');
          const data = await response.json();
          console.log('Services API Response:', data); // Debug API response
          const servicesData = Array.isArray(data) ? data : data.data || data.services || [];
          setServices(servicesData);
        } else if (activeSection === 'testimonials') {
          const response = await fetch('/api/testimonials');
          if (!response.ok) throw new Error('Failed to fetch testimonials');
          const data = await response.json();
          console.log('Testimonials API Response:', data); // Debug API response
          const testimonialsData = Array.isArray(data) ? data : data.data || data.testimonials || [];
          setTestimonials(testimonialsData);
        }
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Fetch Error:', err);
      } finally {
        setLoading(false);
      }
    };
    if (isAuthenticated) {
      fetchData();
    }
  }, [activeSection, isAuthenticated]);

  // Debug state updates
  useEffect(() => {
    console.log('State - companyData:', companyData);
    console.log('State - services:', services);
    console.log('State - testimonials:', testimonials);
    console.log('Current Config Data:', sectionConfigs[activeSection]?.data);
  }, [companyData, services, testimonials, activeSection]);

  // Debug modal state
  useEffect(() => {
    console.log('editingItem State:', editingItem, 'isNewItem:', isNewItem);
  }, [editingItem, isNewItem]);

  const handleLogin = () => {
    console.log('Login Triggered'); // Debug login
    setIsAuthenticated(true);
    localStorage.setItem('adminAuthenticated', 'true');
  };

  const handleLogout = () => {
    console.log('Logout Triggered'); // Debug logout
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
  };

  const handleAdd = () => {
    console.log('handleAdd Triggered'); // Debug add action
    setEditingItem({});
    setIsNewItem(true); // Mark as new item
  };

  const handleEdit = (item) => {
    console.log('Editing Item:', item); // Debug edit action
    setEditingItem(item);
    setIsNewItem(false); // Mark as existing item
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      const endpoint = activeSection === 'company' ? '/api/company/delete' : `/api/${activeSection}/${id}`;
      console.log('Deleting Item ID:', id, 'Endpoint:', endpoint); // Debug delete action
      const response = await fetch(endpoint, { method: 'DELETE' });
      if (!response.ok) throw new Error(`Failed to delete ${activeSection} item`);
      if (activeSection === 'company') {
        setCompanyData(null);
      } else if (activeSection === 'services') {
        setServices(services.filter((item) => item.id !== id));
      } else if (activeSection === 'testimonials') {
        setTestimonials(testimonials.filter((item) => item.id !== id));
      }
    } catch (err) {
      setError(err.message);
      console.error('Delete Error:', err);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      // Clean up formData to remove empty array items and id for new items
      const cleanedFormData = { ...formData };
      if (activeSection === 'services') {
        ['features', 'eligibility', 'documents', 'benefits', 'useCases'].forEach((field) => {
          cleanedFormData[field] = formData[field]?.filter((item) => item !== '') || [];
        });
      }
      // Remove id for new items to ensure POST is used
      if (isNewItem && activeSection !== 'company') {
        delete cleanedFormData.id;
      }
      const endpoint = isNewItem || activeSection === 'company'
        ? `/api/${activeSection}`
        : `/api/${activeSection}/${formData.id}`;
      const method = isNewItem || activeSection === 'company' ? 'POST' : 'PUT';
      console.log('Submitting Form Data:', cleanedFormData, 'Method:', method, 'Endpoint:', endpoint); // Debug form submission
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanedFormData),
      });
      if (!response.ok) throw new Error(`Failed to save ${activeSection} data`);
      const updatedData = await response.json();
      console.log('API Response after Submit:', updatedData); // Debug API response
      if (activeSection === 'company') {
        setCompanyData(updatedData);
      } else if (activeSection === 'services') {
        setServices(formData.id && !isNewItem
          ? services.map((item) => (item.id === formData.id ? updatedData : item))
          : [...services, updatedData]);
      } else if (activeSection === 'testimonials') {
        setTestimonials(formData.id && !isNewItem
          ? testimonials.map((item) => (item.id === formData.id ? updatedData : item))
          : [...testimonials, updatedData]);
      }
      setEditingItem(null);
      setIsNewItem(false);
    } catch (err) {
      setError(err.message);
      console.error('Submit Error:', err);
    }
  };

  const sectionConfigs = {
    company: {
      title: 'Company Details',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'tagline', label: 'Tagline' },
        { key: 'description', label: 'Description' }
      ],
      fields: {
        title: 'Company',
        inputs: [
          { name: 'name', label: 'Name', placeholder: 'Enter company name', required: true },
          { name: 'tagline', label: 'Tagline', placeholder: 'Enter tagline', required: true },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Enter description', required: true },
          { name: 'logoLetter', label: 'Logo Letter', placeholder: 'Enter logo letter (e.g., F)', required: true },
          { name: 'address', label: 'Address', placeholder: 'Enter address', required: true },
          { name: 'phone', label: 'Phone', placeholder: 'Enter phone number', required: true },
          { name: 'email', label: 'Email', placeholder: 'Enter email', required: true },
          { name: 'website', label: 'Website', placeholder: 'Enter website URL', required: true },
          { name: 'cin', label: 'CIN', placeholder: 'Enter CIN', required: true },
          { name: 'gst', label: 'GST', placeholder: 'Enter GST number', required: true },
          { name: 'disclaimer', label: 'Disclaimer', type: 'textarea', placeholder: 'Enter disclaimer', required: true },
          {
            name: 'supportHours',
            label: 'Support Hours',
            type: 'object',
            subFields: [
              { name: 'weekdays', label: 'Weekdays', placeholder: 'e.g., 9:00 AM - 7:00 PM', required: true },
              { name: 'saturday', label: 'Saturday', placeholder: 'e.g., 9:00 AM - 5:00 PM', required: true },
              { name: 'sunday', label: 'Sunday', placeholder: 'e.g., 10:00 AM - 4:00 PM', required: true },
              { name: 'emergency', label: 'Emergency', placeholder: 'e.g., 24/7 Emergency Support', required: true },
            ]
          },
          {
            name: 'socialLinks',
            label: 'Social Links',
            type: 'array',
            subFields: [
              { name: 'name', label: 'Name', placeholder: 'e.g., Facebook', required: true },
              { name: 'href', label: 'URL', placeholder: 'e.g., https://facebook.com/finsuresolutions', required: true },
              { name: 'icon', label: 'Icon', placeholder: 'e.g., Facebook', required: true },
            ]
          },
          {
            name: 'quickLinks',
            label: 'Quick Links',
            type: 'array',
            subFields: [
              { name: 'name', label: 'Name', placeholder: 'e.g., About Us', required: true },
              { name: 'href', label: 'URL', placeholder: 'e.g., /about', required: true },
            ]
          },
          {
            name: 'legalLinks',
            label: 'Legal Links',
            type: 'array',
            subFields: [
              { name: 'name', label: 'Name', placeholder: 'e.g., Privacy Policy', required: true },
              { name: 'href', label: 'URL', placeholder: 'e.g., /privacy-policy', required: true },
            ]
          },
          {
            name: 'companyStats',
            label: 'Company Stats',
            type: 'array',
            subFields: [
              { name: 'number', label: 'Number', placeholder: 'e.g., 8+', required: true },
              { name: 'label', label: 'Label', placeholder: 'e.g., Years of Excellence', required: true },
              { name: 'icon', label: 'Icon', placeholder: 'e.g., Calendar', required: true },
              { name: 'color', label: 'Color', placeholder: 'e.g., #4248f8', required: true },
            ]
          },
          {
            name: 'teamMembers',
            label: 'Team Members',
            type: 'array',
            subFields: [
              { name: 'name', label: 'Name', placeholder: 'e.g., Rajesh Mehta', required: true },
              { name: 'position', label: 'Position', placeholder: 'e.g., Founder & CEO', required: true },
              { name: 'experience', label: 'Experience', placeholder: 'e.g., 15+ years', required: true },
              { name: 'image', label: 'Image', placeholder: 'e.g., 👨‍💼 or URL', required: true },
              { name: 'description', label: 'Description', type: 'textarea', placeholder: 'e.g., Former VP at HDFC Bank...', required: true },
              { name: 'linkedin', label: 'LinkedIn', placeholder: 'e.g., #', required: true },
              { name: 'specialization', label: 'Specialization', placeholder: 'e.g., Strategic Leadership', required: true },
            ]
          },
          {
            name: 'milestones',
            label: 'Milestones',
            type: 'array',
            subFields: [
              { name: 'year', label: 'Year', placeholder: 'e.g., 2016', required: true },
              { name: 'event', label: 'Event', placeholder: 'e.g., Company Founded', required: true },
              { name: 'description', label: 'Description', type: 'textarea', placeholder: 'e.g., Started with a vision...', required: true },
            ]
          },
          {
            name: 'achievements',
            label: 'Achievements',
            type: 'array',
            subFields: [
              { name: 'title', label: 'Title', placeholder: 'e.g., Best Fintech Startup 2023', required: true },
              { name: 'issuer', label: 'Issuer', placeholder: 'e.g., Banking Technology Awards', required: true },
              { name: 'icon', label: 'Icon', placeholder: 'e.g., Award', required: true },
              { name: 'color', label: 'Color', placeholder: 'e.g., #4248f8', required: true },
            ]
          },
          {
            name: 'values',
            label: 'Values',
            type: 'array',
            subFields: [
              { name: 'icon', label: 'Icon', placeholder: 'e.g., Heart', required: true },
              { name: 'title', label: 'Title', placeholder: 'e.g., Customer First', required: true },
              { name: 'description', label: 'Description', type: 'textarea', placeholder: 'e.g., Every decision we make...', required: true },
            ]
          },
          {
            name: 'missionVision',
            label: 'Mission & Vision',
            type: 'object',
            subFields: [
              { name: 'mission.title', label: 'Mission Title', placeholder: 'e.g., Our Mission', required: true },
              { name: 'mission.content', label: 'Mission Content', type: 'textarea', placeholder: 'e.g., To democratize access...', required: true },
              { name: 'mission.icon', label: 'Mission Icon', placeholder: 'e.g., Target', required: true },
              { name: 'vision.title', label: 'Vision Title', placeholder: 'e.g., Our Vision', required: true },
              { name: 'vision.content', label: 'Vision Content', type: 'textarea', placeholder: 'e.g., To become India\'s...', required: true },
              { name: 'vision.icon', label: 'Vision Icon', placeholder: 'e.g., Eye', required: true },
            ]
          },
          {
            name: 'contactMethods',
            label: 'Contact Methods',
            type: 'array',
            subFields: [
              { name: 'icon', label: 'Icon', placeholder: 'e.g., Phone', required: true },
              { name: 'title', label: 'Title', placeholder: 'e.g., Call Us', required: true },
              { name: 'subtitle', label: 'Subtitle', placeholder: 'e.g., Speak with our experts', required: true },
              { name: 'details', label: 'Details', placeholder: 'e.g., +91 98765 43210', required: true },
              { name: 'subDetails', label: 'Sub Details', placeholder: 'e.g., Mon-Sat: 9:00 AM - 6:00 PM', required: true },
              { name: 'action', label: 'Action', placeholder: 'e.g., Call Now', required: true },
              { name: 'color', label: 'Color', placeholder: 'e.g., #4248f8', required: true },
              { name: 'bgColor', label: 'Background Color', placeholder: 'e.g., #eff6ff', required: true },
            ]
          },
          {
            name: 'officeLocations',
            label: 'Office Locations',
            type: 'array',
            subFields: [
              { name: 'city', label: 'City', placeholder: 'e.g., Pune (Head Office)', required: true },
              { name: 'address', label: 'Address', type: 'textarea', placeholder: 'e.g., Finsure Solutions Pvt Ltd...', required: true },
              { name: 'phone', label: 'Phone', placeholder: 'e.g., +91 98765 43210', required: true },
              { name: 'email', label: 'Email', placeholder: 'e.g., pune@finsuresolutions.com', required: true },
              { name: 'timing', label: 'Timing', placeholder: 'e.g., Mon-Sat: 9:00 AM - 6:00 PM', required: true },
              { name: 'isHeadOffice', label: 'Is Head Office', type: 'checkbox', placeholder: 'Check if head office' },
            ]
          },
          {
            name: 'supportFeatures',
            label: 'Support Features',
            type: 'array',
            subFields: [
              { name: 'icon', label: 'Icon', placeholder: 'e.g., Headphones', required: true },
              { name: 'title', label: 'Title', placeholder: 'e.g., 24/7 Support', required: true },
              { name: 'description', label: 'Description', type: 'textarea', placeholder: 'e.g., Round-the-clock assistance...', required: true },
            ]
          }
        ]
      },
      data: companyData ? [companyData] : []
    },
    services: {
      title: 'Services',
      columns: [
        { key: 'title', label: 'Title' },
        { key: 'description', label: 'Description' },
        { key: 'amount', label: 'Amount' }
      ],
      fields: {
        title: 'Service',
        inputs: [
          // { name: 'id', label: 'ID', placeholder: 'Enter unique ID (e.g., personal)', required: true, disabled: isNewItem },
          { name: 'icon', label: 'Icon', placeholder: 'Enter icon name (e.g., CreditCard)', required: true },
          { name: 'title', label: 'Title', placeholder: 'Enter service title', required: true },
          { name: 'subtitle', label: 'Subtitle', placeholder: 'Enter subtitle' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Enter description', required: true },
          { name: 'amount', label: 'Amount', placeholder: 'Enter loan amount (e.g., ₹50K - ₹25L)', required: true },
          { name: 'rate', label: 'Interest Rate', placeholder: 'Enter interest rate (e.g., 10.5% onwards)', required: true },
          { name: 'tenure', label: 'Tenure', placeholder: 'Enter tenure (e.g., 12 - 60 months)' },
          { name: 'processingTime', label: 'Processing Time', placeholder: 'Enter processing time (e.g., 24 hours)' },
          { name: 'color', label: 'Color', placeholder: 'Enter color (e.g., #4248f8)', required: true },
          { name: 'minRate', label: 'Minimum Rate', type: 'number', placeholder: 'Enter minimum rate (e.g., 10.5)', required: true },
          { name: 'maxAmount', label: 'Maximum Amount', type: 'number', placeholder: 'Enter maximum amount (e.g., 2500000)', required: true },
          { name: 'minAmount', label: 'Minimum Amount', type: 'number', placeholder: 'Enter minimum amount (e.g., 50000)', required: true },
          {
            name: 'features',
            label: 'Features',
            type: 'array',
            subFields: [
              { name: 'value', label: 'Feature', placeholder: 'e.g., Fast processing' },
            ]
          },
          {
            name: 'eligibility',
            label: 'Eligibility',
            type: 'array',
            subFields: [
              { name: 'value', label: 'Eligibility Criterion', placeholder: 'e.g., Age 21-60' },
            ]
          },
          {
            name: 'documents',
            label: 'Documents',
            type: 'array',
            subFields: [
              { name: 'value', label: 'Document', placeholder: 'e.g., PAN Card' },
            ]
          },
          {
            name: 'benefits',
            label: 'Benefits',
            type: 'array',
            subFields: [
              { name: 'value', label: 'Benefit', placeholder: 'e.g., Flexible tenure' },
            ]
          },
          {
            name: 'faqs',
            label: 'FAQs',
            type: 'array',
            subFields: [
              { name: 'question', label: 'Question', placeholder: 'e.g., What is the rate?', required: true },
              { name: 'answer', label: 'Answer', type: 'textarea', placeholder: 'e.g., 10.5% onwards', required: true },
            ]
          },
          {
            name: 'useCases',
            label: 'Use Cases',
            type: 'array',
            subFields: [
              { name: 'value', label: 'Use Case', placeholder: 'e.g., Home renovation' },
            ]
          }
        ]
      },
      data: services || []
    },
    testimonials: {
      title: 'Testimonials',
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'loanType', label: 'Loan Type' },
        { key: 'review', label: 'Review' }
      ],
      fields: {
        title: 'Testimonial',
        inputs: [
          // { name: 'id', label: 'ID', type: 'number', placeholder: 'Enter unique ID (e.g., 1)', required: true, disabled: isNewItem },
          { name: 'name', label: 'Name', placeholder: 'Enter customer name', required: true },
          { name: 'location', label: 'Location', placeholder: 'Enter location', required: true },
          { name: 'loanType', label: 'Loan Type', placeholder: 'Enter loan type', required: true },
          { name: 'amount', label: 'Amount', placeholder: 'Enter loan amount', required: true },
          { name: 'rating', label: 'Rating', type: 'number', placeholder: 'Enter rating (1-5)', required: true },
          { name: 'image', label: 'Image', placeholder: 'Enter image emoji or URL', required: true },
          { name: 'review', label: 'Review', type: 'textarea', placeholder: 'Enter review', required: true },
          { name: 'helpful', label: 'Helpful', type: 'checkbox', placeholder: 'Is this review helpful?' },
          { name: 'verified', label: 'Verified', type: 'checkbox', placeholder: 'Is this review verified?' },
          { name: 'date', label: 'Date', placeholder: 'Enter date (e.g., 2 months ago)', required: true }
        ]
      },
      data: testimonials || []
    }
  };

  const currentConfig = sectionConfigs[activeSection];

  return (
    <AdminLayout
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      onLogout={handleLogout}
    >
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">{currentConfig.title}</h2>
        <button
          onClick={() => {
            console.log('Add New Button Clicked'); // Debug button click
            handleAdd();
          }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
        >
          Add New
        </button>
      </div>

      {error ? (
        <p className="text-red-500 text-center text-sm">{error}</p>
      ) : (
        <AdminTable
          data={currentConfig.data}
          columns={currentConfig.columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={loading}
        />
      )}

      {editingItem && (
        <AdminForm
          initialData={editingItem}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            console.log('Form Cancelled'); // Debug cancel action
            setEditingItem(null);
            setIsNewItem(false);
          }}
          fields={currentConfig.fields}
          isNewItem={isNewItem}
        />
      )}
    </AdminLayout>
  );
};

export default AdminDashboard;