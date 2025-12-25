
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
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [isNewItem, setIsNewItem] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [offerTitle, setOfferTitle] = useState('');
  const [offerDescription, setOfferDescription] = useState('');
  const [offerStartDate, setOfferStartDate] = useState('');
  const [offerEndDate, setOfferEndDate] = useState('');
  const [offerIsActive, setOfferIsActive] = useState(true);
  const [offerImage, setOfferImage] = useState(null);
  const [offerImagePreview, setOfferImagePreview] = useState('');
  const [offerImageUrl, setOfferImageUrl] = useState('');
  const [offerId, setOfferId] = useState('');
  const [offerUploading, setOfferUploading] = useState(false);
  const [offerSuccess, setOfferSuccess] = useState(false);
  const [offerError, setOfferError] = useState(null);
  const [loginError, setLoginError] = useState('');

  const CLOUD_NAME = 'dqfum2awz';
  const UPLOAD_PRESET = 'finsure';

  // Check authentication status on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuthenticated');
    const authTimestamp = localStorage.getItem('adminAuthTimestamp');
    
    // Check if authentication is still valid (24 hours)
    if (authStatus === 'true' && authTimestamp) {
      const currentTime = new Date().getTime();
      const authTime = parseInt(authTimestamp);
      const hoursElapsed = (currentTime - authTime) / (1000 * 60 * 60);
      
      if (hoursElapsed < 24) {
        setIsAuthenticated(true);
        console.log('Auto-login successful');
      } else {
        // Session expired
        localStorage.removeItem('adminAuthenticated');
        localStorage.removeItem('adminAuthTimestamp');
        console.log('Session expired');
      }
    }
  }, []);

  // Fetch data based on active section
  useEffect(() => {
    const fetchData = async () => {
      if (!isAuthenticated) {
        console.log('Not authenticated, skipping fetch');
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        console.log(`Fetching data for: ${activeSection}`);
        
        let endpoint = '';
        if (activeSection === 'company') {
          endpoint = '/api/company';
        } else if (activeSection === 'services') {
          endpoint = '/api/services';
        } else if (activeSection === 'testimonials') {
          endpoint = '/api/testimonials';
        } else if (activeSection === 'offers') {
          endpoint = '/api/offer';
        }
        
        console.log('API Endpoint:', endpoint);
        const response = await fetch(endpoint);
        console.log('Response Status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response Data:', data);
        
        // Process data based on section
        if (activeSection === 'company') {
          const company = Array.isArray(data) ? data[0] : data.data || data;
          setCompanyData(company || {});
        } else if (activeSection === 'services') {
          const servicesData = Array.isArray(data) ? data : data.data || data.services || [];
          setServices(servicesData);
        } else if (activeSection === 'testimonials') {
          const testimonialsData = Array.isArray(data) ? data : data.data || data.testimonials || [];
          setTestimonials(testimonialsData);
        } else if (activeSection === 'offers') {
          const offersData = Array.isArray(data) ? data : data.data || data.offers || [];
          setOffers(offersData);
        }
        
        setError(null);
      } catch (err) {
        console.error('Fetch Error Details:', {
          message: err.message,
          stack: err.stack
        });
        setError(`Failed to fetch ${activeSection}: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [activeSection, isAuthenticated]);

  // Debug state updates
  useEffect(() => {
    console.log('State - companyData:', companyData);
    console.log('State - services:', services);
    console.log('State - testimonials:', testimonials);
    console.log('State - offers:', offers);
    console.log('Current Config Data:', sectionConfigs[activeSection]?.data);
  }, [companyData, services, testimonials, offers, activeSection]);

  // Debug modal state
  useEffect(() => {
    console.log('editingItem State:', editingItem, 'isNewItem:', isNewItem);
  }, [editingItem, isNewItem]);

  const handleLogin = (password) => {
    console.log('Login attempt with password:', password);
    setLoginError('');
    
    // Password validation - using "finsure@2025" as the password
    if (password === 'finsure@2025') {
      console.log('Login successful');
      setIsAuthenticated(true);
      const timestamp = new Date().getTime();
      localStorage.setItem('adminAuthenticated', 'true');
      localStorage.setItem('adminAuthTimestamp', timestamp.toString());
      setLoginError('');
    } else {
      console.log('Login failed - incorrect password');
      setLoginError('Invalid password. Please try again.');
    }
  };

  const handleLogout = () => {
    console.log('Logout Triggered');
    setIsAuthenticated(false);
    setLoginError('');
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminAuthTimestamp');
  };

  const handleAdd = () => {
    console.log('handleAdd Triggered');
    if (activeSection === 'offers') {
      setShowModal(true);
      setOfferTitle('');
      setOfferDescription('');
      setOfferStartDate('');
      setOfferEndDate('');
      setOfferIsActive(true);
      setOfferImage(null);
      setOfferImagePreview('');
      setOfferImageUrl('');
      setOfferId('');
      setOfferSuccess(false);
      setOfferError(null);
      setIsNewItem(true);
      setEditingItem(null);
    } else {
      setEditingItem({});
      setIsNewItem(true);
    }
  };

  const handleEdit = (item) => {
    console.log('Editing Item:', item);
    if (activeSection === 'offers') {
      setOfferTitle(item.title || '');
      setOfferDescription(item.description || '');
      setOfferStartDate(item.startDate ? new Date(item.startDate).toISOString().split('T')[0] : '');
      setOfferEndDate(item.endDate ? new Date(item.endDate).toISOString().split('T')[0] : '');
      setOfferIsActive(item.isActive !== false);
      setOfferImageUrl(item.imageUrl || '')
      setOfferId(item._id || '')
      setOfferImagePreview('');
      setOfferImage(null);
      setShowModal(true);
      setEditingItem(item);
      setIsNewItem(false);
    } else {
      setEditingItem(item);
      setIsNewItem(false);
    }
  };

  const handleDelete = async (id) => {
        console.log(id)
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      console.log("Active Section",activeSection)
      const endpoint = activeSection === 'company' ? '/api/company/delete' : `/api/${activeSection}/${id}`;
      console.log('Deleting Item ID:', id, 'Endpoint:', endpoint);
      const response = await fetch(endpoint, { method: 'DELETE' });
      if (!response.ok) throw new Error(`Failed to delete ${activeSection} item`);
      if (activeSection === 'company') {
        setCompanyData(null);
      } else if (activeSection === 'services') {
        setServices(services.filter((item) => item.id !== id));
      } else if (activeSection === 'testimonials') {
        setTestimonials(testimonials.filter((item) => item.id !== id));
      } else if (activeSection === 'offer') {
        setOffers(offers.filter((item) => item.id !== id));
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
      console.log('Submitting Form Data:', cleanedFormData, 'Method:', method, 'Endpoint:', endpoint);
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanedFormData),
      });
      if (!response.ok) throw new Error(`Failed to save ${activeSection} data`);
      const updatedData = await response.json();
      console.log('API Response after Submit:', updatedData);
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
      } else if (activeSection === 'offer') {
        setOffers(formData.id && !isNewItem
          ? offers.map((item) => (item.id === formData.id ? updatedData : item))
          : [...offers, updatedData]);
      }
      setEditingItem(null);
      setIsNewItem(false);
    } catch (err) {
      setError(err.message);
      console.error('Submit Error:', err);
    }
  };

  const handleOfferImageChange = (e) => {
    const file = e.target.files[0];
    setOfferImage(file);
    setOfferImageUrl(''); // Clear previous uploaded URL
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setOfferImagePreview(localUrl);
    } else {
      setOfferImagePreview('');
    }
  };

  const handleOfferSubmit = async (e) => {
    e.preventDefault();
    if (!offerImage && !offerImageUrl) {
      setOfferError('Please upload an image');
      return;
    }

    setOfferUploading(true);
    setOfferError(null);
    setOfferSuccess(false);

    let finalImageUrl = offerImageUrl;

    if (offerImage) {
      const formData = new FormData();
      formData.append('file', offerImage);
      formData.append('upload_preset', UPLOAD_PRESET);

      try {
        // Upload to Cloudinary
        const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
          method: 'POST',
          body: formData
        });

        if (!uploadRes.ok) throw new Error('Image upload failed');

        const { secure_url } = await uploadRes.json();
        finalImageUrl = secure_url;
      } catch (uploadErr) {
        setOfferError(uploadErr.message);
        setOfferUploading(false);
        return;
      }
    }

    try {
      // Save to /api/offer
      const endpoint = editingItem ? `/api/offer/${editingItem._id}` : '/api/offer';
      const method = editingItem ? 'PUT' : 'POST';
      const saveRes = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: offerTitle,
          description: offerDescription,
          imageUrl: finalImageUrl,
          startDate: offerStartDate,
          endDate: offerEndDate,
          isActive: offerIsActive
        })
      });

      if (!saveRes.ok) throw new Error('Failed to save offer');

      const updatedOffer = await saveRes.json();
      if (editingItem) {
        setOffers(offers.map((offer) => offer.id === editingItem.id ? updatedOffer : offer));
      } else {
        setOffers([...offers, updatedOffer]);
      }
      setOfferSuccess(true);

      // Reset and close
      setShowModal(false);
      setIsNewItem(false);
      setEditingItem(null);
    } catch (err) {
      setOfferError(err.message);
    } finally {
      setOfferUploading(false);
    }
  };

  // Login Component
  const LoginSection = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">F</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Enter your password to continue</p>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const password = formData.get('password');
          handleLogin(password);
        }} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter admin password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {loginError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 text-sm font-medium">{loginError}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

     
      </motion.div>
    </div>
  );

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
    },
    offers: {
      title: 'Offers',
      columns: [
        { key: 'title', label: 'Title' },
        { key: 'description', label: 'Description' },
        { 
          key: 'imageUrl', 
          label: 'Image', 
          render: (value) => (
            <img 
              src={value} 
              alt="Offer" 
              className="w-24 h-24 object-cover rounded-lg shadow-sm" 
            />
          ) 
        },
        { key: 'startDate', label: 'Start Date', render: (value) => new Date(value).toLocaleDateString() },
        { key: 'endDate', label: 'End Date', render: (value) => value ? new Date(value).toLocaleDateString() : 'N/A' },
        { 
          key: 'isActive', 
          label: 'Active', 
          render: (value) => (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {value ? 'Yes' : 'No'}
            </span>
          ) 
        }
      ],
      fields: {
        title: 'Offer',
        inputs: [
          { name: 'title', label: 'Title', placeholder: 'Enter offer title', required: true },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Enter offer description', required: true },
          { name: 'imageUrl', label: 'Image URL', placeholder: 'Enter image URL (upload via form)', required: true },
          { name: 'startDate', label: 'Start Date', type: 'date', required: true },
          { name: 'endDate', label: 'End Date', type: 'date' },
          { name: 'isActive', label: 'Active', type: 'checkbox' }
        ]
      },
      data: offers || []
    }
  };

  const currentConfig = sectionConfigs[activeSection];

  // Show login section if not authenticated
  if (!isAuthenticated) {
    return <LoginSection />;
  }

  // Show main dashboard if authenticated
  return (
    <AdminLayout
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      onLogout={handleLogout}
    >
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">{currentConfig.title}</h2>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
        >
          Add New
        </button>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading {currentConfig.title}...</p>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">
          <p className="font-semibold">Error Loading Data</p>
          <p className="text-sm">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      ) : (
        <AdminTable
          data={currentConfig.data}
          columns={currentConfig.columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={false}
        />
      )}

      {editingItem && activeSection !== 'offers' && (
        <AdminForm
          initialData={editingItem}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            console.log('Form Cancelled');
            setEditingItem(null);
            setIsNewItem(false);
          }}
          fields={currentConfig.fields}
          isNewItem={isNewItem}
        />
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] flex flex-col">
            {/* Fixed Header */}
            <div className="p-6 border-b border-gray-200 flex-shrink-0">
              <h3 className="text-xl font-bold text-gray-900">
                {editingItem ? 'Edit Offer' : 'Add New Offer'}
              </h3>
            </div>
            
            {/* Scrollable Form Content */}
            <form onSubmit={handleOfferSubmit} className="flex flex-col flex-1 overflow-hidden">
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={offerTitle}
                    onChange={(e) => setOfferTitle(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter offer title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={offerDescription}
                    onChange={(e) => setOfferDescription(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                    placeholder="Enter offer description"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={offerStartDate}
                      onChange={(e) => setOfferStartDate(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      value={offerEndDate}
                      onChange={(e) => setOfferEndDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="offerActive"
                    checked={offerIsActive}
                    onChange={(e) => setOfferIsActive(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="offerActive" className="text-sm font-medium text-gray-700">
                    Active Offer
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleOfferImageChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>

                {offerImagePreview && (
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                    <img 
                      src={offerImagePreview} 
                      alt="Preview" 
                      className="w-full h-48 object-contain rounded-lg border border-gray-200 bg-gray-50" 
                    />
                  </div>
                )}

                {offerImageUrl && !offerImagePreview && (
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-700 mb-2">Current Image:</p>
                    <img 
                      src={offerImageUrl} 
                      alt="Current" 
                      className="w-full h-48 object-contain rounded-lg border border-gray-200 bg-gray-50" 
                    />
                  </div>
                )}

                {offerError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-700 text-sm font-medium">{offerError}</p>
                  </div>
                )}

                {offerSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-green-700 text-sm font-medium">Offer saved successfully!</p>
                  </div>
                )}
              </div>

              {/* Fixed Footer */}
              <div className="p-6 border-t border-gray-200 flex-shrink-0 bg-gray-50">
                <div className="flex justify-end space-x-3">
                  <button 
                    type="button" 
                    onClick={() => {
                      setShowModal(false);
                      setIsNewItem(false);
                      setEditingItem(null);
                      setOfferError(null);
                      setOfferSuccess(false);
                    }} 
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    disabled={offerUploading} 
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 transition-all"
                  >
                    {offerUploading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                      </span>
                    ) : 'Save Offer'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminDashboard;