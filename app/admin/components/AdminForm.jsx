"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

const AdminForm = ({ initialData, onSubmit, onCancel, fields }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  // Helper to get nested value from object by dot path
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((o, p) => o?.[p], obj) ?? '';
  };

  // Helper to transform string arrays to object arrays for Service fields
  const transformStringArrayToObjects = (array, key = 'value') => {
    if (Array.isArray(array) && array.every(item => typeof item === 'string')) {
      return array.map(str => ({ [key]: str }));
    }
    return array || [{ [key]: '' }];
  };

  // Initialize form data with default structures for arrays and objects
  useEffect(() => {
    const formattedData = { ...initialData };
    if (fields.title === 'Company') {
      formattedData.socialLinks = initialData.socialLinks || [{ name: '', href: '', icon: '' }];
      formattedData.quickLinks = initialData.quickLinks || [{ name: '', href: '' }];
      formattedData.legalLinks = initialData.legalLinks || [{ name: '', href: '' }];
      formattedData.companyStats = initialData.companyStats || [{ number: '', label: '', icon: '', color: '' }];
      formattedData.teamMembers = initialData.teamMembers || [{ name: '', position: '', experience: '', image: '', description: '', linkedin: '', specialization: '' }];
      formattedData.milestones = initialData.milestones || [{ year: '', event: '', description: '' }];
      formattedData.achievements = initialData.achievements || [{ title: '', issuer: '', icon: '', color: '' }];
      formattedData.values = initialData.values || [{ icon: '', title: '', description: '' }];
      formattedData.missionVision = initialData.missionVision || { mission: { title: '', content: '', icon: '' }, vision: { title: '', content: '', icon: '' } };
      formattedData.contactMethods = initialData.contactMethods || [{ icon: '', title: '', subtitle: '', details: '', subDetails: '', action: '', color: '', bgColor: '' }];
      formattedData.officeLocations = initialData.officeLocations || [{ city: '', address: '', phone: '', email: '', timing: '', isHeadOffice: false }];
      formattedData.supportFeatures = initialData.supportFeatures || [{ icon: '', title: '', description: '' }];
      formattedData.supportHours = initialData.supportHours || { weekdays: '', saturday: '', sunday: '', emergency: '' };
    } else if (fields.title === 'Service') {
      formattedData.features = transformStringArrayToObjects(initialData.features, 'value');
      formattedData.eligibility = transformStringArrayToObjects(initialData.eligibility, 'value');
      formattedData.documents = transformStringArrayToObjects(initialData.documents, 'value');
      formattedData.benefits = transformStringArrayToObjects(initialData.benefits, 'value');
      formattedData.faqs = initialData.faqs || [{ question: '', answer: '' }];
      formattedData.useCases = transformStringArrayToObjects(initialData.useCases, 'value');
    } else if (fields.title === 'Testimonial') {
      formattedData.testimonials = initialData.testimonials || [{ name: '', quote: '', role: '', image: '', rating: '' }];
    }
    setFormData(formattedData);
    setErrors({});

    // Expand object sections by default
    const initialExpanded = {};
    fields.inputs.forEach((field) => {
      if (field.type === 'object') {
        initialExpanded[field.name] = true;
      }
    });
    setExpandedSections(initialExpanded);
  }, [initialData, fields.title]);

  // Handle input changes
  const handleChange = (e, index, arrayField, subField) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      if (arrayField) {
        const target = prev[arrayField];
        if (Array.isArray(target)) {
          const updatedArray = [...target];
          if (subField) {
            // Ensure the item is an object before spreading
            const currentItem = updatedArray[index];
            if (typeof currentItem !== 'object' || currentItem === null) {
              updatedArray[index] = {}; // Initialize as empty object if not already
            }
            updatedArray[index] = { ...updatedArray[index], [subField]: type === 'checkbox' ? checked : value };
          } else {
            updatedArray[index] = type === 'checkbox' ? checked : value;
          }
          return { ...prev, [arrayField]: updatedArray };
        } else if (typeof target === 'object' && target !== null) {
          // Handle object (flat or nested)
          const parts = subField.split('.');
          const newObj = { ...prev[arrayField] }; // Shallow clone top level
          let temp = newObj;
          for (let i = 0; i < parts.length - 1; i++) {
            const part = parts[i];
            if (temp[part] === undefined || temp[part] === null) {
              temp[part] = {}; // Initialize nested if missing
            }
            temp[part] = { ...temp[part] }; // Clone nested level
            temp = temp[part];
          }
          temp[parts[parts.length - 1]] = type === 'checkbox' ? checked : value;
          return { ...prev, [arrayField]: newObj };
        }
      }
      return { ...prev, [name]: type === 'checkbox' ? checked : value };
    });
    // Clear error for this field
    const errorKey = arrayField ? `${arrayField}[${index}].${subField}` : subField ? `${name}.${subField}` : name;
    if (errors[errorKey]) {
      setErrors((prev) => ({ ...prev, [errorKey]: null }));
    }
  };

  // Add item to array field
  const addArrayItem = (field) => {
    setFormData((prev) => {
      let newItem;
      if (fields.title === 'Testimonial' && field === 'testimonials') {
        newItem = { name: '', quote: '', role: '', image: '', rating: '' };
      } else {
        newItem = field === 'socialLinks' ? { name: '', href: '', icon: '' }
          : field === 'quickLinks' ? { name: '', href: '' }
          : field === 'legalLinks' ? { name: '', href: '' }
          : field === 'companyStats' ? { number: '', label: '', icon: '', color: '' }
          : field === 'teamMembers' ? { name: '', position: '', experience: '', image: '', description: '', linkedin: '', specialization: '' }
          : field === 'milestones' ? { year: '', event: '', description: '' }
          : field === 'achievements' ? { title: '', issuer: '', icon: '', color: '' }
          : field === 'values' ? { icon: '', title: '', description: '' }
          : field === 'contactMethods' ? { icon: '', title: '', subtitle: '', details: '', subDetails: '', action: '', color: '', bgColor: '' }
          : field === 'officeLocations' ? { city: '', address: '', phone: '', email: '', timing: '', isHeadOffice: false }
          : field === 'supportFeatures' ? { icon: '', title: '', description: '' }
          : field === 'faqs' ? { question: '', answer: '' }
          : { value: '' };
      }
      return { ...prev, [field]: [...(prev[field] || []), newItem] };
    });
  };

  // Remove item from array field
  const removeArrayItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  // Toggle collapsible section
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    
    fields.inputs.forEach((field) => {
      // Handle regular fields
      if (field.required && field.type !== 'array' && field.type !== 'object') {
        const value = formData[field.name];
        if (!value && value !== 0 && value !== false) {
          newErrors[field.name] = `${field.label} is required`;
        }
      }
      
      // Handle number fields
      if (field.type === 'number' && formData[field.name] && isNaN(Number(formData[field.name]))) {
        newErrors[field.name] = `${field.label} must be a number`;
      }
      
      // Handle array fields
      if (field.type === 'array' && formData[field.name]) {
        formData[field.name].forEach((item, index) => {
          field.subFields.forEach((subField) => {
            // Handle different array item structures
            let itemValue;
            
            if (typeof item === 'string') {
              itemValue = item;
            } else if (item && typeof item === 'object') {
              itemValue = item[subField.name];
            } else {
              itemValue = '';
            }
            
            if (subField.required && (!itemValue && itemValue !== 0 && itemValue !== false)) {
              newErrors[`${field.name}[${index}].${subField.name}`] = `${subField.label} is required`;
            }
          });
        });
      }
      
      // Handle object fields
      if (field.type === 'object' && formData[field.name]) {
        field.subFields.forEach((subField) => {
          if (subField.required) {
            const value = getNestedValue(formData[field.name], subField.name);
            if (!value && value !== 0 && value !== false) {
              newErrors[`${field.name}.${subField.name}`] = `${subField.label} is required`;
            }
          }
        });
      }
    });
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started');
    
    const validationErrors = validateForm();
    console.log('Validation errors found:', Object.keys(validationErrors).length);
    console.log('Specific errors:', validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
      // Scroll to first error
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
      
      return;
    }
    
    setSubmitting(true);
    console.log('Submitting form...');
    
    try {
      // Clean up formData to remove empty array items and transform back to strings for Service
      const cleanedFormData = { ...formData };
      
      if (fields.title === 'Service') {
        ['features', 'eligibility', 'documents', 'benefits', 'useCases'].forEach((field) => {
          if (cleanedFormData[field]) {
            cleanedFormData[field] = cleanedFormData[field]
              .map((item) => {
                if (typeof item === 'string') return item;
                return item.value || '';
              })
              .filter((v) => v !== '' && v !== null && v !== undefined);
          }
        });
        
        // Also clean up FAQs
        if (cleanedFormData.faqs) {
          cleanedFormData.faqs = cleanedFormData.faqs.filter(
            (faq) => faq.question !== '' && faq.answer !== ''
          );
        }
      } else if (fields.title === 'Testimonial') {
        // Clean up testimonials
        if (cleanedFormData.testimonials) {
          cleanedFormData.testimonials = cleanedFormData.testimonials.filter(
            (testimonial) => testimonial.quote !== '' && testimonial.name !== ''
          );
        }
      }
      
      console.log('Cleaned form data:', cleanedFormData);
      await onSubmit(cleanedFormData);
      
    } catch (error) {
      console.error('Error during submission:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Render array field inputs
  const renderArrayInputs = (field, items, fieldsConfig) => (
    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-gray-800">{field.label}</h4>
        <button
          type="button"
          onClick={() => addArrayItem(field.name)}
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5 mr-1" />
          Add {field.label}
        </button>
      </div>
      {items.length === 0 && (
        <p className="text-gray-500 text-sm mb-4">No {field.label.toLowerCase()} added yet.</p>
      )}
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="border-b border-gray-100 pb-4 mb-4 last:border-b-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fieldsConfig.map((subField) => {
                // Handle different array item structures
                let itemValue;
                
                if (typeof item === 'string') {
                  itemValue = item;
                } else if (item && typeof item === 'object') {
                  itemValue = item[subField.name];
                } else {
                  itemValue = '';
                }
                
                return (
                  <div key={subField.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {subField.label}
                      {subField.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {subField.type === 'checkbox' ? (
                      <input
                        type="checkbox"
                        name={`${field.name}[${index}].${subField.name}`}
                        checked={!!itemValue}
                        onChange={(e) => handleChange(e, index, field.name, subField.name)}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    ) : subField.type === 'textarea' ? (
                      <textarea
                        name={`${field.name}[${index}].${subField.name}`}
                        value={itemValue || ''}
                        onChange={(e) => handleChange(e, index, field.name, subField.name)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 ${
                          errors[`${field.name}[${index}].${subField.name}`] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        rows={3}
                        placeholder={subField.placeholder}
                      />
                    ) : (
                      <input
                        type={subField.type || 'text'}
                        name={`${field.name}[${index}].${subField.name}`}
                        value={itemValue || ''}
                        onChange={(e) => handleChange(e, index, field.name, subField.name)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 ${
                          errors[`${field.name}[${index}].${subField.name}`] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder={subField.placeholder}
                      />
                    )}
                    {errors[`${field.name}[${index}].${subField.name}`] && (
                      <div className="flex items-center mt-2 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors[`${field.name}[${index}].${subField.name}`]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => removeArrayItem(field.name, index)}
              className="mt-3 text-red-600 hover:text-red-700 flex items-center text-sm"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Remove
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        >
          <div className="relative p-8">
            {/* Header with Gradient Accent */}
            <div className="mb-8 border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {initialData.id ? 'Edit' : 'Add'} {fields.title}
                </h2>
                <button
                  onClick={onCancel}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mt-2 rounded-full"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {fields.inputs.map((field) => (
                <div key={field.name}>
                  {field.type === 'array' ? (
                    renderArrayInputs(field, formData[field.name] || [], field.subFields)
                  ) : field.type === 'object' ? (
                    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 mb-4">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-semibold text-gray-800">{field.label}</h4>
                        <button
                          type="button"
                          onClick={() => toggleSection(field.name)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          {expandedSections[field.name] ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      {expandedSections[field.name] && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {field.subFields.map((subField) => (
                            <div key={subField.name}>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                {subField.label}
                                {subField.required && <span className="text-red-500 ml-1">*</span>}
                              </label>
                              {subField.type === 'textarea' ? (
                                <textarea
                                  name={subField.name}
                                  value={getNestedValue(formData[field.name], subField.name)}
                                  onChange={(e) => handleChange(e, null, field.name, subField.name)}
                                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 ${
                                    errors[`${field.name}.${subField.name}`] ? 'border-red-500' : 'border-gray-300'
                                  }`}
                                  rows={3}
                                  placeholder={subField.placeholder}
                                />
                              ) : (
                                <input
                                  type={subField.type || 'text'}
                                  name={subField.name}
                                  value={getNestedValue(formData[field.name], subField.name)}
                                  onChange={(e) => handleChange(e, null, field.name, subField.name)}
                                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 ${
                                    errors[`${field.name}.${subField.name}`] ? 'border-red-500' : 'border-gray-300'
                                  }`}
                                  placeholder={subField.placeholder}
                                />
                              )}
                              {errors[`${field.name}.${subField.name}`] && (
                                <div className="flex items-center mt-2 text-red-500 text-sm">
                                  <AlertCircle className="h-4 w-4 mr-1" />
                                  {errors[`${field.name}.${subField.name}`]}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : field.type === 'textarea' ? (
                    <>
                      <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <textarea
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleChange(e)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 ${
                          errors[field.name] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        rows={6}
                        placeholder={field.placeholder}
                      />
                      {errors[field.name] && (
                        <div className="flex items-center mt-2 text-red-500 text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors[field.name]}
                        </div>
                      )}
                    </>
                  ) : field.type === 'checkbox' ? (
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name={field.name}
                        checked={formData[field.name] || false}
                        onChange={handleChange}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 text-sm font-semibold text-gray-800">
                        {field.label}
                      </label>
                      {errors[field.name] && (
                        <div className="flex items-center mt-2 text-red-500 text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors[field.name]}
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <input
                        type={field.type || 'text'}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 ${
                          errors[field.name] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder={field.placeholder}
                      />
                      {errors[field.name] && (
                        <div className="flex items-center mt-2 text-red-500 text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors[field.name]}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50"
                >
                  {submitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Saving...
                    </div>
                  ) : (
                    'Save'
                  )}
                </button>
                <button
                  type="button"
                  onClick={onCancel}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdminForm;