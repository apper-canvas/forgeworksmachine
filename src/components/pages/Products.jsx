import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SearchBar from '@/components/molecules/SearchBar'
import ProductCard from '@/components/molecules/ProductCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import Badge from '@/components/atoms/Badge'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'
import productService from '@/services/api/productService'

const Products = () => {
  const [allProducts, setAllProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  
  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'precision', label: 'Precision Parts' },
    { value: 'metal', label: 'Metal Fabrication' },
    { value: 'custom', label: 'Custom Manufacturing' },
    { value: 'automotive', label: 'Automotive Components' },
    { value: 'aerospace', label: 'Aerospace Parts' }
  ]
  
  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'category', label: 'Category' },
    { value: 'materials', label: 'Materials' }
  ]
  
  const loadProducts = async () => {
    try {
      setLoading(true)
      setError('')
      
      const data = await productService.getAll()
      setAllProducts(data)
      setFilteredProducts(data)
    } catch (err) {
      setError('Failed to load products. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadProducts()
  }, [])
  
  useEffect(() => {
    let filtered = [...allProducts]
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.materials.some(material => 
          material.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        product.applications.some(app => 
          app.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    }
    
    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'category':
          return a.category.localeCompare(b.category)
        case 'materials':
          return a.materials.length - b.materials.length
        default:
          return 0
      }
    })
    
    setFilteredProducts(filtered)
  }, [allProducts, searchTerm, selectedCategory, sortBy])
  
  const handleSearch = (term) => {
    setSearchTerm(term)
  }
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }
  
  const handleSortChange = (sort) => {
    setSortBy(sort)
  }
  
  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSortBy('name')
  }
  
  if (loading) return <Loading type="products" />
  if (error) return <Error message={error} onRetry={loadProducts} />
  
  return (
    <div className="py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-max section-padding py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover our comprehensive range of precision-manufactured products, 
              each crafted to meet the highest quality standards.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="container-max section-padding py-8">
        <div className="bg-white rounded-lg shadow-card p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <SearchBar
                placeholder="Search products, materials, applications..."
                onSearch={handleSearch}
              />
            </div>
            
            {/* Category Filter */}
            <div className="min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                <ApperIcon 
                  name="ChevronDown" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
                />
              </div>
            </div>
            
            {/* Sort Filter */}
            <div className="min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary appearance-none bg-white"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ApperIcon 
                  name="ChevronDown" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
                />
              </div>
            </div>
          </div>
          
          {/* Active Filters */}
          {(searchTerm || selectedCategory !== 'all' || sortBy !== 'name') && (
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-700">Active filters:</span>
              <div className="flex flex-wrap gap-2">
                {searchTerm && (
                  <Badge variant="secondary" className="text-xs">
                    Search: "{searchTerm}"
                  </Badge>
                )}
                {selectedCategory !== 'all' && (
                  <Badge variant="secondary" className="text-xs">
                    Category: {categories.find(c => c.value === selectedCategory)?.label}
                  </Badge>
                )}
                {sortBy !== 'name' && (
                  <Badge variant="secondary" className="text-xs">
                    Sort: {sortOptions.find(s => s.value === sortBy)?.label}
                  </Badge>
                )}
              </div>
              <Button
                onClick={clearFilters}
                variant="ghost"
                size="sm"
                icon="X"
                className="ml-auto"
              >
                Clear All
              </Button>
            </div>
          )}
        </div>
        
        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-600">
            Showing {filteredProducts.length} of {allProducts.length} products
          </div>
          
          <div className="flex items-center gap-2">
            <ApperIcon name="Grid3x3" className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600">Grid View</span>
          </div>
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <Empty
            title="No Products Found"
            message={searchTerm || selectedCategory !== 'all' 
              ? "No products match your current filters. Try adjusting your search criteria." 
              : "We're currently updating our product catalog. Please check back soon."
            }
            icon="Package"
            actionLabel={searchTerm || selectedCategory !== 'all' ? "Clear Filters" : undefined}
            onAction={searchTerm || selectedCategory !== 'all' ? clearFilters : undefined}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.Id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Products