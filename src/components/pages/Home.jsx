import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import ProductCard from '@/components/molecules/ProductCard'
import CapabilityCard from '@/components/molecules/CapabilityCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import ApperIcon from '@/components/ApperIcon'
import productService from '@/services/api/productService'
import capabilityService from '@/services/api/capabilityService'

const Home = () => {
  const [products, setProducts] = useState([])
  const [capabilities, setCapabilities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  const loadData = async () => {
    try {
      setLoading(true)
      setError('')
      
      const [productsData, capabilitiesData] = await Promise.all([
        productService.getAll(),
        capabilityService.getAll()
      ])
      
      setProducts(productsData.slice(0, 6)) // Show first 6 products
      setCapabilities(capabilitiesData.slice(0, 6)) // Show first 6 capabilities
    } catch (err) {
      setError('Failed to load data. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadData()
  }, [])
  
  const stats = [
    { label: 'Years Experience', value: '25+', icon: 'Calendar' },
    { label: 'Projects Completed', value: '5,000+', icon: 'CheckCircle' },
    { label: 'Manufacturing Partners', value: '200+', icon: 'Users' },
    { label: 'Quality Rating', value: '99.8%', icon: 'Award' }
  ]
  
  const features = [
    {
      title: 'Precision Manufacturing',
      description: 'State-of-the-art equipment ensuring tolerances within ±0.001"',
      icon: 'Target'
    },
    {
      title: 'Quality Assurance',
      description: 'ISO 9001:2015 certified with comprehensive quality control',
      icon: 'Shield'
    },
    {
      title: 'Fast Turnaround',
      description: 'Rapid prototyping and production with flexible scheduling',
      icon: 'Clock'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored manufacturing solutions for unique requirements',
      icon: 'Settings'
    }
  ]
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadData} />
  
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-primary to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-max section-padding py-24 lg:py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="accent" size="md" className="mb-6">
                Trusted Manufacturing Partner Since 1998
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Precision Manufacturing
                <span className="block text-gradient">Excellence Delivered</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                From concept to completion, we deliver world-class manufacturing 
                solutions with unmatched precision, quality, and reliability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  as={Link}
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon="MessageSquare"
                >
                  Request Quote
                </Button>
                <Button
                  as={Link}
                  to="/capabilities"
                  variant="outline"
                  size="lg"
                  icon="Settings"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  View Capabilities
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-l from-accent/30 to-transparent"></div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-surface">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-accent to-orange-600 rounded-full flex items-center justify-center">
                  <ApperIcon name={stat.icon} className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why Choose ForgeWorks Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with decades of expertise to deliver 
              manufacturing solutions that exceed expectations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-secondary to-blue-600 rounded-full flex items-center justify-center">
                  <ApperIcon name={feature.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-20 bg-surface">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of precision-manufactured products designed to meet 
              the most demanding specifications.
            </p>
          </motion.div>
          
          {products.length === 0 ? (
            <Empty
              title="No Products Available"
              message="We're currently updating our product catalog. Please check back soon."
              icon="Package"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.Id} product={product} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button
              as={Link}
              to="/products"
              variant="primary"
              size="lg"
              icon="ArrowRight"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>
      
      {/* Capabilities Preview */}
      <section className="py-20">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Manufacturing Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment and skilled craftsmen ensure we can handle 
              projects of any complexity and scale.
            </p>
          </motion.div>
          
          {capabilities.length === 0 ? (
            <Empty
              title="No Capabilities Available"
              message="We're currently updating our capabilities information. Please check back soon."
              icon="Settings"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability) => (
                <CapabilityCard key={capability.Id} capability={capability} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button
              as={Link}
              to="/capabilities"
              variant="secondary"
              size="lg"
              icon="ArrowRight"
            >
              Explore All Capabilities
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your manufacturing needs. 
              We'll provide a detailed quote and timeline for your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                to="/contact"
                variant="accent"
                size="lg"
                icon="MessageSquare"
              >
                Request Quote
              </Button>
              <Button
                as={Link}
                to="/about"
                variant="outline"
                size="lg"
                icon="Info"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home