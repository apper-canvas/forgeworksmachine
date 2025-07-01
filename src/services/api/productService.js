// Mock Product Service - Replace with real API calls
const mockProducts = [
  {
    id: '1',
    name: 'Precision CNC Machined Parts',
    description: 'High-precision CNC machined components for aerospace and automotive applications. Manufactured to exact specifications with tight tolerances.',
    category: 'precision',
    materials: ['Aluminum', 'Steel', 'Titanium'],
    applications: ['Aerospace', 'Automotive', 'Medical Devices'],
    image: '/images/products/cnc-parts.jpg',
    specifications: {
      tolerance: '±0.001"',
      surfaceFinish: '32 Ra',
      materials: ['6061-T6 Aluminum', '4140 Steel', 'Ti-6Al-4V Titanium']
    },
    features: [
      'High precision machining',
      'Tight tolerances',
      'Multiple material options',
      'Custom specifications'
    ]
  },
  {
    id: '2',
    name: 'Metal Fabrication Assemblies',
    description: 'Custom metal fabrication assemblies including welding, forming, and finishing services for industrial applications.',
    category: 'metal',
    materials: ['Steel', 'Stainless Steel', 'Aluminum'],
    applications: ['Industrial Equipment', 'Construction', 'Marine'],
    image: '/images/products/metal-fab.jpg',
    specifications: {
      processes: ['TIG Welding', 'MIG Welding', 'Plasma Cutting'],
      materials: ['Mild Steel', '316 Stainless Steel', '5052 Aluminum'],
      finishes: ['Powder Coating', 'Anodizing', 'Galvanizing']
    },
    features: [
      'Custom fabrication',
      'Multiple welding processes',
      'Various finishing options',
      'Industrial grade quality'
    ]
  },
  {
    id: '3',
    name: 'Custom Manufacturing Solutions',
    description: 'Tailored manufacturing solutions for unique requirements including prototyping, small batch production, and specialized components.',
    category: 'custom',
    materials: ['Various', 'Plastics', 'Composites', 'Metals'],
    applications: ['Prototyping', 'Research & Development', 'Specialized Equipment'],
    image: '/images/products/custom-parts.jpg',
    specifications: {
      services: ['Design Consultation', 'Prototyping', 'Production'],
      capabilities: ['3D Printing', 'CNC Machining', 'Injection Molding'],
      materials: ['Engineering Plastics', 'Carbon Fiber', 'Exotic Alloys']
    },
    features: [
      'Design to production',
      'Rapid prototyping',
      'Low to high volume',
      'Material expertise'
    ]
  },
  {
    id: '4',
    name: 'Automotive Components',
    description: 'Precision automotive components including engine parts, transmission components, and suspension elements manufactured to OEM standards.',
    category: 'automotive',
    materials: ['Steel', 'Aluminum', 'Cast Iron'],
    applications: ['Engine Components', 'Transmission Parts', 'Suspension Systems'],
    image: '/images/products/automotive.jpg',
    specifications: {
      standards: ['ISO/TS 16949', 'PPAP', 'SPC'],
      processes: ['Forging', 'Machining', 'Heat Treatment'],
      testing: ['CMM Inspection', 'Material Testing', 'Functional Testing']
    },
    features: [
      'OEM quality standards',
      'Automotive certifications',
      'High volume production',
      'Quality assurance'
    ]
  },
  {
    id: '5',
    name: 'Aerospace Grade Parts',
    description: 'Mission-critical aerospace components manufactured to AS9100 standards with full traceability and certification.',
    category: 'aerospace',
    materials: ['Titanium', 'Inconel', 'Aluminum', 'Steel'],
    applications: ['Aircraft Engines', 'Landing Gear', 'Structural Components'],
    image: '/images/products/aerospace.jpg',
    specifications: {
      standards: ['AS9100', 'NADCAP', 'FAA Approved'],
      materials: ['Ti-6Al-4V', 'Inconel 718', '7075-T6 Aluminum'],
      processes: ['5-Axis Machining', 'EDM', 'Heat Treatment']
    },
    features: [
      'AS9100 certified',
      'Full traceability',
      'Critical applications',
      'Aerospace materials'
    ]
  },
  {
    id: '6',
    name: 'Precision Tooling',
    description: 'High-precision tooling and fixtures for manufacturing applications including jigs, fixtures, and specialized tooling.',
    category: 'precision',
    materials: ['Tool Steel', 'Hardened Steel', 'Carbide'],
    applications: ['Manufacturing Tools', 'Assembly Fixtures', 'Quality Control'],
    image: '/images/products/tooling.jpg',
    specifications: {
      hardness: 'HRC 58-62',
      precision: '±0.0005"',
      materials: ['A2 Tool Steel', 'D2 Tool Steel', 'Tungsten Carbide']
    },
    features: [
      'High precision',
      'Hardened surfaces',
      'Long tool life',
      'Custom designs'
    ]
  }
]

class ProductService {
  // Simulate API delay
  static delay(ms = 800) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  // Get all products
  static async getAll() {
    try {
      await this.delay()
      
      // Simulate potential API errors (5% chance)
      if (Math.random() < 0.05) {
        throw new Error('Network error: Unable to fetch products')
      }
      
      return [...mockProducts]
    } catch (error) {
      console.error('ProductService.getAll error:', error)
      throw error
    }
  }

  // Get product by ID
  static async getById(id) {
    try {
      await this.delay(400)
      
      const product = mockProducts.find(p => p.id === id)
      if (!product) {
        throw new Error(`Product with ID ${id} not found`)
      }
      
      return { ...product }
    } catch (error) {
      console.error('ProductService.getById error:', error)
      throw error
    }
  }

  // Get products by category
  static async getByCategory(category) {
    try {
      await this.delay(500)
      
      if (category === 'all') {
        return this.getAll()
      }
      
      const filtered = mockProducts.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      )
      
      return [...filtered]
    } catch (error) {
      console.error('ProductService.getByCategory error:', error)
      throw error
    }
  }

  // Search products
  static async search(query) {
    try {
      await this.delay(300)
      
      if (!query || query.trim() === '') {
        return this.getAll()
      }
      
      const searchTerm = query.toLowerCase()
      const filtered = mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.materials.some(material => 
          material.toLowerCase().includes(searchTerm)
        ) ||
        product.applications.some(app => 
          app.toLowerCase().includes(searchTerm)
        )
      )
      
      return [...filtered]
    } catch (error) {
      console.error('ProductService.search error:', error)
      throw error
    }
  }
}

export default ProductService