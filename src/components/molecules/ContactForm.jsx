import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const ContactForm = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
    attachment: null
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  
  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'quote', label: 'Request Quote' },
    { value: 'capabilities', label: 'Capabilities Information' },
    { value: 'quality', label: 'Quality & Certifications' },
    { value: 'partnership', label: 'Partnership Opportunity' }
  ]
  
  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setLoading(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast.success('Thank you! Your message has been sent successfully.')
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        message: '',
        attachment: null
      })
    } catch (error) {
      toast.error('There was an error sending your message. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
          icon="User"
        />
        
        <Input
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          icon="Building"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          icon="Mail"
        />
        
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          icon="Phone"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Inquiry Type <span className="text-error">*</span>
        </label>
        <div className="relative">
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary appearance-none bg-white"
          >
            {inquiryTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <ApperIcon 
            name="ChevronDown" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your requirements, specifications, or any questions you have..."
          className={`w-full px-4 py-3 border rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-vertical ${
            errors.message 
              ? 'border-error focus:border-error focus:ring-error' 
              : 'border-gray-300 focus:border-secondary focus:ring-secondary'
          }`}
        />
        {errors.message && (
          <p className="mt-2 text-sm text-error flex items-center">
            <ApperIcon name="AlertCircle" className="w-4 h-4 mr-1" />
            {errors.message}
          </p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Attachment (Optional)
        </label>
        <div className="flex items-center gap-4">
          <input
            type="file"
            name="attachment"
            onChange={handleChange}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors duration-200"
          >
            <ApperIcon name="Paperclip" className="w-4 h-4 mr-2" />
            Choose File
          </label>
          {formData.attachment && (
            <span className="text-sm text-gray-600">
              {formData.attachment.name}
            </span>
          )}
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Supported formats: PDF, DOC, DOCX, JPG, JPEG, PNG (Max 10MB)
        </p>
      </div>
      
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={loading}
        className="w-full"
        icon="Send"
      >
        {loading ? 'Sending Message...' : 'Send Message'}
      </Button>
    </form>
  )
}

export default ContactForm