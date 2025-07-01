import React from 'react'
import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Capabilities', href: '/capabilities' },
        { name: 'Quality Standards', href: '/quality' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'All Products', href: '/products' },
        { name: 'Custom Manufacturing', href: '/products?category=custom' },
        { name: 'Metal Fabrication', href: '/products?category=metal' },
        { name: 'Precision Parts', href: '/products?category=precision' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Design Consultation', href: '/capabilities' },
        { name: 'Prototyping', href: '/capabilities' },
        { name: 'Production Planning', href: '/capabilities' },
        { name: 'Quality Assurance', href: '/quality' }
      ]
    }
  ]
  
  const certifications = [
    { name: 'ISO 9001:2015', icon: 'Award' },
    { name: 'ISO 14001', icon: 'Leaf' },
    { name: 'IATF 16949', icon: 'Car' },
    { name: 'AS9100D', icon: 'Plane' }
  ]
  
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-orange-600 rounded-lg flex items-center justify-center">
                <ApperIcon name="Factory" className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">ForgeWorks</div>
                <div className="text-xs text-gray-300 -mt-1">Pro Manufacturing</div>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in precision manufacturing. We deliver quality, 
              reliability, and innovation in every project.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <ApperIcon name="MapPin" className="w-5 h-5 text-accent" />
                <span className="text-gray-300">
                  1234 Industrial Blvd, Manufacturing City, MC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Phone" className="w-5 h-5 text-accent" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Mail" className="w-5 h-5 text-accent" />
                <span className="text-gray-300">info@forgeworkspro.com</span>
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-6 text-center">
            Our Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2 p-3 bg-white/5 rounded-lg backdrop-blur-sm"
              >
                <ApperIcon name={cert.icon} className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} ForgeWorks Pro. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-accent text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-300 hover:text-accent text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              
              {/* Social Links */}
              <div className="flex items-center space-x-3 ml-6">
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
                >
                  <ApperIcon name="Linkedin" className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
                >
                  <ApperIcon name="Twitter" className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
                >
                  <ApperIcon name="Youtube" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer