// Mock capability data - replace with actual API calls
const mockCapabilities = [
  {
    id: 1,
    title: "Precision Manufacturing",
    description: "State-of-the-art equipment for high-precision manufacturing solutions",
    icon: "Target",
    category: "Manufacturing",
    featured: true
  },
  {
    id: 2,
    title: "Quality Assurance",
    description: "ISO 9001:2015 certified quality management systems",
    icon: "Shield",
    category: "Quality",
    featured: true
  },
  {
    id: 3,
    title: "Fast Turnaround",
    description: "Rapid prototyping and quick delivery for urgent projects",
    icon: "Clock",
    category: "Service",
    featured: true
  },
  {
    id: 4,
    title: "Custom Solutions",
    description: "Tailored manufacturing solutions for unique requirements",
    icon: "Wrench",
    category: "Custom",
    featured: false
  },
  {
    id: 5,
    title: "Material Expertise",
    description: "Wide range of materials and finishing options available",
    icon: "Package",
    category: "Materials",
    featured: true
  },
  {
    id: 6,
    title: "Technical Support",
    description: "Expert technical support throughout the project lifecycle",
    icon: "HeadPhones",
    category: "Support",
    featured: true
  },
  {
    id: 7,
    title: "Cost Optimization",
    description: "Value engineering to optimize costs without compromising quality",
    icon: "DollarSign",
    category: "Optimization",
    featured: false
  },
  {
    id: 8,
    title: "Global Delivery",
    description: "Worldwide shipping and logistics support",
    icon: "Globe",
    category: "Logistics",
    featured: false
  }
]

const capabilityService = {
  // Get all capabilities
  async getAll() {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
      return mockCapabilities
    } catch (error) {
      console.error('Error fetching capabilities:', error)
      throw new Error('Failed to fetch capabilities')
    }
  },

  // Get capability by ID
  async getById(id) {
    try {
      await new Promise(resolve => setTimeout(resolve, 300))
      const capability = mockCapabilities.find(cap => cap.id === parseInt(id))
      if (!capability) {
        throw new Error('Capability not found')
      }
      return capability
    } catch (error) {
      console.error('Error fetching capability:', error)
      throw error
    }
  },

  // Get featured capabilities
  async getFeatured() {
    try {
      await new Promise(resolve => setTimeout(resolve, 400))
      return mockCapabilities.filter(cap => cap.featured)
    } catch (error) {
      console.error('Error fetching featured capabilities:', error)
      throw new Error('Failed to fetch featured capabilities')
    }
  },

  // Get capabilities by category
  async getByCategory(category) {
    try {
      await new Promise(resolve => setTimeout(resolve, 350))
      return mockCapabilities.filter(cap => 
        cap.category.toLowerCase() === category.toLowerCase()
      )
    } catch (error) {
      console.error('Error fetching capabilities by category:', error)
      throw new Error('Failed to fetch capabilities by category')
    }
  }
}

export default capabilityService